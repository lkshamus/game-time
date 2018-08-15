const GamePiece = require('./GamePiece');

class Snake extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
  }
}

module.exports = Snake;
