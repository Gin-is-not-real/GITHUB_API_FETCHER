/**
 * Globals vars and function used by others script:
 * @var {String} API_URL 
 * @var {Headers} myHeaders - used for append request header, like user-agent
 * @var {String} USER_NAME - store username input on search field
 * @var {Object} USER
 * @var {Array of strings} PROPLIST_USER - storing JSON keys about user  
 * @var {Array} LIST_TO_LOAD  

 * @function getUserRoute(username) - return string for fetch user data by concatenate api url, route identifier (here '/users') and username send as parameter.
 */

let API_URL = 'https://api.github.com';

let myHeaders = new Headers();
myHeaders.append('User-Agent', 'Gin-is-not-real');

let USER_NAME;
let USER;

/////////////////////////////////////////////
//PROPERTIES LIST
let PROPLIST_USER = ['name', 'location', 'html_url', 'created_at', 'updated_at', 'public_repos'];
let LIST_TO_LOAD = [];
/////////////////////////////////////////////
//ROUTES FUNCTIONS
/**
 * Return string url for fetch an user
 * @param {String} username 
 * @return {String} - the concatenated string from api url, route identifier and username.
 */
function getUserRoute(username) {
    return API_URL + '/users/' + username;
}


