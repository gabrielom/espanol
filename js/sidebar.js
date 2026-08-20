/* ============================================================
   Barra lateral del curso ("Contenido del curso").
     · Expandida (268px) — por defecto dentro de lección / evaluación /
       redacción / tarjetas
     · Colapsada (56px)  — por defecto en la página de módulo
     · iPad: cajón temporal sobre el contenido, con velo
     · iPhone: sin barra lateral
   El estado manual se guarda y manda sobre el valor por defecto.
   Todo (%, marcas, notas, "estás aquí") sale del progreso real.
   ============================================================ */
(function () {
  "use strict";

  var KEY_EXPANDED = "sidebar:expanded";
  var KEY_OPEN = "sidebar:open-modules";

  var api = null;          // funciones de estado que inyecta app.js
  var ctx = { view: "", mid: "", lid: "" };
  var drawerOpen = false;

  function pref() {
    try {
      var v = localStorage.getItem(KEY_EXPANDED);
      return v === null ? null : v === "1";
    } catch (e) { return null; }
  }
  function setPref(v) {
    try { localStorage.setItem(KEY_EXPANDED, v ? "1" : "0"); } catch (e) {}
  }
  function openSet() {
    try { return JSON.parse(localStorage.getItem(KEY_OPEN)) || {}; } catch (e) { return {}; }
  }
  function saveOpen(o) {
    try { localStorage.setItem(KEY_OPEN, JSON.stringify(o)); } catch (e) {}
  }

  function isTouchTablet() {
    return window.matchMedia("(max-width: 1024px) and (min-width: 641px)").matches;
  }
  function isPhone() {
    return window.matchMedia("(max-width: 640px)").matches;
  }

  // Por nivel de ruta: el módulo arranca colapsado; dentro de un ítem, expandida.
  function defaultExpanded() {
    return ctx.view !== "module";
  }
  function expanded() {
    var p = pref();
    return p === null ? defaultExpanded() : p;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function num2(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Marcas de estado ---------- */
  function lessonMark(done, current) {
    if (done) return '<span class="sb-dot done">✓</span>';
    if (current) return '<span class="sb-dot current"></span>';
    return '<span class="sb-dot"></span>';
  }
  function evalMark(passed, current) {
    if (passed) return '<span class="sb-dot eval passed">✓</span>';
    if (current) return '<span class="sb-dot eval current"></span>';
    return '<span class="sb-dot eval"></span>';
  }

  /* ---------- Raíl expandido ---------- */
  function expandedHTML() {
    var mods = api.modules();
    var open = openSet();
    if (ctx.mid && open[ctx.mid] === undefined) open[ctx.mid] = true;

    var h = '<div class="sb-head">' +
      '<span class="sb-title">Contenido del curso</span>' +
      '<button type="button" class="sb-btn" data-sb="collapse" aria-label="Contraer">«</button>' +
      '</div>';

    h += '<div class="sb-list">';
    mods.forEach(function (mod, mi) {
      var st = api.stats(mod);
      var isOpen = !!open[mod.id];
      h += '<div class="sb-mod' + (isOpen ? ' open' : '') + '">';
      h += '<div class="sb-modrow" data-sb="toggle" data-mid="' + mod.id + '">' +
        '<span class="sb-num">' + num2(mi + 1) + '</span>' +
        '<span class="sb-modtitle">' + esc(api.plainTitle(mod)) + '</span>' +
        '<span class="sb-modmeta"><span class="sb-pct">' + st.pct + '%</span>' +
        '<span class="sb-caret">' + (isOpen ? '−' : '+') + '</span></span>' +
        '</div>';

      if (isOpen) {
        h += '<div class="sb-items">';
        mod.lessons.forEach(function (l, li) {
          var done = api.lessonDone(mod.id, l.id);
          var here = ctx.view === "lesson" && ctx.mid === mod.id && ctx.lid === l.id;
          h += '<a class="sb-row' + (here ? ' here' : '') + '" href="#/lesson/' + mod.id + '/' + l.id + '">' +
            '<span class="sb-bar"></span>' +
            lessonMark(done, here) +
            '<span class="sb-label">' + esc(api.lessonLabel(mod, l, li)) + '</span>' +
            '<span class="sb-meta">' + esc(l.duration || "") + '</span>' +
            '</a>';

          if (l.quiz) {
            var q = api.quiz(mod.id, l.id);
            var hereQ = ctx.view === "quiz" && ctx.mid === mod.id && ctx.lid === l.id;
            h += '<a class="sb-row sub' + (hereQ ? ' here' : '') + '" href="#/quiz/' + mod.id + '/' + l.id + '">' +
              '<span class="sb-bar"></span>' +
              evalMark(!!(q && q.passed), hereQ) +
              '<span class="sb-label">' + esc('Evaluación ' + (li + 1) + ': ' + l.title) + '</span>' +
              '<span class="sb-meta">' + (q ? q.score + '/' + q.total : '—') + '</span>' +
              '</a>';
          }
          if (l.essay) {
            var e = api.essay(mod.id, l.id);
            var hereE = ctx.view === "essay" && ctx.mid === mod.id && ctx.lid === l.id;
            h += '<a class="sb-row sub' + (hereE ? ' here' : '') + '" href="#/redaccion/' + mod.id + '/' + l.id + '">' +
              '<span class="sb-bar"></span>' +
              evalMark(!!(e && e.done), hereE) +
              '<span class="sb-label">' + esc(api.essayLabel(l, li)) + '</span>' +
              '<span class="sb-meta">' + (e && e.words ? e.words + 'p' : '—') + '</span>' +
              '</a>';
          }
        });
        if (mod.flashcards && mod.flashcards.length) {
          var hereF = ctx.view === "flashcards" && ctx.mid === mod.id;
          h += '<a class="sb-row sub' + (hereF ? ' here' : '') + '" href="#/flashcards/' + mod.id + '">' +
            '<span class="sb-bar"></span>' +
            '<span class="sb-sq"></span>' +
            '<span class="sb-label">Tarjetas de repaso</span>' +
            '<span class="sb-meta">' + mod.flashcards.length + '</span>' +
            '</a>';
        }
        h += '</div>';
      }
      h += '</div>';
    });
    h += '</div>';

    var pct = api.overall();
    h += '<div class="sb-foot">' +
      '<div class="sb-footrow"><span>Curso</span><span class="sb-footpct">' + pct + '%</span></div>' +
      '<div class="sb-track"><i style="width:' + pct + '%"></i></div>' +
      '</div>';
    return h;
  }

  /* ---------- Raíl colapsado ---------- */
  function collapsedHTML() {
    var h = '<button type="button" class="sb-btn sb-expand" data-sb="expand" aria-label="Expandir">»</button>';
    h += '<div class="sb-rail">';
    api.modules().forEach(function (mod, mi) {
      var st = api.stats(mod);
      var current = ctx.mid === mod.id;
      h += '<a class="sb-railitem' + (current ? ' current' : '') + '" href="#/module/' + mod.id + '" title="' + esc(api.plainTitle(mod)) + '">' +
        '<span class="sb-bar"></span>' +
        '<span class="sb-railnum">' + num2(mi + 1) +
        (st.complete ? '<i class="sb-raildot"></i>' : '') +
        '</span></a>';
    });
    h += '</div>';
    return h;
  }

  /* ---------- Render ---------- */
  function render() {
    var el = document.getElementById("sidebar");
    var scrim = document.getElementById("scrim");
    var burger = document.getElementById("burger-btn");
    if (!el) return;

    var show = ctx.view && ctx.view !== "home" && !isPhone();
    document.body.classList.toggle("has-sidebar", !!show);
    if (burger) burger.hidden = !(show && isTouchTablet());

    if (!show) {
      el.hidden = true;
      if (scrim) scrim.hidden = true;
      document.body.classList.remove("sb-expanded", "sb-collapsed", "sb-drawer-open");
      return;
    }

    el.hidden = false;
    var isDrawer = isTouchTablet();
    var exp = isDrawer ? true : expanded();

    document.body.classList.toggle("sb-expanded", exp && !isDrawer);
    document.body.classList.toggle("sb-collapsed", !exp && !isDrawer);
    document.body.classList.toggle("sb-drawer", isDrawer);
    document.body.classList.toggle("sb-drawer-open", isDrawer && drawerOpen);
    if (scrim) scrim.hidden = !isDrawer;

    if (isDrawer) {
      el.innerHTML = '<div class="sb-head">' +
        '<span class="sb-title">Contenido del curso</span>' +
        '<button type="button" class="sb-btn sb-close" data-sb="close" aria-label="Cerrar">✕</button>' +
        '</div>' + expandedHTML().replace(/^<div class="sb-head">[\s\S]*?<\/div>/, '');
    } else {
      el.innerHTML = exp ? expandedHTML() : collapsedHTML();
    }
  }

  /* ---------- Eventos ---------- */
  function onClick(e) {
    var t = e.target.closest("[data-sb]");
    if (!t) return;
    var act = t.dataset.sb;
    if (act === "collapse") { setPref(false); render(); }
    else if (act === "expand") { setPref(true); render(); }
    else if (act === "close") { drawerOpen = false; render(); }
    else if (act === "open") { drawerOpen = true; render(); }
    else if (act === "toggle") {
      var o = openSet();
      var mid = t.dataset.mid;
      if (ctx.mid && o[ctx.mid] === undefined) o[ctx.mid] = true;
      o[mid] = !o[mid];
      saveOpen(o);
      render();
    }
  }

  function measureBar() {
    var bar = document.querySelector(".appbar");
    if (bar) document.documentElement.style.setProperty("--appbar-h", bar.offsetHeight + "px");
  }

  function init(provider) {
    api = provider;
    document.addEventListener("click", onClick);
    var scrim = document.getElementById("scrim");
    if (scrim) scrim.addEventListener("click", function () { drawerOpen = false; render(); });
    window.addEventListener("resize", function () { measureBar(); render(); });
    measureBar();
  }

  function update(next) {
    ctx = next;
    drawerOpen = false;      // cada navegación cierra el cajón
    measureBar();
    render();
  }

  window.Sidebar = { init: init, update: update };
})();
