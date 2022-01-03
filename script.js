let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const getAbsoluteDistance = (oneNum, twoNum) => Math.abs(oneNum - twoNum);
  let humanDistance = getAbsoluteDistance(currentHumanGuess - target);
  let computerDistance = getAbsoluteDistance(computerGuess - target);

  if (humanDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  winner === "human" && humanScore++;
  winner === "computer" && computerScore++;
};

const advanceRound = () => currentRoundNumber++;
