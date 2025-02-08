const CACHE_NAME = 'ai-prompts-v1';
const urlsToCache = [
    '/ai-prompts/',
    '/ai-prompts/index.html',
    '/ai-prompts/css/reset.css',
    '/ai-prompts/css/style.css',
    '/ai-prompts/css/animations.css',
    '/ai-prompts/js/main.js',
    '/ai-prompts/manifest.json',
    '/ai-prompts/data/categories.json',
    '/ai-prompts/data/prompts.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.origin === self.origin) {
        url.pathname = '/ai-prompts' + url.pathname;
    }
    
    event.respondWith(
        caches.match(url)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(url, responseToCache);
                            });
                        return response;
                    });
            })
    );
}); 