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
    var Launcher = /** @class */ (function (_super) {
        __extends(Launcher, _super);
        /**
         *Creates an instance of Ocean.
         * @memberof launcher
         */
        function Launcher() {
            var _this = _super.call(this, "launcher") || this;
            _this._movespd = 3;
            _this.isHeadingIn = true;
            _this.Start();
            return _this;
        }
        //private methods
        Launcher.prototype._checkbounds = function () {
            if (this.x < config.Screen.WIDTH) {
                this.isHeadingIn = false;
            }
            if (this.x > config.Screen.WIDTH + this.width) {
                this.Reset();
            }
        };
        // public methods
        Launcher.prototype.Start = function () {
            // init
            this.regX = this.width;
            this.regY = this.height;
            this.x = config.Screen.WIDTH + this.width + 5;
            this.Reset();
        };
        Launcher.prototype.Update = function (keyCodes) {
            var multiplier = 1;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        multiplier = 2;
                        break;
                }
            });
            if (this.isHeadingIn) {
                this.x -= (this._movespd * multiplier);
            }
            else {
                this.x += (this._movespd);
            }
            this._checkbounds();
        };
        Launcher.prototype.Reset = function () {
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height - config.Floor.HEIGHT)) + config.Floor.HEIGHT + this.height;
            if (this.y > config.Screen.WIDTH - 140) {
                this.y = config.Floor.HEIGHT + this.height;
            }
            this.isHeadingIn = true;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        };
        return Launcher;
    }(objects.GameObject));
    objects.Launcher = Launcher;
})(objects || (objects = {}));
//# sourceMappingURL=launcher.js.map