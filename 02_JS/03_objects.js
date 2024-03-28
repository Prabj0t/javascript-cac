// Define a symbol for unique property keys
const mySym = Symbol("key1");

// Define an object using object literals
const JsUser = {
    name: "Prabh",
    "full Name" : "Prabhjot Singh", // Property name with space
    age: 18,
    location: "Mansa", // Corrected spelling of 'location'
    [mySym]: "mykey1", // Using symbol as a property key
    mySym : "mykey1 but not symbol" // Overriding the symbol property with a string value
}

// Access the object properties using dot notation and square brackets
console.log(JsUser.location); // Output: Mansa
console.log(JsUser["name"]); // Output: Prabh
console.log(JsUser["full Name"]); // Output: Prabhjot Singh
console.log(JsUser.mySym); // Output: mykey1 but not symbol
console.log(JsUser[mySym]); // Output: mykey1

// Modify a property of the object
JsUser.name = "newName";

// Freeze the object to make it immutable
// Object.freeze(JsUser);

// Attempt to modify a property after freezing
JsUser.location = "New Location"; // This change will not take effect

// Log the modified property and attempt to modify it
console.log(JsUser.name); // Output: newName
JsUser.name = "anotherNewName"; // This change will not take effect

// Log the object to see if it has been modified
console.log(JsUser); // Output: { name: 'anotherNewName', 'full Name': 'Prabhjot Singh', age: 18, location: 'New Location', mySym: 'mykey1 but not symbol', [Symbol(key1)]: 'mykey1' }

// Define a method for the JsUser object to greet users
JsUser.greeting = function(){
    console.log(`Hello Js Users, ${this.name}`);
}

// Call the greeting method and log the return value
console.log(JsUser.greeting()); // Output: Hello Js Users, anotherNewName
            
