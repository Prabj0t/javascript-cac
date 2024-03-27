// ++++++++++++++++++++++++++++++++++++


// [ stack and heap memory ]
// Primitive data type goes to Stack we get a copy of that value.
// Non-Primitive data type goes to Heap we get refrence of that value.  



// premitive
let myfirst = "Prabhjot"
let myother = myfirst

myother = "newname"

console.log(myfirst);
console.log(myother);


// non-Premitive

let firstObject = {
    email: "Prab@gmail.com",
    name: "prabh"
}

let secondobject = firstObject;

secondobject.email = "newuser@gmail.com"
console.log(firstObject.email);
console.log(secondobject.email);
