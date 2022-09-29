
self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Instalaciones finalizadas');
            resolve('ok')
        },3000);
    });
    event.waitUntil(myPromise)
});

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado');
})


self.addEventListener('fetch',(event)=>{

    console.log(event.request.url);
   const resp1 =  fetch(event.request.url).then((resp)=>{
        if(resp.ok){
           return resp;
        }else{;
            return fetch('images/imagen2.jpg');
        }
    }).catch((err)=>{
        console.log('SW: err'+err);
    })
    
    event.respondWith(resp1);


    // if(event.request.url.includes('style.css')){
    //     const respuesta  = new Response(
    //         `body{
    //             color: red;
    //             background-color: #000;
    //         }`,
    //         {
    //             headers:{
    //                 'Content-Type':'text/css'
    //             }
    //         }
    //     );
    //     event.respondWith(respuesta)
    // }

})

