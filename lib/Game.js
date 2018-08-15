const Snake = require('./Snake');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(150, 150, 10, 10, 'green');
  }

  // draw one frame of our game
  animate() {
    const canvas = this.ctx;
    if (this.snake.isCollidingWithWall(300, 300)) {
      this.endGame();  
    } else {
      this.snake.move();
    }
    this.snake.draw(canvas);
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.snake.changeDirection(direction);
  }

}