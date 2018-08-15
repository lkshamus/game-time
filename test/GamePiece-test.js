const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece')
describe('GamePiece', () => {
  
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green');
  })

  it('should take properties', () => {
    //setup
    //execution
    //assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1, 
      dy: 0, 
      dxv: 1, 
      dyv: 1
    })
  })

  it('should collide with a second gamepiece that occupies the same space', () => {
    //setup 
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green');

     //execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);

     //assertion

     assert.isTrue(colliding);
  })

  
 it('should not collide with a second gamepiece that does not occupy the same space', () => {
    //setup 
    const gamepiece = new GamePiece(30, 30, 10, 10, 'green');
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green');

     //execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);

     //assertion

     assert.isFalse(colliding);
  })
 





  // it('should collide with walls', () => {})
  // it('should be able to move', () => {})
  // it('should be able to changeDirection', () => {})
})