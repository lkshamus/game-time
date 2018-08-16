const { assert } = require('chai');
const Body = require('../lib/Body');



describe('Body', () => {
  let body;
  let body2;
  beforeEach(() => {
    body = new Body(0, 0, 20, 20, 'green');
    body2 = new Body(10, 10, 20, 20, 'green');
  });
  it(`should move to another object's last location`, () => {
    //Set body2's last position
    body2.lx = 5;
    body2.ly = 5;
    assert.notEqual(body.x, body2.lx);
    assert.notEqual(body.y, body2.ly);
    body.move(body2);
    assert.equal(body.x, body2.lx);
    assert.equal(body.y, body2.ly);
  });
});
