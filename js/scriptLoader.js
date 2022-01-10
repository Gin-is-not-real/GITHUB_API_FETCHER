////////////////////////////////////////////
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement("script");
        script.src = src;

        document.head.append(script);
        // console.log("-----> script " + src + " chargé");

        script.onload = () => resolve("script " + src + " chargé");
        script.onerror = () => reject(new Error("Echec du chargement du script " + src))
    });
}

loadScript("js/global.js")
.then(front => loadScript("js/front.js", front))
.then(front => loadScript("js/interfaces.js", front))
.then(fetch_api => loadScript("js/fetch_api.js", fetch_api))
.catch(alert);


