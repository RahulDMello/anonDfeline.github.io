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
    var ScoreText = /** @class */ (function (_super) {
        __extends(ScoreText, _super);
        //member variables
        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        function ScoreText() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //private methods
        // public methods
        ScoreText.prototype.Start = function () {
            // init
            this.x = 40;
            this.y = 20;
            this.text = "Score: " + managers.Score.SCORE;
            this.color = "#fff";
            this.font = "bold 48px Consolus";
        };
        ScoreText.prototype.Update = function () {
            this.text = "Score: " + managers.Score.SCORE;
        };
        ScoreText.prototype.Reset = function () {
        };
        return ScoreText;
    }(createjs.Text));
    objects.ScoreText = ScoreText;
})(objects || (objects = {}));
//# sourceMappingURL=scoretext.js.map