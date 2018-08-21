const Snake = require('./Snake');
const Food = require('./Food');

module.exports = class Game {
  constructor(ctx) {
    let x = Math.round((Math.random() * 290) / 10) * this.gameSize;
    let y = Math.round((Math.random() * 290) / 10) * this.gameSize;

    this.colors = {yellow: '#f2f455', green: '#6cfc89'};
    this.gameSize = 20;
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.speed = 86;
    this.snake = new Snake(
      300,
      300,
      this.gameSize,
      this.gameSize,
      this.colors.green
    );
    this.food = new Food(
      x,
      y,
      this.gameSize,
      this.gameSize,
      this.colors.yellow
    );
  }

  newGame(ctx) {
    let x = Math.round((Math.random() * 290) / 10) * this.gameSize;
    let y = Math.round((Math.random() * 290) / 10) * this.gameSize;

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.snake = new Snake(
      300,
      300,
      this.gameSize,
      this.gameSize,
      this.colors.green
    );
    this.food = new Food(
      x,
      y,
      this.gameSize,
      this.gameSize,
      this.colors.yellow
    );
  }

  // draw one frame of our game
  animate() {
    const canvas = this.ctx;
    let body = this.snake.body;
    let snake = this.snake;

    if (snake.isCollidingWithWall(600, 600)) {
      this.endGame();
    } if (snake.isCollidingWith(this.food)) {
      this.score += 100;
      this.food.respawn();
      this.snake.grow(5);
    } else {
      this.snake.move();
      body.forEach((tail, index, arr) => {
        if (index === 0) {
          tail.move(this.snake);
        } else {
          tail.move(arr[index - 1]);
        }
      });
    }

    if (body.length > 0) {
      let check = body.find(function(tail) {
        return (tail.x === snake.x && tail.y === snake.y);
      });

      if (check) {
        this.endGame();
      }
    }
    this.food.draw(canvas);
    this.snake.draw(canvas);
  }
  handleSnake() {
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
      direction.dx = this.gameSize;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -this.gameSize;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -this.gameSize;

    } else if (e.key === 'ArrowDown') {
      direction.dy = this.gameSize;
    } else if (e.key === 'ArrowUp') {
      direction.dy = -this.gameSize;
    } else {
      return;
    }

    this.snake.changeDirection(direction);
  }
};
