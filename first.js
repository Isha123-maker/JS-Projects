console.log("Hello, Isha!");

//map method for arrays

let arr = [3, 4, 5, 7, 8];
arr.map((val) => {
  console.log(val * val);
});

//random game

let randomNumber = Math.floor(Math.random() * 10) + 1;

let userNum = prompt("Enter random number between 1-10:");

while (userNum != randomNumber) {
  userNum = prompt(
    "You have gussed wrong number. Try again! Enter random number between 1-10:"
  );
}

console.log("Congratulations! You guessed the right number.");
