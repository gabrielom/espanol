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
})();
