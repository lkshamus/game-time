const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const score = document.querySelector('.score');
const newGame = document.querySelector('.new-game');
//const difficulty = document.querySelector('.difficulty-wrapper');
game.speed = 70;
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
  game.newGame(ctx);
  window.requestAnimationFrame(gameLoop);
});

//difficulty.addEventListener('click', function(e){
//  if(e.target.className === 'hard') { game.speed = 70 }
//});

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

