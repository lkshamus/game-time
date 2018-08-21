/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Body.js":
/*!*********************!*\
  !*** ./lib/Body.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

var Body = function (_GamePiece) {
  _inherits(Body, _GamePiece);

  function Body(x, y, height, width, color) {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, x, y, height, width, color));
  }

  _createClass(Body, [{
    key: 'move',
    value: function move(object) {
      if (object === undefined) {
        return true;
      }
      this.lx = this.x;
      this.ly = this.y;
      this.x = object.lx;
      this.y = object.ly;
    }
  }]);

  return Body;
}(GamePiece);

module.exports = Body;

/***/ }),

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

var Food = function (_GamePiece) {
  _inherits(Food, _GamePiece);

  function Food(x, y, height, width, color) {
    _classCallCheck(this, Food);

    return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y, height, width, color));
  }

  _createClass(Food, [{
    key: 'respawn',
    value: function respawn() {
      this.x = Math.round(Math.random() * 290 / 10) * this.width;
      this.y = Math.round(Math.random() * 290 / 10) * this.height;
    }
  }]);

  return Food;
}(GamePiece);

module.exports = Food;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Snake */ "./lib/Snake.js");
var Food = __webpack_require__(/*! ./Food */ "./lib/Food.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    var x = Math.round(Math.random() * 290 / 10) * this.gameSize;
    var y = Math.round(Math.random() * 290 / 10) * this.gameSize;

    this.colors = { yellow: '#f2f455', green: '#6cfc89' };
    this.gameSize = 20;
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.speed = 86;
    this.snake = new Snake(300, 300, this.gameSize, this.gameSize, this.colors.green);
    this.food = new Food(x, y, this.gameSize, this.gameSize, this.colors.yellow);
  }

  _createClass(Game, [{
    key: 'newGame',
    value: function newGame(ctx) {
      var x = Math.round(Math.random() * 290 / 10) * this.gameSize;
      var y = Math.round(Math.random() * 290 / 10) * this.gameSize;

      this.ctx = ctx;
      this.paused = false;
      this.gameOver = false;
      this.score = 0;
      this.snake = new Snake(300, 300, this.gameSize, this.gameSize, this.colors.green);
      this.food = new Food(x, y, this.gameSize, this.gameSize, this.colors.yellow);
    }

    // draw one frame of our game

  }, {
    key: 'animate',
    value: function animate() {
      var _this = this;

      var canvas = this.ctx;
      var body = this.snake.body;
      var snake = this.snake;

      if (snake.isCollidingWithWall(600, 600)) {
        this.endGame();
      }if (snake.isCollidingWith(this.food)) {
        this.score += 100;
        this.food.respawn();
        this.snake.grow(5);
      } else {
        this.snake.move();
        body.forEach(function (tail, index, arr) {
          if (index === 0) {
            tail.move(_this.snake);
          } else {
            tail.move(arr[index - 1]);
          }
        });
      }

      if (body.length > 0) {
        var check = body.find(function (tail) {
          return tail.x === snake.x && tail.y === snake.y;
        });

        if (check) {
          this.endGame();
        }
      }
      this.food.draw(canvas);
      this.snake.draw(canvas);
    }
  }, {
    key: 'handleSnake',
    value: function handleSnake() {
      if (this.snake.isCollidingWithWall(600, 600)) {
        this.endGame();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var direction = {
        dx: 0,
        dy: 0
      };

      if (e.key === 'ArrowRight') {
        direction.dx = this.gameSize;
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -this.gameSize;
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -this.gameSize;
      } else if (e.key === 'ArrowDown') {
        direction.dy = this.gameSize;
      } else if (e.key === 'ArrowUp') {
        direction.dy = -this.gameSize;
      } else {
        return;
      }

      this.snake.changeDirection(direction);
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = this.width;
    this.dy = 0;
    this.lx = 0;
    this.ly = 0;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.lx = this.x;
      this.ly = this.y;
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "moveBack",
    value: function moveBack() {
      this.lx = this.x;
      this.ly = this.y;
      this.x -= this.dx * this.dxv;
      this.y -= this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");
var Body = __webpack_require__(/*! ./Body */ "./lib/Body.js");

var Snake = function (_GamePiece) {
  _inherits(Snake, _GamePiece);

  function Snake(x, y, height, width, color) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, x, y, height, width, color));

    _this.body = [];
    _this.history = [];
    _this.historyLength = 3;
    return _this;
  }

  _createClass(Snake, [{
    key: 'grow',
    value: function grow(number) {
      this.historyLength += 3;
      for (var i = 0; i < number; i++) {
        var newBody = new Body(this.history[i[0]], this.history[i[1]], this.height, this.width, this.color);

        this.body.unshift(newBody);
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, height, width);
      this.body.forEach(function (tail) {
        tail.draw(ctx);
      });
    }
  }, {
    key: 'collideWithSelf',
    value: function collideWithSelf() {
      var body = this.body;
      var checkX = this.x;
      var checkY = this.y;

      for (var i = 0; i < body.length; i++) {
        if (checkX === body[i].x && checkY === body[i].y) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: 'move',
    value: function move() {
      this.lx = this.x;
      this.ly = this.y;
      this.x = Math.round((this.x + this.dx) / this.width) * this.width;
      this.y = Math.round((this.y + this.dy) / this.height) * this.height;
      this.history.unshift([this.lx, this.ly]);
      if (this.history.length > this.historyLength) {
        this.history.pop();
      }
    }
  }]);

  return Snake;
}(GamePiece);

module.exports = Snake;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var score = document.querySelector('.score');
var newGame = document.querySelector('.new-game');
var difficulty = document.querySelector('.difficulty-level');
// Start animation loop

function gameLoop() {
  setTimeout(function () {
    if (game.isOver()) {
      ctx.font = "72px 'Orbitron', sans-serif";
      ctx.fillStyle = 'firebrick';
      ctx.fillText('Game Over!', 70, 300);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.animate();
    }
    window.requestAnimationFrame(gameLoop);
    score.innerText = game.score;
  }, game.speed);
}
document.addEventListener('keydown', handleKeyPress);

newGame.addEventListener('click', function () {
  newGame.innerText = 'New Game';
  game.newGame(ctx);
  window.requestAnimationFrame(gameLoop);
});

difficulty.addEventListener('click', function (e) {
  var target = e.target;

  if (target.className === 'difficulty-level-hard') {
    game.speed = 30;
  }
  if (target.className === 'difficulty-level-medium') {
    game.speed = 50;
  }
  if (target.className === 'difficulty-level-easy') {
    game.speed = 86;
  }
});

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJCb2R5IiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwib2JqZWN0IiwidW5kZWZpbmVkIiwibHgiLCJseSIsIm1vZHVsZSIsImV4cG9ydHMiLCJGb29kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiU25ha2UiLCJjdHgiLCJnYW1lU2l6ZSIsImNvbG9ycyIsInllbGxvdyIsImdyZWVuIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzY29yZSIsInNwZWVkIiwic25ha2UiLCJmb29kIiwiY2FudmFzIiwiYm9keSIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoIiwicmVzcGF3biIsImdyb3ciLCJtb3ZlIiwiZm9yRWFjaCIsInRhaWwiLCJpbmRleCIsImFyciIsImxlbmd0aCIsImNoZWNrIiwiZmluZCIsImRyYXciLCJlIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImtleSIsImNoYW5nZURpcmVjdGlvbiIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkeHYiLCJkeXYiLCJoaXN0b3J5IiwiaGlzdG9yeUxlbmd0aCIsIm51bWJlciIsImkiLCJuZXdCb2R5IiwidW5zaGlmdCIsImNoZWNrWCIsImNoZWNrWSIsInBvcCIsIkdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIm5ld0dhbWUiLCJkaWZmaWN1bHR5IiwiZ2FtZUxvb3AiLCJzZXRUaW1lb3V0IiwiaXNPdmVyIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJSZWN0IiwiYW5pbWF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlQcmVzcyIsInRhcmdldCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxNQUFuQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQUEsdUdBQ2pDSixDQURpQyxFQUM5QkMsQ0FEOEIsRUFDM0JDLE1BRDJCLEVBQ25CQyxLQURtQixFQUNaQyxLQURZO0FBRXhD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QixDQUFqQixFQUFvQmpELE9BQU94QixLQUEzQixFQUFrQ3dCLE9BQU96QixNQUF6QztBQUNBa0UsV0FBS1MsT0FBTDtBQUNEO0FBQ0RDLFdBQU9DLHFCQUFQLENBQTZCUixRQUE3QjtBQUNBaEQsVUFBTXlELFNBQU4sR0FBa0JaLEtBQUs3QyxLQUF2QjtBQUNELEdBWEQsRUFXRzZDLEtBQUs1QyxLQVhSO0FBYUQ7QUFDRHlDLFNBQVNnQixnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsY0FBckM7O0FBRUFiLFFBQVFZLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDM0NaLFVBQVFXLFNBQVIsR0FBb0IsVUFBcEI7QUFDQVosT0FBS0MsT0FBTCxDQUFhckQsR0FBYjtBQUNBOEQsU0FBT0MscUJBQVAsQ0FBNkJSLFFBQTdCO0FBQ0QsQ0FKRDs7QUFNQUQsV0FBV1csZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBU3RDLENBQVQsRUFBWTtBQUMvQyxNQUFNd0MsU0FBU3hDLEVBQUV3QyxNQUFqQjs7QUFFQSxNQUFJQSxPQUFPQyxTQUFQLEtBQXFCLHVCQUF6QixFQUFrRDtBQUNoRGhCLFNBQUs1QyxLQUFMLEdBQWEsRUFBYjtBQUNEO0FBQ0QsTUFBSTJELE9BQU9DLFNBQVAsS0FBcUIseUJBQXpCLEVBQW9EO0FBQ2xEaEIsU0FBSzVDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7QUFDRCxNQUFJMkQsT0FBT0MsU0FBUCxLQUFxQix1QkFBekIsRUFBa0Q7QUFDaERoQixTQUFLNUMsS0FBTCxHQUFhLEVBQWI7QUFDRDtBQUNGLENBWkQ7O0FBY0EsU0FBUzBELGNBQVQsQ0FBd0J2QyxDQUF4QixFQUEyQjtBQUN6QnlCLE9BQUtjLGNBQUwsQ0FBb0J2QyxDQUFwQjtBQUNELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3RvciAoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cbiAgbW92ZShvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmx4ID0gdGhpcy54O1xuICAgIHRoaXMubHkgPSB0aGlzLnk7XG4gICAgdGhpcy54ID0gb2JqZWN0Lmx4O1xuICAgIHRoaXMueSA9IG9iamVjdC5seTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5jbGFzcyBGb29kIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IgKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICB9XG4gIHJlc3Bhd24oKSB7XG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAyOTApIC8gMTApICogdGhpcy5oZWlnaHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb29kO1xuIiwiY29uc3QgU25ha2UgPSByZXF1aXJlKCcuL1NuYWtlJyk7XG5jb25zdCBGb29kID0gcmVxdWlyZSgnLi9Gb29kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIGxldCB4ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLmdhbWVTaXplO1xuICAgIGxldCB5ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLmdhbWVTaXplO1xuXG4gICAgdGhpcy5jb2xvcnMgPSB7eWVsbG93OiAnI2YyZjQ1NScsIGdyZWVuOiAnIzZjZmM4OSd9O1xuICAgIHRoaXMuZ2FtZVNpemUgPSAyMDtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNwZWVkID0gODY7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZShcbiAgICAgIDMwMCxcbiAgICAgIDMwMCxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5jb2xvcnMuZ3JlZW5cbiAgICApO1xuICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5nYW1lU2l6ZSxcbiAgICAgIHRoaXMuY29sb3JzLnllbGxvd1xuICAgICk7XG4gIH1cblxuICBuZXdHYW1lKGN0eCkge1xuICAgIGxldCB4ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLmdhbWVTaXplO1xuICAgIGxldCB5ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLmdhbWVTaXplO1xuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZShcbiAgICAgIDMwMCxcbiAgICAgIDMwMCxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5jb2xvcnMuZ3JlZW5cbiAgICApO1xuICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5nYW1lU2l6ZSxcbiAgICAgIHRoaXMuY29sb3JzLnllbGxvd1xuICAgICk7XG4gIH1cblxuICAvLyBkcmF3IG9uZSBmcmFtZSBvZiBvdXIgZ2FtZVxuICBhbmltYXRlKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY3R4O1xuICAgIGxldCBib2R5ID0gdGhpcy5zbmFrZS5ib2R5O1xuICAgIGxldCBzbmFrZSA9IHRoaXMuc25ha2U7XG5cbiAgICBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoV2FsbCg2MDAsIDYwMCkpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgIH0gaWYgKHNuYWtlLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZvb2QpKSB7XG4gICAgICB0aGlzLnNjb3JlICs9IDEwMDtcbiAgICAgIHRoaXMuZm9vZC5yZXNwYXduKCk7XG4gICAgICB0aGlzLnNuYWtlLmdyb3coNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc25ha2UubW92ZSgpO1xuICAgICAgYm9keS5mb3JFYWNoKCh0YWlsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHRhaWwubW92ZSh0aGlzLnNuYWtlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWlsLm1vdmUoYXJyW2luZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2hlY2sgPSBib2R5LmZpbmQoZnVuY3Rpb24odGFpbCkge1xuICAgICAgICByZXR1cm4gKHRhaWwueCA9PT0gc25ha2UueCAmJiB0YWlsLnkgPT09IHNuYWtlLnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjaGVjaykge1xuICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb29kLmRyYXcoY2FudmFzKTtcbiAgICB0aGlzLnNuYWtlLmRyYXcoY2FudmFzKTtcbiAgfVxuICBoYW5kbGVTbmFrZSgpIHtcbiAgICBpZiAodGhpcy5zbmFrZS5pc0NvbGxpZGluZ1dpdGhXYWxsKDYwMCwgNjAwKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfVxuICB9XG4gIGVuZEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXI7XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSB0aGlzLmdhbWVTaXplO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC10aGlzLmdhbWVTaXplO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC10aGlzLmdhbWVTaXplO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IHRoaXMuZ2FtZVNpemU7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtdGhpcy5nYW1lU2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc25ha2UuY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5seCA9IDA7XG4gICAgdGhpcy5seSA9IDA7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgICk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLmx4ID0gdGhpcy54O1xuICAgIHRoaXMubHkgPSB0aGlzLnk7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICB9XG5cbiAgbW92ZUJhY2soKSB7XG4gICAgdGhpcy5seCA9IHRoaXMueDtcbiAgICB0aGlzLmx5ID0gdGhpcy55O1xuICAgIHRoaXMueCAtPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55IC09IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cblxufTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5jb25zdCBCb2R5ID0gcmVxdWlyZSgnLi9Cb2R5Jyk7XG5cbmNsYXNzIFNuYWtlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IgKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMuYm9keSA9IFtdO1xuICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuaGlzdG9yeUxlbmd0aCA9IDM7XG4gIH1cblxuICBncm93KG51bWJlcikge1xuICAgIHRoaXMuaGlzdG9yeUxlbmd0aCArPSAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIHZhciBuZXdCb2R5ID0gbmV3IEJvZHkoXG4gICAgICAgIHRoaXMuaGlzdG9yeVtpWzBdXSwgXG4gICAgICAgIHRoaXMuaGlzdG9yeVtpWzFdXSwgXG4gICAgICAgIHRoaXMuaGVpZ2h0LCBcbiAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgIHRoaXMuY29sb3JcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYm9keS51bnNoaWZ0KG5ld0JvZHkpO1xuICAgIH1cbiAgfVxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgIHRoaXMuYm9keS5mb3JFYWNoKHRhaWwgPT4ge1xuICAgICAgdGFpbC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cbiAgY29sbGlkZVdpdGhTZWxmKCkge1xuICAgIGxldCBib2R5ID0gdGhpcy5ib2R5O1xuICAgIGxldCBjaGVja1ggPSB0aGlzLng7XG4gICAgbGV0IGNoZWNrWSA9IHRoaXMueTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjaGVja1ggPT09IGJvZHlbaV0ueCAmJiBjaGVja1kgPT09IGJvZHlbaV0ueSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbW92ZSgpIHtcbiAgICB0aGlzLmx4ID0gdGhpcy54O1xuICAgIHRoaXMubHkgPSB0aGlzLnk7XG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZCgodGhpcy54ICsgdGhpcy5keCkgLyB0aGlzLndpZHRoKSAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZCgodGhpcy55ICsgdGhpcy5keSkgLyB0aGlzLmhlaWdodCkgKiB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmhpc3RvcnkudW5zaGlmdChbdGhpcy5seCwgdGhpcy5seV0pO1xuICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID4gdGhpcy5oaXN0b3J5TGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XG4gICAgfVxuICB9XG5cblxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU25ha2U7XG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbmNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKTtcbmNvbnN0IGRpZmZpY3VsdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eS1sZXZlbCcpO1xuLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgICAgY3R4LmZvbnQgPSBcIjcycHggJ09yYml0cm9uJywgc2Fucy1zZXJpZlwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdmaXJlYnJpY2snO1xuICAgICAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXIhJywgNzAsIDMwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWUuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBnYW1lLnNjb3JlO1xuICB9LCBnYW1lLnNwZWVkKTtcblxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBuZXdHYW1lLmlubmVyVGV4dCA9ICdOZXcgR2FtZSc7XG4gIGdhbWUubmV3R2FtZShjdHgpO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0pO1xuXG5kaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RpZmZpY3VsdHktbGV2ZWwtaGFyZCcpIHsgXG4gICAgZ2FtZS5zcGVlZCA9IDMwOyBcbiAgfVxuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RpZmZpY3VsdHktbGV2ZWwtbWVkaXVtJykgeyBcbiAgICBnYW1lLnNwZWVkID0gNTA7IFxuICB9XG4gIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnZGlmZmljdWx0eS1sZXZlbC1lYXN5JykgeyBcbiAgICBnYW1lLnNwZWVkID0gODY7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=