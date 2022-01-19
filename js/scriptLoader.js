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
.then(front => loadScript("js/scripts/front.js", front))
.then(interfaces => loadScript("js/scripts/interfaces.js", interfaces))
.then(fetch_api => loadScript("js/scripts/fetch_api.js", fetch_api))
.then(main => loadScript("js/main.js", main))
.catch(alert);


