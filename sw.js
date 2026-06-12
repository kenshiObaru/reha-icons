// キャッシュ名
const CACHE_NAME = 'reha-diary-cache-v1';

// キャッシュするファイル
const urlsToCache = [
  '/pwa_reha/',
  '/pwa_reha/rehaDiary.html',
  '/pwa_reha/css/style.css',
  '/pwa_reha/drawer.js'
];

// インストール処理
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// フェッチ処理
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
