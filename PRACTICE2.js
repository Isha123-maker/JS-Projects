//declaration of object
let testObject = {
  name: "isha",
  rollNo: 14,
  program: "BS Software Engineering",
};
console.log(testObject);

//script for calculating volume

// Function to calculate the volume of a box
function calculateVolume() {
  // Prompt user for dimensions
  let height = parseFloat(prompt("Enter the height of the box:")); //parseFloat convert string to floating number
  let width = parseFloat(prompt("Enter the width of the box:")); //prompt input from user in string
  let length = parseFloat(prompt("Enter the length of the box:"));

  // Check if the inputs are valid numbers
  if (isNaN(height) || isNaN(width) || isNaN(length)) {
    console.log(
      "Invalid input. Please enter numeric values for all dimensions."
    );
  } else {
    // Calculate the volume
    let volume = height * width * length;
    console.log("The volume of the box is: " + volume + " cubic units.");
  }
}

// Call the function to run the script
calculateVolume();

// script that input number
let number = prompt("Enter a Random number");
if (number > 90 && number < 110) {
  alert("Bingo!"); // User immediately sees "Bingo!" in a pop-up if the number is within the range.
} else {
  alert("Miss");
}

//ternary operator in place of if
let number2 = prompt("enter number");
let message = number2 > 90 && number2 < 110 ? "Bingo!" : "Miss";
alert(message);

//simple calculator application
let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter scond number:"));
let operand = prompt(
  "Enter operation you want to perform on numbers:(+, -, *, /)"
);
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
  switch (operand) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Error! Unknown Operand";
  }
} else {
  result = "Invalid Input!";
}
alert(result);

//for of loop
let values = [20, 50, 70, 60, 50];
let sum = 0;
for (let number of values) {
  sum += number;
}
console.log(sum);

//for in loop
let user = ["apple", "ball", "cat", "duck"];
for (let key in user) {
  console.log(`${key} -> ${user[key]}`);
}

// //use of loop
let upperLimit = Number(prompt("Enter Upper Limit:"));
let lowerLimit = Number(prompt("Enter Lower Limit:"));

if (
  !Number.isNaN(upperLimit) &&
  !Number.isNaN(lowerLimit) &&
  upperLimit > lowerLimit
) {
  for (i = upperLimit; i < lowerLimit; i -= 10) {
    console.log(i);
  }
}

//use of for of loop

let numbers = [21, 45, 100, 11, 12, 78, 71, 4, 39, 22];

for (number of numbers) {
  console.log(number);
}

for (number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

for (number of numbers) {
  if (number > 10 && number < 90) {
    console.log(number);
  }
}

//code for display movie rating and tiltle

let movies = [];
while (true) {
  let title = prompt("Enter movie title:");
  let rating = prompt("Enter movie rating(imdb):");

  if (
    title === null ||
    title.trim() === "" ||
    rating === null ||
    rating.trim() === ""
  ) {
    break;
  } else {
    movies.push({
      title: title,
      rating: Number(rating),
    });
  }
}

console.log("All movies with rating under 7 is:");
for (let movie of movies) {
  if (movie.rating < 7) {
    console.log(`${movie.title} (${movie.rating})`);
  }
}

console.log("All movies with rating above 7 is:");
for (let movie of movies) {
  if (movie.rating >= 7) {
    console.log(`${movie.title} (${movie.rating})`);
  }
}
