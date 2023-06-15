const input = document.querySelector('#select');
const scoreDisplay = document.querySelector('#score')
const buttons = document.querySelector('.btn-row');

const addPlayerOne = document.querySelector('#player-one');
const addPlayerTwo = document.querySelector('#player-two');

const resetBtn = document.querySelector('#reset');

let maxRounds = 1;
let currentScore = '';
let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneDisplay = document.querySelector('#player1');
const playerTwoDisplay = document.querySelector('#player2');

function updateScores() {
  playerOneDisplay.innerText = playerOneScore;
  playerTwoDisplay.innerText = playerTwoScore;
}

// WHEN A PLAYER BUTTON IS CLICKED:
// 1) updated that player's displayed score value
// 2) check if either score == maxScore

addPlayerOne.addEventListener("click", () => {
  // console.log("player 1 clicked!")
  playerOneScore += 1;
  updateScores();
  checkScore();
})

addPlayerTwo.addEventListener("click", () => {
  // console.log("player 2 clicked!")
  playerTwoScore += 1;
  updateScores();
  checkScore();
})

function enableButtons() {
  console.log("enabling buttons!")

  addPlayerOne.classList.remove("disabled");
  addPlayerTwo.classList.remove("disabled");
}

updateScores();

// set maxRounds value when user selects a score to play to
input.addEventListener("change", () => {
  console.log('input selected')
  maxRounds = input.value;
})

// WHEN A PLAYER BUTTON IS CLICKED:
// 1) updated that player's displayed score value
// 2) check if either score == maxScore

addPlayerOne.addEventListener("click", () => {
  // console.log("player 1 clicked!")
  playerOneScore += 1;
  updateScores();
  checkScore();
})

addPlayerTwo.addEventListener("click", () => {
  // console.log("player 2 clicked!")
  playerTwoScore += 1;
  updateScores();
  checkScore();
})

function compareScores() {
  console.log('comparing scores');
  if (playerOneScore > playerTwoScore) {
    console.log("first condition")
    playerOneDisplay.classList.add('winner');
    playerTwoDisplay.classList.add('loser');
    console.log(playerOneDisplay.classList)
  } else {
    setLoser(playerOneDisplay);
    setWinner(playerTwoDisplay);
  }
}

// RESET THE GAME:
resetBtn.addEventListener("click", function() {
  console.log("reset clicked!")
  resetGame();
})

// 1) reset both displayed player scores
// 2) reset maxScore input to 1

function resetGame() {
  console.log("resetting game!")
  maxRounds = input.value;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.classList = '';
  playerTwoDisplay.classList = '';
  updateScores();
}