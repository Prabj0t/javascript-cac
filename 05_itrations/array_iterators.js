// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Iterating through the array using forEach method

// First way: Using anonymous function
// coding.forEach(function (val){
//     console.log(val);
// });

// Second way: Using arrow function
// coding.forEach((item) => {
//     console.log(item);
// });

// Third way: Using a named function
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// Fourth way: Using arrow function with index and array parameters
// coding.forEach((item, index, coding) => {
//     console.log(item, index, coding);
// });

// Fifth way: Iterating over an array of objects
const myCoding = [
    {
        langName: "javascript",
        langFileName: "js",
    },
    {
        langName: "C++",
        langFileName: "cpp",
    },
    {
        langName: "java",
        langFileName: "java",
    }
];

// Printing the language names from the array of objects
myCoding.forEach((item) => {
    console.log(item.langName);
});
