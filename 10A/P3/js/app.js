
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}

// if(window.caches){
//     console.log('Hey soportas caches');
//     // Obtiene un chace y sino existe lo crea
//     caches.open('cache-v1');
//     caches.open('cache-v2');

//     caches.keys().then((keys)=>{
//         console.log(keys);
//     })

//     caches.has('cache-v1').then((resp)=>{
//         console.log(resp);
//     })

//     caches.open('cache-v1').then((cache)=>{
//         // cache.add('/index.html');
//         // cache.add('/images/cash.png');
//         // cache.add('/css/style.css');
//         cache.addAll(
//             [
//                 '/index.html',
//                 '/images/cash.png',
//                 '/css/style.css'
//             ]
//         ).then((e)=>{
//             cache.delete('/images/cash.png')
//         })

//         cache.match('/index.html').then((resp)=>{
//             resp.text().then((text)=>{
//                 console.log('match',text);
//             })
            
//         })
        
//     })

//     caches.delete('cache-v3');

// }