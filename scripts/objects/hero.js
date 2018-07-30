var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Hero = /** @class */ (function (_super) {
        __extends(Hero, _super);
        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        function Hero() {
            var _this = _super.call(this, "hero") || this;
            _this._isJumping = false;
            _this._isFalling = false;
            _this._jumpStep = -16;
            _this._gravity = -8;
            _this._maxJumpHeight = config.Screen.HEIGHT - (3 * _this.getBounds().height);
            _this._minY = config.Screen.HEIGHT - config.Floor.HEIGHT;
            _this.Start();
            return _this;
        }
        //private methods
        Hero.prototype._checkBounds = function () {
            if (this.y < this._maxJumpHeight) {
                this.y = this._maxJumpHeight;
                this._isFalling = true;
                this._isJumping = false;
            }
            if (this.y > this._minY) {
                this.y = this._minY;
                this._isFalling = false;
            }
        };
        // public methods
        Hero.prototype.Start = function () {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.x = Math.floor(config.Screen.WIDTH / 3);
            this.Reset();
        };
        Hero.prototype.Update = function (keyCodes) {
            var _this = this;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        //this.x += config.ObjectSpeed.SPEED;
                        break;
                    case 83:
                    case 40:
                        _this._isJumping = false;
                        _this._isFalling = true;
                        _this.y -= _this._gravity;
                        break;
                    case 32:
                    case 87:
                    case 38:
                        if (!_this._isJumping) {
                            _this._jumpMusic = createjs.Sound.play("jump");
                            _this._jumpMusic.volume = 0.2;
                        }
                        _this._isJumping = !_this._isFalling;
                        break;
                }
            });
            this.y -= this._gravity;
            if (this._isJumping) {
                this.y += this._jumpStep;
            }
            this._checkBounds();
        };
        Hero.prototype.Reset = function () {
            this.y = this._minY;
        };
        return Hero;
    }(objects.GameObject));
    objects.Hero = Hero;
})(objects || (objects = {}));
//# sourceMappingURL=hero.js.map