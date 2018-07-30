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
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        //member variables
        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        function Background() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("bg")) || this;
            _this.Start();
            return _this;
        }
        //private methods
        // public methods
        Background.prototype.Start = function () {
            // init
            this.x = 0;
            this.y = 0;
        };
        Background.prototype.Update = function () {
        };
        Background.prototype.Reset = function () {
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map