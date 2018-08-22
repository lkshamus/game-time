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

    // moveBack() {
    //   this.lx = this.x;
    //   this.ly = this.y;
    //   this.x -= this.dx * this.dxv;
    //   this.y -= this.dy * this.dyv;
    // }

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
      this.historyLength += number;
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
      return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJCb2R5IiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwib2JqZWN0IiwidW5kZWZpbmVkIiwibHgiLCJseSIsIm1vZHVsZSIsImV4cG9ydHMiLCJGb29kIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiU25ha2UiLCJjdHgiLCJnYW1lU2l6ZSIsImNvbG9ycyIsInllbGxvdyIsImdyZWVuIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzY29yZSIsInNwZWVkIiwic25ha2UiLCJmb29kIiwiY2FudmFzIiwiYm9keSIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoIiwicmVzcGF3biIsImdyb3ciLCJtb3ZlIiwiZm9yRWFjaCIsInRhaWwiLCJpbmRleCIsImFyciIsImxlbmd0aCIsImNoZWNrIiwiZmluZCIsImRyYXciLCJlIiwiZGlyZWN0aW9uIiwiZHgiLCJkeSIsImtleSIsImNoYW5nZURpcmVjdGlvbiIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkeHYiLCJkeXYiLCJoaXN0b3J5IiwiaGlzdG9yeUxlbmd0aCIsIm51bWJlciIsImkiLCJuZXdCb2R5IiwidW5zaGlmdCIsInBvcCIsIkdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIm5ld0dhbWUiLCJkaWZmaWN1bHR5IiwiZ2FtZUxvb3AiLCJzZXRUaW1lb3V0IiwiaXNPdmVyIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJSZWN0IiwiYW5pbWF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlQcmVzcyIsInRhcmdldCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7SUFFTUMsSTs7O0FBQ0osZ0JBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxNQUFuQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQUEsdUdBQ2pDSixDQURpQyxFQUM5QkMsQ0FEOEIsRUFDM0JDLE1BRDJCLEVBQ25CQyxLQURtQixFQUNaQyxLQURZO0FBRXhDOzs7O3lCQUNJQyxNLEVBQVE7QUFDWCxVQUFJQSxXQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLGVBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBS0MsRUFBTCxHQUFVLEtBQUtQLENBQWY7QUFDQSxXQUFLUSxFQUFMLEdBQVUsS0FBS1AsQ0FBZjtBQUNBLFdBQUtELENBQUwsR0FBU0ssT0FBT0UsRUFBaEI7QUFDQSxXQUFLTixDQUFMLEdBQVNJLE9BQU9HLEVBQWhCO0FBQ0Q7Ozs7RUFaZ0JYLFM7O0FBZW5CWSxPQUFPQyxPQUFQLEdBQWlCWCxJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLElBQU1GLFlBQVksbUJBQUFDLENBQVEsdUNBQVIsQ0FBbEI7O0lBRU1hLEk7OztBQUNKLGdCQUFhWCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUFBOztBQUFBLHVHQUNqQ0osQ0FEaUMsRUFDOUJDLENBRDhCLEVBQzNCQyxNQUQyQixFQUNuQkMsS0FEbUIsRUFDWkMsS0FEWTtBQUV4Qzs7Ozs4QkFDUztBQUNSLFdBQUtKLENBQUwsR0FBU1ksS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWpCLEdBQXdCLEVBQW5DLElBQXlDLEtBQUtYLEtBQXZEO0FBQ0EsV0FBS0YsQ0FBTCxHQUFTVyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsR0FBakIsR0FBd0IsRUFBbkMsSUFBeUMsS0FBS1osTUFBdkQ7QUFDRDs7OztFQVBnQkwsUzs7QUFVbkJZLE9BQU9DLE9BQVAsR0FBaUJDLElBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLElBQU1JLFFBQVEsbUJBQUFqQixDQUFRLCtCQUFSLENBQWQ7QUFDQSxJQUFNYSxPQUFPLG1CQUFBYixDQUFRLDZCQUFSLENBQWI7O0FBRUFXLE9BQU9DLE9BQVA7QUFDRSxnQkFBWU0sR0FBWixFQUFpQjtBQUFBOztBQUNmLFFBQUloQixJQUFJWSxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsR0FBakIsR0FBd0IsRUFBbkMsSUFBeUMsS0FBS0csUUFBdEQ7QUFDQSxRQUFJaEIsSUFBSVcsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWpCLEdBQXdCLEVBQW5DLElBQXlDLEtBQUtHLFFBQXREOztBQUVBLFNBQUtDLE1BQUwsR0FBYyxFQUFDQyxRQUFRLFNBQVQsRUFBb0JDLE9BQU8sU0FBM0IsRUFBZDtBQUNBLFNBQUtILFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQUlWLEtBQUosQ0FDWCxHQURXLEVBRVgsR0FGVyxFQUdYLEtBQUtFLFFBSE0sRUFJWCxLQUFLQSxRQUpNLEVBS1gsS0FBS0MsTUFBTCxDQUFZRSxLQUxELENBQWI7QUFPQSxTQUFLTSxJQUFMLEdBQVksSUFBSWYsSUFBSixDQUNWWCxDQURVLEVBRVZDLENBRlUsRUFHVixLQUFLZ0IsUUFISyxFQUlWLEtBQUtBLFFBSkssRUFLVixLQUFLQyxNQUFMLENBQVlDLE1BTEYsQ0FBWjtBQU9EOztBQTFCSDtBQUFBO0FBQUEsNEJBNEJVSCxHQTVCVixFQTRCZTtBQUNYLFVBQUloQixJQUFJWSxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsR0FBakIsR0FBd0IsRUFBbkMsSUFBeUMsS0FBS0csUUFBdEQ7QUFDQSxVQUFJaEIsSUFBSVcsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWdCLEdBQWpCLEdBQXdCLEVBQW5DLElBQXlDLEtBQUtHLFFBQXREOztBQUVBLFdBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFdBQUtLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0UsS0FBTCxHQUFhLElBQUlWLEtBQUosQ0FDWCxHQURXLEVBRVgsR0FGVyxFQUdYLEtBQUtFLFFBSE0sRUFJWCxLQUFLQSxRQUpNLEVBS1gsS0FBS0MsTUFBTCxDQUFZRSxLQUxELENBQWI7QUFPQSxXQUFLTSxJQUFMLEdBQVksSUFBSWYsSUFBSixDQUNWWCxDQURVLEVBRVZDLENBRlUsRUFHVixLQUFLZ0IsUUFISyxFQUlWLEtBQUtBLFFBSkssRUFLVixLQUFLQyxNQUFMLENBQVlDLE1BTEYsQ0FBWjtBQU9EOztBQUVEOztBQXBERjtBQUFBO0FBQUEsOEJBcURZO0FBQUE7O0FBQ1IsVUFBTVEsU0FBUyxLQUFLWCxHQUFwQjtBQUNBLFVBQUlZLE9BQU8sS0FBS0gsS0FBTCxDQUFXRyxJQUF0QjtBQUNBLFVBQUlILFFBQVEsS0FBS0EsS0FBakI7O0FBRUEsVUFBSUEsTUFBTUksbUJBQU4sQ0FBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FBSixFQUF5QztBQUN2QyxhQUFLQyxPQUFMO0FBQ0QsT0FBQyxJQUFJTCxNQUFNTSxlQUFOLENBQXNCLEtBQUtMLElBQTNCLENBQUosRUFBc0M7QUFDdEMsYUFBS0gsS0FBTCxJQUFjLEdBQWQ7QUFDQSxhQUFLRyxJQUFMLENBQVVNLE9BQVY7QUFDQSxhQUFLUCxLQUFMLENBQVdRLElBQVgsQ0FBZ0IsQ0FBaEI7QUFDRCxPQUpDLE1BSUs7QUFDTCxhQUFLUixLQUFMLENBQVdTLElBQVg7QUFDQU4sYUFBS08sT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxHQUFkLEVBQXNCO0FBQ2pDLGNBQUlELFVBQVUsQ0FBZCxFQUFpQjtBQUNmRCxpQkFBS0YsSUFBTCxDQUFVLE1BQUtULEtBQWY7QUFDRCxXQUZELE1BRU87QUFDTFcsaUJBQUtGLElBQUwsQ0FBVUksSUFBSUQsUUFBUSxDQUFaLENBQVY7QUFDRDtBQUNGLFNBTkQ7QUFPRDs7QUFFRCxVQUFJVCxLQUFLVyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkIsWUFBSUMsUUFBUVosS0FBS2EsSUFBTCxDQUFVLFVBQVNMLElBQVQsRUFBZTtBQUNuQyxpQkFBUUEsS0FBS3BDLENBQUwsS0FBV3lCLE1BQU16QixDQUFqQixJQUFzQm9DLEtBQUtuQyxDQUFMLEtBQVd3QixNQUFNeEIsQ0FBL0M7QUFDRCxTQUZXLENBQVo7O0FBSUEsWUFBSXVDLEtBQUosRUFBVztBQUNULGVBQUtWLE9BQUw7QUFDRDtBQUNGO0FBQ0QsV0FBS0osSUFBTCxDQUFVZ0IsSUFBVixDQUFlZixNQUFmO0FBQ0EsV0FBS0YsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQmYsTUFBaEI7QUFDRDtBQXRGSDtBQUFBO0FBQUEsa0NBdUZnQjtBQUNaLFVBQUksS0FBS0YsS0FBTCxDQUFXSSxtQkFBWCxDQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQUFKLEVBQThDO0FBQzVDLGFBQUtDLE9BQUw7QUFDRDtBQUNGO0FBM0ZIO0FBQUE7QUFBQSw4QkE0Rlk7QUFDUixXQUFLUixRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUE5Rkg7QUFBQTtBQUFBLDZCQWdHVztBQUNQLGFBQU8sS0FBS0EsUUFBWjtBQUNEO0FBbEdIO0FBQUE7QUFBQSxrQ0FvR2dCO0FBQ1osV0FBS0QsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDRDtBQXRHSDtBQUFBO0FBQUEsbUNBd0dpQnNCLENBeEdqQixFQXdHb0I7QUFDaEIsVUFBTUMsWUFBWTtBQUNoQkMsWUFBSSxDQURZO0FBRWhCQyxZQUFJO0FBRlksT0FBbEI7O0FBS0EsVUFBSUgsRUFBRUksR0FBRixLQUFVLFlBQWQsRUFBNEI7QUFDMUJILGtCQUFVQyxFQUFWLEdBQWUsS0FBSzVCLFFBQXBCO0FBRUQsT0FIRCxNQUdPLElBQUkwQixFQUFFSSxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUNoQ0gsa0JBQVVDLEVBQVYsR0FBZSxDQUFDLEtBQUs1QixRQUFyQjtBQUVELE9BSE0sTUFHQSxJQUFJMEIsRUFBRUksR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDaENILGtCQUFVQyxFQUFWLEdBQWUsQ0FBQyxLQUFLNUIsUUFBckI7QUFFRCxPQUhNLE1BR0EsSUFBSTBCLEVBQUVJLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQ2hDSCxrQkFBVUUsRUFBVixHQUFlLEtBQUs3QixRQUFwQjtBQUNELE9BRk0sTUFFQSxJQUFJMEIsRUFBRUksR0FBRixLQUFVLFNBQWQsRUFBeUI7QUFDOUJILGtCQUFVRSxFQUFWLEdBQWUsQ0FBQyxLQUFLN0IsUUFBckI7QUFDRCxPQUZNLE1BRUE7QUFDTDtBQUNEOztBQUVELFdBQUtRLEtBQUwsQ0FBV3VCLGVBQVgsQ0FBMkJKLFNBQTNCO0FBQ0Q7QUFoSUg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQW5DLE9BQU9DLE9BQVA7QUFDRSxxQkFBWVYsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtKLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt5QyxFQUFMLEdBQVUsS0FBSzFDLEtBQWY7QUFDQSxTQUFLMkMsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLdkMsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNEOztBQVhIO0FBQUE7QUFBQSxvQ0Fha0JILE1BYmxCLEVBYTBCO0FBQ3RCLGFBQ0UsS0FBS0wsQ0FBTCxHQUFTSyxPQUFPTCxDQUFQLEdBQVdLLE9BQU9GLEtBQTNCLElBQ0EsS0FBS0gsQ0FBTCxHQUFTLEtBQUtHLEtBQWQsR0FBc0JFLE9BQU9MLENBRDdCLElBRUEsS0FBS0MsQ0FBTCxHQUFTSSxPQUFPSixDQUFQLEdBQVdJLE9BQU9ILE1BRjNCLElBR0EsS0FBS0QsQ0FBTCxHQUFTLEtBQUtDLE1BQWQsR0FBdUJHLE9BQU9KLENBSmhDO0FBTUQ7QUFwQkg7QUFBQTtBQUFBLHdDQXNCc0JnRCxXQXRCdEIsRUFzQm1DQyxZQXRCbkMsRUFzQmlEO0FBQzdDLGFBQ0UsS0FBS2xELENBQUwsR0FBUyxDQUFULElBQ0EsS0FBS0EsQ0FBTCxHQUFTLEtBQUtHLEtBQWQsR0FBc0I4QyxXQUR0QixJQUVBLEtBQUtoRCxDQUFMLEdBQVMsQ0FGVCxJQUdBLEtBQUtBLENBQUwsR0FBUyxLQUFLQyxNQUFkLEdBQXVCZ0QsWUFKekI7QUFNRDtBQTdCSDtBQUFBO0FBQUEseUJBK0JPbEMsR0EvQlAsRUErQlk7QUFBQSxVQUNBaEIsQ0FEQSxHQUMrQixJQUQvQixDQUNBQSxDQURBO0FBQUEsVUFDR0MsQ0FESCxHQUMrQixJQUQvQixDQUNHQSxDQURIO0FBQUEsVUFDTUMsTUFETixHQUMrQixJQUQvQixDQUNNQSxNQUROO0FBQUEsVUFDY0MsS0FEZCxHQUMrQixJQUQvQixDQUNjQSxLQURkO0FBQUEsVUFDcUJDLEtBRHJCLEdBQytCLElBRC9CLENBQ3FCQSxLQURyQjs7O0FBR1JZLFVBQUltQyxTQUFKLEdBQWdCL0MsS0FBaEI7QUFDQVksVUFBSW9DLFFBQUosQ0FBYXBELENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CRSxLQUFuQixFQUEwQkQsTUFBMUI7QUFDRDtBQXBDSDtBQUFBO0FBQUEsMkJBc0NTO0FBQ0wsV0FBS0ssRUFBTCxHQUFVLEtBQUtQLENBQWY7QUFDQSxXQUFLUSxFQUFMLEdBQVUsS0FBS1AsQ0FBZjtBQUNBLFdBQUtELENBQUwsSUFBVSxLQUFLNkMsRUFBTCxHQUFVLEtBQUtRLEdBQXpCO0FBQ0EsV0FBS3BELENBQUwsSUFBVSxLQUFLNkMsRUFBTCxHQUFVLEtBQUtRLEdBQXpCO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxERjtBQUFBO0FBQUEsb0NBb0RrQlYsU0FwRGxCLEVBb0Q2QjtBQUN6QixXQUFLQyxFQUFMLEdBQVVELFVBQVVDLEVBQXBCO0FBQ0EsV0FBS0MsRUFBTCxHQUFVRixVQUFVRSxFQUFwQjtBQUNEO0FBdkRIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1qRCxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCO0FBQ0EsSUFBTUMsT0FBTyxtQkFBQUQsQ0FBUSw2QkFBUixDQUFiOztJQUVNaUIsSzs7O0FBQ0osaUJBQWFmLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxNQUFuQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQUE7O0FBQUEsOEdBQ2pDSixDQURpQyxFQUM5QkMsQ0FEOEIsRUFDM0JDLE1BRDJCLEVBQ25CQyxLQURtQixFQUNaQyxLQURZOztBQUV2QyxVQUFLd0IsSUFBTCxHQUFZLEVBQVo7QUFDQSxVQUFLMkIsT0FBTCxHQUFlLEVBQWY7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBSnVDO0FBS3hDOzs7O3lCQUVJQyxNLEVBQVE7QUFDWCxXQUFLRCxhQUFMLElBQXNCQyxNQUF0QjtBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxNQUFwQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsWUFBSUMsVUFBVSxJQUFJNUQsSUFBSixDQUNaLEtBQUt3RCxPQUFMLENBQWFHLEVBQUUsQ0FBRixDQUFiLENBRFksRUFFWixLQUFLSCxPQUFMLENBQWFHLEVBQUUsQ0FBRixDQUFiLENBRlksRUFHWixLQUFLeEQsTUFITyxFQUlaLEtBQUtDLEtBSk8sRUFLWixLQUFLQyxLQUxPLENBQWQ7O0FBUUEsYUFBS3dCLElBQUwsQ0FBVWdDLE9BQVYsQ0FBa0JELE9BQWxCO0FBQ0Q7QUFDRjs7O3lCQUNJM0MsRyxFQUFLO0FBQUEsVUFDQWhCLENBREEsR0FDK0IsSUFEL0IsQ0FDQUEsQ0FEQTtBQUFBLFVBQ0dDLENBREgsR0FDK0IsSUFEL0IsQ0FDR0EsQ0FESDtBQUFBLFVBQ01DLE1BRE4sR0FDK0IsSUFEL0IsQ0FDTUEsTUFETjtBQUFBLFVBQ2NDLEtBRGQsR0FDK0IsSUFEL0IsQ0FDY0EsS0FEZDtBQUFBLFVBQ3FCQyxLQURyQixHQUMrQixJQUQvQixDQUNxQkEsS0FEckI7OztBQUdSWSxVQUFJbUMsU0FBSixHQUFnQi9DLEtBQWhCO0FBQ0FZLFVBQUlvQyxRQUFKLENBQWFwRCxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCO0FBQ0EsV0FBS3lCLElBQUwsQ0FBVU8sT0FBVixDQUFrQixnQkFBUTtBQUN4QkMsYUFBS00sSUFBTCxDQUFVMUIsR0FBVjtBQUNELE9BRkQ7QUFHRDs7OzJCQUVNO0FBQ0wsV0FBS1QsRUFBTCxHQUFVLEtBQUtQLENBQWY7QUFDQSxXQUFLUSxFQUFMLEdBQVUsS0FBS1AsQ0FBZjtBQUNBLFdBQUtELENBQUwsR0FBU1ksS0FBS0MsS0FBTCxDQUFXLENBQUMsS0FBS2IsQ0FBTCxHQUFTLEtBQUs2QyxFQUFmLElBQXFCLEtBQUsxQyxLQUFyQyxJQUE4QyxLQUFLQSxLQUE1RDtBQUNBLFdBQUtGLENBQUwsR0FBU1csS0FBS0MsS0FBTCxDQUFXLENBQUMsS0FBS1osQ0FBTCxHQUFTLEtBQUs2QyxFQUFmLElBQXFCLEtBQUs1QyxNQUFyQyxJQUErQyxLQUFLQSxNQUE3RDtBQUNBLFdBQUtxRCxPQUFMLENBQWFLLE9BQWIsQ0FBcUIsQ0FBQyxLQUFLckQsRUFBTixFQUFVLEtBQUtDLEVBQWYsQ0FBckI7QUFDQSxVQUFJLEtBQUsrQyxPQUFMLENBQWFoQixNQUFiLEdBQXNCLEtBQUtpQixhQUEvQixFQUE4QztBQUM1QyxhQUFLRCxPQUFMLENBQWFNLEdBQWI7QUFDRDtBQUNGOzs7O0VBekNpQmhFLFM7O0FBNkNwQlksT0FBT0MsT0FBUCxHQUFpQkssS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNoREEsSUFBTStDLE9BQU8sbUJBQUFoRSxDQUFRLDZCQUFSLENBQWI7O0FBRUEsSUFBTTZCLFNBQVNvQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxJQUFNaEQsTUFBTVcsT0FBT3NDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE9BQU8sSUFBSUosSUFBSixDQUFTOUMsR0FBVCxDQUFiO0FBQ0EsSUFBTU8sUUFBUXdDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLElBQU1HLFVBQVVKLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNSSxhQUFhTCxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjtBQUNBOztBQUVBLFNBQVNLLFFBQVQsR0FBcUI7QUFDbkJDLGFBQVcsWUFBTTtBQUNmLFFBQUlKLEtBQUtLLE1BQUwsRUFBSixFQUFtQjtBQUNqQnZELFVBQUl3RCxJQUFKLEdBQVcsNkJBQVg7QUFDQXhELFVBQUltQyxTQUFKLEdBQWdCLFdBQWhCO0FBQ0FuQyxVQUFJeUQsUUFBSixDQUFhLFlBQWIsRUFBMkIsRUFBM0IsRUFBK0IsR0FBL0I7QUFDQTtBQUNELEtBTEQsTUFLTztBQUNMekQsVUFBSTBELFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CL0MsT0FBT3hCLEtBQTNCLEVBQWtDd0IsT0FBT3pCLE1BQXpDO0FBQ0FnRSxXQUFLUyxPQUFMO0FBQ0Q7QUFDREMsV0FBT0MscUJBQVAsQ0FBNkJSLFFBQTdCO0FBQ0E5QyxVQUFNdUQsU0FBTixHQUFrQlosS0FBSzNDLEtBQXZCO0FBQ0QsR0FaRCxFQVlHMkMsS0FBSzFDLEtBWlI7QUFjRDtBQUNEdUMsU0FBU2dCLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDQyxjQUFyQzs7QUFFQWIsUUFBUVksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVztBQUMzQ1osVUFBUVcsU0FBUixHQUFvQixVQUFwQjtBQUNBWixPQUFLQyxPQUFMLENBQWFuRCxHQUFiO0FBQ0E0RCxTQUFPQyxxQkFBUCxDQUE2QlIsUUFBN0I7QUFDRCxDQUpEOztBQU1BRCxXQUFXVyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFTcEMsQ0FBVCxFQUFZO0FBQy9DLE1BQU1zQyxTQUFTdEMsRUFBRXNDLE1BQWpCOztBQUVBLE1BQUlBLE9BQU9DLFNBQVAsS0FBcUIsdUJBQXpCLEVBQWtEO0FBQ2hEaEIsU0FBSzFDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7QUFDRCxNQUFJeUQsT0FBT0MsU0FBUCxLQUFxQix5QkFBekIsRUFBb0Q7QUFDbERoQixTQUFLMUMsS0FBTCxHQUFhLEVBQWI7QUFDRDtBQUNELE1BQUl5RCxPQUFPQyxTQUFQLEtBQXFCLHVCQUF6QixFQUFrRDtBQUNoRGhCLFNBQUsxQyxLQUFMLEdBQWEsRUFBYjtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSxTQUFTd0QsY0FBVCxDQUF3QnJDLENBQXhCLEVBQTJCO0FBQ3pCdUIsT0FBS2MsY0FBTCxDQUFvQnJDLENBQXBCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxuY2xhc3MgQm9keSBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yICh4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuICBtb3ZlKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMubHggPSB0aGlzLng7XG4gICAgdGhpcy5seSA9IHRoaXMueTtcbiAgICB0aGlzLnggPSBvYmplY3QubHg7XG4gICAgdGhpcy55ID0gb2JqZWN0Lmx5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3RvciAoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cbiAgcmVzcGF3bigpIHtcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMjkwKSAvIDEwKSAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDI5MCkgLyAxMCkgKiB0aGlzLmhlaWdodDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb2Q7XG4iLCJjb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UnKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgbGV0IHggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMjkwKSAvIDEwKSAqIHRoaXMuZ2FtZVNpemU7XG4gICAgbGV0IHkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMjkwKSAvIDEwKSAqIHRoaXMuZ2FtZVNpemU7XG5cbiAgICB0aGlzLmNvbG9ycyA9IHt5ZWxsb3c6ICcjZjJmNDU1JywgZ3JlZW46ICcjNmNmYzg5J307XG4gICAgdGhpcy5nYW1lU2l6ZSA9IDIwO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc3BlZWQgPSA4NjtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKFxuICAgICAgMzAwLFxuICAgICAgMzAwLFxuICAgICAgdGhpcy5nYW1lU2l6ZSxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmNvbG9ycy5ncmVlblxuICAgICk7XG4gICAgdGhpcy5mb29kID0gbmV3IEZvb2QoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5jb2xvcnMueWVsbG93XG4gICAgKTtcbiAgfVxuXG4gIG5ld0dhbWUoY3R4KSB7XG4gICAgbGV0IHggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMjkwKSAvIDEwKSAqIHRoaXMuZ2FtZVNpemU7XG4gICAgbGV0IHkgPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogMjkwKSAvIDEwKSAqIHRoaXMuZ2FtZVNpemU7XG5cbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKFxuICAgICAgMzAwLFxuICAgICAgMzAwLFxuICAgICAgdGhpcy5nYW1lU2l6ZSxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmNvbG9ycy5ncmVlblxuICAgICk7XG4gICAgdGhpcy5mb29kID0gbmV3IEZvb2QoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHRoaXMuZ2FtZVNpemUsXG4gICAgICB0aGlzLmdhbWVTaXplLFxuICAgICAgdGhpcy5jb2xvcnMueWVsbG93XG4gICAgKTtcbiAgfVxuXG4gIC8vIGRyYXcgb25lIGZyYW1lIG9mIG91ciBnYW1lXG4gIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jdHg7XG4gICAgbGV0IGJvZHkgPSB0aGlzLnNuYWtlLmJvZHk7XG4gICAgbGV0IHNuYWtlID0gdGhpcy5zbmFrZTtcblxuICAgIGlmIChzbmFrZS5pc0NvbGxpZGluZ1dpdGhXYWxsKDYwMCwgNjAwKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfSBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZm9vZCkpIHtcbiAgICAgIHRoaXMuc2NvcmUgKz0gMTAwO1xuICAgICAgdGhpcy5mb29kLnJlc3Bhd24oKTtcbiAgICAgIHRoaXMuc25ha2UuZ3Jvdyg1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbmFrZS5tb3ZlKCk7XG4gICAgICBib2R5LmZvckVhY2goKHRhaWwsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGFpbC5tb3ZlKHRoaXMuc25ha2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhaWwubW92ZShhcnJbaW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChib2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBjaGVjayA9IGJvZHkuZmluZChmdW5jdGlvbih0YWlsKSB7XG4gICAgICAgIHJldHVybiAodGFpbC54ID09PSBzbmFrZS54ICYmIHRhaWwueSA9PT0gc25ha2UueSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZvb2QuZHJhdyhjYW52YXMpO1xuICAgIHRoaXMuc25ha2UuZHJhdyhjYW52YXMpO1xuICB9XG4gIGhhbmRsZVNuYWtlKCkge1xuICAgIGlmICh0aGlzLnNuYWtlLmlzQ29sbGlkaW5nV2l0aFdhbGwoNjAwLCA2MDApKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9XG4gIH1cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIGlzT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lT3ZlcjtcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHtcbiAgICAgIGR4OiAwLFxuICAgICAgZHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IHRoaXMuZ2FtZVNpemU7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLXRoaXMuZ2FtZVNpemU7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLXRoaXMuZ2FtZVNpemU7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gdGhpcy5nYW1lU2l6ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IC10aGlzLmdhbWVTaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zbmFrZS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmx4ID0gMDtcbiAgICB0aGlzLmx5ID0gMDtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiZcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMubHggPSB0aGlzLng7XG4gICAgdGhpcy5seSA9IHRoaXMueTtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keXY7XG4gIH1cblxuICAvLyBtb3ZlQmFjaygpIHtcbiAgLy8gICB0aGlzLmx4ID0gdGhpcy54O1xuICAvLyAgIHRoaXMubHkgPSB0aGlzLnk7XG4gIC8vICAgdGhpcy54IC09IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgLy8gICB0aGlzLnkgLT0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICAvLyB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxuXG59O1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcbmNvbnN0IEJvZHkgPSByZXF1aXJlKCcuL0JvZHknKTtcblxuY2xhc3MgU25ha2UgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3RvciAoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5ib2R5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5oaXN0b3J5TGVuZ3RoID0gMztcbiAgfVxuXG4gIGdyb3cobnVtYmVyKSB7XG4gICAgdGhpcy5oaXN0b3J5TGVuZ3RoICs9IG51bWJlcjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICB2YXIgbmV3Qm9keSA9IG5ldyBCb2R5KFxuICAgICAgICB0aGlzLmhpc3RvcnlbaVswXV0sIFxuICAgICAgICB0aGlzLmhpc3RvcnlbaVsxXV0sIFxuICAgICAgICB0aGlzLmhlaWdodCwgXG4gICAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgICB0aGlzLmNvbG9yXG4gICAgICApO1xuXG4gICAgICB0aGlzLmJvZHkudW5zaGlmdChuZXdCb2R5KTtcbiAgICB9XG4gIH1cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgICB0aGlzLmJvZHkuZm9yRWFjaCh0YWlsID0+IHtcbiAgICAgIHRhaWwuZHJhdyhjdHgpO1xuICAgIH0pO1xuICB9XG4gXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5seCA9IHRoaXMueDtcbiAgICB0aGlzLmx5ID0gdGhpcy55O1xuICAgIHRoaXMueCA9IE1hdGgucm91bmQoKHRoaXMueCArIHRoaXMuZHgpIC8gdGhpcy53aWR0aCkgKiB0aGlzLndpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucm91bmQoKHRoaXMueSArIHRoaXMuZHkpIC8gdGhpcy5oZWlnaHQpICogdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5oaXN0b3J5LnVuc2hpZnQoW3RoaXMubHgsIHRoaXMubHldKTtcbiAgICBpZiAodGhpcy5oaXN0b3J5Lmxlbmd0aCA+IHRoaXMuaGlzdG9yeUxlbmd0aCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU25ha2U7XG4iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbmNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKTtcbmNvbnN0IGRpZmZpY3VsdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eS1sZXZlbCcpO1xuLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcblxuZnVuY3Rpb24gZ2FtZUxvb3AgKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgICAgY3R4LmZvbnQgPSBcIjcycHggJ09yYml0cm9uJywgc2Fucy1zZXJpZlwiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdmaXJlYnJpY2snO1xuICAgICAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXIhJywgNzAsIDMwMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWUuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICBzY29yZS5pbm5lclRleHQgPSBnYW1lLnNjb3JlO1xuICB9LCBnYW1lLnNwZWVkKTtcblxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBuZXdHYW1lLmlubmVyVGV4dCA9ICdOZXcgR2FtZSc7XG4gIGdhbWUubmV3R2FtZShjdHgpO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0pO1xuXG5kaWZmaWN1bHR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcblxuICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RpZmZpY3VsdHktbGV2ZWwtaGFyZCcpIHtcbiAgICBnYW1lLnNwZWVkID0gMzA7XG4gIH1cbiAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdkaWZmaWN1bHR5LWxldmVsLW1lZGl1bScpIHtcbiAgICBnYW1lLnNwZWVkID0gNTA7XG4gIH1cbiAgaWYgKHRhcmdldC5jbGFzc05hbWUgPT09ICdkaWZmaWN1bHR5LWxldmVsLWVhc3knKSB7XG4gICAgZ2FtZS5zcGVlZCA9IDg2O1xuICB9XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9