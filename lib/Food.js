const GamePiece = require('./GamePiece');

class Food extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
  respawn() {
    this.x = Math.round((Math.random() * 290)/ 10) * 20;
    this.y = Math.round((Math.random() * 290)/ 10) * 20;
    console.log(this.y, this.x)
  }
}

module.exports = Food;
