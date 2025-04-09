// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice elements (rock, paper, scissors) and message container
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Select elements to display user and computer scores
const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genCompChoice = () => {
  // Possible choices
  const options = ["rock", "paper", "scissors"];
  // Generate a random index (0, 1, or 2)
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to handle a draw game scenario
const drawGame = () => {
  msg.innerText = "Game is draw. Play Again."; // Display draw message
  msg.style.backgroundColor = "#423b0b"; // Set background color for draw message
};

// Function to handle game logic when the user makes a choice
const playGame = (userChoice) => {
  // Generate a random choice for the computer
  const compChoice = genCompChoice();

  // Nested function to display the winner and update scores
  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++; // Increment user's score
      userChoicePara.innerText = userScore; // Update user's score display
      msg.innerText = `You win. Congratulations!  Your ${userChoice} beats ${compChoice} `; // Display win message
      msg.style.backgroundColor = "green"; // Set background color for win
    } else {
      compScore++; // Increment computer's score
      compChoicePara.innerText = compScore; // Update computer's score display
      msg.innerText = `You lost. Try  Again. ${compChoice} beats Your ${userChoice} `; // Display loss message
      msg.style.backgroundColor = "red"; // Set background color for loss
    }
  };

  // Check if the game is a draw
  if (userChoice === compChoice) {
    drawGame(); // Call function to handle draw scenario
  } else {
    // Determine if the user wins
    let userWin = true;

    // Check each case based on the user's choice
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true; // Rock loses to paper
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true; // Paper loses to scissors
    } else {
      userWin = compChoice === "rock" ? false : true; // Scissors lose to rock
    }

    // Call function to show winner and update scores
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice (rock, paper, scissors)
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the user's choice based on the clicked element's id
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // Play the game with the user's choice
  });
});
