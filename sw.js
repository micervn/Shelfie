// Shelfie offline support: keeps the app's own files on the device. Your books live in on-device storage, not here.
const VERSION = '1.0.bd50d2'
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
    // Android "Share → Shelfie": keep the shared books for the app to pick up, then open it
    if (e.request.method === 'POST' && url.origin === location.origin && url.pathname.endsWith('/share-target')) {
        e.respondWith((async () => {
            let n = 0
            try {
                const form = await e.request.formData()
                const inbox = await caches.open('inbox-shelfie')
                for (const f of form.getAll('books')) {
                    if (!f || typeof f === 'string') continue
                    await inbox.put(new URL(`inbox/${Date.now()}-${n++}`, self.registration.scope).href, new Response(f, {
                        headers: { 'x-name': encodeURIComponent(f.name || 'book'), 'content-type': f.type || 'application/octet-stream' },
                    }))
                }
            } catch (err) { console.warn(err) }
            return Response.redirect(new URL(`index.html?shared=${n}`, self.registration.scope).href, 303)
        })())
        return
    }
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
