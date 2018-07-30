module objects {
    export class Background extends createjs.Bitmap {
        //member variables

        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        constructor() {
            super(managers.Game.AssetManager.getResult("bg"));
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = 0;
            this.y = 0;
        }

        public Update():void {
            
        }

        public Reset():void {

        }


    }
}