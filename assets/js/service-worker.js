// service-worker.js

// Asigna un nombre a tu caché
const CACHE_NAME = 'paudisenos-cache-v1';

// Lista de archivos a cachear
// Lista de archivos a cachear
const cacheUrls = [
    './', // Raíz del sitio
    './index.html',
    './assets/css/style.css',
    './assets/img/logo.jpg',
    './assets/img/nuestrologo.png',
    './assets/img/qr-tarjeta.png',
    './assets/img/textura2.png',
    './assets/js/script.js',
    './manifest.json',
    // ... añade aquí todos los archivos que deseas cachear
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(cacheUrls))
    );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((name) => {
                        if (name !== CACHE_NAME) {
                            return caches.delete(name);
                        }
                    })
                );
            })
    );
});

// Intercepción de las solicitudes y manejo de la caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
