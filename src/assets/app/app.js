// const directoryName="/development/PWA-test";
const directoryName= "";
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(directoryName + "/sw.js")
        .then((reg) => console.log("Service worker registered",reg))
        .catch((err)=> console.log("service worker not registered",err));
}
