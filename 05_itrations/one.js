// Loop through array elements using a for loop
let array = [1, 34, 54, 5, 32, 2];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// Loop through elements of another array
let myarray = ["happy", "singh", "preet"];
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

// Loop from 0 to 10 with a conditional statement inside
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}

// Nested loops: Outer loop iterates from 1 to 10, inner loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Loop through elements of an array and print each element
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// Using break to exit loop prematurely when condition is met
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

// Using continue to skip current iteration and proceed to the next one
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}
