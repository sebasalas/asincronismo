const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

/**
 * We're using the async keyword to declare a function that returns a promise. 
 * 
 * The await keyword is used to wait for a Promise to resolve or reject. 
 * 
 * The await keyword can only be used inside an async function
 * @param url_api - The URL of the API you want to fetch data from.
 */
const anotherFuncion = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFuncion(API);
console.log('After');