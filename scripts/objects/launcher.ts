module objects {
    export class Launcher extends objects.GameObject {
        //member variables
        private _movespd: number;
        private isHeadingIn: boolean;

        /**
         *Creates an instance of Ocean.
         * @memberof launcher
         */
        constructor() {
            super("launcher");
            this._movespd = 3;
            this.isHeadingIn = true;
            this.Start();
        }

        //private methods
        private _checkbounds(): void {
            if(this.x < config.Screen.WIDTH) {
                this.isHeadingIn = false;
            }
            if(this.x > config.Screen.WIDTH + this.width) {
                this.Reset();
            } 
        }

        // public methods
        public Start():void {
            // init
            this.regX = this.width;
            this.regY = this.height;
            this.x = config.Screen.WIDTH + this.width + 5;
            this.Reset();
        }

        public Update(keyCodes: Array<number>):void {
            let multiplier = 1;
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        multiplier = 2;
                        break;
                }
            });
            if(this.isHeadingIn) {
                this.x -= (this._movespd * multiplier);
            } else {
                this.x += (this._movespd);
            }
            this._checkbounds();
        }

        public Reset():void {
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height - config.Floor.HEIGHT)) + config.Floor.HEIGHT + this.height;
            if(this.y > config.Screen.WIDTH - 140) {
                this.y = config.Floor.HEIGHT + this.height;
            }
            this.isHeadingIn = true;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        }

    }
}