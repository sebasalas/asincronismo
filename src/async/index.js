/**
 * DoSomethingAsync() is a function that returns a promise that resolves to 'Do Something Async' after
 * 3 seconds.
 * @returns A promise that will resolve with the string 'Do Something Async' after 3 seconds.
 */
const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

/**
 * DoSomethingAsync() is called, and when it returns, the result is assigned to something, and then
 * something is logged to the console.
 */
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


/**
 * If doSomethingAsync() throws an error, catch it and log it to the console.
 */
const anotherFuncion = async () => {
    try {
        const something = await doSomethingAsync();
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFuncion();
console.log('After 1');