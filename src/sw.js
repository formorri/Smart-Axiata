const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v2";
const directoryName= "/development/PWA-test";
// const directoryName = "";
const assetExclude = [
    (directoryName + "/assets/video/ceo.mp4"),
    (directoryName + "/assets/video/testimonial.mp4"),
    (directoryName + "/assets/video/year-in-review.mp4"),
];
const assets = [
    (directoryName + "/"),
    (directoryName + "/index.html"),
    (directoryName + "/fallback.html"),

    // ALL CSS
    (directoryName + "/css/fonts.css"),
    (directoryName + "/css/main.css"),

    // ALL APP
    (directoryName + "/assets/app/countup.min.js"),
    (directoryName + "/assets/app/index.js"),
    (directoryName + "/assets/app/jquery-3.6.0.min.js"),
    (directoryName + "/assets/app/uikit-icons.min.js"),
    (directoryName + "/assets/app/uikit.min.js"),
    (directoryName + "/assets/app/waypoints.min.js"),

    // ALL FONTS
    (directoryName + "/assets/fonts/icomoon.eot"),
    (directoryName + "/assets/fonts/icomoon.svg"),
    (directoryName + "/assets/fonts/icomoon.ttf"),
    (directoryName + "/assets/fonts/icomoon.woff"),
    (directoryName + "/assets/fonts/selection.json"),
    (directoryName + "/assets/fonts/Ubuntu-Bold.eot"),
    (directoryName + "/assets/fonts/Ubuntu-Bold.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-Bold.woff"),
    (directoryName + "/assets/fonts/Ubuntu-Bold.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-BoldItalic.eot"),
    (directoryName + "/assets/fonts/Ubuntu-BoldItalic.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-BoldItalic.woff"),
    (directoryName + "/assets/fonts/Ubuntu-BoldItalic.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-Italic.eot"),
    (directoryName + "/assets/fonts/Ubuntu-Italic.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-Italic.woff"),
    (directoryName + "/assets/fonts/Ubuntu-Italic.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-Light.eot"),
    (directoryName + "/assets/fonts/Ubuntu-Light.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-Light.woff"),
    (directoryName + "/assets/fonts/Ubuntu-Light.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-LightItalic.eot"),
    (directoryName + "/assets/fonts/Ubuntu-LightItalic.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-LightItalic.woff"),
    (directoryName + "/assets/fonts/Ubuntu-LightItalic.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-Medium.eot"),
    (directoryName + "/assets/fonts/Ubuntu-Medium.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-Medium.woff"),
    (directoryName + "/assets/fonts/Ubuntu-Medium.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-MediumItalic.eot"),
    (directoryName + "/assets/fonts/Ubuntu-MediumItalic.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-MediumItalic.woff"),
    (directoryName + "/assets/fonts/Ubuntu-MediumItalic.woff2"),
    (directoryName + "/assets/fonts/Ubuntu-Regular.eot"),
    (directoryName + "/assets/fonts/Ubuntu-Regular.ttf"),
    (directoryName + "/assets/fonts/Ubuntu-Regular.woff"),
    (directoryName + "/assets/fonts/Ubuntu-Regular.woff2"),

    // ALL ICONS
    (directoryName + "/assets/icons/6-download-global.svg"),
    (directoryName + "/assets/icons/7-donate-global.svg"),

    // ALL IMAGES
    (directoryName + "/assets/images/logo-1.svg"),
    (directoryName + "/assets/images/logo-2.svg"),
    (directoryName + "/assets/images/navbar-download.svg"),
    (directoryName + "/assets/images/navbar-home.svg"),
    (directoryName + "/assets/images/navbar-share.svg"),
    (directoryName + "/assets/images/frontpage-artwork.png"),
    (directoryName + "/assets/images/frontpage-CEO.jpg"),
    (directoryName + "/assets/images/frontpage-sustainability-1.jpg"),
    (directoryName + "/assets/images/frontpage-sustainability-2.jpg"),
    (directoryName + "/assets/images/frontpage-sustainability-3.jpg"),
    (directoryName + "/assets/images/frontpage-sustainability-4.jpg"),
    (directoryName + "/assets/images/frontpage-waves.svg"),
    (directoryName + "/assets/images/frontpage-title.svg"),

    // UIKIT
    (directoryName + "/assets/UIKIT/uikit.min.css"),

    // ALL VIDEO
    // "/assets/video/ceo.mp4",
    // "/assets/video/testimonial.mp4",
    // (directoryName + "/assets/video/year-in-review.mp4"),

    // ALL EXTERNAL LINKS
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js",

]

// cache size limit function. Loops to the first key and deletes it untill it meets cache limit
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
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
            cache.addAll(assets);
            console.log("Caching shell assets");
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


// const hasUrlCacheExcludeMatch = (url) => {
//     return assetExclude.some(path => url.endsWith(path));
// };

// console.log(hasUrlCacheExcludeMatch);
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
    // caches.filter(() => dynamicCacheName !== assetExclude)
    caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
                cache.put(evt.request.url, fetchRes.clone());
                limitCacheSize(dynamicCacheName, 40);
                return fetchRes;
            })
        });
    }).catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
            return caches.match(directoryName + "/fallback.html");
        }
    })
    )
});