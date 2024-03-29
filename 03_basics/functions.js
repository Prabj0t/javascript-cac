console.log("P");
console.log("R");
console.log("A");
console.log("B");
console.log("H");

// Declaring a function named sayMyName
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
}

// Logging the reference of the function sayMyName to the console
console.log(sayMyName); //output :[Function: sayMyName]

// Calling the function sayMyName
sayMyName();

// Declaring a function named addTwoNumbers with parameters num1 and num2
function addTwoNumbers(num1 , num2){
    // Logging the sum of num1 and num2 to the console
    console.log(num1 + num2);
    // Returning the number 23
    return 23;
}

addTwoNumbers(3,"7");
addTwoNumbers(3,7);
addTwoNumbers("3",7);
addTwoNumbers(3,null);

// Calling the function addTwoNumbers with arguments 2 and 6 and storing the result in the constant result
const result = addTwoNumbers(2,6);

console.log("Results ->", result);

// Declaring a function named loginUserMessage with parameter username
function loginUserMessage(username){
    // Checking if username is undefined
    if(username === undefined){
        // Logging a message to prompt the user to enter a username
        console.log("Please Enter a username");
        // Returning from the function
        return;
    }
    // Returning a message indicating that the user has logged in
    return `${username} just Logged In`;
}

console.log(loginUserMessage("Prabh"));

// Declaring a function named loginUserMessage2 with a default parameter value "sam"
function loginUserMessage2(username = "sam"){
    // Checking if username is undefined
    if(username === undefined){
        // Logging a message to prompt the user to enter a username
        console.log("Please Enter a username");
        return;
    }
    // Returning a message indicating that the user has logged in
    return `${username} just Logged In`;
}

// Logging the result of calling loginUserMessage2 with no argument to the console
console.log(loginUserMessage2());


 
// take more than one values in our parameter using Rest Operator
function calculateCartPrice(...num1){
    return num1    
}

// Logging the result of calling calculateCartPrice with arguments 200, 400, and 100 to the console
console.log(calculateCartPrice(200, 400, 100));

// Object representing a user
const user = {
    username: "Prabh",
    price: 199
}

// Function to handle an object and log its properties
function handleObject(anyobject){
    // Logging the username and price of the object
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// Calling handleObject function with user object as argument
handleObject(user);

// Calling handleObject function with an object as argument
handleObject({
    username: "sam",
    price:399
});

// Array declaration
const myNewArray = [200 , 100, 599 , 344];

// Function to return the second value of an array
function returnSecondValue(getArray){
    // Returning the second element of the array
    return getArray[1];
}

// Logging the second value of myNewArray
console.log(returnSecondValue(myNewArray));
// Logging the second value of a new array directly
console.log(returnSecondValue([60 , 3, 2, 24]));