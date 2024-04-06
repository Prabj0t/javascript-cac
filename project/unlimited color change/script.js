
// const random_color = function () {
//   const hex = '0123456789ABCD';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// let changeId;
// const startChangingColor = function () {
//   function changeColor() {
//     document.body.style.backgroundColor = random_color();
//   }
//   changeId = setInterval(changeColor , 1000);
// };

// const stopChangingColor = function () {
//   clearInterval(changeId);
// };

// document.querySelector('#start').addEventListener('click', startChangingColor);

// document.querySelector('#stop').addEventListener('click', stopChangingColor);


  



// Function to generate a random color in hexadecimal format
const random_color = function () {
  const hex = '0123456789ABCD'; // Hexadecimal characters
  let color = '#'; // Initialize color with #
  // Generate a random color by appending 6 random hexadecimal characters
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // Append a random character from hex
  }
  return color; // Return the generated color
};

let changeId; // Variable to store the interval ID

// Function to start changing the background color at regular intervals
const startChangingColor = function () {
  // Internal function to change the background color using random_color()
  function changeColor() {
    document.body.style.backgroundColor = random_color(); // Change background color
  }
  // Check if an interval is not already running
  if (!changeId) {
    changeId = setInterval(changeColor, 1000); // Set interval to change color every 1000 ms (1 second)
  }
};

// Function to stop changing the background color
const stopChangingColor = function () {
  clearInterval(changeId); // Clear the interval using the stored ID
  changeId = null; // Reset the interval ID to null
};

// Event listener for the "Start" button to call startChangingColor()
document.querySelector('#start').addEventListener('click', startChangingColor);

// Event listener for the "Stop" button to call stopChangingColor()
document.querySelector('#stop').addEventListener('click', stopChangingColor);
