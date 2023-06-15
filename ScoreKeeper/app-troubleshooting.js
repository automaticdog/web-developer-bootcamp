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
  console.log("updating scores! " + playerOneScore)
  playerOneDisplay.innerText = playerOneScore;
  playerTwoDisplay.innerText = playerTwoScore;
}

// WHEN A PLAYER BUTTON IS CLICKED:
// 1) updated that player's displayed score value
// 2) check if either score == maxScore

function enableButtons() {
  console.log("enabling buttons!")

  addPlayerOne.classList.remove("disabled");
  addPlayerTwo.classList.remove("disabled");

  addPlayerOne.addEventListener("click", () => {
    // console.log("player 1 clicked!")
    playerOneScore += 1;
    console.log("button click added +1 to P1 score - new score is " + playerOneScore)
    console.log("call updateScores")
    updateScores();
    console.log("after updating scores: " + playerOneScore)
    console.log("call checkScore")
    checkScore();
    console.log("after checking scores: " + playerOneScore)
  })
  
  addPlayerTwo.addEventListener("click", () => {
    // console.log("player 2 clicked!")
    playerTwoScore += 1;
    updateScores();
    checkScore();
  })
  console.log("enableButtons END")
}

updateScores();
enableButtons();

// set maxRounds value when user selects a score to play to
input.addEventListener("change", () => {
  // console.log('input selected')
  maxRounds = input.value;
})

function disableButtons() {
  console.log("disabling buttons!")
  addPlayerOne.classList.toggle("disabled");
  addPlayerTwo.classList.toggle("disabled");
}

function checkScore() {
  console.log("checking score!")
  if (playerOneScore >= maxRounds || playerTwoScore >= maxRounds) {
    console.log("checkScore calls compareScores")
    compareScores();
    console.log("checkScore " + playerOneScore)
  }
}

function compareScores() {
  console.log('comparing scores');
  if (playerOneScore > playerTwoScore) {
    setWinner(playerOneDisplay);
    setLoser(playerTwoDisplay);
  } else {
    setLoser(playerTwoDisplay);
    setWinner(playerTwoDisplay);
  }
  console.log("compareScores calls disableButtons")
  disableButtons();
  console.log("compareScores " + playerOneScore)
}

function setWinner(player) {
  player.classList.add('winner');
}
function setLoser(player) {
  player.classList.add('loser');
}

// RESET THE GAME:
resetBtn.addEventListener("click", function() {
  console.log("reset clicked!")
  console.log("call resetGame")
  resetGame();
  console.log("resetBtn eventListener " + playerOneScore)
})

// 1) reset both displayed player scores
// 2) reset maxScore input to 1

function resetGame() {
  console.log("resetting game!")
  playerOneScore = 0;
  playerTwoScore = 0;
  console.log("resetGame calls updateScores")
  updateScores();
  console.log(playerOneScore)
  console.log("resetGame calls enableButtons")
  enableButtons();
  console.log("resetGame " + playerOneScore)
}