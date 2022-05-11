let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

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

/* Making a request to the API, then it is making a request to the API + the id of the first character,
then it is making a request to the origin URL of the first character. */
fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            console.log(API);
            console.log(API + data1.results[0].id); 
            console.log(data2.origin.url); 
        });
    })
})