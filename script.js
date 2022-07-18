// ##########################################################
// If you are reading this, sorry for the wall of variable.
// ##########################################################
const WINNER_SCORE = 10;
const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const score = document.getElementById("score");
const text = document.getElementById("text");
const result = document.getElementById("result");
const tryAgain = document.getElementById("tryAgain");
const wrapper = document.getElementById("wrapper");
const end = document.getElementById("end");

const choice = [
  "Rock.png",
  "Paper.png",
  "Scissor.png",
];
const winOrLose = [
  "YOU WIN, THE COMPUTER LOSE",
  "YOU LOSE, THE COMPUTER WIN",
  "ITS A DRAW",
];

function setChoice(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 3);
  player.src = choice[playerChoice];
  computer.src = choice[computerChoice];
  findScore(playerChoice, computerChoice);
}

function findScore(player, computer) {
  if (
    (player == ROCK && computer == SCISSOR) ||
    (player == SCISSOR && computer == PAPER) ||
    (player == PAPER && computer == ROCK)
  ) {
    playerScore++;
    setScore(0);
  } else if (
    (player == SCISSOR && computer == ROCK) ||
    (player == PAPER && computer == SCISSOR) ||
    (player == ROCK && computer == PAPER)
  ) {
    computerScore++;
    setScore(1);
  } else {
    setScore(2);
  }
}

function setScore(e) {
  score.innerHTML = `${playerScore} : ${computerScore}`;
  text.innerHTML = winOrLose[e];
  setWinner(playerScore, computerScore);
}

function setWinner(player, computer) {
  if (player == 10) {
    setGameOver(player, "THE PLAYER");
  } else if (computer == 10) {
    setGameOver(computer, "THE COMPUTER");
  } else return;
}

function setGameOver(score, winner) {
  if (score == WINNER_SCORE) {
    result.innerHTML = `${winner} WINS`;
    wrapper.className = "hide";
    end.removeAttribute("class");
  }
}
rockBtn.addEventListener("click", () => {
  setChoice(ROCK);
});
paperBtn.addEventListener("click", () => {
  setChoice(PAPER);
});
scissorBtn.addEventListener("click", () => {
  setChoice(SCISSOR);
});
tryAgain.addEventListener("click", () => {
  history.go();
});
