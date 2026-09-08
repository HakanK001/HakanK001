/* Süper Lig Simülatörü — çevrimdışı önbellek */
const CACHE = 'superlig-sim-v1';
const ASSETS = ['./superlig.html', './superlig-manifest.webmanifest', './superlig-icon.svg'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k.startsWith('superlig-sim-') && k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  if(new URL(e.request.url).pathname.startsWith(new URL('./premierleague/', self.registration.scope).pathname)) return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      const fetched = fetch(e.request).then(function(res){
        if(res && res.ok && new URL(e.request.url).origin === self.location.origin){
          const copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){ return cached; });
      return cached || fetched;
    })
  );
});
