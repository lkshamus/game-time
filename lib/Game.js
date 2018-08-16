const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(150, 150, 10, 10, 'green');
    this.food = new Food(50, 50, 10, 10, 'red');
  }

  // draw one frame of our game
  animate() {
    const canvas = this.ctx;
    console.log(this.snake.collideWithSelf());
    if (this.snake.isCollidingWithWall(300, 300)) {
      this.endGame();
    } else if (this.snake.isCollidingWith(this.food)) {
      this.food.respawn()
      this.snake.grow(5)
    } else if (this.snake.collideWithSelf()) {
      this.endGame();
    } else {
      this.snake.move();
      this.snake.body.forEach((tail, index, arr) => {
        if(index === 0){
          tail.move(this.snake);
        } else{
          tail.move(arr[index - 1]);
      }
      });
    }
    this.food.draw(canvas);
    this.snake.draw(canvas);
  }
  handleSnake(){
    if (this.snake.isCollidingWithWall(300, 300)) {
      this.endGame();
    }
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
      direction.dx = 10;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -10;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -10;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 10;
    } else if (e.key === 'ArrowUp') {
      direction.dy = -10;
    }

    this.snake.changeDirection(direction);
  }

}
