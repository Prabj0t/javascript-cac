const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach
// forEach returns undefined, as it is intended for side effects, not for creating a new array
const value = coding.forEach((item) => {
    return item; // This return statement has no effect
});
console.log(value); // Output: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter
// filter creates a new array containing elements that pass the test implemented by the provided function
const newNums = myNums.filter((num) => {
    return num > 4;
});

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books based on genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);

// Filtering books based on genre 'History' and published after 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);