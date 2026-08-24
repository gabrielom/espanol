// Registro del service worker (contexto seguro: https o localhost; en file:// se omite).
//
// También se registra en la app de escritorio: desde que la ventana carga el
// sitio publicado en vez de archivos incrustados, el worker ES lo que la hace
// funcionar sin internet.
if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
