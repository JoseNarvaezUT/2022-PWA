self.addEventListener('install', (event) => {
  console.log('SW: Instalado');
  const promiseCache = caches.open('cache-v1.1').then((cache) => {
    return cache.addAll([
      '/',
      '/index.html',
      '/css/style.css',
      '/js/app.js',
      '/images/cash.png',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
    ]);
  });

  event.waitUntil(promiseCache);
});

// Only cache
self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});
