const marvel_heros = ["thor", "IronMan", "Spiderman"];
const dc_heros = ["batman", "superman", "flash"];

console.log("Original Marvel Heroes Array:", marvel_heros);

// Concatenate arrays and store the result in a new array
const all_heros = marvel_heros.concat(dc_heros);

console.log("Modified Marvel Heroes Array after Concatenation:", marvel_heros);
console.log("Combined Array of All Heroes (Marvel and DC):", all_heros);

// Use spread operator instead of concat to create a new array
const all_new_heros = [...marvel_heros, ...dc_heros];

console.log("Combined Array of All Heroes (using Spread Operator):", all_new_heros);


// Define an array with nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];

// Flatten the nested arrays recursively using the flat method with Infinity depth
const real_another_array = another_array.flat(Infinity);

// Output the flattened array
console.log("Flattened Array:", real_another_array);

// Check if the given value is an array
console.log("Check if 'Prabhjot' is an array:", Array.isArray("Prabhjot"));

// Convert a string to an array of its characters
console.log("Convert 'Prabjot' string to an array of characters:", Array.from("Prabjot"));

// Convert an object to an array
console.log("Convert {name: 'prabh'} object to an array:", Array.from({ name: "prabh" })); // intresting case 

// Define three variables representing scores
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Create an array using the Array.of() method and pass the scores as arguments
// This method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(score1, score2, score3));
