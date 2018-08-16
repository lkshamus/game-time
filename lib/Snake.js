const GamePiece = require('./GamePiece');
const Body = require('./Body');

class Snake extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
    this.body = [];
  }
  grow(number){
    for(let i = 0; i < number; i++){
      let length = this.body.length;
      if(length === 0){
        var newBody = new Body(this.x, this.y, this.height, this.width, this.color);
      } else {
        var newBody = new Body(this.body[0].x, this.body[0].y, this.height, this.width, this.color);
      }
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
  collideWithSelf() {
    let body = this.body;
    let checkX = this.x;
    let checkY = this.y;
    for(let i = 0; i < body.length; i++) {
      if(checkX === body[i].x && checkY === body[i].y){
        return true;
      } else {
        return false
      }
     };
    }
  move() {
    this.lx = this.x;
    this.ly = this.y;
    this.x = Math.round((this.x + this.dx) / 10) * 10;
    this.y = Math.round((this.y + this.dy) / 10) * 10;
  }


}


module.exports = Snake;
