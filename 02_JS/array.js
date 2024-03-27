// - Arrays in JavaScript are dynamic, meaning their size can change dynamically by adding or removing elements.
// - The concept of shallow copy refers to copying the array reference, not the actual values.
//   Modifying the copied array will affect the original array if the elements are objects or arrays themselves.
// - It's essential to handle array bounds carefully to avoid accessing elements that do not exist, which can lead to errors.


// Define an array 
const myArr = [0, 1, 4, 23, 12, 1, 31];

// Define an array
const myHeros = ["shaktimaan", "widow"];

// Output the element at index 1 of the myHeros array
console.log(myHeros[1]); // Output: widow





// Remove the last element from the myArr array
myArr.pop();

// Define the starting index (inclusive) and number of elements to remove from the myArr array
const startIndex = 2;
const deleteCount = 2;

// Remove elements from the myArr array starting from the specified index
const removedElements = myArr.splice(startIndex, deleteCount);
console.log(myArr); 
console.log(removedElements);


// Additional Information:
// - The `splice()` method can also take additional arguments to specify elements to insert in place of the removed elements.
// - If only the starting index is provided, `splice()` will remove all elements from that index to the end of the array.
// - The method returns an array containing the removed elements, or an empty array if no elements are removed.
// - `splice()` modifies the original array and can be used for various array manipulation tasks such as deleting, inserting, or replacing elements.



const fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 1 element starting from index 2, and insert 'grape' and 'kiwi'
const removedElements2 = fruits.splice(2, 1, 'grape', 'kiwi');

console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'date']
console.log(removedElements2); // Output: ['cherry']



// Remove the first element from the myArr array
myArr.shift();

// Add the value 1212 to the beginning of the myArr array
myArr.unshift(1212);

// Join the elements of the myArr array into a single string separated by commas
const newarr = myArr.join();

// Output the modified myArr array and the joined string representation
console.log(myArr);   // Output: [1212, 4, 23, 12, 1, 31]
console.log(newarr);  // Output: "1212,4,23,12,1,31"
