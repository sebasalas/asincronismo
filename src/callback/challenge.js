let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * It takes a URL and a callback function as arguments, makes a GET request to the URL, then calls the
 * callback indicating either an error or the data it received
 * @param url_api - The URL of the API we want to fetch data from.
 * @param callback - The callback function that will be executed once the request is complete.
 * @returns the callback function.
 */
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

