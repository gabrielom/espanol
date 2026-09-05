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
      var p = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      return { lessons: p.lessons || {}, quizzes: p.quizzes || {}, essays: p.essays || {}, corrections: p.corrections || {},
               cuaderno: p.cuaderno || null, cuadernoAt: p.cuadernoAt || 0, name: p.name || "" };
    } catch (e) {
      return { lessons: {}, quizzes: {}, essays: {}, corrections: {}, cuaderno: null, cuadernoAt: 0, name: "" };
    }
  }
  function saveLocal(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
  // `ahora` marca los guardados que no pueden esperar al acelerador de la
  // sincronización: terminar algo, o irse de la página. Escribir no lo es —
  // se guarda igual de rápido aquí, solo que sin salir a la red cada vez.
  function saveProgress(p, ahora) {
    saveLocal(p);
    if (window.Sync && Sync.isConfigured()) {
      Sync.schedulePush(function () { return progress; }, function (m) { applyMerged(m, false); }, ahora);
    }
  }
  var progress = loadProgress();

  // Reconcilia el progreso fusionado (de otro dispositivo) con el actual.
  // Solo re-renderiza si algo cambió y no estamos a mitad de una evaluación.
  function applyMerged(merged, allowRerender) {
    var changed = JSON.stringify(merged) !== JSON.stringify(progress);
    progress = merged;
    saveLocal(merged);
    // El cuaderno guarda una copia en memoria del progreso. Tras fusionar hay
    // que releerla y volcarla en pantalla: si no, lo que llega del otro
    // dispositivo queda guardado pero invisible, y el hueco parece vacío.
    // No basta con repintar, porque el empuje de fondo no repinta.
    if (changed && window.Cuaderno) Cuaderno.reload();
    if (changed && allowRerender && !/^#\/quiz\//.test(location.hash)) route();
  }
  function pullAndMerge() {
    if (window.Sync && Sync.isConfigured()) {
      Sync.sync(function () { return progress; }, function (m) { applyMerged(m, true); });
    }
  }

  function lessonKey(mid, lid) { return mid + "-" + lid; }
  function isLessonDone(mid, lid) { return !!progress.lessons[lessonKey(mid, lid)]; }
  function markLessonDone(mid, lid) {
    if (!canEditProgress()) return;
    progress.lessons[lessonKey(mid, lid)] = true;
    saveProgress(progress, true);
  }
  function quizResult(mid, lid) { return progress.quizzes[lessonKey(mid, lid)] || null; }
  function setQuizResult(mid, lid, score, total) {
    if (!canEditProgress()) return;
    var key = lessonKey(mid, lid);
    var pct = Math.round((score / total) * 100);
    var prev = progress.quizzes[key];
    if (!prev || pct > prev.pct) {
      progress.quizzes[key] = { score: score, total: total, pct: pct, passed: pct >= META.passScore };
    } else if (pct >= META.passScore && !prev.passed) {
      prev.passed = true;
    }
    saveProgress(progress, true);
  }

  /* ---------- Perfil: alumno o profesora ----------
     Vive solo en este dispositivo (no se sincroniza): el iPad de la
     profesora es "profesora" y el tuyo "alumno", cada uno el suyo. */
  var ROLE_KEY = "espanol-perfil";
  function role() {
    try { return localStorage.getItem(ROLE_KEY) === "profesora" ? "profesora" : "alumno"; }
    catch (e) { return "alumno"; }
  }
  function setRole(r) {
    try { localStorage.setItem(ROLE_KEY, r === "profesora" ? "profesora" : "alumno"); } catch (e) {}
    document.body.classList.toggle("is-teacher", role() === "profesora");
    if (window.Cuaderno) Cuaderno.setReadOnly(isTeacher());
  }
  function isTeacher() { return role() === "profesora"; }
  // La profesora no avanza el curso por el alumno: sus clics no marcan progreso.
  function canEditProgress() { return !isTeacher(); }

  /* ---------- Correcciones (registro, append-only) ---------- */
  function corrections(mid, lid) {
    var c = progress.corrections[lessonKey(mid, lid)];
    return Array.isArray(c) ? c : [];
  }
  function addCorrection(mid, lid, grade, comment) {
    var key = lessonKey(mid, lid);
    var list = corrections(mid, lid).slice();
    list.push({ grade: String(grade || "").trim(), comment: String(comment || "").trim(), at: Date.now() });
    progress.corrections[key] = list;
    saveProgress(progress, true);
  }
  function lastCorrection(mid, lid) {
    var l = corrections(mid, lid);
    return l.length ? l[l.length - 1] : null;
  }
  function fmtDate(ts) {
    return new Date(ts).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }) +
      " · " + new Date(ts).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  }

  /* ---------- Redacciones ---------- */
  function essayData(mid, lid) { return progress.essays[lessonKey(mid, lid)] || null; }
  function countWords(t) {
    var m = String(t || "").trim().match(/[\wÁÉÍÓÚÜÑáéíóúüñ'’-]+/g);
    return m ? m.length : 0;
  }
  function saveEssay(mid, lid, text, done) {
    if (!canEditProgress()) return;
    var key = lessonKey(mid, lid);
    var prev = progress.essays[key] || {};
    progress.essays[key] = {
      text: text,
      words: countWords(text),
      done: done === undefined ? !!prev.done : !!done,
      updatedAt: Date.now()
    };
    // Teclear es un borrador: se guarda aquí y ya. Marcarla como terminada sí
    // sale a la red en el momento — es cuando la profesora tiene que verla.
    saveProgress(progress, done === true);
  }
  function isEssayDone(mid, lid) {
    var e = essayData(mid, lid);
    return !!(e && e.done);
  }

  /* ---------- Cuaderno del módulo 9 ----------
     Sus respuestas vivían en una clave suelta de localStorage, fuera del
     progreso: no entraban en el gist, así que no salían del dispositivo y la
     profesora no las veía. Ahora se guardan dentro del progreso, que sí viaja.
     Lo que ya estuviera en la clave vieja se trae una sola vez. */
  if (window.Cuaderno) {
    var cuadernoStore = {
      load: function () { return progress.cuaderno || { R: {}, W: {}, CH: {} }; },
      save: function (s) {
        if (!canEditProgress()) return;   // la profesora mira, no escribe
        progress.cuaderno = s;
        progress.cuadernoAt = Date.now();
        saveProgress(progress);
      }
    };
    // Migración de la clave suelta, en el dispositivo del alumno: es quien
    // tiene las respuestas de verdad. Rellena solo los huecos que falten, así
    // que también sirve si este dispositivo ya había recibido un cuaderno del
    // gist — sus respuestas locales no se quedan fuera.
    if (canEditProgress()) {
      var viejo = Cuaderno.localState();
      if (viejo && (Object.keys(viejo.R).length || Object.keys(viejo.CH).length)) {
        var dest = progress.cuaderno || { R: {}, W: {}, CH: {} }, sumadas = 0, id, i;
        for (id in viejo.R) {
          dest.R[id] = dest.R[id] || {};
          for (i in viejo.R[id]) {
            var v = viejo.R[id][i];
            if (v !== "" && v !== undefined && v !== null &&
                (dest.R[id][i] === undefined || dest.R[id][i] === "")) {
              dest.R[id][i] = v; sumadas++;
            }
          }
        }
        for (id in viejo.CH) if (viejo.CH[id] && !dest.CH[id]) { dest.CH[id] = true; sumadas++; }
        if (sumadas) {
          progress.cuaderno = dest;
          progress.cuadernoAt = Date.now();
          saveProgress(progress);
        }
      }
    }
    Cuaderno.useStore(cuadernoStore);
    Cuaderno.setReadOnly(isTeacher());
  }

  // Ítems de una lección: contenido + test (+ redacción si la lección la tiene)
  function lessonItemCount(l) { return 1 + (l.quiz ? 1 : 0) + (l.essay ? 1 : 0); }

  function moduleStats(mod) {
    var lessonsDone = 0, quizzesPassed = 0, essaysDone = 0, totalItems = 0;
    mod.lessons.forEach(function (l) {
      totalItems += lessonItemCount(l);
      if (isLessonDone(mod.id, l.id)) lessonsDone++;
      if (l.quiz) {
        var q = quizResult(mod.id, l.id);
        if (q && q.passed) quizzesPassed++;
      }
      if (l.essay && isEssayDone(mod.id, l.id)) essaysDone++;
    });
    var doneItems = lessonsDone + quizzesPassed + essaysDone;
    return {
      lessonsDone: lessonsDone,
      quizzesPassed: quizzesPassed,
      essaysDone: essaysDone,
      pct: totalItems ? Math.round((doneItems / totalItems) * 100) : 0,
      complete: doneItems === totalItems
    };
  }

  function overallPct() {
    var total = 0, done = 0;
    MODULES.forEach(function (mod) {
      mod.lessons.forEach(function (l) { total += lessonItemCount(l); });
      var s = moduleStats(mod);
      done += s.lessonsDone + s.quizzesPassed + s.essaysDone;
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

  function num2(n) { return (n < 10 ? "0" : "") + n; }

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
    if (typeof notifySidebar === "function") notifySidebar();
    window.scrollTo(0, 0);
  }

  // Botón "atrás" de la barra: visible en todo lo que no sea Inicio.
  // En iPhone se oculta por CSS y se usa el enlace dentro del contenido.
  function setBack(href, label) {
    var btn = document.getElementById("back-btn");
    if (!btn) return;
    if (!href) { btn.hidden = true; return; }
    btn.hidden = false;
    btn.setAttribute("href", href);
    document.getElementById("back-label").textContent = label;
  }
  /* ---------- Avisos dentro de la página ----------
     Ni alert() ni confirm() sirven en la app de escritorio. wry implementa tres
     métodos de WKUIDelegate —ventana nueva, permiso de cámara y panel de
     archivos— y ninguno es el de los diálogos de JavaScript. WebKit, ante un
     delegado que no los implementa, no enseña nada: alert() no hace nada y
     confirm() devuelve false SIN preguntar. Todo lo que colgara de ellos estaba
     muerto ahí, incluido el botón de desconectar.

     Se pinta el aviso justo debajo del control que lo provoca. */
  function flashBox(anchor) {
    var box = anchor.parentNode.querySelector(":scope > .flash");
    if (!box) {
      box = document.createElement("div");
      box.className = "flash";
      anchor.parentNode.insertBefore(box, anchor.nextSibling);
    }
    return box;
  }
  function flash(anchor, text, cls) {
    if (!anchor) return;
    var box = flashBox(anchor);
    box.className = "flash" + (cls ? " " + cls : "");
    box.textContent = text;
  }
  function clearFlash(anchor) {
    if (!anchor) return;
    var box = anchor.parentNode.querySelector(":scope > .flash");
    if (box) box.remove();
  }
  // Confirmación en dos pasos: sustituye al confirm() del navegador.
  function flashConfirm(anchor, question, okLabel, onOk) {
    if (!anchor) return;
    var box = flashBox(anchor);
    box.className = "flash ask";
    box.textContent = "";
    var q = document.createElement("span");
    q.className = "flash-q";
    q.textContent = question;
    var yes = document.createElement("button");
    yes.type = "button";
    yes.className = "btn tiny";
    yes.textContent = okLabel;
    yes.addEventListener("click", function () { clearFlash(anchor); onOk(); });
    var no = document.createElement("button");
    no.type = "button";
    no.className = "btn tiny ghost";
    no.textContent = "Cancelar";
    no.addEventListener("click", function () { clearFlash(anchor); });
    box.appendChild(q);
    box.appendChild(yes);
    box.appendChild(no);
    yes.focus();
  }

  // Enlace "atrás" dentro del contenido (visible solo en iPhone).
  function backLink(href, label) {
    return '<a class="back-link" href="' + href + '"><span aria-hidden="true">\u2190</span>' + esc(label) + '</a>';
  }

  /* ---------- Vista: inicio ---------- */
  function viewHome() {
    var pct = overallPct();
    var lessonsTotal = 0, questionsTotal = 0;
    MODULES.forEach(function (m) {
      lessonsTotal += m.lessons.length;
      m.lessons.forEach(function (l) { if (l.quiz) questionsTotal += l.quiz.questions.length; });
    });
    var cta;
    if (pct === 0) {
      cta = '<a class="btn outline-accent" href="#/module/m1">Comenzar el curso <span class="pct">→</span></a>';
    } else if (courseComplete()) {
      cta = '<a class="btn outline-accent" href="#/certificate">Ver mi certificado <span class="pct">→</span></a>';
    } else {
      cta = '<a class="btn outline-accent" href="' + nextPending() + '">Continuar donde lo dejé <span class="pct">' + pct + '% →</span></a>';
    }

    var cards = MODULES.map(function (mod, i) {
      var s = moduleStats(mod);
      var status = s.complete
        ? '<span class="card-status done">✓ Completado</span>'
        : s.pct > 0
          ? '<span class="card-status pct">' + s.pct + '%</span>'
          : '<span class="card-status new">Nuevo</span>';
      return (
        '<a class="card" href="#/module/' + mod.id + '">' +
          '<div class="card-top"><span class="eyebrow">Módulo ' + num2(i + 1) + '</span>' + status + '</div>' +
          '<h3>' + (mod.eyebrow ? mod.title : esc(mod.title)) + '</h3>' +
          '<p>' + (mod.eyebrow ? mod.description : esc(mod.description)) + '</p>' +
          '<div class="card-meta">' + mod.lessons.length + ' lecciones · ' + mod.lessons.length + ' evaluaciones · tarjetas</div>' +
          '<div class="bar"><span style="width:' + s.pct + '%"></span></div>' +
        '</a>'
      );
    }).join("");

    setBack(null);
    render(
      '<div class="hero">' +
        '<div class="kicker eyebrow">Curso contrastivo · PT-BR → ES · Nivel ' + esc(META.level) + '</div>' +
        '<h1>' + esc(META.title) + '</h1>' +
        '<div class="subtitle">' + esc(META.subtitle) + '</div>' +
        '<p class="intro">' + esc(META.description) + '</p>' +
        '<div class="meta"><span>' + MODULES.length + ' módulos</span><span>' + lessonsTotal + ' lecciones</span><span>' + lessonsTotal + ' evaluaciones</span><span>' + questionsTotal + ' preguntas</span><span>Certificado</span></div>' +
        cta +
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
        if (l.quiz) {
          var q = quizResult(mod.id, l.id);
          if (!q || !q.passed) return "#/quiz/" + mod.id + "/" + l.id;
        }
        if (l.essay && !isEssayDone(mod.id, l.id)) return "#/redaccion/" + mod.id + "/" + l.id;
      }
    }
    return "#/";
  }

  // Fila de la redacción dentro de la lista del módulo
  function essayRow(mid, l, i) {
    var e = essayData(mid, l.id);
    var done = !!(e && e.done);
    var meta = done
      ? '<span class="lrow-meta accent">Entregada · ' + e.words + ' palabras</span>'
      : (e && e.words
          ? '<span class="lrow-meta">Borrador · ' + e.words + ' palabras</span>'
          : '<span class="lrow-meta muted">Sin empezar</span>');
    return (
      '<a class="lrow sub" href="#/redaccion/' + mid + "/" + l.id + '">' +
        '<div class="mark eval' + (done ? " passed" : "") + '">✓</div>' +
        '<div class="lrow-body">' +
          '<span class="eyebrow">Redacci\u00f3n ' + (i + 1) + '</span>' +
          '<h4>Escrita: ' + esc(l.essay.title) + '</h4>' +
        '</div>' +
        meta +
      '</a>'
    );
  }

  /* ---------- Vista: módulo ---------- */
  function viewModule(mid) {
    var mod = findModule(mid);
    if (!mod) return viewHome();
    var idx = MODULES.indexOf(mod);
    var s = moduleStats(mod);

    var statusLabel = s.complete
      ? '<span class="label done">Completado · 100%</span>'
      : s.pct > 0
        ? '<span class="label progress">En curso · ' + s.pct + '%</span>'
        : '<span class="label new">Nuevo</span>';

    var rows = "";
    mod.lessons.forEach(function (l, i) {
      var done = isLessonDone(mod.id, l.id);
      var q = l.quiz ? quizResult(mod.id, l.id) : null;
      var qPassed = !!(q && q.passed);
      var quizMeta = q
        ? (qPassed
            ? '<span class="lrow-meta accent">Aprobada · ' + q.pct + '%</span>'
            : '<span class="lrow-meta">Último intento · ' + q.pct + '%</span>')
        : '<span class="lrow-meta muted">Sin intentos</span>';
      var quizRow = !l.quiz ? "" : (
          '<a class="lrow sub" href="#/quiz/' + mod.id + "/" + l.id + '">' +
            '<div class="mark eval' + (qPassed ? " passed" : "") + '">✓</div>' +
            '<div class="lrow-body">' +
              '<span class="eyebrow">Evaluación ' + (i + 1) + '</span>' +
              '<h4>Test: ' + esc(l.title) + '</h4>' +
            '</div>' +
            quizMeta +
          '</a>');
      rows +=
        '<div class="lgroup">' +
          '<a class="lrow" href="#/lesson/' + mod.id + "/" + l.id + '">' +
            '<div class="mark' + (done ? " done" : "") + '">✓</div>' +
            '<div class="lrow-body">' +
              '<span class="eyebrow">' + (l.n ? 'Sesión ' + num2(l.n) : 'Lección ' + (i + 1)) + '</span>' +
              '<h4>' + esc(l.title) + '</h4>' +
            '</div>' +
            (l.duration ? '<span class="lrow-meta">' + esc(l.duration) + '</span>' : '<span class="lrow-meta"></span>') +
          '</a>' +
          quizRow +
          (l.essay ? essayRow(mod.id, l, i) : "") +
        '</div>';
    });

    if (mod.flashcards && mod.flashcards.length) {
      rows +=
        '<div class="lgroup">' +
          '<a class="lrow" href="#/flashcards/' + mod.id + '">' +
            '<div class="mark square"></div>' +
            '<div class="lrow-body">' +
              '<span class="eyebrow">Estudio libre</span>' +
              '<h4>Tarjetas de repaso del módulo</h4>' +
            '</div>' +
            '<span class="lrow-meta">' + mod.flashcards.length + ' tarjetas</span>' +
          '</a>' +
        '</div>';
    }

    // Los módulos con encabezado propio (p. ej. el cuaderno) lo pintan tal cual;
    // el resto conserva la cabecera estándar del curso.
    var head;
    if (mod.eyebrow) {
      head =
        '<div class="module-head wb-head">' +
          '<div class="kicker eyebrow">' + mod.eyebrow + '</div>' +
          '<h1>' + mod.title + '</h1>' +
          '<p class="wb-lede">' + mod.description + '</p>' +
          (mod.heroLink ? '<p class="wb-link"><a href="' + mod.heroLinkUrl + '" target="_blank" rel="noopener">' + mod.heroLink + '</a></p>' : '') +
          '<div class="mod-status">' + statusLabel + '<span class="thinbar"><span style="width:' + s.pct + '%"></span></span></div>' +
        '</div>';
    } else {
      head =
        '<div class="module-head">' +
          '<h1>Módulo ' + num2(idx + 1) + ' · ' + esc(mod.title) + '</h1>' +
          '<p>' + esc(mod.description) + '</p>' +
          '<div class="mod-status">' + statusLabel + '<span class="thinbar"><span style="width:' + s.pct + '%"></span></span></div>' +
        '</div>';
    }

    setBack("#/", "Inicio");
    render(
      '<div class="col-760">' +
      backLink("#/", "Inicio") +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Módulo ' + num2(idx + 1) + '</div>' +
      head +
      (mod.navTitle ? '<h2 class="section-title">' + mod.navTitle + '</h2>' : '') +
      '<div class="lesson-list">' + rows + '</div>' +
      (mod.annex ? '<div class="annex">' + mod.annex + '</div>' : '') +
      '</div>'
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

    setBack("#/module/" + mid, "Módulo " + num2(idx + 1));
    render(
      '<div class="col-680">' +
      backLink("#/module/" + mid, "Módulo " + num2(idx + 1)) +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + num2(idx + 1) + '</a><span class="sep">›</span>Lección ' + (li + 1) + '</div>' +
      '<div class="lesson-shell">' +
        '<div class="lesson-kicker eyebrow">Módulo ' + num2(idx + 1) + ' · Lección ' + (li + 1) + " de " + mod.lessons.length + '</div>' +
        '<h1>' + esc(lesson.title) + '</h1>' +
        (lesson.duration
          ? '<div class="dur">' + esc(lesson.duration) + " de lectura" + (isLessonDone(mid, lid) ? ' · <span class="done-flag">Completada ✓</span>' : "") + '</div>'
          : (isLessonDone(mid, lid) ? '<div class="dur"><span class="done-flag">Completada ✓</span></div>' : '<div class="dur"></div>')) +
        '<div class="lesson-content">' + lesson.content + '</div>' +
        '<div class="lesson-nav">' +
          '<a class="btn ghost" href="#/module/' + mid + '">← Volver al módulo</a>' +
          '<button class="btn" id="btn-complete">' +
            (lesson.quiz ? 'Completar e ir al test →'
              : lesson.essay ? 'Completar e ir a la escritura →'
              : 'Marcar como completada →') +
          '</button>' +
        '</div>' +
      '</div>' +
      '</div>'
    );

    // Cuaderno (módulo 9): ejercicios y taller sobre el contenido ya pintado.
    // El taller lee cada pieza de la redacción de su sesión.
    if (lesson.exercises && window.Cuaderno) {
      Cuaderno.mount(app.querySelector("#ex-host"), lesson, {
        pieceText: function (sessionN) {
          var target = mod.lessons.filter(function (x) { return x.n === sessionN; })[0];
          if (!target) return "";
          var e = essayData(mid, target.id);
          return e && e.text ? e.text : "";
        }
      });
    }

    document.getElementById("btn-complete").addEventListener("click", function () {
      markLessonDone(mid, lid);
      if (lesson.quiz) location.hash = "#/quiz/" + mid + "/" + lid;
      else if (lesson.essay) location.hash = "#/redaccion/" + mid + "/" + lid;
      else location.hash = "#/module/" + mid;
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
          '<div class="q-text"><span class="q-num">' + num2(qi + 1) + '</span>' + esc(q.q) + '</div>' +
          opts +
          '<div class="q-explain" id="qe' + qi + '" style="display:none"></div>' +
        '</div>'
      );
    }).join("");

    var best = quizResult(mid, lid);
    var bestNote = best
      ? ' · Mejor nota: <strong>' + best.pct + '%</strong>' + (best.passed ? " ✓" : "")
      : "";

    setBack("#/module/" + mid, "Módulo " + num2(idx + 1));
    render(
      '<div class="col-680">' +
      backLink("#/module/" + mid, "Módulo " + num2(idx + 1)) +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + num2(idx + 1) + '</a><span class="sep">›</span>Evaluación ' + (li + 1) + '</div>' +
      '<div class="quiz-shell">' +
        '<div class="lesson-kicker eyebrow">Módulo ' + num2(idx + 1) + ' · Evaluación ' + (li + 1) + " de " + mod.lessons.length + '</div>' +
        '<h1>Evaluación: ' + esc(lesson.title) + '</h1>' +
        '<p class="quiz-sub">' + quiz.questions.length + ' preguntas · Nota mínima ' + META.passScore + '%' + bestNote + '</p>' +
        '<div id="quiz-result"></div>' +
        '<form id="quiz-form">' + qHtml + '</form>' +
        '<div class="lesson-nav">' +
          '<a class="btn ghost" href="#/lesson/' + mid + "/" + lid + '">← Releer la lección</a>' +
          '<button class="btn" id="btn-submit">Enviar respuestas →</button>' +
        '</div>' +
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

    var submitBtn = document.getElementById("btn-submit");
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var unanswered = [];
      answers.forEach(function (a, i) { if (a === null) unanswered.push(i + 1); });
      if (unanswered.length) {
        flash(submitBtn, "Te faltan las preguntas: " + unanswered.join(", "), "warn");
        return;
      }
      clearFlash(submitBtn);

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
        if (lesson.essay && !isEssayDone(mid, lid)) {
          nextBtn = '<a class="btn" href="#/redaccion/' + mid + "/" + lid + '">Ir a la redacción →</a>';
        } else if (li < mod.lessons.length - 1) {
          nextBtn = '<a class="btn" href="#/lesson/' + mid + "/" + mod.lessons[li + 1].id + '">Siguiente lección →</a>';
        } else {
          var nextMod = MODULES[idx + 1];
          nextBtn = '<a class="btn ghost" href="#/flashcards/' + mid + '" style="margin-right:8px">Repasar con tarjetas</a>' +
            (nextMod
              ? '<a class="btn" href="#/module/' + nextMod.id + '">Siguiente módulo →</a>'
              : (courseComplete()
                  ? '<a class="btn" href="#/certificate">Ver mi certificado →</a>'
                  : '<a class="btn" href="#/">Volver al programa</a>'));
        }
      } else {
        nextBtn = '<button class="btn" id="quiz-retry">Intentar de nuevo</button>';
      }

      document.getElementById("quiz-result").innerHTML =
        '<div class="quiz-result ' + (passed ? "pass" : "fail") + '">' +
          '<div class="score">' + pct + '%</div>' +
          '<p>' + (passed
            ? "Aprobada. Acertaste " + score + " de " + quiz.questions.length + "."
            : "Acertaste " + score + " de " + quiz.questions.length + ". Necesitas " + META.passScore + "% — revisa las explicaciones y vuelve a intentarlo.") + '</p>' +
          '<p style="margin-top:16px">' + nextBtn + '</p>' +
        '</div>';
      var retry = document.getElementById("quiz-retry");
      if (retry) retry.addEventListener("click", function () { location.reload(); });
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

    setBack("#/module/" + mid, "Módulo " + num2(idx + 1));
    render(
      '<div class="col-680">' +
      backLink("#/module/" + mid, "Módulo " + num2(idx + 1)) +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + num2(idx + 1) + '</a><span class="sep">›</span>Tarjetas</div>' +
      '<div class="fc-shell">' +
        '<h1>Tarjetas de repaso · Módulo ' + num2(idx + 1) + '</h1>' +
        '<p class="quiz-sub">Haz clic en la tarjeta para girarla</p>' +
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
          '<button class="btn ghost" id="fc-shuffle">Mezclar</button>' +
          '<a class="btn" href="#/module/' + mid + '">Volver al módulo</a>' +
        '</div>' +
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

  /* ---------- Vista: redacción (evaluación escrita) ---------- */
  function viewEssay(mid, lid) {
    var mod = findModule(mid);
    if (!mod) return viewHome();
    var li = findLessonIndex(mod, lid);
    if (li < 0) return viewModule(mid);
    var lesson = mod.lessons[li];
    if (!lesson.essay) return viewModule(mid);
    var idx = MODULES.indexOf(mod);
    var e = lesson.essay;
    var saved = essayData(mid, lid) || { text: "", words: 0, done: false };

    var checklist = e.checklist.map(function (c) {
      return '<li>' + c + '</li>';
    }).join("");

    setBack("#/module/" + mid, "Módulo " + num2(idx + 1));
    render(
      '<div class="col-680">' +
      backLink("#/module/" + mid, "Módulo " + num2(idx + 1)) +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span><a href="#/module/' + mid + '">Módulo ' + num2(idx + 1) + '</a><span class="sep">›</span>Redacción ' + (li + 1) + '</div>' +
      '<div class="essay-shell">' +
        '<div class="lesson-kicker eyebrow">' + (e.tag ? esc(e.tag) : 'Módulo ' + num2(idx + 1) + ' · Redacción ' + (li + 1) + ' de ' + mod.lessons.length) + '</div>' +
        '<h1>' + esc(e.title) + '</h1>' +
        '<p class="quiz-sub">' + (e.tag ? 'Objetivo: ' + e.minWords + '–' + e.maxWords + ' palabras' : e.minWords + '–' + e.maxWords + ' palabras · Evaluación escrita · La corrige tu profesora') + '</p>' +

        '<div class="essay-prompt"><span class="callout-title">Enunciado</span>' + esc(e.prompt) + '</div>' +

        '<div class="essay-check"><span class="callout-title">Debe contener obligatoriamente</span><ul>' + checklist + '</ul></div>' +
        (e.avoid ? '<div class="essay-avoid"><span class="callout-title">Evita</span>' + esc(e.avoid) + '</div>' : "") +

        '<div class="essay-editor">' +
          '<div class="essay-bar">' +
            '<span class="essay-count" id="essay-count"></span>' +
            '<span class="essay-saved" id="essay-saved"></span>' +
          '</div>' +
          '<textarea id="essay-text" class="essay-text" spellcheck="true" lang="es"' +
            (isTeacher() ? ' readonly' : '') +
            ' placeholder="' + (isTeacher() ? 'El alumno todavía no ha escrito nada.' : 'Escribe aquí tu redacción…') + '">' + esc(saved.text) + '</textarea>' +
        '</div>' +

        (isTeacher() ? '' :
          '<div class="essay-actions">' +
            '<button class="btn" id="essay-done">' + (saved.done ? "Marcar como borrador" : "Marcar como entregada") + '</button>' +
            '<button class="btn ghost" id="essay-copy">Copiar texto</button>' +
            '<button class="btn ghost" id="essay-print">Imprimir / PDF</button>' +
          '</div>' +
          '<p class="essay-note">Se guarda sola en este dispositivo mientras escribes y, si tienes la sincronización activada, viaja a tus otros dispositivos.</p>') +

        correctionsHTML(mid, lid) +
      '</div>' +
      '</div>'
    );

    wireCorrections(mid, lid);

    var ta = document.getElementById("essay-text");
    var countEl = document.getElementById("essay-count");
    var savedEl = document.getElementById("essay-saved");
    var doneBtn = document.getElementById("essay-done");
    var timer = null;

    if (isTeacher()) {
      var w0 = countWords(ta.value);
      countEl.textContent = w0 + " / " + e.minWords + "–" + e.maxWords + " palabras";
      savedEl.textContent = saved.done ? "Entregada" : (w0 ? "Borrador" : "Sin empezar");
      return;
    }

    function refreshCount() {
      var w = countWords(ta.value);
      var cls = w === 0 ? "" : (w < e.minWords ? " short" : (w > e.maxWords ? " over" : " ok"));
      countEl.className = "essay-count" + cls;
      countEl.textContent = w + " / " + e.minWords + "–" + e.maxWords + " palabras" +
        (w === 0 ? "" : (w < e.minWords ? " · faltan " + (e.minWords - w) : (w > e.maxWords ? " · sobran " + (w - e.maxWords) : " · en rango ✓")));
    }
    function flushSave(done) {
      saveEssay(mid, lid, ta.value, done);
      savedEl.textContent = "Guardado " + new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
    }
    refreshCount();
    if (saved.text) savedEl.textContent = "Guardado";

    ta.addEventListener("input", function () {
      refreshCount();
      savedEl.textContent = "Escribiendo…";
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () { timer = null; flushSave(); }, 800);
    });
    // `pagehide` además de `beforeunload`: en iOS el segundo no llega, y ahí es
    // justo donde se escribe y se cambia de app a media frase.
    // El envío va aquí dentro y no solo en el oyente global: este se registra
    // después, así que si no, el global soltaría lo pendiente antes de que este
    // guardara la última frase.
    var guardaYa = function () {
      if (timer) { clearTimeout(timer); timer = null; flushSave(); }
      if (window.Sync) Sync.flushPush();
    };
    window.addEventListener("beforeunload", guardaYa);
    window.addEventListener("pagehide", guardaYa);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") guardaYa();
    });

    doneBtn.addEventListener("click", function () {
      var w = countWords(ta.value);
      var nowDone = !isEssayDone(mid, lid);
      if (nowDone && w < e.minWords) {
        flash(doneBtn, "Te faltan palabras: llevas " + w + " y el mínimo son " + e.minWords + ".", "warn");
        return;
      }
      clearFlash(doneBtn);
      if (timer) { clearTimeout(timer); timer = null; }
      flushSave(nowDone);
      viewEssay(mid, lid);
    });

    document.getElementById("essay-copy").addEventListener("click", function () {
      var txt = e.title + "\n\n" + ta.value;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          savedEl.textContent = "Texto copiado ✓";
        }).catch(function () { ta.select(); });
      } else { ta.select(); document.execCommand && document.execCommand("copy"); }
    });
    document.getElementById("essay-print").addEventListener("click", function () {
      if (timer) { clearTimeout(timer); timer = null; flushSave(); }
      window.print();
    });
  }

  /* ---------- Panel de correcciones ---------- */
  function correctionsHTML(mid, lid) {
    var list = corrections(mid, lid);
    var h = '<div class="corr">';
    h += '<h2 class="settings-h2">Correcciones</h2>';

    if (!list.length) {
      h += '<p class="corr-empty">' + (isTeacher()
        ? 'Todavía no has corregido esta redacción.'
        : 'Tu profesora todavía no ha corregido esta redacción.') + '</p>';
    } else {
      h += '<ol class="corr-list">';
      list.slice().reverse().forEach(function (c) {
        h += '<div class="corr-item">' +
          '<div class="corr-top">' +
            (c.grade ? '<span class="corr-grade">' + esc(c.grade) + '</span>' : '<span class="corr-grade none">sin nota</span>') +
            '<span class="corr-date">' + fmtDate(c.at) + '</span>' +
          '</div>' +
          (c.comment ? '<p class="corr-comment">' + esc(c.comment) + '</p>' : '') +
          '</div>';
      });
      h += '</ol>';
    }

    if (isTeacher()) {
      h += '<div class="corr-form">' +
        '<label class="sync-label" for="corr-grade">Nota</label>' +
        '<input type="text" id="corr-grade" class="corr-grade-input" placeholder="p. ej. 8,5 o Aprobada" autocomplete="off">' +
        '<label class="sync-label" for="corr-comment">Comentario</label>' +
        '<textarea id="corr-comment" class="corr-textarea" placeholder="Qué está bien, qué corregir, qué practicar…"></textarea>' +
        '<button class="btn" id="corr-save">Guardar corrección</button>' +
        '<p class="corr-note">Cada corrección se guarda con su fecha y se suma al registro: las anteriores no se pierden.</p>' +
        '</div>';
    }
    return h + '</div>';
  }

  function wireCorrections(mid, lid) {
    var btn = document.getElementById("corr-save");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var g = document.getElementById("corr-grade").value;
      var c = document.getElementById("corr-comment").value;
      if (!g.trim() && !c.trim()) { flash(btn, "Pon al menos una nota o un comentario.", "warn"); return; }
      clearFlash(btn);
      addCorrection(mid, lid, g, c);
      viewEssay(mid, lid);
    });
  }

  /* ---------- Vista: registro de correcciones (profesora) ---------- */
  function viewCorrections() {
    var rows = "";
    var total = 0, corrected = 0;
    MODULES.forEach(function (mod, mi) {
      var items = mod.lessons.filter(function (l) { return !!l.essay; });
      if (!items.length) return;
      rows += '<div class="corr-mod"><h3>Módulo ' + num2(mi + 1) + ' · ' + esc(String(mod.title).replace(/<[^>]+>/g, "")) + '</h3>';
      mod.lessons.forEach(function (l, li) {
        if (!l.essay) return;
        total++;
        var e = essayData(mod.id, l.id);
        var last = lastCorrection(mod.id, l.id);
        if (last) corrected++;
        var words = e && e.words ? e.words : 0;
        var state = !words ? '<span class="lrow-meta muted">Sin empezar</span>'
          : (e && e.done ? '<span class="lrow-meta accent">Entregada · ' + words + ' palabras</span>'
                         : '<span class="lrow-meta">Borrador · ' + words + ' palabras</span>');
        rows += '<a class="corr-row" href="#/redaccion/' + mod.id + '/' + l.id + '">' +
          '<div class="corr-row-main">' +
            '<span class="eyebrow">' + esc(l.essay.tag || ('Redacción ' + (li + 1))) + '</span>' +
            '<h4>' + esc(l.essay.title) + '</h4>' +
          '</div>' +
          '<div class="corr-row-side">' + state +
            (last
              ? '<span class="corr-badge">' + (last.grade ? esc(last.grade) : 'corregida') + '</span>'
              : '<span class="corr-badge pending">sin corregir</span>') +
          '</div>' +
        '</a>';
      });
      rows += '</div>';
    });

    setBack("#/", "Inicio");
    render(
      '<div class="col-760">' +
      backLink("#/", "Inicio") +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Correcciones</div>' +
      '<div class="module-head">' +
        '<h1>Redacciones para corregir</h1>' +
        '<p>' + corrected + ' de ' + total + ' con corrección. Al abrir una verás el texto del alumno y podrás ponerle nota y comentario.</p>' +
      '</div>' +
      '<div class="corr-index">' + rows + '</div>' +
      '</div>'
    );
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
          var quizzesTotal = mod.lessons.filter(function (l) { return !!l.quiz; }).length;
          var quizzesLeft = quizzesTotal - s.quizzesPassed;
          var essaysTotal = mod.lessons.filter(function (l) { return !!l.essay; }).length;
          var essaysLeft = essaysTotal - s.essaysDone;
          if (lessonsLeft) parts.push(lessonsLeft + (lessonsLeft === 1 ? " lección" : " lecciones"));
          if (quizzesLeft > 0) parts.push(quizzesLeft + (quizzesLeft === 1 ? " test" : " tests"));
          if (essaysLeft > 0) parts.push(essaysLeft + (essaysLeft === 1 ? " redacción" : " redacciones"));
          missing.push("<li><a href=\"#/module/" + mod.id + "\">Módulo " + num2(i + 1) + " · " + esc(mod.title) + "</a> — falta: " + parts.join(" y ") + "</li>");
        }
      });
      setBack("#/", "Inicio");
      render(
        '<div class="col-680">' +
        backLink("#/", "Inicio") +
        '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Certificado</div>' +
        '<div class="locked-box">' +
          '<h2>Tu certificado te está esperando</h2>' +
          '<p>Para desbloquearlo, completa todas las lecciones y aprueba todas las evaluaciones (≥ ' + META.passScore + '%):</p>' +
          '<ul>' + missing.join("") + '</ul>' +
        '</div>' +
        '</div>'
      );
      return;
    }

    var name = progress.name || "";
    var dateStr = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    var lessonsTotal = MODULES.reduce(function (n, m) { return n + m.lessons.length; }, 0);

    setBack("#/", "Inicio");
    render(
      '<div class="col-680">' +
      backLink("#/", "Inicio") +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Certificado</div>' +
      '<div class="cert-form">' +
        '<input type="text" id="cert-name" placeholder="Escribe tu nombre completo" value="' + esc(name) + '">' +
        '<button class="btn" id="btn-name">Poner en el certificado</button>' +
      '</div>' +
      '<div class="certificate">' +
        '<div class="cert-kicker">Certificado de finalización</div>' +
        '<h1>' + esc(META.title) + '<br><small>' + esc(META.subtitle) + '</small></h1>' +
        '<p>Se certifica que</p>' +
        '<div class="cert-name" id="cert-display">' + (name ? esc(name) : "________________") + '</div>' +
        '<p>completó con éxito los ' + MODULES.length + ' módulos y las ' + lessonsTotal + ' evaluaciones del curso contrastivo de español para hablantes de portugués brasileño, con nota mínima de ' + META.passScore + '% en cada una.</p>' +
        '<p class="cert-date">' + dateStr + '</p>' +
      '</div>' +
      '<p style="text-align:center;margin-top:26px"><button class="btn ghost" id="cert-print">Imprimir / guardar PDF</button></p>' +
      '</div>'
    );

    document.getElementById("btn-name").addEventListener("click", function () {
      var v = document.getElementById("cert-name").value.trim();
      progress.name = v;
      saveProgress(progress);
      document.getElementById("cert-display").textContent = v || "________________";
    });
    document.getElementById("cert-print").addEventListener("click", function () { window.print(); });
  }

  /* ---------- Vista: sincronización ----------
     Sin conectar todavía. El campo es UNO: acepta el token de GitHub y también
     el código de un aparato que ya funcione, porque tener que acertar cuál se
     pega era la mitad del lío. Los tres pasos se quedan enteros: es aquí,
     con nada montado, donde de verdad hacen falta. */
  function syncSetupHtml(tokenUrl) {
    return (
      '<div class="set-row set-row-stack">' +
        '<span class="set-k">Sincronización</span>' +
        '<div class="set-v">' +
          '<div class="code-field">' +
            '<input type="password" id="code-in" class="code-in" placeholder="ghp_… · github_pat_… · espanol:…" autocomplete="off" autocapitalize="off" spellcheck="false">' +
          '</div>' +
          '<div class="code-msg" id="code-msg"></div>' +
          '<div class="sync-help">' +
            '<p><span class="sn">1</span> Crea un token en <a href="' + tokenUrl + '" target="_blank" rel="noopener">github.com</a> con el permiso <code>gist</code> (ya viene marcado). Ningún otro permiso hace falta.</p>' +
            '<p><span class="sn">2</span> Pégalo aquí: se creará (o reutilizará) un gist <strong>secreto</strong> con tu progreso, y se sincroniza solo.</p>' +
            '<p><span class="sn">3</span> En tu iPhone, iPad y Mac abre esta misma página → <em>Ajustes</em> → pega el código que este aparato te dará. Eso es todo.</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
  /* Ya conectado. Un solo código, y lo que se enseña es su parte pública —el id
     del gist, que sin token no abre nada—; la cola va con puntos y se destapa
     con «ver». Lo que copia el botón es el código entero, así que pegarlo
     funciona en cualquier aparato, recién estrenado o no. */
  function syncConnectedHtml() {
    return (
      '<div class="set-row set-row-code">' +
        '<span class="set-k">Código</span>' +
        '<div class="set-v code-line">' +
          '<span class="code-val" id="code-val"></span>' +
          '<span class="code-acts">' +
            '<button type="button" class="minibtn" id="code-eye">ver</button>' +
            '<button type="button" class="minibtn on" id="code-copy">copiar</button>' +
          '</span>' +
        '</div>' +
        // En el móvil el par de botoncitos no llega al blanco táctil, así que
        // copiar pasa a ser un botón entero y con nombre completo.
        '<button type="button" class="code-copy-wide" id="code-copy-wide">Copiar el código de este aparato</button>' +
      '</div>'
    );
  }
  // Qué es este aparato. En la caja de Ajustes es la línea que contesta «¿en
  // cuál de los tres estoy?» sin tener que mirar el gist.
  function aparatoTxt() {
    var cls = document.documentElement.classList;
    var ua = navigator.userAgent || "";
    var nombre = /iPhone/.test(ua) ? "iPhone"
      : (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) ? "iPad"
      : /Mac/.test(ua) ? "Mac"
      : /Android/.test(ua) ? "Android" : "Ordenador";
    var envoltorio = cls.contains("is-tauri") ? "escritorio"
      : cls.contains("is-standalone") ? "instalada" : "navegador";
    // El tercer dato solo aparece cuando falta: decir «con conexión» siempre
    // sería ruido, y decir que no la hay explica por qué no se sincroniza.
    var suelto = (navigator.onLine === false) ? " · sin conexión disponible" : "";
    return nombre + " · " + envoltorio + suelto;
  }
  // Cuerpo de Ajustes. Se pinta igual en la página (#/ajustes, que es lo que
  // se ve en el móvil) y dentro de la caja de luz del engranaje.
  function settingsBodyHTML() {
    var configured = Sync.isConfigured();
    var tokenUrl = "https://github.com/settings/tokens/new?scopes=gist&description=Espanol%20para%20brasilenos%20sync";
    var st = window.Sync.getState();
    var tema = (window.Tema ? Tema.get() : "auto");
    return (
      // Tira de estado: lo primero que se mira al abrir Ajustes es si esto
      // está sincronizando o no. El titular dice el estado y el detalle va a
      // la derecha; cuando algo falla, el titular lo dice — poner
      // «Sincronizado» junto a un punto rojo sería mentir en grande.
      '<div class="set-strip">' +
        '<span class="set-strip-l"><span class="sync-dot ' + (configured ? st.status : "off") + '"></span>' +
          esc(!configured ? "Sin sincronizar"
            : st.status === "error" ? "No se pudo sincronizar"
            : st.status === "syncing" ? "Sincronizando…"
            : "Sincronizado") + '</span>' +
        '<span class="set-strip-r">' +
          esc(configured ? (st.detail || "—") : "solo en este aparato") + '</span>' +
      '</div>' +

      '<div class="set-rows">' +
        '<div class="set-row set-row-role">' +
          '<span class="set-k">Perfil</span>' +
          '<div class="set-v">' +
            '<span class="pills">' +
              '<button type="button" class="pill' + (isTeacher() ? '' : ' on') + '" data-role="alumno">Alumno</button>' +
              '<button type="button" class="pill' + (isTeacher() ? ' on' : '') + '" data-role="profesora">Profesora</button>' +
            '</span>' +
            (isTeacher() ? '<a class="set-link" href="#/correcciones">Corregir redacciones →</a>' : '') +
          '</div>' +
        '</div>' +

        (configured ? syncConnectedHtml() : syncSetupHtml(tokenUrl)) +

        versionHTML() +

        // «Aparien.» abreviado para caber en la columna de 64px sin ensancharla;
        // en el móvil, donde la etiqueta va encima y sobra sitio, entera.
        '<div class="set-row set-row-tema">' +
          '<span class="set-k"><span class="k-corto">Aparien.</span><span class="k-largo">Apariencia</span></span>' +
          '<div class="set-v">' +
            '<span class="pills">' +
              '<button type="button" class="pill' + (tema === "auto" ? " on" : "") + '" data-tema="auto">Auto</button>' +
              '<button type="button" class="pill' + (tema === "claro" ? " on" : "") + '" data-tema="claro">Claro</button>' +
              '<button type="button" class="pill' + (tema === "oscuro" ? " on" : "") + '" data-tema="oscuro">Oscuro</button>' +
            '</span>' +
          '</div>' +
        '</div>' +

        '<div class="set-row">' +
          '<span class="set-k">Aparato</span>' +
          '<div class="set-v"><span class="set-plain">' + esc(aparatoTxt()) + '</span></div>' +
        '</div>' +
      '</div>' +

      // Traer de otro aparato. Antes era una fila perfilada con un «+» que no
      // decía qué hacer; ahora el campo ES el destino, y está a la vista.
      (configured
        ? '<div class="bring">' +
            '<p class="bring-k">Traer de otro aparato</p>' +
            '<div class="bring-row">' +
              '<input type="text" id="code-in" class="bring-in" placeholder="espanol:········:·····" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
              '<button type="button" class="bring-btn" id="code-bring" disabled>Traer</button>' +
            '</div>' +
            '<p class="bring-hint" id="code-msg">Cópialo en el aparato que va por delante — Ajustes → Código → Copiar.</p>' +
          '</div>'
        : '') +

      '<div class="set-foot">' +
        '<div class="set-foot-l">' +
          (configured ? '<button type="button" class="linkish" id="sync-now">Sincronizar</button>' : '') +
          diagHTML() +
        '</div>' +
        (configured
          ? '<button type="button" class="linkish danger" id="sync-disconnect">Desconectar</button>'
          : '') +
      '</div>'
    );
  }

  /* ---------- Versión ----------
     `window.APP_VERSION` viene de js/version.js, que viaja dentro de la caché
     del service worker: es siempre la versión que se está EJECUTANDO. La
     publicada se pregunta aparte a version.json, que el worker deja pasar sin
     cachear. Si difieren, ya hay una copia nueva descargándose de fondo y
     entrará al reiniciar. */
  var REPO = "https://github.com/gabrielom/espanol";
  function appVersion() {
    var v = window.APP_VERSION || {};
    return {
      version: v.version || "dev",
      commit: v.commit || "",
      title: v.title || "",
      pr: v.pr || null,
      built: v.built || ""
    };
  }
  // Sin hora: en un renglón que ya lleva PR y commit, el minuto exacto de la
  // publicación no cabe y tampoco lo mira nadie.
  function shortDate(iso) {
    if (!iso) return "";
    var d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" })
      .replace(/\bde\b/g, "").replace(/\s+/g, " ").trim();
  }
  // Todo en un renglón: el PR hace de número de versión, y detrás el commit y
  // la fecha en que se publicó. El estado se va al extremo derecho. Lo único
  // largo —el título del cambio— vive en el desplegable, y la fila entera es
  // el botón que lo abre: sin etiqueta ni signo nuevo en una tarjeta que ya
  // tiene tres cosas.
  function versionHTML() {
    var v = appVersion();
    var when = shortDate(v.built);
    var head = v.pr ? "#" + esc(v.pr) : esc(v.version);
    var tail = [];
    if (v.pr) tail.push(esc(v.version));
    if (when) tail.push(esc(when));
    var links = [];
    if (v.pr) links.push('<a href="' + REPO + '/pull/' + encodeURIComponent(v.pr) + '" target="_blank" rel="noopener">Ver el pull request</a>');
    if (v.commit) links.push('<a href="' + REPO + '/commit/' + esc(v.commit) + '" target="_blank" rel="noopener">ver el commit</a>');
    return (
      '<details class="set-row vrow">' +
        '<summary>' +
          '<span class="set-k">Versión</span>' +
          '<span class="set-v vrow-v">' +
            '<span class="vrow-line"><span class="vrow-pr">' + head + '</span>' +
              (tail.length ? '<span class="vrow-rest"> · ' + tail.join(" · ") + '</span>' : '') +
            '</span>' +
            '<span class="vrow-state" id="ver-state">…</span>' +
          '</span>' +
          '<span class="vrow-chev">›</span>' +
        '</summary>' +
        '<div class="vrow-drop">' +
          // En el móvil el renglón no da para el commit y la fecha, así que
          // ahí se enseña solo el PR y esta copia toma el relevo dentro del
          // desplegable. En pantalla ancha sobra y se oculta.
          (tail.length ? '<div class="vrow-meta">' + tail.join(" · ") + '</div>' : '') +
          (v.title ? '<div class="vrow-title">' + esc(v.title) + '</div>' : '') +
          '<div class="vrow-note" id="ver-note"></div>' +
          (links.length ? '<div class="vrow-links">' + links.join(" · ") + '</div>' : '') +
        '</div>' +
      '</details>'
    );
  }
  /* ---------- Diagnóstico ----------
     Cuando algo "no se sincroniza", lo que hace falta es ver qué tiene cada
     dispositivo. Esto lo resume en una línea copiable: perfil, versión, cuántas
     respuestas del cuaderno hay guardadas, si queda algo en la clave vieja sin
     migrar, y el estado de la última sincronización. */
  function cuadernoCount(c) {
    if (!c) return 0;
    var n = 0, id, i;
    for (id in c.R || {}) for (i in c.R[id]) {
      var v = c.R[id][i];
      if (v !== "" && v !== undefined && v !== null) n++;
    }
    for (id in c.CH || {}) if (c.CH[id]) n++;
    return n;
  }
  // Qué sesiones del módulo 9 tienen respuestas guardadas aquí. Un total no
  // sirve para «la profesora no ve las sesiones 1 y 2»: hace falta saber
  // cuáles hay en cada aparato, y comparar las dos líneas.
  function cuadernoSesiones(c) {
    var m9 = null, i;
    for (i = 0; i < MODULES.length; i++) if (MODULES[i].id === "m9") m9 = MODULES[i];
    if (!m9 || !c) return "—";
    var conRespuesta = [];
    m9.lessons.forEach(function (l, idx) {
      var suyos = (l.exercises || []).map(function (e) { return e.id; });
      var tiene = suyos.some(function (id) {
        var box = (c.R || {})[id], k;
        for (k in box || {}) if (box[k] !== "" && box[k] !== undefined && box[k] !== null) return true;
        for (k in c.CH || {}) if (c.CH[k] && k.indexOf(id + ":") === 0) return true;
        return false;
      });
      if (tiene) conRespuesta.push(idx + 1);
    });
    return conRespuesta.length ? conRespuesta.join("") : "ninguna";
  }
  function diagText() {
    var vieja = (window.Cuaderno && Cuaderno.localState) ? Cuaderno.localState() : null;
    var st = window.Sync ? Sync.getState() : { status: "?" };
    var esencia = {
      version: appVersion().version,
      perfil: role(),
      app: document.documentElement.classList.contains("is-tauri") ? "escritorio" : "navegador",
      cuaderno: cuadernoCount(progress.cuaderno),
      sesiones: cuadernoSesiones(progress.cuaderno),
      cuadernoAt: progress.cuadernoAt ? new Date(progress.cuadernoAt).toISOString().slice(0, 16) : "—",
      claveVieja: cuadernoCount(vieja),
      sesionesVieja: cuadernoSesiones(vieja),
      redacciones: Object.keys(progress.essays || {}).length,
      lecciones: Object.keys(progress.lessons || {}).length,
      sync: window.Sync && Sync.isConfigured() ? (st.status + (st.detail ? " · " + st.detail : "")) : "sin conectar",
      gist: (window.Sync && Sync.getGistId() ? Sync.getGistId().slice(0, 8) + "…" : "—")
    };
    return Object.keys(esencia).map(function (k) { return k + "=" + esencia[k]; }).join("  ");
  }
  // Plegado: es una herramienta para cuando algo no cuadra entre dispositivos,
  // no algo que deba estar a la vista en un curso de idiomas.
  function diagHTML() {
    return (
      '<details class="diag-wrap">' +
        '<summary>Diagnóstico</summary>' +
        '<div class="diag" id="diag-text">' + esc(diagText()) + '</div>' +
        '<div class="diag-acts">' +
          '<button type="button" class="linkish" id="diag-copy">Copiar diagnóstico</button>' +
        '</div>' +
        '<div class="code-msg" id="diag-msg"></div>' +
      '</details>'
    );
  }
  function wireDiag(root) {
    var b = root.querySelector("#diag-copy");
    if (!b) return;
    b.addEventListener("click", function () {
      var t = diagText();
      var msg = root.querySelector("#diag-msg");
      var show = function (s) { if (msg) { msg.className = "code-msg warn"; msg.textContent = s; } };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(t).then(function () { show("Copiado."); },
          function () { show("Selecciona el texto de arriba y cópialo a mano."); });
      } else {
        show("Selecciona el texto de arriba y cópialo a mano.");
      }
    });
  }

  function wireVersion(root) {
    var box = root.querySelector("#ver-state");
    if (!box) return;
    var note = root.querySelector("#ver-note");
    var mine = appVersion().version;

    // Dos sitios: dos palabras en la línea, y la explicación dentro del
    // desplegable. Así el estado cabe al lado de la fecha sin partir la fila.
    function say(txt, cls, detail) {
      if (!box.isConnected) return;
      box.className = "vrow-state" + (cls ? " " + cls : "");
      box.textContent = txt;
      if (note) note.innerHTML = detail || "";
    }

    if (mine === "dev") {
      say("desarrollo", "muted", "Copia de desarrollo, sin sello de versión.");
      return;
    }
    say("comprobando…", "muted", "");
    // `no-store` y, además, el worker no intercepta version.json: esto siempre
    // sale a la red, así que refleja de verdad lo que hay publicado.
    fetch("version.json", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (live) {
        if (!live || !live.version) return Promise.reject();
        if (live.version === mine) {
          say("al día", "ok", "");
        } else {
          var howToApply = document.documentElement.classList.contains("is-tauri")
            ? "Cierra y vuelve a abrir la app para aplicarla."
            : "Recarga la página para aplicarla.";
          say("hay una nueva", "new",
            "Publicada la <code>" + esc(live.version) + "</code>. Ya se está descargando. " + howToApply);
        }
      })
      .catch(function () {
        say("sin conexión", "muted",
          "No se puede comprobar si hay una versión nueva. Estás usando la copia guardada.");
      });
  }

  // Engancha los controles de Ajustes dentro de `root`. `repaint` vuelve a
  // pintar ese mismo contenedor — la página o la caja, según quién llame.
  // Todo se busca dentro de `root`: los dos contenedores usan los mismos id.
  function wireSettings(root, repaint) {
    root.querySelectorAll("[data-role]").forEach(function (b) {
      b.addEventListener("click", function () { setRole(b.dataset.role); repaint(); });
    });
    // Apariencia. «Auto» no fija nada: sigue al sistema mientras esté abierta.
    root.querySelectorAll("[data-tema]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (window.Tema) Tema.set(b.dataset.tema);
        repaint();
      });
    });
    wireVersion(root);
    wireDiag(root);

    var now = root.querySelector("#sync-now");
    if (now) {
      now.addEventListener("click", function () {
        Sync.sync(function () { return progress; }, function (m) { applyMerged(m, true); }).then(repaint);
      });
    }
    var off = root.querySelector("#sync-disconnect");
    if (off) {
      off.addEventListener("click", function () {
        flashConfirm(off, "¿Desconectar este dispositivo? Tu progreso local se conserva.",
          "Sí, desconectar", function () { Sync.clearConfig(); repaint(); });
      });
    }
    wireCode(root, repaint);
  }

  /* ---------- Código de conexión ----------
     Un solo código y un solo campo. Lo que se ve en pantalla es la parte
     pública —«espanol:<gist>:»—, y la cola del token va con puntos hasta que
     se pulsa «ver»; lo que se copia, en cambio, es el código entero, para que
     pegarlo funcione en cualquier aparato. Pegar no necesita segundo botón:
     en cuanto lo que hay en el campo es un código o un token válido, conecta
     y sincroniza. */
  function wireCode(root, repaint) {
    var msg = root.querySelector("#code-msg");
    // La pista de «Traer» y los mensajes de resultado son el mismo renglón:
    // no se acumulan dos líneas debajo del campo, se relevan.
    var base = msg && msg.classList.contains("bring-hint") ? "bring-hint" : "code-msg";
    function say(t, cls) {
      if (!msg) return;
      msg.className = base + (cls ? " " + cls : "");
      msg.textContent = t;
    }

    var val = root.querySelector("#code-val");
    var eye = root.querySelector("#code-eye");
    var shown = false;
    function paintCode() {
      if (!val) return;
      var pub = Sync.exportPublicPart();
      var code = Sync.exportCode();
      var tail = code.slice(pub.length);
      val.textContent = "";
      val.appendChild(document.createTextNode(pub));
      var rest = document.createElement("span");
      if (shown) {
        rest.textContent = tail;
      } else {
        rest.className = "code-hid";
        rest.textContent = new Array(tail.length + 1).join("•");
      }
      val.appendChild(rest);
    }
    paintCode();
    if (eye) {
      eye.addEventListener("click", function () {
        shown = !shown;
        eye.textContent = shown ? "ocultar" : "ver";
        paintCode();
      });
    }

    // Copiar el código entero. El campo se destapa a la vez: si el
    // portapapeles falla, ahí queda para seleccionarlo a mano.
    function wireCopy(btn) {
      if (!btn) return;
      btn.addEventListener("click", function () {
        var code = Sync.exportCode();
        if (!code) { say("No hay nada que copiar todavía.", "warn"); return; }
        shown = true;
        if (eye) eye.textContent = "ocultar";
        paintCode();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(
            function () { say("Copiado. Pégalo en el otro aparato.", "ok"); },
            function () { say("No he podido usar el portapapeles: cópialo del recuadro.", "warn"); }
          );
        } else {
          say("Cópialo del recuadro.", "warn");
        }
      });
    }
    wireCopy(root.querySelector("#code-copy"));
    wireCopy(root.querySelector("#code-copy-wide"));

    /* ---- Traer de otro aparato ----
       El campo es el destino, y se ve desde el principio. El botón está
       apagado hasta que lo pegado tiene forma de código: así el estado del
       botón es la validación, sin un mensaje de error que aparezca mientras
       todavía estás pegando. Solo protesta si sueltas algo que no vale. */
    var input = root.querySelector("#code-in");
    var bring = root.querySelector("#code-bring");
    if (!input) return;

    var PISTA = "Cópialo en el aparato que va por delante — Ajustes → Código → Copiar.";
    var PROMESA = "Se fusiona con lo que ya tienes: de cada lección gana el estado más avanzado. Nada se borra.";

    // Qué tiene el campo, sin tocar nada todavía.
    function mira(raw) {
      var s = String(raw || "").trim();
      if (!s) return { estado: "vacio" };
      if (Sync.looksLikeToken(s)) return { estado: "ok", valor: s };
      var parsed = Sync.parseCode(s);
      if (!parsed) return { estado: "malo" };
      if (parsed.kind === "gist" && !Sync.isConfigured()) return { estado: "solo-gist" };
      return { estado: "ok", valor: s };
    }

    function repinta(protesta) {
      var q = mira(input.value);
      var listo = q.estado === "ok";
      if (bring) bring.disabled = !listo;
      input.classList.toggle("on", listo);
      input.classList.toggle("mal", protesta && (q.estado === "malo" || q.estado === "solo-gist"));
      if (listo) say(PROMESA, "");
      else if (protesta && q.estado === "malo") say("Eso no tiene forma de código. Empieza por «espanol:» — cópialo entero desde el otro aparato.", "err");
      else if (protesta && q.estado === "solo-gist") say("Ese código antiguo lleva solo el gist, y aquí todavía no hay token. Pega el token de GitHub, o el código nuevo del otro aparato.", "err");
      else say(PISTA, "");
      return q;
    }

    function traer() {
      var q = repinta(true);
      if (q.estado !== "ok") return;
      if (!Sync.importCode(q.valor)) { say("No he podido usar eso.", "err"); return; }
      say("Conectado. Sincronizando…", "ok");
      Sync.sync(function () { return progress; }, function (m) { applyMerged(m, true); }).then(repaint, repaint);
    }

    repinta(false);
    input.addEventListener("input", function () { repinta(false); });
    input.addEventListener("change", function () { repinta(true); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); traer(); }
    });
    if (bring) bring.addEventListener("click", traer);
  }

  function isSettingsRoute() { return /^#\/?(ajustes|sync)\b/.test(location.hash); }

  function viewSync() {
    if (!window.Sync) { render('<div class="col-680"><p>La sincronización no está disponible.</p></div>'); return; }
    setBack("#/", "Inicio");
    render(
      '<div class="col-680">' +
      backLink("#/", "Inicio") +
      '<div class="crumbs"><a href="#/">Inicio</a><span class="sep">›</span>Ajustes</div>' +
      '<div class="sync-view">' +
        '<h1>Ajustes</h1>' +
        settingsBodyHTML() +
      '</div>' +
      '</div>'
    );
    wireSettings(app, function () { if (isSettingsRoute()) viewSync(); });
  }

  /* ---------- Ajustes como caja de luz ----------
     Fuera del móvil el engranaje no navega: abre Ajustes flotando encima de
     lo que estés haciendo. Como la ruta no cambia, volver a pulsarlo te deja
     exactamente en la misma página y en el mismo estado. En el móvil no hay
     sitio para una caja, así que ahí sigue navegando a #/ajustes. */
  var settingsBox = null;     // el nodo mientras está abierta
  var settingsOpener = null;  // a quién devolver el foco al cerrar

  function settingsFitsBox() { return !window.matchMedia("(max-width: 640px)").matches; }

  function paintSettingsBox() {
    var body = settingsBox.querySelector(".lightbox-body");
    body.innerHTML = settingsBodyHTML();
    wireSettings(body, function () { if (settingsBox) paintSettingsBox(); });
  }

  function openSettingsBox() {
    if (settingsBox || !window.Sync) return;
    settingsOpener = document.activeElement;
    settingsBox = document.createElement("div");
    settingsBox.className = "lightbox";
    settingsBox.innerHTML =
      '<div class="lightbox-veil" data-close></div>' +
      '<div class="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" tabindex="-1">' +
        '<div class="lightbox-head">' +
          '<h2 id="lightbox-title">Ajustes</h2>' +
          '<button type="button" class="lightbox-x" data-close aria-label="Cerrar ajustes">' +
            '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">' +
              '<path d="M1 1 12 12M12 1 1 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
            '</svg>' +
          '</button>' +
        '</div>' +
        '<div class="lightbox-body"></div>' +
      '</div>';
    document.body.appendChild(settingsBox);
    document.body.classList.add("lightbox-open");
    paintSettingsBox();

    settingsBox.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) closeSettingsBox();
    });
    document.addEventListener("keydown", settingsBoxKeys);
    var g = document.getElementById("gear-btn");
    if (g) g.setAttribute("aria-expanded", "true");
    settingsBox.querySelector(".lightbox-panel").focus();
  }

  function closeSettingsBox() {
    if (!settingsBox) return;
    settingsBox.remove();
    settingsBox = null;
    document.body.classList.remove("lightbox-open");
    document.removeEventListener("keydown", settingsBoxKeys);
    var g = document.getElementById("gear-btn");
    if (g) g.setAttribute("aria-expanded", "false");
    if (settingsOpener && settingsOpener.focus) settingsOpener.focus();
    settingsOpener = null;
  }

  function settingsBoxKeys(e) {
    if (e.key === "Escape") { e.preventDefault(); closeSettingsBox(); }
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
    if ((parts[0] === "redaccion" || parts[0] === "essay") && parts[1] && parts[2]) return viewEssay(parts[1], parts[2]);
    if (parts[0] === "correcciones") return viewCorrections();
    if (parts[0] === "certificate") return viewCertificate();
    if (parts[0] === "sync" || parts[0] === "ajustes") return viewSync();
    viewHome();
  }

  /* ---------- Barra lateral ---------- */
  if (window.Sidebar) {
    Sidebar.init({
      modules: function () { return MODULES; },
      stats: moduleStats,
      overall: overallPct,
      lessonDone: isLessonDone,
      quiz: quizResult,
      essay: essayData,
      // El módulo 9 lleva el título del cuaderno en HTML: la barra lo quiere plano
      plainTitle: function (mod) {
        return String(mod.title).replace(/<[^>]+>/g, "");
      },
      lessonLabel: function (mod, l, li) {
        return (l.n ? "Sesión " + num2(l.n) : "Lección " + (li + 1)) + ": " + l.title;
      },
      essayLabel: function (l, li) {
        return "Redacción " + (li + 1) + ": " + l.essay.title;
      }
    });
  }

  function notifySidebar() {
    if (!window.Sidebar) return;
    var h = location.hash.replace(/^#\/?/, "");
    var p = h.split("/").filter(Boolean);
    var view = "home", mid = "", lid = "";
    if (p[0] === "module") { view = "module"; mid = p[1] || ""; }
    else if (p[0] === "lesson") { view = "lesson"; mid = p[1] || ""; lid = p[2] || ""; }
    else if (p[0] === "quiz") { view = "quiz"; mid = p[1] || ""; lid = p[2] || ""; }
    else if (p[0] === "redaccion" || p[0] === "essay") { view = "essay"; mid = p[1] || ""; lid = p[2] || ""; }
    else if (p[0] === "flashcards") { view = "flashcards"; mid = p[1] || ""; }
    else if (p[0] === "certificate" || p[0] === "sync" || p[0] === "ajustes") view = "other";
    Sidebar.update({ view: view, mid: mid, lid: lid });
  }

  document.body.classList.toggle("is-teacher", isTeacher());

  window.addEventListener("hashchange", route);
  document.getElementById("brand").addEventListener("click", function () { location.hash = "#/"; });

  // El engranaje: caja de luz fuera del móvil, navegación normal dentro de él.
  (function () {
    var g = document.getElementById("gear-btn");
    if (!g) return;
    g.setAttribute("aria-expanded", "false");
    g.addEventListener("click", function (e) {
      if (!settingsFitsBox()) return;                  // móvil: deja ir a #/ajustes
      e.preventDefault();
      if (settingsBox) { closeSettingsBox(); return; }
      // Si ya estás en la página de Ajustes, el engranaje sale de ella.
      if (isSettingsRoute()) { location.hash = "#/"; return; }
      openSettingsBox();
    });
    // Navegar (p. ej. "Ir a las redacciones") cierra la caja.
    window.addEventListener("hashchange", closeSettingsBox);
    // Si la ventana se estrecha hasta el móvil, la caja deja de tener sitio.
    window.addEventListener("resize", function () {
      if (settingsBox && !settingsFitsBox()) closeSettingsBox();
    });
  })();

  route();

  // Sincronización opcional (GitHub Gist) — reflejar estado en la barra y arrancar.
  if (window.Sync) {
    var gear = document.getElementById("gear-btn");
    Sync.onState(function (st) {
      if (!gear) return;
      gear.classList.remove("ok", "syncing", "err");
      if (!Sync.isConfigured()) { gear.title = "Ajustes · sincronización desactivada"; return; }
      if (st.status === "syncing") { gear.classList.add("syncing"); gear.title = "Sincronizando…"; }
      else if (st.status === "error") { gear.classList.add("err"); gear.title = "Ajustes · " + st.detail; }
      else { gear.classList.add("ok"); gear.title = "Ajustes · " + (st.detail || "sincronizado"); }
    });
    if (Sync.isConfigured()) pullAndMerge();
    window.addEventListener("focus", function () {
      if (Sync.isConfigured() && !Sync.getState().busy) pullAndMerge();
    });
    // Al irse ya no hay más oportunidades: lo que quede en el acelerador sale
    // ahora. `pagehide` es el que sí llega en iOS, donde `beforeunload` no.
    var despedida = function () { if (window.Sync) Sync.flushPush(); };
    window.addEventListener("pagehide", despedida);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") despedida();
    });
  }
})();
