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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        /**
         *Creates an instance of Bullet.
         * @memberof Bullet
         */
        function Bullet(nextY, index) {
            var _this = _super.call(this, "bullet") || this;
            _this._movespd = 10;
            _this.NextY = nextY;
            _this._index = index;
            _this._bulletDistance = 425;
            _this.Start();
            return _this;
        }
        //private methods
        Bullet.prototype._checkbounds = function () {
            if (this.x < 0) {
                this.Reset();
            }
            else if (this.x > config.Screen.WIDTH) {
                this.y = this.NextY;
            }
        };
        // public methods
        Bullet.prototype.Start = function () {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bullet.prototype.Update = function (keyCodes) {
            var isMoveX = false;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        isMoveX = true;
                        break;
                }
            });
            this.x -= this._movespd;
            if (isMoveX) {
                this.x -= config.ObjectSpeed.SPEED;
            }
            this._checkbounds();
        };
        Bullet.prototype.Reset = function () {
            this.x = config.Screen.WIDTH + (this._bulletDistance * this._index);
            this.y = this.NextY;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map