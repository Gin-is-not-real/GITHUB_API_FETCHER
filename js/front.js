//////////////////////////////////////////////
//DOM
let _main = document.querySelector('main');

let _btnLoadFetcher = document.querySelector('#load-api-fetcher');
let _btnLoadHub = document.querySelector('#load-hub');
let _btnLoadCardGenerator = document.querySelector('#load-card-generator');

let _article = document.querySelector('article#main');
let _articleHeader = _article.querySelector('header');
let _articleTitle = _article.querySelector('h3');

let _searchBar = _articleHeader.querySelector('.search-bar');
let _searchBarInput = _articleHeader.querySelector('.search-bar input');
let _searchBarBtn = _articleHeader.querySelector('.search-bar button');

let _section = document.querySelector('#main-section');

let _cardSection = document.querySelector('section#card');
let _cardAvatar = _cardSection.querySelector('#avatar img');
let _cardCreationDate = _cardSection.querySelector('#creation-date');
let _cardLastUpDate = _cardSection.querySelector('#update-date');
let _cardName = _cardSection.querySelector('#name');
let _cardLocation = _cardSection.querySelector('#location');
let _cardNbrRepos = _cardSection.querySelector('#public_repos');

///////////////////////////////////////////////////////
//FRONT

function createCard(obj) {
    console.log()
    _cardAvatar.src = obj.avatar_url;
    _cardCreationDate.textContent = formatDate(new Date(obj.created_at));
    _cardLastUpDate.textContent = formatDate(new Date(obj.updated_at));
    _cardName.textContent = obj.name;
    _cardLocation.textContent = obj.location;
    _cardNbrRepos.textContent = obj.public_repos;

    _cardSection.remove();
    _section.appendChild(_cardSection); 
    _cardSection.classList.remove('hidden');
}



function displayExplorerPage(obj, url) {
    _section.innerHTML = '<header><h3><a href="' + url + '">' + url + '</a></h3></header>';

    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            let container = createListLine(prop, obj[prop]);
            _section.appendChild(container);
        }
    }
}

function displayPropList(json) {
    _section.innerHTML = '';
    let user = createObject(json, LIST_TO_LOAD);

    for (const prop in user) {
        if (user.hasOwnProperty(prop)) {
            let container = createListLine(prop, user[prop]);
            _section.appendChild(container);
        }
    }
}

function formatDate(date) {
    let formated = date.toDateString();
    let sliced = formated.slice(0, 4);
    formated = formated.replace(sliced, '');

    return formated;
}


///////////////////////////////////////////////////////
//ELEMENTS FUNCTIONS
/**
 * return a div with a p for display the property key, and get an element for display the value, according the type of value, by calling createAppropriateElement(value)
 * @param {String} prop 
 * @param {any} value 
 * @return container
 */
function createListLine(prop, value) {
    //creer le container
    let container = document.createElement('div');
    container.style = 'display:flex;gap:10px;';
    //affiche la clé
    let span = document.createElement('p');
    span.className = 'span';
    span.textContent = prop + ': ';
    container.appendChild(span);

    //creation de l'elt en fonction du type de la valeur
    let elt = createAppropriateElement(value);
    container.appendChild(elt);

    return container;
}
///////////////////////////////////////////////////////
//ELEMENTS FUNCTIONS
function createLink(value) {
    let elt = document.createElement('a');
    elt.href = value;
    elt.textContent = value;
    return elt;
}

function createFetcherLink(value) {
    let elt = document.createElement('a');
    elt.href = value;
    elt.textContent = value;
    elt.addEventListener('click', function(e) {
        e.preventDefault();
        fetchAndDisplay(elt.href);
    })
    return elt;
}

function createObjectElt(obj) {
    let container = document.createElement('div');
    container.appendChild(document.createElement('hr'));

    for (const v in obj) {
        if (obj.hasOwnProperty(v)) {
            const value = obj[v];
            
            let subContainer = document.createElement('div');
            subContainer.style = 'display:flex;gap:10px;';
            subContainer.textContent = v + ': ';

            let subElt= document.createElement('p');
            subElt.textContent = String(value);
        
            if(typeof value === 'string') {
                if(String(value).includes('https')) {
                    subElt = createLink(value);
                    if(String(value).includes('https://api')) {
                        subElt = createFetcherLink(value);
                    }
                }
            }
            subContainer.appendChild(subElt);
            container.appendChild(subContainer);
        }
    }

    return container;
}


function createAppropriateElement(value) {
    let elt= document.createElement('p');
    elt.textContent = String(value);

    if(typeof value === 'string') {

        if(String(value).includes('https')) {
            elt = createLink(value);
    
            if(String(value).includes('https://api')) {
                elt = createFetcherLink(value);
            }
        }
    }
    else if(typeof value === 'object') {
        elt = createObjectElt(value);
    }

    return elt;
}
