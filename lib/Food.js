const GamePiece = require('./GamePiece');

class Food extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
  respawn() {
    this.x = Math.round((Math.random() * 280)/ 10) * 10;
    this.y = Math.round((Math.random() * 280) /10) * 10;
  }
}

module.exports = Food;
