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
    let languages = [];
    let langObjs = [];

    repos.forEach(r => {
        let langUrl = r.languages_url;

        fetch(langUrl, {'headers': myHeaders})
        .then(response => response.json())
        .then(langs => {
            for (const lang in langs) {
                let value = parseInt(langs[lang]);

                if(languages.includes(lang)) {
                    let i = languages.indexOf(lang);
                    langObjs[i].chars += value;
                }
                else {
                    languages.push(lang);
                    langObjs.push({language: lang, chars: value});
                }
            }
        });
    })
    return langObjs;
}

let test = [
    {language: 'js', chars: 100},
    {language: 'php', chars: '2'},
    {language: 'css', chars: '20'},
    {language: 'fqf', chars: 200},
    {language: 'html', chars: '5'},
];
sortLangages(test);


function sortLangages(languages) {
    console.log(typeof languages, languages)

    let ordered = languages.sort(function(a, b) {
        return b.chars - a.chars;
    })
    
    console.log('sorted array: ', ordered)
    return ordered;
}


async function fetchUserData(username) {
        let user = new Object();
        user = await fetchAndInitObject(getUserRoute(username));
        user.repos = await fetchAndInitObject(getUserReposRoute(username));
        user.totalLanguages = await getTotalLanguages(user.repos);
        console.log(user.totalLanguages);
        // ne fonctionne pas
        user.totalLanguages = sortLangages(user.totalLanguages);
        console.log(user.totalLanguages);

        USER = user;
        createCard(user);
        displayTotalLanguages(user.totalLanguages);        
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