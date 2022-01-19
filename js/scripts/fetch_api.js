////////////////////////////////////////
//FETCH
/**
 * Fetch data at url with headers and a fucntion callback. Parse the response on JSON and display it on html by calling display()
 * @param {URL} url 
 * @param {Function} cb - a function to call after retrieve and parse response. The JSON response will be the parameter of the callback function
 */
function fetchAndCallback(url, cb) {
    fetch(url, {'headers': myHeaders})
    .then(response => response.json())
    .then(response => cb(response))
}

/**
 * Fetch data at url with headers, parse it on json and display API Explorer by calling displayExplorerPage(response, url)
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
/**
 * Create an Object representing an user by calling createObject(), with global array PROPLIST_USER as parameter. PROPLIST_USER contains keys of JSON data API used for display choosen informations representing an user. Need the user JSON data fetched.
 * @param {JSON} json 
 * @returns {Object} user
 */
function createUser(json) {
    let user = createObject(json, PROPLIST_USER);
    USER = user;
    return user;
}

/**
 * Generate and return an Object from JSON and properties list. 
 * @param {JSON} json 
 * @param {Array} properties Contains keys used for identify JSON properties needed for representing the object
 * @returns {Object}
 */
function createObject(json, properties) {
    let obj = new Object();

    properties.forEach(prop => {
        if (json.hasOwnProperty(prop)) {
            obj[prop] = json[prop];
        }  
    });

    return obj;
}