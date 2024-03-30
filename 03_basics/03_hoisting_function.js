// Function declaration named "one"
function one(){
    // Variable declaration in the scope of function "one"
    const username = "hitesh";

    // Function declaration named "two" within function "one"
    function two(){
        // Variable declaration in the scope of function "two"
        const website = "youtube";
        // Logging the value of "username" from the outer scope
        console.log(username);
    }

    // Calling function "two"
    two();
}

// Uncommenting this line would result in an error because "two" is not accessible outside its scope
// one();

// Conditional block
if (true) {
    // Variable declaration in the scope of the conditional block
    const username = "hitesh";
    // Nested conditional block
    if (username === "hitesh") {
        // Variable declaration in the scope of the nested conditional block
        const website = "youtube";
        // Logging the concatenation of "username" and "website"
        // Uncommenting this line would log "hitesh youtube" as expected
        // console.log(username + website);
    }
    // Uncommenting this line would result in an error because "website" is not accessible outside its scope
    // console.log(website);
}

// Uncommenting this line would result in an error because "username" is not accessible outside its scope
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// Logging the result of calling function "addone" with argument 5
console.log(addone(5));

// Function declaration (method one)
function addone(num){
    // Returning the argument incremented by 1
    return num + 1;
}

// Calling function "addTwo" before its declaration
addTwo(5); // This line will throw an error: "TypeError: addTwo is not a function"

// Function expression (method second)
const addTwo = function(num){
    // Returning the argument incremented by 2
    return num + 2;
}

// Differences:
// - In method one, the function declaration is hoisted, so it can be called before it's declared.
// - In method two, the function expression isn't hoisted, so calling it before its declaration results in an error.
// - Method one is more readable and preferred for named functions.
// - Method two is useful when you want to assign a function to a variable dynamically or for anonymous functions.
