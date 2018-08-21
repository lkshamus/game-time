const GamePiece = require('./GamePiece');

class Food extends GamePiece {
  constructor (x, y, height, width, color) {
    super(x, y, height, width, color);
  }
  respawn() {
    this.x = Math.round((Math.random() * 290) / 10) * this.width;
    this.y = Math.round((Math.random() * 290) / 10) * this.height;
  }
}

module.exports = Food;
