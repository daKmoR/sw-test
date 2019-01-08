importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
    '/patrick-schneider-1279914-unsplash.jpg',
    '/robynne-1279703-unsplash.jpg',
    '/yiran-ding-1277981-unsplash.jpg',
    { url: '/index.html', revision: '1' },
  ]);
  // console.log(`Yay! Workbox is loaded 🎉`);
} else {
  // console.log(`Boo! Workbox didn't load 😬`);
}