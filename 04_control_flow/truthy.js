// Initialize an empty array to store user emails
const userEmail = [];

// Check if userEmail exists (truthy) or not (falsy)
if (userEmail) {
    // Log a message indicating that user email is present
    console.log("Got user email");
} else {
    // Log a message indicating that user email is not present
    console.log("Don't have user email");
}

// Falsy values include false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values include "0", 'false', " ", [], {}, function(){}

// Check if the userEmail array is empty
if (userEmail.length === 0) {
    // Log a message indicating that the array is empty
    console.log("Array is empty");
}

// Initialize an empty object
const emptyObj = {};

// Check if the emptyObj object is empty
if (Object.keys(emptyObj).length === 0) {
    // Log a message indicating that the object is empty
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) returns the right-hand operand when the left-hand operand is null or undefined

let val1;

// Examples of using the nullish coalescing operator
val1 = 5 ?? 10;         // Since 5 is not null or undefined, val1 will be assigned 5
val1 = null ?? 10;      // Since null is null, val1 will be assigned 10
val1 = undefined ?? 15; // Since undefined is undefined, val1 will be assigned 15
val1 = null ?? 10 ?? 20; // Since null is null, val1 will be assigned 10 (the first non-null value encountered)

// Log the value of val1 after each assignment
console.log(val1);

// Ternary Operator (condition ? true : false) evaluates the condition and returns one of two values based on whether the condition is true or false

const iceTeaPrice = 100;

// Check if the ice tea price is less than or equal to 80
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
