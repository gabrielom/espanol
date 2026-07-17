/* ============================================================
   Español para brasileños — motor de la aplicación
   SPA sin dependencias: router por hash + progreso en localStorage
   Estructura: cada lección tiene su propia evaluación;
   cada módulo tiene además un mazo de tarjetas de repaso.
   ============================================================ */
(function () {
  "use strict";

  var META = window.COURSE_META;
  var MODULES = window.COURSE_MODULES || [];
  var STORAGE_KEY = "espanol-brasilenos-progress-v2";

  /* ---------- Progreso ---------- */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { lessons: {}, quizzes: {}, name: "" };
    } catch (e) {
      return { lessons: {}, quizzes: {}, name: "" };
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
  var progress = loadProgress();

  function lessonKey(mid, lid) { return mid + "-" + lid; }
  function isLessonDone(mid, lid) { return !!progress.lessons[lessonKey(mid, lid)]; }
  function markLessonDone(mid, lid) {
    progress.lessons[lessonKey(mid, lid)] = true;
    saveProgress(progress);
  }
  function quizResult(mid, lid) { return progress.quizzes[lessonKey(mid, lid)] || null; }
  function setQuizResult(mid, lid, score, total) {
    var key = lessonKey(mid, lid);
    var pct = Math.round((score / total) * 100);
    var prev = progress.quizzes[key];
    if (!prev || pct > prev.pct) {
      progress.quizzes[key] = { score: score, total: total, pct: pct, passed: pct >= META.passScore };
    } else if (pct >= META.passScore && !prev.passed) {
      prev.passed = true;
    }
    saveProgress(progress);
  }

  function moduleStats(mod) {
    var lessonsDone = 0, quizzesPassed = 0;
    mod.lessons.forEach(function (l) {
      if (isLessonDone(mod.id, l.id)) lessonsDone++;
      var q = quizResult(mod.id, l.id);
      if (q && q.passed) quizzesPassed++;
    });
    var totalItems = mod.lessons.length * 2;
    var doneItems = lessonsDone + quizzesPassed;
    return {
      lessonsDone: lessonsDone,
      quizzesPassed: quizzesPassed,
      pct: totalItems ? Math.round((doneItems / totalItems) * 100) : 0,
      complete: doneItems === totalItems
    };
  }

  function overallPct() {
    var total = 0, done = 0;
    MODULES.forEach(function (mod) {
      total += mod.lessons.length * 2;
      var s = moduleStats(mod);
      done += s.lessonsDone + s.quizzesPassed;
    });
    return total ? Math.round((done / total) * 100) : 0;
  }

  function courseComplete() {
    return MODULES.every(function (mod) { return moduleStats(mod).complete; });
  }

  /* ---------- Utilidades ---------- */
  var app = document.getElementById("app");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function findModule(mid) {
    for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === mid) return MODULES[i];
    return null;
  }
  function findLessonIndex(mod, lid) {
    for (var i = 0; i < mod.lessons.length; i++) if (mod.lessons[i].id === lid) return i;
    return -1;
  }

  function updateTopbar() {
    var pct = overallPct();
    document.getElementById("topbar-pct").textContent = pct + "%";
    document.getElementById("topbar-bar").style.width = pct + "%";
  }

  function render(html) {
    app.innerHTML = html;
    updateTopbar();
    window.scrollTo(0, 0);
  }

  /* ---------- Vista: inicio ---------- */
  function viewHome() {
    var pct = overallPct();
    var lessonsTotal = 0, questionsTotal = 0;
    MODULES.forEach(function (m) {
      lessonsTotal += m.lessons.length;
      m.lessons.forEach(function (l) { questionsTotal += l.quiz.questions.length; });
    });
    var cta;
    if (pct === 0) {
      cta = '<a class="btn white" href="#/module/m1">Comenzar el curso</a>';
    } else if (courseComplete()) {
      cta = '<a class="btn white" href="#/certificate">Ver mi certificado 🎓</a>';
    } else {
      cta = '<a class="btn white" href="' + nextPending() + '">Continuar donde lo dejé (' + pct + '%)</a>';
    }

    var cards = MODULES.map(function (mod, i) {
      var s = moduleStats(mod);
      var badge = s.complete
        ? '<span class="badge done">Completado ✓</span>'
        : s.pct > 0
          ? '<span class="badge progress">' + s.pct + '%</span>'
          : '<span class="badge new">Nuevo</span>';
      return (
        '<div class="card" onclick="location.hash=\'#/module/' + mod.id + '\'">' +
          '<div class="mod-num">Módulo ' + (i + 1) + '</div>' +
          '<div class="icon">' + mod.icon + '</div>' +
          '<h3>' + esc(mod.title) + '</h3>' +
          '<p>' + esc(mod.description) + '</p>' +
          '<div class="card-foot">' +
            '<span>' + mod.lessons.length + ' lecciones · ' + mod.lessons.length + ' evaluaciones · tarjetas</span>' + badge +
          '</div>' +
          '<div class="bar' + (s.complete ? " done" : "") + '"><span style="width:' + s.pct + '%"></span></div>' +
        '</div>'
      );
    }).join("");

    render(
      '<div class="hero">' +
        '<div class="kicker">Curso contrastivo · portugués (BR) → español · nivel ' + esc(META.level) + '</div>' +
        '<h1>' + esc(META.title) + ': ' + esc(META.subtitle) + '</h1>' +
        '<p>' + esc(META.description) + '</p>' +
        '<div class="meta"><span>' + MODULES.length + ' módulos</span><span>' + lessonsTotal + ' lecciones</span><span>' + lessonsTotal + ' evaluaciones (' + questionsTotal + ' preguntas)</span><span>Tarjetas de repaso</span><span>Certificado al completar</span></div>' +
        '<p style="margin-top:22px">' + cta + '</p>' +
      '</div>' +
      '<h2 class="section-title">Programa del curso</h2>' +
      '<div class="grid">' + cards + '</div>'
    );
  }

  function nextPending() {
    for (var i = 0; i < MODULES.length; i++) {
      var mod = MODULES[i];
      for (var j = 0; j < mod.lessons.length; j++) {
        var l = mod.lessons[j];
        if (!isLessonDone(mod.id, l.id)) return "#/lesson/" + mod.id + "/" + l.id;
        var q = quizResult(mod.id, l.id);
        if (!q || !q.passed) return "#/quiz/" + mod.id + "/" + l.id;
      }
    }
    return "#/";
  }

  /* ---------- Vista: módulo ---------- */
  function viewModule(mid) {
    var mod = findModule(mid);
    if (!mod) return viewHome();
    var idx = MODULES.indexOf(mod);
    var s = moduleStats(mod);

    var rows = "";
    mod.lessons.forEach(function (l, i) {
      var done = isLessonDone(mod.id, l.id);
      var q = quizResult(mod.id, l.id);
      var qPassed = !!(q && q.passed);
      var quizLabel = q
        ? (qPassed ? "Aprobada · mejor nota: " + q.pct + "%" : "Último intento: " + q.pct + "% · se necesita " + META.passScore + "%")
        : "Sin intentos";
      rows +=
        '<div class="lesson-row' + (done ? " done" : "") + '" onclick="location.hash=\'#/lesson/' + mod.id + "/" + l.id + '\'">' +
          '<div class="check">✓</div>' +
          '<div class="lesson-info">' +
            '<div class="lesson-type">Lección ' + (i + 1) + '</div>' +
            '<h4>' + esc(l.title) + '</h4>' +
          '</div>' +
          '<span class="dur">' + esc(l.duration) + '</span>' +
        '</div>' +
        '<div class="lesson-row quiz-row' + (qPassed ? " done" : "") + '" onclick="location.hash=\'#/quiz/' + mod.id + "/" + l.id + '\'">' +
          '<div class="check">✓</div>' +
          '<div class="lesson-info">' +
            '<div class="lesson-type">Evaluación ' + (i + 1) + '</div>' +
            '<h4>Evaluación: ' + esc(l.title) + '</h4>' +
          '</div>' +
          '<span class="dur">' + esc(quizLabel) + '</span>' +
        '</div>';
    });

    if (mod.flashcards && mod.flashcards.length) {
      rows +=
        '<div class="lesson-row fc-row" onclick="location.hash=\'#/flashcards/' + mod.id + '\'">' +
          '<div class="check">🃏</div>' +
          '<div class="lesson-info">' +
            '<div class="lesson-type">Estudio libre</div>' +
            '<h4>Tarjetas de repaso del módulo</h4>' +
          '</div>' +
          '<span class="dur">' + mod.flashcards.length + ' tarjetas</span>' +
        '</div>';
    }

    render(
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Módulo ' + (idx + 1) + '</div>' +
      '<div class="module-head">' +
        '<div class="icon">' + mod.icon + '</div>' +
        '<h1>Módulo ' + (idx + 1) + ' · ' + esc(mod.title) + '</h1>' +
        '<p>' + esc(mod.description) + '</p>' +
        '<div class="bar' + (s.complete ? " done" : "") + '"><span style="width:' + s.pct + '%"></span></div>' +
      '</div>' +
      '<div class="lesson-list">' + rows + '</div>'
    );
  }

  /* ---------- Vista: lección ---------- */
  function viewLesson(mid, lid) {
    var mod = findModule(mid);
    if (!mod) return viewHome();
    var li = findLessonIndex(mod, lid);
    if (li < 0) return viewModule(mid);
    var lesson = mod.lessons[li];
    var idx = MODULES.indexOf(mod);

    var prevHash = li > 0 ? "#/lesson/" + mid + "/" + mod.lessons[li - 1].id : "#/module/" + mid;
    var prevLabel = li > 0 ? "← Lección anterior" : "← Volver al módulo";

    render(
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + (idx + 1) + '</a><span class="sep">›</span>Lección ' + (li + 1) + '</div>' +
      '<div class="lesson-shell narrow" style="margin:0 auto">' +
        '<div class="lesson-kicker">' + mod.icon + ' Módulo ' + (idx + 1) + ' · Lección ' + (li + 1) + " de " + mod.lessons.length + '</div>' +
        '<h1>' + esc(lesson.title) + '</h1>' +
        '<div class="dur">⏱ ' + esc(lesson.duration) + " de lectura" + (isLessonDone(mid, lid) ? ' · <span style="color:var(--green);font-weight:600">completada ✓</span>' : "") + '</div>' +
        '<div class="lesson-content">' + lesson.content + '</div>' +
        '<div class="lesson-nav">' +
          '<a class="btn ghost" href="' + prevHash + '">' + prevLabel + '</a>' +
          '<button class="btn" id="btn-complete">Completar e ir a la evaluación →</button>' +
        '</div>' +
      '</div>'
    );

    document.getElementById("btn-complete").addEventListener("click", function () {
      markLessonDone(mid, lid);
      location.hash = "#/quiz/" + mid + "/" + lid;
    });
  }

  /* ---------- Vista: evaluación de la lección ---------- */
  function viewQuiz(mid, lid) {
    var mod = findModule(mid);
    if (!mod) return viewHome();
    var li = findLessonIndex(mod, lid);
    if (li < 0) return viewModule(mid);
    var lesson = mod.lessons[li];
    var idx = MODULES.indexOf(mod);
    var quiz = lesson.quiz;
    var answers = new Array(quiz.questions.length).fill(null);

    var qHtml = quiz.questions.map(function (q, qi) {
      var opts = q.options.map(function (opt, oi) {
        return (
          '<label class="opt" data-q="' + qi + '" data-o="' + oi + '">' +
            '<input type="radio" name="q' + qi + '" value="' + oi + '">' +
            '<span>' + esc(opt) + '</span>' +
          '</label>'
        );
      }).join("");
      return (
        '<div class="q-block" id="qb' + qi + '">' +
          '<div class="q-text"><span class="q-num">' + (qi + 1) + '.</span>' + esc(q.q) + '</div>' +
          opts +
          '<div class="q-explain" id="qe' + qi + '" style="display:none"></div>' +
        '</div>'
      );
    }).join("");

    var best = quizResult(mid, lid);
    var bestNote = best
      ? '<span> · Tu mejor nota: <strong>' + best.pct + '%</strong>' + (best.passed ? " (aprobada ✓)" : "") + '</span>'
      : "";

    render(
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + (idx + 1) + '</a><span class="sep">›</span>Evaluación ' + (li + 1) + '</div>' +
      '<div class="quiz-shell narrow" style="margin:0 auto">' +
        '<h1>Evaluación: ' + esc(lesson.title) + '</h1>' +
        '<p class="quiz-sub">' + quiz.questions.length + ' preguntas · nota mínima: ' + META.passScore + '%' + bestNote + '</p>' +
        '<div id="quiz-result"></div>' +
        '<form id="quiz-form">' + qHtml + '</form>' +
        '<div class="lesson-nav">' +
          '<a class="btn ghost" href="#/lesson/' + mid + "/" + lid + '">← Releer la lección</a>' +
          '<button class="btn" id="btn-submit">Enviar respuestas</button>' +
        '</div>' +
      '</div>'
    );

    app.querySelectorAll(".opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        if (opt.classList.contains("locked")) return;
        var qi = +opt.getAttribute("data-q");
        answers[qi] = +opt.getAttribute("data-o");
        app.querySelectorAll('.opt[data-q="' + qi + '"]').forEach(function (o) { o.classList.remove("selected"); });
        opt.classList.add("selected");
      });
    });

    document.getElementById("btn-submit").addEventListener("click", function (e) {
      e.preventDefault();
      var unanswered = [];
      answers.forEach(function (a, i) { if (a === null) unanswered.push(i + 1); });
      if (unanswered.length) {
        alert("Te faltan las preguntas: " + unanswered.join(", "));
        return;
      }

      var score = 0;
      quiz.questions.forEach(function (q, qi) {
        app.querySelectorAll('.opt[data-q="' + qi + '"]').forEach(function (o) {
          var oi = +o.getAttribute("data-o");
          o.classList.add("locked");
          o.querySelector("input").disabled = true;
          if (oi === q.correct) o.classList.add("correct");
          else if (oi === answers[qi]) o.classList.add("incorrect");
        });
        var ex = document.getElementById("qe" + qi);
        ex.textContent = q.explanation;
        ex.style.display = "block";
        if (answers[qi] === q.correct) score++;
      });

      setQuizResult(mid, lid, score, quiz.questions.length);
      var pct = Math.round((score / quiz.questions.length) * 100);
      var passed = pct >= META.passScore;

      var nextBtn;
      if (passed) {
        if (li < mod.lessons.length - 1) {
          nextBtn = '<a class="btn green" href="#/lesson/' + mid + "/" + mod.lessons[li + 1].id + '">Siguiente lección →</a>';
        } else {
          var nextMod = MODULES[idx + 1];
          nextBtn = '<a class="btn ghost" href="#/flashcards/' + mid + '" style="margin-right:8px">Repasar con tarjetas 🃏</a>' +
            (nextMod
              ? '<a class="btn green" href="#/module/' + nextMod.id + '">Siguiente módulo →</a>'
              : (courseComplete()
                  ? '<a class="btn green" href="#/certificate">Ver mi certificado 🎓</a>'
                  : '<a class="btn green" href="#/">Volver al programa</a>'));
        }
      } else {
        nextBtn = '<button class="btn" onclick="location.reload()">Intentar de nuevo</button>';
      }

      document.getElementById("quiz-result").innerHTML =
        '<div class="quiz-result ' + (passed ? "pass" : "fail") + '">' +
          '<div class="score">' + pct + '%</div>' +
          '<p>' + (passed
            ? "¡Aprobada! Acertaste " + score + " de " + quiz.questions.length + "."
            : "Acertaste " + score + " de " + quiz.questions.length + ". Necesitas " + META.passScore + "% — revisa las explicaciones y vuelve a intentarlo.") + '</p>' +
          '<p style="margin-top:14px">' + nextBtn + '</p>' +
        '</div>';
      document.getElementById("btn-submit").style.display = "none";
      updateTopbar();
      document.getElementById("quiz-result").scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------- Vista: tarjetas de repaso ---------- */
  function viewFlashcards(mid) {
    var mod = findModule(mid);
    if (!mod || !mod.flashcards || !mod.flashcards.length) return viewModule(mid);
    var idx = MODULES.indexOf(mod);
    var cards = mod.flashcards.slice();
    var pos = 0, flipped = false;

    render(
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + (idx + 1) + '</a><span class="sep">›</span>Tarjetas</div>' +
      '<div class="fc-shell narrow" style="margin:0 auto">' +
        '<h1>🃏 Tarjetas de repaso · Módulo ' + (idx + 1) + '</h1>' +
        '<p class="quiz-sub">Haz clic en la tarjeta para girarla. Primero intenta responder en voz alta.</p>' +
        '<div class="flashcard" id="fc-card" role="button" tabindex="0" aria-label="Tarjeta de repaso, haz clic para girar">' +
          '<div class="fc-inner" id="fc-inner">' +
            '<div class="fc-face fc-front"><div class="fc-label">PT · ¿Cómo se dice?</div><div class="fc-text" id="fc-front"></div></div>' +
            '<div class="fc-face fc-back"><div class="fc-label">ES</div><div class="fc-text" id="fc-back"></div></div>' +
          '</div>' +
        '</div>' +
        '<div class="fc-controls">' +
          '<button class="btn ghost" id="fc-prev">← Anterior</button>' +
          '<span class="fc-counter" id="fc-counter"></span>' +
          '<button class="btn ghost" id="fc-next">Siguiente →</button>' +
        '</div>' +
        '<div class="fc-controls">' +
          '<button class="btn ghost" id="fc-shuffle">🔀 Mezclar</button>' +
          '<a class="btn" href="#/module/' + mid + '">Volver al módulo</a>' +
        '</div>' +
      '</div>'
    );

    var inner = document.getElementById("fc-inner");
    function show() {
      flipped = false;
      inner.classList.remove("flipped");
      document.getElementById("fc-front").innerHTML = cards[pos].front;
      document.getElementById("fc-back").innerHTML = cards[pos].back;
      document.getElementById("fc-counter").textContent = (pos + 1) + " / " + cards.length;
    }
    document.getElementById("fc-card").addEventListener("click", function () {
      flipped = !flipped;
      inner.classList.toggle("flipped", flipped);
    });
    document.getElementById("fc-card").addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flipped = !flipped; inner.classList.toggle("flipped", flipped); }
    });
    document.getElementById("fc-prev").addEventListener("click", function () {
      pos = (pos - 1 + cards.length) % cards.length; show();
    });
    document.getElementById("fc-next").addEventListener("click", function () {
      pos = (pos + 1) % cards.length; show();
    });
    document.getElementById("fc-shuffle").addEventListener("click", function () {
      for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = cards[i]; cards[i] = cards[j]; cards[j] = t;
      }
      pos = 0; show();
    });
    show();
  }

  /* ---------- Vista: certificado ---------- */
  function viewCertificate() {
    if (!courseComplete()) {
      var missing = [];
      MODULES.forEach(function (mod, i) {
        var s = moduleStats(mod);
        if (!s.complete) {
          var parts = [];
          var lessonsLeft = mod.lessons.length - s.lessonsDone;
          var quizzesLeft = mod.lessons.length - s.quizzesPassed;
          if (lessonsLeft) parts.push(lessonsLeft + (lessonsLeft === 1 ? " lección" : " lecciones"));
          if (quizzesLeft) parts.push(quizzesLeft + (quizzesLeft === 1 ? " evaluación" : " evaluaciones"));
          missing.push("<li><a href=\"#/module/" + mod.id + "\">Módulo " + (i + 1) + " · " + esc(mod.title) + "</a> — falta: " + parts.join(" y ") + "</li>");
        }
      });
      render(
        '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Certificado</div>' +
        '<div class="locked-box">' +
          '<h2>🔒 Tu certificado te está esperando</h2>' +
          '<p>Para desbloquearlo, completa todas las lecciones y aprueba todas las evaluaciones (≥ ' + META.passScore + '%):</p>' +
          '<ul>' + missing.join("") + '</ul>' +
        '</div>'
      );
      return;
    }

    var name = progress.name || "";
    var dateStr = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    var lessonsTotal = MODULES.reduce(function (n, m) { return n + m.lessons.length; }, 0);

    render(
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Certificado</div>' +
      '<div class="cert-form">' +
        '<input type="text" id="cert-name" placeholder="Escribe tu nombre completo" value="' + esc(name) + '">' +
        '<button class="btn" id="btn-name">Poner en el certificado</button>' +
      '</div>' +
      '<div class="certificate">' +
        '<div class="cert-kicker">Certificado de finalización</div>' +
        '<h1>' + esc(META.title) + '<br><small style="font-size:.65em">' + esc(META.subtitle) + '</small></h1>' +
        '<p>Se certifica que</p>' +
        '<div class="cert-name" id="cert-display">' + (name ? esc(name) : "________________") + '</div>' +
        '<p>completó con éxito los ' + MODULES.length + ' módulos y las ' + lessonsTotal + ' evaluaciones del curso contrastivo de español para hablantes de portugués brasileño, con nota mínima de ' + META.passScore + '% en cada una.</p>' +
        '<p class="cert-date">' + dateStr + ' · ¡Enhorabuena! 🎓</p>' +
      '</div>' +
      '<p style="text-align:center;margin-top:22px"><button class="btn ghost" onclick="window.print()">Imprimir / guardar PDF</button></p>'
    );

    document.getElementById("btn-name").addEventListener("click", function () {
      var v = document.getElementById("cert-name").value.trim();
      progress.name = v;
      saveProgress(progress);
      document.getElementById("cert-display").textContent = v || "________________";
    });
  }

  /* ---------- Router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return viewHome();
    if (parts[0] === "module" && parts[1]) return viewModule(parts[1]);
    if (parts[0] === "lesson" && parts[1] && parts[2]) return viewLesson(parts[1], parts[2]);
    if (parts[0] === "quiz" && parts[1] && parts[2]) return viewQuiz(parts[1], parts[2]);
    if (parts[0] === "flashcards" && parts[1]) return viewFlashcards(parts[1]);
    if (parts[0] === "certificate") return viewCertificate();
    viewHome();
  }

  window.addEventListener("hashchange", route);
  document.getElementById("brand").addEventListener("click", function () { location.hash = "#/"; });
  route();
})();
