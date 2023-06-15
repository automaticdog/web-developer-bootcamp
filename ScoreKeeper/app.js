const input = document.querySelector('#select');
const resetBtn = document.querySelector('#reset');
const addPlayerOne = document.querySelector('#player-one');
const addPlayerTwo = document.querySelector('#player-two');

const playerOneDisplay = document.querySelector('#player1');
const playerTwoDisplay = document.querySelector('#player2');

let maxRounds = input.value;
let playerOneScore = 0;
let playerTwoScore = 0;


// set maxRounds value when user selects a score to play to
input.addEventListener("change", () => {
  maxRounds = input.value;
})

// WHEN A PLAYER BUTTON IS CLICKED:
// 1) updated that player's displayed score value
// 2) check if either score == maxScore

function updateScores() {
  playerOneDisplay.innerText = playerOneScore;
  playerTwoDisplay.innerText = playerTwoScore;
}

addPlayerOne.addEventListener("click", () => {
  // console.log("player 1 clicked!")
  playerOneScore += 1;
  updateScores();
  if (playerOneScore >= maxRounds) {
    setWinner(playerOneDisplay);
    setLoser(playerTwoDisplay);
    disableButtons();
  }
})

addPlayerTwo.addEventListener("click", () => {
  // console.log("player 2 clicked!")
  playerTwoScore += 1;
  updateScores();
  if (playerTwoScore >= maxRounds) {
    setWinner(playerTwoDisplay);
    setLoser(playerOneDisplay);
    disableButtons();
  }
})

function setWinner(player) {
  player.classList.add('winner');
}
function setLoser(player) {
  player.classList.add('loser');
}

function disableButtons() {
  console.log("disabling buttons!")
  addPlayerOne.classList.toggle("disabled");
  addPlayerTwo.classList.toggle("disabled");
}
function enableButtons() {
  addPlayerOne.classList.remove("disabled");
  addPlayerTwo.classList.remove("disabled");
}

// RESET THE GAME:
resetBtn.addEventListener("click", function() {
  resetGame();
})

// 1) reset both displayed player scores
// 2) reset maxScore input to 1

function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.classList = '';
  playerTwoDisplay.classList = '';
  updateScores();
  enableButtons();
}