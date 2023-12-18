const CACHE_NAME = 'my-cache-4.7';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
            })
    );
});

self.addEventListener('message', event => {
    const { allAudioFiles } = event.data;
console.log('asd', allAudioFiles)
    if (allAudioFiles) {
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(allAudioFiles);
            })
            .then(() => {
                console.log('All audio files cached');
            })
            .catch(error => {
                console.error('Error caching audio files:', error);
            });
    }
});

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return;
    }

    event.respondWith(
        caches.match(request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(request, responseToCache);
                            });

                        return response;
                    })
                    .catch(error => {
                        console.error('Fetch failed:', error);
                    });
            })
            .catch(error => {
                console.error('Error in fetching from cache:', error);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== CACHE_NAME)
                    .map(cache => caches.delete(cache))
            );
        })
    );
});
