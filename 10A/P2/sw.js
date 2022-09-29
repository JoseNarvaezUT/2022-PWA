self.addEventListener('install', (event) => {
  console.log('SW: install');
});

self.addEventListener('fetch', (event) => {
    const respuesta = fetch(event.request.url)
                        .then((resp)=>{
                          console.log(resp);
                          if(resp.ok){
                            return resp;
                          }else{
                            return fetch('images/animals.jpg')
                          }
                        })
                        .catch((err)=>{
                          console.log('SW error:',err);
                        })

    
    event.respondWith(respuesta);

  // if (event.request.url.includes('style.css')) {
  //   console.log(event.request.url);
  //   const resp = new Response(
  //     `
  //           body {
  //               color:red;
  //               background-color: #000;
  //           }
  //           `,
  //     {
  //       headers: {
  //         'Content-Type': 'text/css',
  //       },
  //     }
  //   );
  //   event.respondWith(resp);
  // }
});
