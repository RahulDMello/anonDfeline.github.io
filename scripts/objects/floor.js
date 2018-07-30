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
    var Floor = /** @class */ (function (_super) {
        __extends(Floor, _super);
        //member variables
        /**
         *Creates an instance of Ocean.
         * @memberof Floor
         */
        function Floor() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("floor")) || this;
            _this.Start();
            return _this;
        }
        //private methods
        Floor.prototype._checkBounds = function () {
            if (this.x < config.Screen.WIDTH - this.getBounds().width) {
                this.Reset();
            }
        };
        // public methods
        Floor.prototype.Start = function () {
            // init
            this.y = config.Screen.HEIGHT - this.getBounds().height;
            this.Reset();
        };
        Floor.prototype.Update = function (keyCodes) {
            var _this = this;
            var flag = true;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        if (flag) {
                            _this.x -= config.ObjectSpeed.SPEED;
                            flag = !flag;
                        }
                        break;
                }
                _this._checkBounds();
            });
        };
        Floor.prototype.Reset = function () {
            this.x = 0;
        };
        return Floor;
    }(createjs.Bitmap));
    objects.Floor = Floor;
})(objects || (objects = {}));
//# sourceMappingURL=floor.js.map