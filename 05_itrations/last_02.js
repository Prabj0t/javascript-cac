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



// reduce callback function


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// 0 is a start value for accumlators
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

// Applying reduce to calculate the total price of items in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// The reduce method is used to accumulate the total price of items in the shopping cart
// Starting with an initial value of 0, each item's price is added to the accumulator
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996