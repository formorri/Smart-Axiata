const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
    "/development/PWA-test/",
    "/development/PWA-test/index.html",
    "/development/PWA-test/fallback.html",
    // "/about-us.html",
    // "/beyond-short-term-profits.html",
    // "/CEO-message.html",
    // "/humanitarian-support.html",
    // "/nurturing-people.html",
    // "/planet-and-society.html",
    // "/process-excellence.html",

    // ALL CSS
    // "/css/colors.css",
    // "/css/components.css",
    "/development/PWA-test/css/fonts.css",
    "/development/PWA-test/css/main.css",

    // ALL APP
    "/development/PWA-test/assets/app/countup.min.js",
    "/development/PWA-test/assets/app/index.js",
    "/development/PWA-test/assets/app/jquery-3.6.0.min.js",
    "/development/PWA-test/assets/app/uikit-icons.min.js",
    "/development/PWA-test/assets/app/uikit.min.js",
    "/development/PWA-test/assets/app/waypoints.min.js",

    // ALL FONTS
    "/development/PWA-test/assets/fonts/icomoon.eot",
    "/development/PWA-test/assets/fonts/icomoon.svg",
    "/development/PWA-test/assets/fonts/icomoon.ttf",
    "/development/PWA-test/assets/fonts/icomoon.woff",
    "/development/PWA-test/assets/fonts/selection.json",
    "/development/PWA-test/assets/fonts/Ubuntu-Bold.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-Bold.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-Bold.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-Bold.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-BoldItalic.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-BoldItalic.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-BoldItalic.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-BoldItalic.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-Italic.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-Italic.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-Italic.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-Italic.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-Light.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-Light.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-Light.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-Light.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-LightItalic.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-LightItalic.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-LightItalic.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-LightItalic.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-Medium.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-Medium.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-Medium.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-Medium.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-MediumItalic.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-MediumItalic.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-MediumItalic.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-MediumItalic.woff2",
    "/development/PWA-test/assets/fonts/Ubuntu-Regular.eot",
    "/development/PWA-test/assets/fonts/Ubuntu-Regular.ttf",
    "/development/PWA-test/assets/fonts/Ubuntu-Regular.woff",
    "/development/PWA-test/assets/fonts/Ubuntu-Regular.woff2",

    // ALL ICONS
    "/development/PWA-test/assets/icons/6-download-global.svg",
    "/development/PWA-test/assets/icons/7-donate-global.svg",
    // "/assets/icons/1-about-search.svg",
    // "/assets/icons/2-about1.svg",
    // "/assets/icons/3-about2.svg",
    // "/assets/icons/4-about3.svg",
    // "/assets/icons/5-about4.svg",

    // ALL IMAGES
    "/development/PWA-test/assets/images/logo-1.svg",
    "/development/PWA-test/assets/images/logo-2.svg",
    "/development/PWA-test/assets/images/play.svg",
    "/development/PWA-test/assets/images/navbar-background.svg",
    "/development/PWA-test/assets/images/navbar-download.svg",
    "/development/PWA-test/assets/images/navbar-home.svg",
    "/development/PWA-test/assets/images/navbar-share.svg",
    "/development/PWA-test/assets/images/frontpage-artwork.png",
    "/development/PWA-test/assets/images/frontpage-artwork.svg",
    "/development/PWA-test/assets/images/frontpage-CEO.svg",
    "/development/PWA-test/assets/images/frontpage-sustainability-1.svg",
    "/development/PWA-test/assets/images/frontpage-sustainability-2.svg",
    "/development/PWA-test/assets/images/frontpage-sustainability-3.svg",
    "/development/PWA-test/assets/images/frontpage-sustainability-4.svg",
    "/development/PWA-test/assets/images/frontpage-waves.svg",
    "/development/PWA-test/assets/images/frontpage-title.svg",
    // "/assets/images/about-background.png",
    // "/assets/images/about-CEO-background.svg",
    // "/assets/images/about-CEO.svg",
    // "/assets/images/beyond-header.svg",
    // "/assets/images/beyond-icon.svg",
    // "/assets/images/humanitarian-thumbnail.png",
    // "/assets/images/nurturing-header.svg",
    // "/assets/images/nurturing-icon.svg",
    // "/assets/images/planet-header.svg",
    // "/assets/images/planet-icon.svg",
    // "/assets/images/process-header.svg",
    // "/assets/images/process-icon.svg",
    // "/assets/images/sponsor-1.png",
    // "/assets/images/sponsor-2.png",
    // "/assets/images/sponsor-3.png",
    // "/assets/images/sponsor-4.png",
    // "/assets/images/sponsor-5.png",
    // "/assets/images/sponsor-6.png",

    // UIKIT
    "/development/PWA-test/assets/UIKIT/uikit.min.css",

    // ALL VIDEO
    // "/assets/video/ceo.mp4",
    // "/assets/video/testimonial.mp4",
    "/development/PWA-test/assets/video/year-in-review.mp4",

    // ALL EXTERNAL LINKS
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js",

]

// cache size limit function. Loops to the first key and deletes it untill it meets cache limit
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};



// install service worker
self.addEventListener("install", evt => {
    console.log("Service event has been installed");
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("Caching shell assets");
            cache.addAll(assets);
        })
    );

});

// activate and version control for service workers, i.e. delete older versions
self.addEventListener("activate", evt => {
    console.log("Service worker has been activated");
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

// Fetch event
// Using the fetch function to look into the server and check if current cached matches fetch request
// If matches exist, returns cached resource to user
// If no matches, then fetch goes to server to get resource
// Returns server resource to new array (dynamicCacheName)
// Function returns key value pair, key(url), value(cloned resource) and returns the fetched resource to user
// Catch requests for only html requests so that only missing html triggers fallback page, not all resources
self.addEventListener("fetch", evt => {
    // console.log("fetch event", evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 20);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if(evt.request.url.indexOf(".html") > -1){
                return caches.match("/development/PWA-test/fallback.html");
            }
        })
    )
});