module objects {
    export class Hero extends objects.GameObject {
        //member variables
        private _isJumping: boolean;
        private _isFalling: boolean;
        private _jumpStep: number;
        private _gravity: number;
        private _maxJumpHeight: number;
        public _minY: number;
        private _jumpMusic: createjs.AbstractSoundInstance;

        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        constructor() {
            super("hero");
            this._isJumping = false;
            this._isFalling = false;
            this._jumpStep = -16;
            this._gravity = -8;
            this._maxJumpHeight = config.Screen.HEIGHT - (3 * this.getBounds().height);
            this._minY = config.Screen.HEIGHT - config.Floor.HEIGHT;
            this.Start();
        }

        //private methods
        private _checkBounds(): void {
            if(this.y < this._maxJumpHeight) {
                this.y = this._maxJumpHeight;
                this._isFalling = true;
                this._isJumping = false;
            }
            if(this.y > this._minY) {
                this.y = this._minY;
                this._isFalling = false;
            }
        }

        // public methods
        public Start():void {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.x = Math.floor(config.Screen.WIDTH / 3);
            this.Reset();
        }

        public Update(keyCodes: Array<number>):void {
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        //this.x += config.ObjectSpeed.SPEED;
                        break;
                    case 83:
                    case 40:
                        this._isJumping = false;
                        this._isFalling = true;
                        this.y -= this._gravity;
                        break;
                    case 32:
                    case 87:
                    case 38:
                        if(!this._isJumping) {
                            this._jumpMusic = createjs.Sound.play("jump");
                            this._jumpMusic.volume = 0.2;           
                        }
                        this._isJumping = !this._isFalling;
                        break;
                }
            });

            this.y -= this._gravity;
            if(this._isJumping) {
                this.y += this._jumpStep;
            }

            this._checkBounds();
        }

        public Reset():void {
            this.y = this._minY;
        }

    }
}