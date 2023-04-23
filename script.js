// Generates random value of Rock, Paper, or Scissor
const getComputerChoice = () => {
    // Generates a random number between 0 - 2
    let x = Math.random() * 3;
    // Rounds down to get a whole number
    let randomNum = Math.floor(x);

    // Returns a random value of Rock, Paper, or Scissor
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }
};

// Converts user input to lower case using the toLowerCase() method.
const lowerCase = () => {
    // Prompts the user to input a string
    let userInput = prompt();
    // Returns the user input in lower case
    return userInput.toLowerCase();
};

// Generates a random value of Rock, Paper, or Scissor
// for computerSelection
const computerSelection = getComputerChoice();

// Stores the user input in lower case as the player's selection
const playerSelection = lowerCase();
