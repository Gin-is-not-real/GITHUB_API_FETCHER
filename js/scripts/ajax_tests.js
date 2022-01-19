////////////////////////////////////////////////////
// AJAX get data from url
/**
 * Send a request to request url and return Promise
 * @param {URL} url 
 */
function ajax(url) { 
    return new Promise(function(resolve) {
        let httpRequest = new XMLHttpRequest();

        httpRequest.open('GET', url);
        httpRequest.responseType = 'json';
        httpRequest.send();
    
        httpRequest.onload = function() {
            if (httpRequest.status < 201) {
                let response = httpRequest.response;
                resolve(response);
            }
        }
    })
}
