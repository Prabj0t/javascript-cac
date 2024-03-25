let value = 3
let negativeValue = -value

console.log(negativeValue)

console.log("first ->", 2 + 2);
console.log("second ->", 2 - 2);
console.log("third ->", 2 * 2);
console.log("4th ->", 2 ** 2);
console.log("5th ->", 2 / 2);
console.log("6th ->", 2 % 2);
console.log("7th ->", 2);


// ========================Comparisons========================

console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)


// (strict check -> ===) check datatype also 


console.log("2" === 2)









// ================== interview related questions =====================

//  primitive and non primitive (call by value, call by reference)

//  primitive:7 (call by value)  ->   string, number, bolean, null, undefined, symbol , BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let useEmail;


const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);
const bigNumber = 1345234653456534642n

//  non primitive:3 (call by reference) -> arrays, object, function 

//  dynamically type vs statically -> js is dynamically typed

// id === anotherId => false
// array, object, function overview 
// typeof datatyped is available on documentation




// Reference (NoN primitive )
// Array , object, function

// Array
const heros = ["shaktiman" , "naagraaj" , "Doga"];

// Object
let myObj = {
    name : "Prabhjot",
    age : 21,
}

// function
const myfunction = function(){
    console.log("Hello function is called");
}

myfunction();

console.log(typeof anotherId)