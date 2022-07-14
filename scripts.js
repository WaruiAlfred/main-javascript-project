// Computer play function that randomly returns a value in the options array
const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  let selectedOption = options[Math.floor(Math.random() * options.length)];
  return selectedOption;
};

// console.log(computerPlay());

const playRound = (playerSelection, computerSelection) => {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();

  const winnerDeclaration = (playOutcome, beater, beaten) =>
    `"You ${playOutcome}! ${beater} beats ${beaten}"`;

  const tie = (selection) => `"No winner! You both selected ${selection}"`;

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

    // Player has not made a selection
    default:
      return "Player has to make a selection to continue playing!";
  }
};

// const playerSelection = "scissors";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

const game = () => {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Input your selection:"rock","paper","scissors".
      ${5 - i} rounds remaining!
      `
    );
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    const playResult = playRound(playerSelection, computerSelection);

    if (playResult.includes("lose")) {
      computerScore++;
    } else if (playResult.includes("win!")) {
      playerScore++;
    }
  }

  if (computerScore > playerScore)
    return `Computer wins! Total score - ${computerScore}`;
  if (playerScore > computerScore)
    return `Player wins! Total score - ${playerScore}`;
  if (computerScore === playerScore) return "It is a tie!";
};

console.log(game());
