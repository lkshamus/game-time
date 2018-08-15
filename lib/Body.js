const GamePiece = require('./GamePiece');

class Body extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
}

module.exports = Body;