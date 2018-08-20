const { assert } = require('chai');
const Game = require('../lib/Game');

const ctx = {
  canvas: {
    width: 600,
    height: 600
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
  it('should be able to refresh game state', () =>{
    let game2 = new Game(ctx);
    game.score = 200;
    game.gameOver = true;
    game.newGame(ctx);
    game2.x = 0;
    game2.y = 0;
    game.x = 0;
    game.y = 0;
    game2.food.x = 0;
    game2.food.y = 0;
    game.food.x = 0;
    game.food.y = 0;
    assert.deepEqual(game, game2);
  })

})
