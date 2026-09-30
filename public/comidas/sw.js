/**
 * Para que la app abra sin cobertura (en el súper, en el metro).
 *
 * Cómo funciona: sirve lo que ya tiene guardado —así abre al instante y sin datos—
 * y mientras tanto se baja la versión nueva en segundo plano. O sea: los cambios que
 * hagas en `recetas.js` se ven la siguiente vez que abras la app, no al momento.
 */
var CACHE = "comidas-v12";
var ARCHIVOS = ["./", "./index.html", "./recetas.js", "./logo.png", "./icono.png", "./manifest.json"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ARCHIVOS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (claves) {
      return Promise.all(claves.map(function (k) { return k === CACHE ? null : caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(e.request).then(function (guardado) {
        var red = fetch(e.request).then(function (res) {
          if (res && (res.status === 200 || res.type === "opaque")) c.put(e.request, res.clone());
          return res;
        }).catch(function () { return guardado; });
        return guardado || red;
      });
    })
  );
});
