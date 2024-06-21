self.addEventListener('fetch', function(event) {
    const url = new URL(event.request.url);
    // Block requests to external images
    if (url.hostname !== location.hostname && url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') || url.pathname.endsWith('.gif')) {
        event.respondWith(new Response('', { status: 403, statusText: 'Forbidden' }));
    }
});
