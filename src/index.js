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

// const defaultScore = {
//   playerScore: 0,
//   computerScore: 0,
// }

const actualScore = {
  playerScore: 0,
  computerScore: 0,
}

function declareWinner(winner) {

  return winner === 'player' ? 'Player has reached 5 points and won the match!' : 'Computer has reached 5 points and won the match!'
}

function resetScores() {
  actualScore.playerScore = 0;
  actualScore.computerScore = 0;
  playerScoreSpan.textContent = actualScore.playerScore;
  computerScoreSpan.textContent = actualScore.computerScore;
}

function setScores() {
  playerScoreSpan.textContent = actualScore.playerScore;
  computerScoreSpan.textContent = actualScore.computerScore;
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const { winMsg, loseMsg, tieMsg } = formatMessages(playerSelection, computerSelection);
  const result = playRound(playerSelection, computerSelection);
  switch(true) {
    case (result.includes('win')):      
      playDescription.textContent = winMsg;
      actualScore.playerScore++;
      console.log('actualScore:', actualScore)
      setScores();
      break;
    case (result.includes('lose')):
      playDescription.textContent = loseMsg;
      actualScore.computerScore++;
      setScores();
      break;
    default:
      playDescription.textContent = tieMsg;
  }
  const winner = document.querySelector('#winner');
  if (actualScore.playerScore >= 5) {
    winner.textContent = declareWinner('player');
    resetScores();
  } 
  if (actualScore.computerScore >= 5) {
    winner.textContent = declareWinner('computer');
    resetScores();
  }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetScoreBtn = document.querySelector('#resetScore');
const results = document.querySelector('#results');
const playerScoreSpan = document.querySelector('#playerScore');
const computerScoreSpan = document.querySelector('#computerScore');
const playDescription = document.querySelector('#playDescription')

rockBtn.addEventListener('click', () => playGame('rock'))
paperBtn.addEventListener('click', () => playGame('paper'))
scissorsBtn.addEventListener('click', () => playGame('scissors'))



// playGame();