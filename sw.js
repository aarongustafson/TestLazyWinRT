"use strict";

const staticCacheName = 'staticfiles';

addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName)
    .then( staticCache => {
      return staticCache.addAll([
        '/j/main.js',
        '/c/default.css'
      ]);
    })
  );
});