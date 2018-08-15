const GamePiece = require('./GamePiece');
const Body = require('./Body');

class Snake extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
    this.body = [];
  }
  grow(number){
    for(let i = 0; i < number; i++){
     let newBody = new Body(this.body[-1].x, this.body[-1].y, this.height, this.width, this.color)
     newBody.moveBack();
     this.body.push(newBody);
    } 
  }
   draw(ctx) {
    const { x, y, height, width, color } = this;
    console.log(this.color)
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}

module.exports = Snake;
