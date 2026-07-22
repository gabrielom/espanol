/* Service worker — offline + installable PWA.
   - Same-origin GET assets: stale-while-revalidate (fast, self-updating).
   - Navigations: network-first, fall back to cached shell offline.
   - Cross-origin (e.g. api.github.com sync) and non-GET: never intercepted.
   Bump CACHE to force-drop old caches on the next activate. */
var CACHE = "espanol-cache-v1";
var SHELL = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/sync.js",
  "./js/course.js",
  "./js/app.js",
  "./js/modules/module1.js",
  "./js/modules/module2.js",
  "./js/modules/module3.js",
  "./js/modules/module4.js",
  "./js/modules/module5.js",
  "./js/modules/module6.js",
  "./js/modules/module7.js",
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

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (r) {
        var copy = r.clone();
        caches.open(CACHE).then(function (c) { c.put("./", copy); });
        return r;
      }).catch(function () {
        return caches.match("./index.html").then(function (r) { return r || caches.match("./"); });
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
