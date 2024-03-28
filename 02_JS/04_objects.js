// const tinderUser = new Object()
const tinderUser = {}

// Created an empty object 'tinderUser' using object literal notation

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Added properties 'id', 'name', and 'isLoggedIn' to the 'tinderUser' object

console.log(tinderUser);

// Logged the 'tinderUser' object to the console

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Created an object 'regularUser' with nested properties using object literal notation

console.log(regularUser.fullname.userfullname.firstname);

// Logged the 'firstname' property of the nested objects in 'regularUser' object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Created three objects 'obj1', 'obj2', and 'obj4' using object literal notation

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// Commented out the above lines, which were trying to merge objects obj1, obj2, and obj4 into a new object obj3 using object literal notation and Object.assign()

// use spread Operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// Created a new object 'obj3' by merging 'obj1' and 'obj2' using the spread operator

// most used when user come from database array has many objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Created an array 'users' containing multiple objects, each representing a user

console.log(users[1].email);

// Logged the email of the user at index 1 in the 'users' array

// console.log(Object.keys(tinderUser)); // it give all the keys in the array datatype
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Commented out the above lines, which were used to demonstrate Object.keys(), Object.values(), and Object.entries() methods

// if you loop through the object may some value may not be exist there so to check this.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Checked if 'isLoggedIn' property exists in the 'tinderUser' object using hasOwnProperty() method and logged the result

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Created an object 'course' representing a course
const {courseInstructor: instructor} = course

// Destructured the 'courseInstructor' property from the 'course' object into a variable 'instructor'
console.log(instructor);

// Logged the value of 'instructor' variable

[
    {},
    {},
    {}
]

// Logged an array containing three empty objects to the console
