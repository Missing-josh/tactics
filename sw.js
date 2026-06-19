const CACHE_NAME = 'tactics-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Install files into the phone's storage
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve files from local storage when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});