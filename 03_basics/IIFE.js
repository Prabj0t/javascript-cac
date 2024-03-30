// Immediately Invoked Function Expressions (IIFE)


// want to immediately execute the function because reduce the polution by the global scope



// named IIFE with name chai()
(function chai(){
    console.log(`DB CONNECTED`);
})(); // semicolon is very importent to end the execution 


// simple IIFE
(() => {
    console.log(`DB CONNECTED Two`);
})();


// simple IIFE
((name) => {
    console.log(`DB CONNECTED three with me ${name}`);
})("Prabhjot");


