//Global Variables and functions
const options = ["rock", "paper", "scissors"];

const winnerDeclaration = (playOutcome, beater, beaten) =>
  `"You ${playOutcome}! ${beater} beats ${beaten}"`;

const tie = (selection) => `"No winner! You both selected ${selection}"`;

const promptUserForInput = (i) =>
  prompt(
    `Input your selection:"rock","paper","scissors".
  ${5 - i} rounds remaining!
  `
  );

const collectAndValidateUserInput = function (i) {
  const computerSelection = computerPlay();
  const playerSelection = promptUserForInput(i);
  const lowerCasePlayerSelection = playerSelection.trim().toLowerCase();

  if (options.includes(lowerCasePlayerSelection)) {
    console.log(playRound(playerSelection, computerSelection));
  } else {
    return "Invalid option!Try again!";
  }

  return playRound(playerSelection, computerSelection);
};

// Computer play function that randomly returns a value in the options array
const computerPlay = function () {
  let selectedOption = options[Math.floor(Math.random() * options.length)];
  return selectedOption;
};

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();

  switch (computerSelectionLowerCase) {
    // computerSelectionLowerCase === "rock"
    case "rock":
      if (playerSelectionLowerCase === "paper") {
        return winnerDeclaration(
          "win",
          playerSelectionLowerCase,
          computerSelectionLowerCase
        );
      }

    case "rock":
      if (playerSelectionLowerCase === "scissors") {
        return winnerDeclaration(
          "lose",
          computerSelectionLowerCase,
          playerSelectionLowerCase
        );
      }

    case "rock":
      if (playerSelectionLowerCase === "rock")
        return tie(playerSelectionLowerCase);
      break;

    // computerSelectionLowerCase === "paper"
    case "paper":
      if (playerSelectionLowerCase === "rock") {
        return winnerDeclaration(
          "lose",
          computerSelectionLowerCase,
          playerSelectionLowerCase
        );
      }

    case "paper":
      if (playerSelectionLowerCase === "scissors") {
        return winnerDeclaration(
          "win",
          playerSelectionLowerCase,
          computerSelectionLowerCase
        );
      }

    case "paper":
      if (playerSelectionLowerCase === "paper")
        return tie(playerSelectionLowerCase);
      break;

    // computerSelectionLowerCase === "scissors"
    case "scissors":
      if (playerSelectionLowerCase === "paper") {
        return winnerDeclaration(
          "lose",
          computerSelectionLowerCase,
          playerSelectionLowerCase
        );
      }

    case "scissors":
      if (playerSelectionLowerCase === "rock") {
        return winnerDeclaration(
          "win",
          playerSelectionLowerCase,
          computerSelectionLowerCase
        );
      }

    case "scissors":
      if (playerSelectionLowerCase === "scissors")
        return tie(playerSelectionLowerCase);
      break;

    default:
      return "An error occurred!";
  }
};

// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

const game = () => {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playResult = collectAndValidateUserInput(i);

    if (playResult.includes("lose")) {
      computerScore++;
    } else if (playResult.includes("win!")) {
      playerScore++;
    } else if (playResult.includes("Invalid")) {
      alert("Invalid option!Try again!");
      i--;
    }
  }

  if (computerScore > playerScore)
    return `Computer wins! Total score - ${computerScore}`;
  if (playerScore > computerScore)
    return `Player wins! Total score - ${playerScore}`;
  if (computerScore === playerScore) return "It is a tie!";
};

console.log(game());
