module objects {
    export class Floor extends createjs.Bitmap {
        //member variables

        /**
         *Creates an instance of Ocean.
         * @memberof Floor
         */
        constructor() {
            super(managers.Game.AssetManager.getResult("floor"));
            this.Start();
        }

        //private methods
        private _checkBounds(): void {
            if(this.x < config.Screen.WIDTH - this.getBounds().width) {
                this.Reset();
            }
        }

        // public methods
        public Start():void {
            // init
            this.y = config.Screen.HEIGHT - this.getBounds().height;
            this.Reset();
        }

        public Update(keyCodes: Array<number>):void {
            let flag: boolean = true;
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        if(flag) {
                            this.x -= config.ObjectSpeed.SPEED;
                            flag = !flag;
                        }
                        break;
                }
                this._checkBounds();
            });
        }

        public Reset():void {
            this.x = 0;
        }


    }
}