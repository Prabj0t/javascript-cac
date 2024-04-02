const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using map to transform each element in the array
// The first map multiplies each number by 10
// The second map adds 1 to each resulting number
// The filter method is then used to keep only numbers greater than or equal to 40
const newNums = myNumers
                .map((num) => num * 10 ) // Multiply each number by 10
                .map((num) => num + 1)   // Add 1 to each resulting number
                .filter((num) => num >= 40); // Filter numbers greater than or equal to 40

console.log(newNums); // Output: [41, 51, 61, 71, 81, 91]
