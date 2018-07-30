module scenes {
    export class Level2 extends objects.Scene {
        // member variables

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this.Main();
        }

        public Update():void {
            //update objects

            //collision check
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - PLAY SCENE`);
            // add children
        }
    }
} 