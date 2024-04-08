// Promise to perform an asynchronous task and resolve after completion
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task is Completed');
        // Resolve the promise once the task is completed
        resolve('Task Completed');
    }, 1000);
});

// Consuming the resolved value using .then
promiseOne.then(() => {
    console.log("Promise consumed");
});

// Creating and resolving another promise asynchronously
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async Resolved");
});

// Example of passing values from an asynchronous task (simulated database operation)
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        resolve({username: "Prabh", email: "prab@example.com"});
    }, 1000);
});

// Consuming the resolved value using .then
promiseThree.then(function(user){
    console.log(user);
});

// Example of handling errors and using reject
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;

        // If there is no error, resolve the promise with user data
        if(!error){
            resolve({username: "Prabh", email: "prab@example.com"});
        }
        // If there is an error, reject the promise with an error message
        else{
            reject("Error occurred!!");
        }
    }, 1000);
});

// Chaining .then, .catch, and .finally to handle promise resolution and rejection
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
});

// Example of an asynchronous task with error handling using async/await
const promiseFive = new Promise((resolve , reject)=>{
    setTimeout(function(){
        let error = true;

        // If there is no error, resolve the promise with user data
        if(!error){
            resolve({username: "Prabh05", email: "prab05@example.com"});
        }
        // If there is an error, reject the promise with an error message
        else{
            reject("Error occurred in promiseFive!!");
        }
    }, 1000);
});

// Asynchronously consume promiseFive using async/await and try/catch
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();




// Asynchronously fetches all users from a remote API using async/await
async function getAllUsers() {
    try {
        // Fetch data from the specified URL
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Extract JSON data from the response
        const data = await response.json();

        // Log the retrieved user data
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetching process
        console.log("Error: ", error);
    }
}

// Call the function to fetch and display all users
getAllUsers();

// Fetch data from the GitHub API to retrieve information about a specific user
fetch('https://api.github.com/users/hiteshchoudhary')
    // Parse the response as JSON
    .then((response) => {
        return response.json();
    })
    // Log the retrieved data
    .then((data) => {
        console.log(data);
    })
    // Handle any errors that occur during the fetching process
    .catch((error) => {
        console.log("Error: ", error);
    });

// Promise.all is a method that takes an iterable of promises as input
// and returns a single Promise that resolves when all of the input promises have resolved
// or when the iterable contains no promises.
// It rejects with the reason of the first promise that rejects.

// yes this is also available, kuch reading aap b kro.