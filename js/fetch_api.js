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
    .then(response => {

        displayExplorerPage(response, url)
    })
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