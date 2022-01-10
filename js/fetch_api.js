/////////////////////////////////////////////
//EVENTS LISTENERS
_btnLoadFetcher.addEventListener('click', loadApiExplorer);
_btnLoadHub.addEventListener('click', loadMyHub);
_btnLoadCardGenerator.addEventListener('click', loadCardGenerator);

USER_NAME = 'Gin-is-not-real';
_searchBarInput.value = USER_NAME;

// loadApiExplorer();
// loadMyHub();
loadCardGenerator();

////////////////////////////////////////
//FETCH
function getTotalLanguages(repos) {
    return new Promise(function(resolve) {
        let languages = new Object();
        console.log(repos);
    
        repos.forEach(r => {
            let langUrl = r.languages_url;
    
            fetch(langUrl, {'headers': myHeaders})
            .then(response => response.json())
            .then(langs => {
                console.log(langs)

                for (const lang in langs) {
                    let value = langs[lang];

                    console.log(lang)
                    console.log(languages.hasOwnProperty(lang))
    
                    if (languages.hasOwnProperty(lang)) {
                        languages[lang] += value;
                    }
                    else {
                        languages[lang] = value;
                    }
                }
            });
        })

        console.log(languages);

        resolve(languages);
    })

}

function fetchAllLanguages(url) {
    fetch(url + '/repos')
    .then(repo => {
        let langs = [];
    })
}

async function fetchAndInitObject(url, obj) {
    return new Promise(function(resolve) {
        fetch(url, {'headers': myHeaders})
        .then(response => response.json())
        .then(json => {
            obj = json;
            resolve(json);
        })
    })
}


function fetchAndCallback(url, cb) {
    fetch(url, {'headers': myHeaders})
    .then(response => response.json())
    .then(response => cb(response))
}

/**
 * Fetch data at url, parse it on json and display it on html by calling display()
 * @param {URL} url 
 */
function fetchAndDisplay(url) {
    fetch(url, {'headers': myHeaders})
    .then(response => response.json())
    .then(response => displayExplorerPage(response, url))
}

////////////////////////////////////////
//ENTITIES
function createUser(json) {
    let user = createObject(json, PROPLIST_USER);
    USER = user;
    return user;
}

function createObject(json, properties) {
    let obj = new Object();

    properties.forEach(prop => {
        if (json.hasOwnProperty(prop)) {
            obj[prop] = json[prop];
        }  
    });

    return obj;
}