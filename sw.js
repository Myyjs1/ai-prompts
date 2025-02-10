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

// 激活时清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // 只处理同源请求
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    // 如果在缓存中找到响应，则返回缓存的响应
                    if (response) {
                        return response;
                    }

                    // 克隆请求，因为请求是一个流，只能使用一次
                    const fetchRequest = event.request.clone();

                    return fetch(fetchRequest).then(response => {
                        // 检查是否是有效的响应
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // 克隆响应，因为响应是一个流，只能使用一次
                        const responseToCache = response.clone();

                        // 将响应添加到缓存
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
                })
        );
    }
});