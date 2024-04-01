// ["", "", ""] // array 
// [{}, {}, {}] // objects in array

// for of
// for (const iterator of object){
// }

// Iterate through array elements using for...of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(`each number is ${num}`);
}

// Iterate through characters of a string using for...of loop
const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps

// Create a Map
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");  // maps only take unique entries


// Print key-value pairs using for...of loop
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Constructing the map 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// This will give errors because objects are not iterable with for of
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
