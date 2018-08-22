const GamePiece = require('./GamePiece');
const Body = require('./Body');

class Snake extends GamePiece {
  constructor (x, y, height, width, color) {
    super(x, y, height, width, color);
    this.body = [];
    this.history = [];
    this.historyLength = 3;
  }

  grow(number) {
    this.historyLength += number;
    for (let i = 0; i < number; i++) {
      var newBody = new Body(
        this.history[i[0]],
        this.history[i[1]],
        this.height,
        this.width,
        this.color
      );

      this.body.unshift(newBody);
    }
  }
  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
    this.body.forEach(tail => {
      tail.draw(ctx);
    });
  }

  move() {
    this.lx = this.x;
    this.ly = this.y;
    this.x = Math.round((this.x + this.dx) / this.width) * this.width;
    this.y = Math.round((this.y + this.dy) / this.height) * this.height;
    this.history.unshift([this.lx, this.ly]);
    if (this.history.length > this.historyLength) {
      this.history.pop();
    }
  }
}


module.exports = Snake;
