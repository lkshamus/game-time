const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {

let snake;

  beforeEach(() => {
    snake = new Snake(0, 0, 20, 20, 'green');
  })

  it('should move in given direction', () => {

    assert.equal(snake.x, 0);
    assert.equal(snake.y, 0);
    snake.move();
    assert.equal(snake.x, 1);

  })

  it('should grow in length', () => {
    assert.equal(snake.body.length, 0);
    snake.grow(3);
    assert.equal(snake.body.length, 3);
  })
  
})