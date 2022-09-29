if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {
  // lo abre, si no existe lo crea
  caches.open('cache1');
  caches.open('cache2');

  caches.has('cache3').then((resp) => {
    console.log(resp);
  });

  caches.delete('cache1');

  caches.open('cache-v1').then((cache) => {
    // cache.add('/index.html')
    // cache.add('/css/style.css')
    // cache.add('/images/animals.jpg')
    // esto es un promesa tambien
    cache
      .addAll(['/index.html', '/css/style.css', '/images/animals.jpg'])
      .then(() => {
        cache.delete('/css/style.css');
      });

    cache.match('/index.html').then((item)=>{
        item.text().then(console.log)
    })
  });
}
