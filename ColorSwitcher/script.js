// Define the function to change the color scheme
function changeColorScheme(colorchange) {
    document.body.style.backgroundColor = colorchange;
  }
  
  // Add event listeners to the color buttons
  document.querySelector('#grey').addEventListener('click', function () {
    changeColorScheme('grey');
  });
  
  document.querySelector('#white').addEventListener('click', function () {
    changeColorScheme('white');
  });
  
  document.querySelector('#blue').addEventListener('click', function () {
    changeColorScheme('blue');
  });
  
  document.querySelector('#yellow').addEventListener('click', function () {
    changeColorScheme('yellow');
  });
  
  
  // solution by CWC
  // console.log("hitesh")
  // const buttons = document.querySelectorAll('.button');
  // const body = document.querySelector('body');
  
  // buttons.forEach(function (button) {
  //   console.log(button);
  //   button.addEventListener('click', function (e) {
  //     console.log(e);
  //     console.log(e.target);
  //     if (e.target.id === 'grey') {
  //       body.style.backgroundColor = e.target.id;
  //     }
  //     if (e.target.id === 'white') {
  //       body.style.backgroundColor = e.target.id;
  //     }
  //     if (e.target.id === 'blue') {
  //       body.style.backgroundColor = e.target.id;
  //     }
  //     if (e.target.id === 'yellow') {
  //       body.style.backgroundColor = e.target.id;
  //     }
      
  //   });
  // });
  
  
  
  