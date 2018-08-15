const GamePiece = require('./GamePiece');

class Body extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
  move(object) {
    if (object === undefined){
      return true;
    }
    this.lx = this.x;
    this.ly = this.y;
    this.x = object.lx;
    this.y = object.ly;
  }
}

module.exports = Body;