//////////////////////////////////////////////
//
let API_URL = 'https://api.github.com';

let myHeaders = new Headers();
myHeaders.append('User-Agent', 'Gin-is-not-real');

let USER_NAME;

let USER;
let USER_REPOS;

/////////////////////////////////////////////
//PROPERTIES LIST
let PROPLIST_USER = ['name', 'location', 'html_url', 'created_at', 'updated_at', 'public_repos'];
let LIST_TO_LOAD = [];
/////////////////////////////////////////////
//ROUTES FUNCTIONS
/**
 * Return string url for fetch an user
 * @param {String} username 
 */
function getUserRoute(username) {
    return API_URL + '/users/' + username;
}
function getUserReposRoute(username) {
    return API_URL + '/users/' + username + '/repos';
}

