module objects {
    export class Box extends GameObject {
        //member variables
        private _index: number;

        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        constructor(index: number) {
            super("box");
            this._index = index;
            this.Start();
        }

        //private methods
        private _checkBounds(): void {
            if(this.x < -this.getBounds().width) {
                this.Reset();
            }
        }

        // public methods
        public Start():void {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT;
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
            this.x = Math.floor(Math.random() * config.Screen.WIDTH) + (config.Screen.WIDTH  * this._index);
        }

    }
}