const scoreCounter = document.querySelector('.score-counter');

const grid = document.querySelector('.grid');

const endGameScreen = document.querySelector('.end-game-screen');

const endGameText = document.querySelector('.end-game-text');

const playAgainButton = document.querySelector('.play-again')

const totalCells = 100;
const totalBombs = 90;
const maxScore = 5;
const bombsList = [];

let score = 0;

function updateScore() {
  score++;
  scoreCounter.innerText = score.toString().padStart(5, '0');
}

for (let i = 1; i <=100; i++ ) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  cell.addEventListener('click', function () {

    cell.classList.add('cell-clicked');
  })
  grid.appendChild(cell);
}

while (bombsList.length < totalBombs) {
  //  Generate a random number between 1 & 100,inclusive
  const randomNumber= Math.floor(Math.random() * totalCells) + 1;
  
  if (!bombsList.includes(randomNumber)) {
    bombsList.push(randomNumber);
  }
}

function endGame(isVictory) {
  if (isVictory) {
    endGameText.innerHTML = 'YOU<br>WON';
    endGameScreen.classList.add('win');
  }
  endGameScreen.classList.remove('hidden');
}

playAgainButton.addEventListener('click', function () {
  window.location.reload();
});