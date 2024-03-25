// Defining a constant score
const score = 400;

// Creating a Number object for balance
const balance = new Number(100);

// Example Math operations and Number methods
// console.log(balance.toString().length); // Length of the string representation of balance
// console.log(balance.toFixed(1)); // Fixed decimal representation of balance

// Example of using toPrecision method
const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // Represent otherNumber with 4 significant digits

// Example of using toLocaleString method
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Format hundreds using Indian English locale

// Math-related operations and functions
// console.log(Math);
// console.log(Math.abs(-4)); // Absolute value of -4
// console.log(Math.round(4.6)); // Round to the nearest integer
// console.log(Math.ceil(4.2)); // Round up to the nearest integer
// console.log(Math.floor(4.9)); // Round down to the nearest integer
// console.log(Math.min(4, 3, 6, 8)); // Find the minimum value
// console.log(Math.max(4, 3, 6, 8)); // Find the maximum value

// Generating random numbers
console.log(Math.random()); // Generate a random number between 0 and 1
console.log((Math.random() * 10) + 1); // Generate a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Generate a random integer between 1 and 10

// Generating random integer within a specified range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random integer between 10 and 20
