// Select all boxes (cells) of the tic-tac-toe grid
let boxes = document.querySelectorAll(".box");

// Select the reset button for resetting the game
let resetBtn = document.querySelector("#reset-btn");

// Select the new game button for starting a new game
let newGameBtn = document.querySelector("#new-game");

// Select the message container to show the winner's message
let msgContainer = document.querySelector(".msg-container");

// Select the element where the winner message will be displayed
let msg = document.querySelector("#msg");

// Variable to track the turn; true represents "O"'s turn and false represents "X"'s turn
let turnO = true;

// Array defining all possible winning patterns (indices of grid positions)
const winPatterns = [
  [0, 1, 2], // Top row
  [0, 3, 6], // Left column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [1, 4, 7], // Middle column
  [2, 4, 6], // Diagonal from top-right to bottom-left
  [2, 5, 8], // Right column
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
];

// Function to reset the game state
const resetGame = () => {
  turnO = true; // Reset turn to "O"
  enableBoxes(); // Enable all boxes for a new game
  msgContainer.classList.add("hide"); // Hide the winner message
};

// Add a click event listener to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"; // Set box text to "O" if it's "O"'s turn
      turnO = false; // Switch to "X"'s turn
    } else {
      box.innerText = "X"; // Set box text to "X" if it's "X"'s turn
      turnO = true; // Switch to "O"'s turn
    }
    box.disabled = true; // Disable the clicked box to prevent further clicks
    checkWinner(); // Check if there's a winner after the move
  });
});

// Function to disable all boxes (used after a winner is determined)
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true; // Disable each box
  }
};

// Function to enable all boxes (used for resetting or starting a new game)
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false; // Enable each box
    box.innerText = ""; // Clear the text in each box
  }
};

// Function to display the winner message and disable the board
const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`; // Update message with the winner
  msgContainer.classList.remove("hide"); // Show the message container
  disableBoxes(); // Disable all boxes since the game is over
};

// Function to check if there is a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // Get the values of the three positions in the current winning pattern
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    // Check if all three positions are non-empty and have the same value
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val); // Call showWinner with the winning value
      }
    }
  }
};

// Add click event listener to "New Game" button to reset the game
newGameBtn.addEventListener("click", resetGame);

// Add click event listener to "Reset" button to reset the game
resetBtn.addEventListener("click", resetGame);
