const GamePiece = require('./GamePiece');
const Body = require('./Body');

class Snake extends GamePiece{
  constructor (x, y, height, width, color){
    super(x, y, height, width, color);
    this.body = [];
  }
  grow(number){
    console.log('Snake Grow Number:', number);
    for(let i = 0; i < number; i++){
      let length = this.body.length;
      if(length === 0){
        var newBody = new Body(this.x, this.y, this.height, this.width, this.color);
        console.log('Length is zero : ', length)
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
      this.body.forEach(tail => {
        return (
        this.x < tail.x + tail.width &&
        this.x + this.width > tail.x &&
        this.y < tail.y + tail.height &&
        this.y + this.height > tail.y
        );
      });
    }
}


module.exports = Snake;
