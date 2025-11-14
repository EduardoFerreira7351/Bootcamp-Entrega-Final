const CACHE = 'bootcamp-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/app.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
