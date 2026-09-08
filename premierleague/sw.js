/* Premier Lig: this worker owns only ./premierleague/. */
const CACHE_PREFIX = 'premierleague-sim-';
const CACHE = CACHE_PREFIX + 'v1';
const ASSETS = ['./index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if(event.request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const response = await fetch(event.request);
      if(response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch(error) {
      const cached = await cache.match(event.request);
      if(cached) return cached;
      if(event.request.mode === 'navigate') {
        const page = await cache.match('./index.html');
        if(page) return page;
      }
      return Response.error();
    }
  }));
});
