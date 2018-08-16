const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game(ctx);
  });
  it('should take properties', () => {
    let newGame = new Game(ctx);
    assert.notEqual(game, newGame);
  });
  it('should end game', () => {
    game.endGame();
    assert.isTrue(game.gameOver);
  });
  it('should end the game if block collides with wall', () => {
    game.snake.x = ctx.canvas.width;
    game.handleSnake();
    assert.isTrue(game.gameOver);
  });

})
