module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 20;
    this.dy = 0;
    this.dxv = .1;
    this.dyv = .1;
    this.lx = 0;
    this.ly = 0;
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width &&
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 ||
      this.y + this.height > canvasHeight
    )
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.lx = this.x
    this.ly = this.y
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  moveBack() {
    this.lx = this.x
    this.ly = this.y
    this.x -= this.dx * this.dxv;
    this.y -= this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}
