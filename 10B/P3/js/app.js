
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}

if(window.caches){
    console.log('Tienes soporte para cache :D ');
    caches.open('cache1');
    caches.open('cache2');
    caches.open('cache3');
    caches.open('cache4');

    caches.keys().then((keys)=>{
        console.log(keys);
    });

    caches.has('cache2').then((resp)=>{
        console.log('has',resp);
    })

    caches.delete('cache4');


    caches.open('cache1').then((cache)=>{
        // cache.add('/index.html')
        // cache.add('/css/style.css')
        // cache.add('/js/app.js')
        // cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css')

        cache.addAll(
            [
                '/index.html',
                '/css/style.css',
                '/js/app.js',
                '/images/cash.png'
            ]
        ).then(()=>{
            cache.delete('/css/style.css');
        });

        cache.match('/index.html').then((resp)=>{
            resp.text().then((text)=>{
                console.log(text);
            })
        })
        
    })
}