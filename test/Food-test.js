const { assert } = require('chai');
const Food = require('../lib/Food');

describe('Food', () => {
  let food;
  beforeEach(() => {
    food = new Food(0,0,20,20,'red');
  });
  it('Should be move to a random location', () => {
    let x = 0;
    let y = 0;
    assert.equal(food.x, x);
    assert.equal(food.y, y);
    food.respawn();
    assert.notEqual(food.x, x);
    assert.notEqual(food.y, y);
  });
});
