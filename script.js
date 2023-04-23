
// Generates random value of Rock, Paper, or Scissor
const getComputerChoice = () => {

  // Generates a random number between 0 - 2
  let x = Math.random() * 3
  // Rounds down to get a whole number
  let randomNum = (Math.floor(x))

  // Returns a random value of Rock, Paper, or Scissor
  switch (randomNum) {
    case 0: return "Rock"
    case 1: return "Paper"
    case 2: return "Scissor"
  }
}

