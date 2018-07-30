module objects {
    export class Bullet extends objects.GameObject {
        //member variables
        private _movespd: number;
        public NextY: number;
        private _index: number;
        private _bulletDistance;

        /**
         *Creates an instance of Bullet.
         * @memberof Bullet
         */
        constructor(nextY: number, index:number) {
            super("bullet");
            this._movespd = 10;
            this.NextY = nextY;
            this._index = index;
            this._bulletDistance = 425;
            this.Start();
        }

        //private methods
        private _checkbounds(): void {
            if(this.x < 0 ) {
                this.Reset();
            }
            else if(this.x > config.Screen.WIDTH) {
                this.y = this.NextY;
            }
        }

        // public methods
        public Start():void {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        }

        public Update(keyCodes: Array<number>):void {
            let isMoveX: boolean = false;
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        isMoveX = true;
                        break;
                }
            });
            this.x -= this._movespd;
            if(isMoveX) {
                this.x -= config.ObjectSpeed.SPEED;
            }
            this._checkbounds();
        }

        public Reset():void {
            this.x = config.Screen.WIDTH + (this._bulletDistance * this._index);
            this.y = this.NextY;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        }

    }
}