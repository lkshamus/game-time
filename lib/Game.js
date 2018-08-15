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
    if (this.snake.isCollidingWithWall(300, 300)) {
      this.endGame();  

    } else if (this.snake.isCollidingWith(this.food)) {
      this.food.respawn()
      this.snake.grow(3)

    } else {
      this.snake.move();
      console.log(this.snake.body)
      this.snake.body.forEach((tail, index, arr) => {
        if(index === 0){
          tail.move(this.snake);
        } else{
          tail.move(arr[index - 1]);
      }
      });
    }
    if (this.snake.body.length > 1){
      debugger;
    }
    this.food.draw(canvas);
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
      direction.dx = 10;

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