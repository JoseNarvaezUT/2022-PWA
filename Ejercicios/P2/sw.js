
self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
})

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado!:D');
});

self.addEventListener('fetch',(event)=>{
    console.log(event.request.url);
    if(event.request.url.includes('jpg')){
        event.respondWith(fetch('img/cat.jpg'))
    }
    event.respondWith(fetch(event.request))
});