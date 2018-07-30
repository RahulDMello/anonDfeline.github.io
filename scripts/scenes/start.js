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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            //init member variables
            this._bgMusic = createjs.Sound.play("startbgm");
            this._bgMusic.loop = -1;
            this._bgMusic.volume = 0.1;
            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("startbg"));
            this._background.x = 0;
            this._background.y = 0;
            this._button = new createjs.Bitmap(managers.Game.AssetManager.getResult("play"));
            this._button.regX = this._button.getBounds().width * 0.5;
            this._button.regY = this._button.getBounds().height * 0.5;
            this._button.x = config.Screen.HALF_WIDTH;
            this._button.y = config.Screen.HALF_HEIGHT + 80;
            this._button.alpha = 0.8;
            this._button.on("click", function () {
                managers.Game.CurrentState = config.Scene.LEVEL1;
            });
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this._bgMusic.stop();
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("starting - START SCENE");
            // add children
            this.addChild(this._background);
            this.addChild(this._button);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map