// Marca la plataforma antes del render. Dos sistemas dibujan sus propios
// controles de ventana ENCIMA de la app y hay que dejarles sitio:
//   · macOS + Tauri  → semáforos (titleBarStyle: "Overlay")
//   · iPadOS instalada en ventana (Stage Manager) → píldora de controles
// En el navegador y en Windows/Linux no se reserva nada.
//
// Vive en un archivo aparte, no en un <script> dentro del HTML: la CSP de la
// app de escritorio lleva un nonce, y con un nonce presente el navegador
// ignora 'unsafe-inline'. Un script en línea aquí no llegaría a ejecutarse.
(function () {
  var ua = navigator.userAgent || "";
  var cls = document.documentElement.classList;

  var isTauri = !!(window.__TAURI__ || window.__TAURI_INTERNALS__ || ua.indexOf("Tauri") !== -1);
  var isTouch = /iPhone|iPad|iPod|Android/.test(ua) || navigator.maxTouchPoints > 1;
  var isMac = /Mac/.test(navigator.platform || "") || /Mac OS X/.test(ua);
  // iPadOS 13+ se anuncia como "Macintosh": se distingue por el táctil.
  var isIPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var standalone = window.navigator.standalone === true ||
    (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);

  if (isTauri) cls.add("is-tauri");
  if (isTauri && isMac && !isTouch) cls.add("is-mac-overlay");
  if (standalone) cls.add("is-standalone");
  // Instalada en iPad: iPadOS superpone sus controles arriba a la izquierda.
  if (isIPad && standalone) cls.add("is-ipad-window");

  /* ---------- Tema ----------
     Tres estados: "auto" (lo que diga el sistema, y no marca nada en <html>),
     "claro" y "oscuro". Se aplica AQUÍ, antes del primer pintado: hacerlo más
     tarde enseñaría un fogonazo blanco antes de ponerse oscuro.

     La barra de estado del sistema —la del móvil— no lee CSS: hay que
     escribirle el color a mano en <meta name="theme-color">, y volver a
     escribirlo cuando cambie el tema o cuando cambie el del sistema. */
  var TEMA_KEY = "espanol-tema";
  var COLOR = { claro: "#ffffff", oscuro: "#1a1a19" };

  function leer() {
    try {
      var v = localStorage.getItem(TEMA_KEY);
      return (v === "claro" || v === "oscuro") ? v : "auto";
    } catch (e) { return "auto"; }
  }
  function delSistema() {
    return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "oscuro" : "claro";
  }
  function resuelto() {
    var t = leer();
    return t === "auto" ? delSistema() : t;
  }
  function pintar() {
    var t = leer();
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t === "oscuro" ? "dark" : "light");
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", COLOR[resuelto()]);
  }
  function poner(t) {
    try {
      if (t === "auto") localStorage.removeItem(TEMA_KEY);
      else localStorage.setItem(TEMA_KEY, t);
    } catch (e) {}
    pintar();
  }

  pintar();
  // En "auto" hay que seguir al sistema mientras la app está abierta.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var alCambiar = function () { if (leer() === "auto") pintar(); };
    if (mq.addEventListener) mq.addEventListener("change", alCambiar);
    else if (mq.addListener) mq.addListener(alCambiar);
  }

  window.Tema = { get: leer, set: poner, resuelto: resuelto };
})();
