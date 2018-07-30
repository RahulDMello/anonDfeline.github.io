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
var scenes;
(function (scenes) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        // member variables
        // constructors
        function Level3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Level3.prototype.Start = function () {
            this.Main();
        };
        Level3.prototype.Update = function () {
            //update objects
            //collision check
        };
        Level3.prototype.Reset = function () {
        };
        Level3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Level3.prototype.Main = function () {
            console.log("starting - PLAY SCENE");
            // add children
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map