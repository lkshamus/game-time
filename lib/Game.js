const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    let x = Math.round((Math.random() * 290)/ 10) * 20
    let y = Math.round((Math.random() * 290)/ 10) * 20
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(300, 300, 20, 20, '#6cfc89');
    this.food = new Food(x, y, 20, 20, '#f2f455');
    this.score = 0;
    this.speed = 86;
  }

  newGame(ctx) {
    let x = Math.round((Math.random() * 290)/ 10) * 20
    let y = Math.round((Math.random() * 290)/ 10) * 20
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(300, 300, 20, 20, '#6cfc89');
    this.food = new Food(x, y , 20, 20, '#f2f455');
    this.score = 0;
  }

  // draw one frame of our game
  animate() {
    const canvas = this.ctx;
    let body = this.snake.body;
    let snake = this.snake;
    if (snake.isCollidingWithWall(600, 600)) {
      this.endGame();

    } else if (snake.isCollidingWith(this.food)) {
      this.score += 100;
      console.log('snake position' + this.snake.x, this.snake.y)
      console.log('snake collides with', (snake.isCollidingWith(this.food)))
      this.food.respawn()
      this.snake.grow(5)
    } else {
      this.snake.move();
      body.forEach((tail, index, arr) => {
        if(index === 0){
          tail.move(this.snake);
        } else{
          tail.move(arr[index - 1]);
      }
      });
    }
    if (body.length > 0) {
      let check = body.find(function(tail){
        return (tail.x === snake.x && tail.y === snake.y);
      });
      if(check){
        this.endGame();
      }
    }
    this.food.draw(canvas);
    this.snake.draw(canvas);
  }
  handleSnake(){
    if (this.snake.isCollidingWithWall(600, 600)) {
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
      direction.dx = 20;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -20;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -20;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 20;
    } else if (e.key === 'ArrowUp') {
      direction.dy = -20;
    }

    this.snake.changeDirection(direction);
  }

}
