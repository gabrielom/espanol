/* Service worker — offline + installable PWA.
   Es también lo que hace funcionar la app de escritorio sin internet: la
   ventana de Tauri carga el sitio publicado, no archivos incrustados.

   - Navegación: primero la caché, y de fondo se revalida. Arranca al instante
     y sin red; lo que se descargue queda listo para el siguiente arranque.
   - Resto de GET del mismo origen: igual, stale-while-revalidate. GitHub Pages
     manda ETag, así que revalidar un archivo que no cambió no descarga nada
     (responde 304 y se conserva lo cacheado).
   - version.json: NUNCA se toca. Es la única forma de preguntarle a la red qué
     versión hay publicada, así que tiene que saltarse la caché siempre.
   - Origen cruzado (api.github.com para el gist) y no-GET: nunca se interceptan.
   Subir CACHE tira las cachés viejas en el siguiente activate. */
var CACHE = "espanol-cache-v9";
var SHELL = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/platform.js",
  "./js/sw-register.js",
  "./js/version.js",
  "./js/sync.js",
  "./js/exercises.js",
  "./js/sidebar.js",
  "./js/course.js",
  "./js/app.js",
  "./js/modules/module1.js",
  "./js/modules/module2.js",
  "./js/modules/module3.js",
  "./js/modules/module4.js",
  "./js/modules/module5.js",
  "./js/modules/module6.js",
  "./js/modules/module7.js",
  "./js/modules/module8.js",
  "./js/modules/module9.js",
  "./fonts/jetbrains-mono-latin.woff2",
  "./fonts/jetbrains-mono-latin-ext.woff2",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // Don't fail install if a single asset 404s.
      return Promise.all(SHELL.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // Only handle same-origin GET; let sync (api.github.com) and non-GET pass.
  if (req.method !== "GET" || url.origin !== self.location.origin) return;

  // El sello de la versión publicada: siempre a la red, nunca a la caché.
  if (/\/version\.json$/.test(url.pathname)) return;

  if (req.mode === "navigate") {
    e.respondWith(
      caches.open(CACHE).then(function (c) {
        return Promise.all([c.match("./index.html"), c.match("./")]).then(function (hits) {
          var cached = hits[0] || hits[1];
          var network = fetch(req).then(function (r) {
            if (r && r.ok) c.put("./index.html", r.clone());
            return r;
          }).catch(function () { return cached; });
          // Con copia guardada se responde ya y la red actualiza por detrás.
          return cached || network;
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (cached) {
        var network = fetch(req).then(function (r) {
          if (r && r.ok) c.put(req, r.clone());
          return r;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
