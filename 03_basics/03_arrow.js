// Object representing a user
const user = {
    username: "hitesh",
    price: 999,

    // Method to display a welcome message
    welcomeMessage: function() {
        // Logging a welcome message with the username
        console.log(`${this.username} , welcome to website`);
        // Logging the entire user object
        console.log(this);
    }
}

// Calling the welcomeMessage method of the user object
user.welcomeMessage();

// Modifying the username property of the user object
user.username = "sam";

// Calling the welcomeMessage method of the user object after modifying the username
user.welcomeMessage();

// Logging the 'this' keyword outside any object or function
console.log(this);

// Function declaration using the function keyword
function chai(){
    // Variable declaration
    let username = "hitesh"
    // Logging the value of 'this.username'
    console.log(this.username);
}

// Uncommenting the following line would result in an error because 'this.username' is undefined
// chai();


// Arrow function expression using the const keyword
const chai =  () => {
    // Variable declaration
    let username = "hitesh"
    // Logging the value of 'this'
    console.log(this);
}


chai()
// Arrow functions

// Arrow function to add two numbers with a return statement
const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Arrow function to add two numbers without curly braces (implicit return)
// const addTwo = (num1, num2) =>  num1 + num2;

// Arrow function to add two numbers with parentheses around the expression (explicit return)
// const addTwo = (num1, num2) => ( num1 + num2 );

// Arrow function to return an object
// const addTwo = (num1, num2) => ({username: "hitesh"});

// Logging the result of calling the addTwo function
console.log(addTwo(3, 4));

// Array declaration
const myArray = [2, 5, 3, 7, 8];

// Using forEach method on the array (missing callback function)
myArray.forEach();
