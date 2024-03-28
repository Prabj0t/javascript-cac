// Singleton object created using object literal notation
const userDetailsLiteral = {
    name: "Aman",
    age: 22,
    company: "tutorialspoint"
};

// Non-singleton object created using constructor function notation
function User(name, age, company) {
    this.name = name;
    this.age = age;
    this.company = company;
}

const userDetailsConstructor1 = new User("John", 30, "exampleCompany");
const userDetailsConstructor2 = new User("Alice", 25, "anotherCompany");

// Changing properties of userDetailsLiteral affects the single instance across the script
userDetailsLiteral.age = 23;
console.log(userDetailsLiteral); // Output: { name: 'Aman', age: 23, company: 'tutorialspoint' }

// Changing properties of userDetailsConstructor1 does not affect userDetailsConstructor2
userDetailsConstructor1.age = 31;
console.log(userDetailsConstructor1); // Output: User { name: 'John', age: 31, company: 'exampleCompany' }
console.log(userDetailsConstructor2); // Output: User { name: 'Alice', age: 25, company: 'anotherCompany' }
