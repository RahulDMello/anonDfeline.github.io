module scenes {
    export class End extends objects.Scene {
        // member variables
        private _background: createjs.Bitmap;
        private _button: createjs.Bitmap;
        private _scoreLabel: objects.ScoreText;
        private _bgMusic: createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            //init member variables

            this._bgMusic = createjs.Sound.play("endbgm");
            this._bgMusic.loop = -1;
            this._bgMusic.volume = 0.1;

            this._scoreLabel = new objects.ScoreText();

            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("endbg"));
            this._background.x = 0;
            this._background.y = 0;
            this._button = new createjs.Bitmap(managers.Game.AssetManager.getResult("play"));
            this._button.regX = this._button.getBounds().width * 0.5;
            this._button.regY = this._button.getBounds().height * 0.5;
            this._button.x = config.Screen.HALF_WIDTH - 250;
            this._button.y = config.Screen.HALF_HEIGHT + 50;
            this._button.on("click", function() {
                managers.Score.SCORE = 0;
                managers.Game.CurrentState = config.Scene.LEVEL1;
            });
            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this._bgMusic.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - START SCENE`);
            // add children
            this.addChild(this._background);
            this.addChild(this._button);
            this.addChild(this._scoreLabel);
        }
    }
}