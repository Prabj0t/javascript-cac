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
