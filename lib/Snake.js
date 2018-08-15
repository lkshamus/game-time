const GamePiece = require('./GamePiece');
const Body = require('./Body');

class Snake extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
    this.body = [];
  }
  grow(number){
    for(let i = 0; i < number; i++){
      let length = this.body.length
      if(length === 0){
        var newBody = new Body(this.x, this.y, this.height, this.width, this.color)
      } else {
        var newBody = new Body(this.body[0].x, this.body[0].y, this.height, this.width, this.color)
      }
      console.log(this.body)
      newBody.moveBack();
      this.body.unshift(newBody);
    } 
  
  }
   draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);

    this.body.forEach(tail => {
      tail.draw(ctx);
    })
  }
}

module.exports = Snake;