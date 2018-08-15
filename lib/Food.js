const GamePiece = require('./GamePiece');

class Food extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
  respawn() {
    this.x = Math.random() * 300;
    this.y = Math.random() * 300;
  }
}

module.exports = Food;