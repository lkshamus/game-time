const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece')

describe('GamePiece', () => {
  let gamepiece;
  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green');
  })
  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 10,
      dy: 0,
      lx: 0,
      ly: 0
    })
  })

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green');
    const colliding = gamepiece.isCollidingWith(gamepiece2);
     assert.isTrue(colliding);
  });


 it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamepiece = new GamePiece(30, 30, 10, 10, 'green');
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green');
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    assert.isFalse(colliding);
  });
 it('should collide with walls', () => {
   gamepiece.x = 300;
   assert.isTrue(gamepiece.isCollidingWithWall(300, 300));
 });
 it('should be able to move', () => {
  gamepiece.move();
  assert.notEqual(30, gamepiece.x);
 });
 it('should be able to changeDirection', () => {
   let direction = {
     dx: 1,
     dy: 1
   }
   assert.notEqual(gamepiece.dx, direction.dx);
   assert.notEqual(gamepiece.dy, direction.dy);
   gamepiece.changeDirection(direction);
   assert.equal(gamepiece.dx, direction.dx);
   assert.equal(gamepiece.dy, direction.dy);
 });
});
