///////////////////////////////////////////////////////
//INTERFACES
/**
 * Function for "load" the choosen script by adapt html (clear inner html, change id, texts) and change event of searchbar
 * 
 * @function loadCardGenerator()
 * @function loadMyHub()
 * @function loadApiExplorer()
 */
function loadCardGenerator() {
    _section.innerHTML = '';
    _article.id='card-generator';
    _articleTitle.textContent = 'Card Generator';

    _searchBarBtn.addEventListener('click', function() {
        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            fetchAndCallback(getUserRoute(USER_NAME), createCard);
        }
    })
}

function loadMyHub() {
    _section.innerHTML = '';
    _article.id='hub';
    _articleTitle.textContent = 'My Hub';

    _searchBarBtn.addEventListener('click', function() {
        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            LIST_TO_LOAD = PROPLIST_USER;
            fetchAndCallback(getUserRoute(USER_NAME), displayPropList);
        }
    })
}

/**
 * Load the API Explorer interface: an input for fetch an user JSON object. The explorer display results, formatted according to their type (ex: https => link, https://api => link with fetch event, ...) by calling fetchAndDisplay() front function
 */
function loadApiExplorer() {
    _article.id='api-explorer';
    _articleTitle.textContent = 'Api Explorer';
    
    _searchBarBtn.addEventListener('click', function() {
        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            fetchAndDisplay(getUserRoute(USER_NAME));
        }
    })

    // fetchAndDisplay(getUserRoute(USER_NAME));
}