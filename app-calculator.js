// //As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.

const buttons = document.querySelectorAll(".button");

const displays = document.querySelector("display");



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
    
    });
  });

const calculator = document.querySelector("#calculator");

calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  



























// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){

// }

// function calculate(){

// }

