const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, check spelling.");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
/* console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
 */
const winner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won.";
    } else {
      return "Player wins.";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won.";
    } else {
      return "Player wins.";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won.";
    } else {
      return "Player wins.";
    }
  }
  if (userChoice === "bomb") {
    return "Player wins";
  }
};
/* console.log(winner("rock", "scissors"));
console.log(winner("paper", "scissors"));
console.log(winner("paper", "paper"));
 */
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You chosed ${userChoice}`);
  console.log(`Computer chosed ${computerChoice}`);
  console.log(winner(userChoice, computerChoice));
};

playGame();
