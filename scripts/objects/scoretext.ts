module objects {
    export class ScoreText extends createjs.Text {
        //member variables

        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        constructor() {
            super();
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = 40;
            this.y = 20;
            this.text = "Score: " + managers.Score.SCORE;
            this.color = "#fff";
            this.font = "bold 48px Consolus"
        }

        public Update():void {
            this.text = "Score: " + managers.Score.SCORE;
        }

        public Reset():void {
            
        }
    }
}