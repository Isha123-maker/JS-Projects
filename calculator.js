// This JavaScript file adds functionality to a simple calculator.
// It processes user clicks on buttons and performs operations like clear, delete, evaluation, and number/operand input.

// Select all the buttons in the calculator
let buttons = document.querySelectorAll("button");

// Select the input box where the user input and result will be displayed
let inp = document.querySelector("#display-box");

// Initialize an empty string to store the input
let string = "";

// Loop through each button and add a click event listener
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    // Check if the clicked button is 'AC' (All Clear)
    if (e.target.innerHTML == "AC") {
      string = ""; // Reset the input string
      inp.value = string; // Clear the input box
    }
    // Check if the clicked button is 'Del' (Delete the last character)
    else if (e.target.innerHTML == "Del") {
      // Remove the last character from the string
      string = string.substring(0, string.length - 1);
      inp.value = string; // Update the input box
    }
    // Check if the clicked button is '=' (Evaluate the expression)
    else if (e.target.innerHTML == "=") {
      // Use eval() to evaluate the mathematical expression in the string
      string = eval(string);
      inp.value = string; // Display the result in the input box
    }
    // For all other buttons (numbers and operators)
    else {
      string += e.target.innerHTML; // Append the button's content to the input string
      inp.value = string; // Update the input box with the new value
    }
  });
}
