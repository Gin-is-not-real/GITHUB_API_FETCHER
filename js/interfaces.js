///////////////////////////////////////////////////////
//INTERFACES
function loadCardGenerator() {
    _section.innerHTML = '';
    _article.id='card-generator';
    _articleTitle.textContent = 'Card Generator';

    _searchBarBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            fetchUserData(USER_NAME);
        }
    })
}

function loadMyHub() {
    _section.innerHTML = '';
    _article.id='hub';
    _articleTitle.textContent = 'My Hub';

    _searchBarBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            LIST_TO_LOAD = PROPLIST_USER;

            if(USER === undefined || USER.name !== USER_NAME) {
                fetchAndInitObject(getUserRoute(USER_NAME), USER)
                .then(r => displayPropList(r));
            }
            else {
                displayPropList(USER);
            }
        }
    })
}

/**
 * Load the API Explorer interface: an input for fetch an user JSON object. The explorer display results, formatted according to their type (ex: https => link, https://api => link with fetch event, ...) by calling fetchAndDisplay() front function
 */
function loadApiExplorer() {
    _article.id='api-explorer';
    _articleTitle.textContent = 'Api Explorer';
    
    _searchBarBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if(_searchBarInput.value !== undefined) {
            USER_NAME = _searchBarInput.value;
            fetchAndDisplay(getUserRoute(USER_NAME));
        }
    })

    // fetchAndDisplay(getUserRoute(USER_NAME));
}