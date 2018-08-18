const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.score');
const newGame = document.querySelector('.new-game');
const difficulty = document.querySelector('.difficulty-level');
// Start animation loop

function gameLoop () {
  setTimeout(() => {
    if (game.isOver()) {
      ctx.font = "72px Arial";
      ctx.fillText('Game Over!', 110, 300);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.animate();
    }
    window.requestAnimationFrame(gameLoop)
    score.innerText = game.score;
  }, game.speed);

}
document.addEventListener('keydown', handleKeyPress);

newGame.addEventListener('click', function (){
  newGame.innerText = 'New Game'
  game.newGame(ctx);
  window.requestAnimationFrame(gameLoop);
});

difficulty.addEventListener('click', function(e){
  if(e.target.classList === 'difficulty-level-hard') { game.speed = 120 }
  if(e.target.classList === 'difficulty-level-medium') { game.speed = 86 }
  if(e.target.classList === 'difficulty-level-easy') { game.speed = 50 }
});

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

