// Registro del service worker (contexto seguro: https o localhost; en file:// se omite).
// En la app de escritorio no hace falta: los archivos ya viajan dentro del
// binario, y una caché vieja del worker podría servir una versión anterior.
if ("serviceWorker" in navigator && window.isSecureContext &&
    !document.documentElement.classList.contains("is-tauri")) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}
