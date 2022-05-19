/**
 * If true, resolve the promise with the string 'Hey!', otherwise reject the promise with the string
 * 'Whooops!'.
 * @returns A promise.
 */
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

/**
 * If true, resolve the promise with the string 'True' after 2 seconds, otherwise reject the promise
 * with the error 'Whooops!'
 * @returns A promise that will resolve to true after 2 seconds.
 */
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
         if (true){
            setTimeout(() => {
                 resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject (error);
        }
    });
};

/* Waiting for the promise to resolve and then logging the response. */
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})