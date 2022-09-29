
self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});
self.addEventListener('activate',(event)=>{
    console.log('SW: Activado');
});
self.addEventListener('fetch',(event)=>{
    const resp = fetch(event.request)
    .catch(()=>{
        const respGeneric = new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PWA Caches</title>
        </head>
        <body>
           <h1> No tienes internet y es requerido para trabajar u.U</h1>
        </body>
        </html>
        `,{
            headers:{
                'Content-Type':'text/html'
            }
        });
        return respGeneric;
    })
    event.respondWith(resp)
})