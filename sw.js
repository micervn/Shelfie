// Shelfie offline support: keeps the app's own files on the device. Your books live in on-device storage, not here.
const VERSION = '1.0.0e3909'
const CACHE = 'shelfie-' + VERSION
const FILES = [
 "./",
 "./index.html",
 "./app.js",
 "./atkinson-400-italic.woff2",
 "./atkinson-400.woff2",
 "./atkinson-700.woff2",
 "./bricolage.woff2",
 "./icon-180.png",
 "./icon-192.png",
 "./icon-512.png",
 "./icon-maskable-512.png",
 "./jbig2.wasm",
 "./literata-italic.woff2",
 "./literata.woff2",
 "./manifest.webmanifest",
 "./newsreader-italic.woff2",
 "./newsreader.woff2",
 "./openjpeg.wasm",
 "./pdf.min.mjs",
 "./pdf.worker.min.mjs",
 "./qcms_bg.wasm",
 "./styles.css",
 "./unifraktur.woff2"
]

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()))
})
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.filter(k => k.startsWith('shelfie-') && k !== CACHE).map(k => caches.delete(k))))
        .then(() => self.clients.claim()))
})
self.addEventListener('fetch', e => {
    const url = new URL(e.request.url)
    if (e.request.method !== 'GET' || url.origin !== location.origin) return
    e.respondWith(caches.open(CACHE).then(async cache => {
        const hit = await cache.match(e.request, { ignoreSearch: true })
            || (e.request.mode === 'navigate' ? await cache.match('./index.html') : null)
        if (hit) return hit
        const res = await fetch(e.request)
        if (res.ok) cache.put(e.request, res.clone())
        return res
    }))
})
