/* ============================================================
   Barra lateral del curso ("Contenido del curso").
     · Expandida (268px) / colapsada (56px) — el ancho se arrastra al navegar
     · Se colapsa al LLEGAR a la página de módulo (desde Inicio o volviendo
       con «atrás»), pero no si la abriste desde la propia barra
     · iPad: cajón temporal sobre el contenido, con velo
     · iPhone: sin barra lateral
   Salvo esa llegada, solo « y » cambian el ancho, y esa elección se guarda.
   Todo (%, marcas, notas, "estás aquí") sale del progreso real.
   ============================================================ */
(function () {
  "use strict";

  var KEY_EXPANDED = "sidebar:expanded";
  var KEY_SCROLL = "sidebar:scroll";

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

  /* ---------- Qué módulo va desplegado ----------
     Manda dónde estás, no lo que abriste hace tres días. Antes era una
     preferencia guardada para siempre, y por eso podías estar en el módulo 4
     con el 3 abierto en la lista: el estado de ayer ganándole al de ahora.

     Se recalcula en cada navegación. Dentro de algo de un módulo —lección,
     evaluación, redacción, tarjetas— se abre ese y solo ese. En la propia
     página del módulo, ninguno: el índice ya lo tienes delante y repetirlo al
     lado no añade nada.

     A partir de ahí manda el ±: lo que abras o cierres a mano se respeta tal
     cual hasta la siguiente navegación, que vuelve a poner el de donde estés.
     Por eso tampoco se guarda entre sesiones — al recargar vuelves a la misma
     ruta, así que sale lo mismo, y sin arrastrar nada viejo. */
  var open = {};

  function openPorDefecto() {
    var o = {};
    if (ctx.mid && ctx.view !== "module") o[ctx.mid] = true;
    return o;
  }

  /* ---------- Posición de la lista ----------
     Cada render rehace el HTML de la barra, y con él se perdía el scroll:
     cambiar de lección te devolvía al principio de la lista. Se anota
     mientras el usuario hace scroll y se repone después de cada render.
     Se guarda por modo (lista expandida y raíl tienen alturas muy distintas)
     y en sessionStorage, para que un recargado no la mueva tampoco.

     Con una excepción: si al llegar a una lección o evaluación su fila cae
     fuera de la parte visible, la barra se desplaza para enseñártela — no
     tiene sentido que marque «estás aquí» donde no lo ves. Solo entonces:
     si ya se ve, no se mueve ni un píxel. */
  var HERE_PAD = 8;   // margen para no dejarla pegada al borde
  var scrollAt = { list: 0, rail: 0 };
  // «Al llegar» es literal: solo la navegación lo pide. Antes lo hacía cada
  // repintado, y como redimensionar repinta, arrastrar el borde de la ventana
  // te tiraba la lista hasta la lección actual — y encima guardaba esa
  // posición encima de la tuya, así que no había vuelta atrás.
  var revealPending = false;
  try {
    var saved = JSON.parse(sessionStorage.getItem(KEY_SCROLL));
    if (saved && typeof saved === "object") {
      scrollAt.list = +saved.list || 0;
      scrollAt.rail = +saved.rail || 0;
    }
  } catch (e) {}

  // Deja a la vista la fila de «estás aquí», si la hay y no se ve ya.
  // Se mide con rectángulos y no con offsetTop: la fila cuelga de .sb-items >
  // .sb-mod, y offsetTop dependería de quién sea el offsetParent.
  function revealHere(box) {
    var here = box.querySelector(".sb-row.here, .sb-railitem.current");
    if (!here) return;
    var r = here.getBoundingClientRect();
    var b = box.getBoundingClientRect();
    var visible = r.top >= b.top + HERE_PAD && r.bottom <= b.bottom - HERE_PAD;
    if (visible) return;
    // Centrada: al venir de otro módulo puede caer lejos, y así se ve con
    // algo de contexto por arriba y por abajo.
    box.scrollTop += (r.top - b.top) - (b.height - r.height) / 2;
  }

  function rememberScroll(el) {
    var box = el.querySelector(".sb-list") || el.querySelector(".sb-rail");
    if (!box) return;
    var key = box.classList.contains("sb-list") ? "list" : "rail";
    // El navegador recorta solo si la lista es más corta que la posición.
    box.scrollTop = scrollAt[key];
    if (revealPending) { revealHere(box); revealPending = false; }
    // Lo que haya quedado (ya recortado por el navegador) es la nueva posición.
    scrollAt[key] = box.scrollTop;
    try { sessionStorage.setItem(KEY_SCROLL, JSON.stringify(scrollAt)); } catch (e) {}

    box.addEventListener("scroll", function () {
      scrollAt[key] = box.scrollTop;
      try { sessionStorage.setItem(KEY_SCROLL, JSON.stringify(scrollAt)); } catch (e) {}
    });
  }

  /* El cajón es para el iPad, y el ancho por sí solo no distingue un iPad de
     una ventana de escritorio encogida. Sin `hover: none`, bajar de 1024px
     arrastrando el borde te escondía la barra detrás de una hamburguesa, sin
     manera de volver a fijarla. Con ratón no hace falta ningún cajón: la barra
     se estrecha con «, que es una decisión tuya y se guarda. */
  function isTouchTablet() {
    return window.matchMedia("(hover: none) and (max-width: 1024px) and (min-width: 641px)").matches;
  }
  function isPhone() {
    return window.matchMedia("(max-width: 640px)").matches;
  }

  // Lo único de la barra que depende del tamaño de la ventana. El HTML no: por
  // eso redimensionar solo tiene que repintar cuando esto cambia.
  function mode() {
    if (!ctx.view || ctx.view === "home" || isPhone()) return "oculta";
    if (isTouchTablet()) return "cajon";
    return expanded() ? "ancha" : "estrecha";
  }
  var lastMode = null;

  /* ---------- Ancha o estrecha ----------
     El ancho es tuyo y de nadie más: lo deciden « y », se guarda, y navegar no
     lo toca. Si la abres, sigue abierta cuando vuelvas a la página del módulo;
     si la cierras, sigue cerrada. Antes la llegada a un módulo la cerraba sola
     —y había que marcar `cameFromSidebar` para que no se cerrase en la cara de
     quien acababa de usarla—, lo que dejaba el ancho a merced de por dónde
     hubieras entrado.

     De fábrica, estrecha: el raíl deja la pantalla entera para lo que estés
     leyendo y el índice sigue a un botón de distancia.

     `wide` es el ancho de esta sesión; `null` significa «aún sin decidir», y
     entonces manda tu preferencia guardada. */
  var wide = null;

  function expanded() {
    if (wide !== null) return wide;
    var p = pref();
    return p === null ? false : p;
  }
  // Pulsar « o » decide, y esa decisión sobrevive al recargado.
  function setExpanded(v) {
    wide = v;
    setPref(v);
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

    var h = '<div class="sb-head">' +
      '<span class="sb-title">Contenido del curso</span>' +
      '<button type="button" class="sb-btn" data-sb="collapse" aria-label="Contraer">«</button>' +
      '</div>';

    h += '<div class="sb-list">';
    mods.forEach(function (mod, mi) {
      var st = api.stats(mod);
      var isOpen = !!open[mod.id];
      h += '<div class="sb-mod' + (isOpen ? ' open' : '') + '">';
      // El título lleva a la página del módulo; el % y el +/− abren y cierran
      // la lista. Son dos controles distintos, y por eso el botón va FUERA del
      // enlace: un <button> dentro de un <a> no es HTML válido.
      h += '<div class="sb-modrow">' +
        '<a class="sb-modmain" href="#/module/' + mod.id + '">' +
          '<span class="sb-num">' + num2(mi + 1) + '</span>' +
          '<span class="sb-modtitle">' + esc(api.plainTitle(mod)) + '</span>' +
        '</a>' +
        '<button type="button" class="sb-modmeta" data-sb="toggle" data-mid="' + mod.id + '"' +
          ' aria-expanded="' + (isOpen ? 'true' : 'false') + '"' +
          ' aria-label="' + (isOpen ? 'Cerrar' : 'Abrir') + ' ' + esc(api.plainTitle(mod)) + '">' +
          '<span class="sb-pct">' + st.pct + '%</span>' +
          '<span class="sb-caret">' + (isOpen ? '−' : '+') + '</span>' +
        '</button>' +
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

    lastMode = mode();
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
    rememberScroll(el);
  }

  /* ---------- Eventos ---------- */
  function onClick(e) {
    var t = e.target.closest("[data-sb]");
    if (!t) return;
    var act = t.dataset.sb;
    if (act === "collapse") { setExpanded(false); render(); }
    else if (act === "expand") { setExpanded(true); render(); }
    else if (act === "close") { drawerOpen = false; render(); }
    else if (act === "open") { drawerOpen = true; render(); }
    else if (act === "toggle") {
      // El ± manda sobre lo calculado, y sin más ceremonia: abre o cierra ese
      // módulo y deja el resto como esté. Dura hasta la siguiente navegación.
      open[t.dataset.mid] = !open[t.dataset.mid];
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
    // Arrastrar el borde de una ventana dispara cientos de `resize`. Rehacer
    // en cada uno los nueve módulos enteros era tirar y reponer toda la barra
    // por fotograma, y cada reposición manoseaba la posición de la lista. El
    // HTML no depende del ancho: basta repintar cuando cambia el modo.
    window.addEventListener("resize", function () {
      measureBar();
      if (mode() !== lastMode) render();
    });
    measureBar();
  }

  function update(next) {
    ctx = next;
    drawerOpen = false;      // cada navegación cierra el cajón
    revealPending = true;    // has llegado a algo: enséñame dónde estoy
    open = openPorDefecto(); // y el módulo desplegado es el de aquí, no el de antes
    // El ancho NO se toca: es tu decisión y viaja contigo.
    measureBar();
    render();
  }

  window.Sidebar = { init: init, update: update };
})();
