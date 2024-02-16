function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * 3);

  return options[index];
}

function formatSelection(selection) {
  return selection.slice(0, 1).toUpperCase() + selection.slice(1).toLowerCase();
}

function formatMessages(playerSelection, computerSelection) {
  const formattedComputerSelect = formatSelection(computerSelection);
  const formattedPlayerSelect = formatSelection(playerSelection);

  const winMsg = `You win! ${formattedPlayerSelect} beats ${formattedComputerSelect}`;
  const loseMsg = `You lose! ${formattedComputerSelect} beats ${formattedPlayerSelect}`;
  const tieMsg = `It's a tie! You've both picked ${formattedComputerSelect}`;

  return {
    winMsg,
    loseMsg,
    tieMsg,
  }
}

function getResult(playerSelection, computerSelection, winMsg, loseMsg, tieMsg) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return winMsg;
    }
    if ( computerSelection === 'paper') {
      return loseMsg;
    }
    return tieMsg;
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return winMsg;
    }
    if (computerSelection === 'scissors') {
      return loseMsg;
    }
    return tieMsg;
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return winMsg;
    }
    if (computerSelection === 'rock') {
      return loseMsg;
    }
    return tieMsg;
  }
}


function playRound(playerSelection, computerSelection) {
  const {winMsg, loseMsg, tieMsg} = formatMessages(playerSelection, computerSelection);
  return getResult(playerSelection, computerSelection, winMsg, loseMsg, tieMsg);
}

function playGame() {
  let playerScore = computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Pick between rock, paper and scissors.');
    const computerSelection = getComputerChoice();
    const { winMsg, loseMsg } = formatMessages(playerSelection, computerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === winMsg) playerScore++;
    if (result === loseMsg) computerScore++;
  }
  console.log(
`The final score is:
Player score: ${playerScore}
Computer score: ${computerScore}
`);
}

playGame();