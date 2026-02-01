self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fastjob-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "services.html",
        "add.html",
        "css/style.css"
      ]);
    })
  );
});