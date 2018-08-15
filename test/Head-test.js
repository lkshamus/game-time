const { assert } = require('chai');
const Head = require('../lib/Snake');



describe('Snake', () =>{

let snake;

  beforeEach(() => {
    snake = new Snake(0, 0, 20, 20, 'green');
  })

  it('should move in given direction', () => {

    assert.equal(head.x, 0);
    assert.equal(head.y, 0);
    head.move();
    assert.equal(head.x, 1);

  })
})
