let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * It takes a URL and a callback function as arguments, makes a GET request to the URL, then calls the
 * callback indicating either an error or the data it received
 * @param url_api - The URL of the API we want to fetch data from.
 * @param callback - The callback function that will be executed once the request is complete.
 * @returns the callback function.
 */
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))  
            }
        });
    xhttp.send();
    });
}


module.exports = fetchData;