const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Iterate through object properties using for...in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// Iterate through array indices using for...in loop
// In arrays, for...in loop iterates over keys (indices)
for (const key in programming) {
    console.log(programming[key]);
}


// Maps are not iterable with for...in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// This loop won't work as expected because maps are not iterable with for...in loop
for (const key in map) {
    console.log(key);
}

// Difference between for...in and for...of loops:
// for...in: Iterates over the enumerable properties of an object (keys for objects, indices for arrays)
// for...of: Iterates over the values of an iterable object (elements for arrays, values for maps, characters for strings)
