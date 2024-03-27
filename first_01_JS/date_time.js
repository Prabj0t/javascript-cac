// Working with Date objects and methods

// Create a new Date object representing the current date and time
let currentDate = new Date();

// Display various representations of the Date object
console.log('Current Date object:', currentDate);
console.log('String representation:', currentDate.toString());
console.log('Date string:', currentDate.toDateString());
console.log('ISO string:', currentDate.toISOString());
console.log('JSON string:', currentDate.toJSON());
console.log('Localized date string:', currentDate.toLocaleDateString());
console.log('Localized date and time string:', currentDate.toLocaleString());
console.log('Localized time string:', currentDate.toLocaleTimeString());

// Example Date object representing a specific moment
const specificDate = new Date("2024-01-04T07:35:09.154Z");
console.log('Specific Date:', specificDate);
console.log('String:', specificDate.toString());
console.log('Date string:', specificDate.toDateString());
console.log('ISO string:', specificDate.toISOString());
console.log('JSON:', specificDate.toJSON());
console.log('Localized date string:', specificDate.toLocaleDateString());
console.log('Localized date and time string:', specificDate.toLocaleString());
console.log('Localized time string:', specificDate.toLocaleTimeString());

// Creating custom Date objects

// Create a Date object for January 23, 2023
let customDate1 = new Date(2023, 0, 23);
console.log('Custom Date 1:', customDate1);

// Create a Date object for January 23, 2023 at 5:03 AM
let customDate2 = new Date(2023, 0, 23, 5, 3);
console.log('Custom Date 2:', customDate2);

// Create a Date object from a string representation of the date (YYYY-MM-DD)
let customDate3 = new Date("2023-01-14");
console.log('Custom Date 3:', customDate3);

// Create a Date object from a string representation of the date (MM-DD-YYYY)
let customDate4 = new Date("01-14-2023");
console.log('Custom Date 4:', customDate4);

// Working with timestamps

// Get the current timestamp in milliseconds since January 1, 1970
let currentTimeStamp = Date.now();
console.log('Current Timestamp:', currentTimeStamp);

// Get the timestamp for a specific Date object in milliseconds since January 1, 1970
console.log('Timestamp for Custom Date 1:', customDate1.getTime()); 

// Get the current timestamp in seconds since January 1, 1970 (dividing milliseconds by 1000)
console.log('Current Timestamp in Seconds:', Math.floor(Date.now()/1000));

// Working with Date methods

// Create a new Date object representing the current date and time
let newDate = new Date();
console.log('New Date object:', newDate);

// Get the month of the Date object (0-indexed, January is 0)
console.log('Month:', newDate.getMonth() + 1);

// Get the day of the week of the Date object (0-indexed, Sunday is 0)
console.log('Day of the week:', newDate.getDay());

// Example of using backticks to create a full date and time string
console.log('Formatted Date:', `${newDate.getDay()} and the time`);

// Example of getting the full weekday name using the toLocaleString method
console.log('Full Weekday:', newDate.toLocaleString("default", { weekday: "long" }));
