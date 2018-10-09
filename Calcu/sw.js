self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('calcu-app')
        .then(function(cache) {
          cache.addAll([
            '/index.html',
            'manifest.json'
          ])
        })
    );
    
    // return self.clients.claim();
  });

self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if (response) {
                // The request is in the cache 
                return response;
            } else {
                // We need to go to the network  
                return fetch(event.request);
            }
        })
    );
});
