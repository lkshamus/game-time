const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.score');
const newGame = document.querySelector('.new-game');

// Start animation loop

function gameLoop () {
  setTimeout(() => {
    if (game.isOver()) {
      console.log('Game Over');
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.animate();
    }
    window.requestAnimationFrame(gameLoop)
    score.innerText = game.score;
  }, 86);

}
document.addEventListener('keydown', handleKeyPress);

newGame.addEventListener('click', function (){
  game.newGame(ctx);
  window.requestAnimationFrame(gameLoop);
})

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

