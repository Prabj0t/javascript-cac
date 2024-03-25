// Defining constants for name and age
const name = "Prabhjot";
const age = 20;

// Printing name and age using template literals for better readability
console.log(`My name is ${name} and my age is ${age}`);

// Creating a new string using JavaScript's String object
const newstring = new String('hi this is new string');

// Printing the new string and its length
console.log(newstring);
console.log(newstring.length);

// Demonstrating string manipulation methods
console.log(newstring.toUpperCase()); // Converting string to uppercase
console.log(newstring.charAt(4)); // Getting character at index 4

// Creating another string using String object constructor
const gameName = new String('hitesh-hc-com');

// Demonstrating string manipulation methods on the new string
console.log(gameName.charAt(2)); // Getting character at index 2
console.log(gameName.indexOf('t')); // Finding index of character 't'

// Extracting substrings from the string
const newString = gameName.substring(0, 4); // Extracting substring from index 0 to 3
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Slicing substring from index -8 to 3
console.log(anotherString);

// Demonstrating trimming whitespace from a string
const newStringOne = "   hitesh    ";
console.log(newStringOne.trim());

// Replacing a specific substring within a URL
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // Replacing '%20' with '-'

// Checking if a string includes a specific substring
console.log(url.includes('sundar')); // Checking if URL includes 'sundar'

// Splitting a string based on a delimiter
console.log(gameName.split('-')); // Splitting gameName string by '-'
