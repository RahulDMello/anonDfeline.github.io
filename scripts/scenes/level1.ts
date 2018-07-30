module scenes {
    export class Level1 extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _floor: objects.Floor;
        private _boxes: objects.Box[];
        private _numOfBoxes: Number;
        private _hero: objects.Hero;
        private _launcher: objects.Launcher;
        private _bullets: objects.Bullet[];
        private _numOfBullets: number;
        private _scoreText: objects.ScoreText;
        private _bgMusic: createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private doBoxCollide(box1: objects.Box, box2: objects.Box): boolean {
            return ((box1.x + box1.getBounds().width) < box2.x) && (box1.x > box2.x);
        }

        private fixBoxes(): void {
            let flag: boolean = false;
            for (let i = 0; i < this._boxes.length; i++) {
                const box1 = this._boxes[i];
                let j = i + 1 == this._boxes.length ? 0 : i + 1;
                const box2 = this._boxes[j];
                if(this.doBoxCollide(box1, box2)) {
                    flag = true;
                    break;
                }
            }
            if(flag) {
                this.fixBoxes();
            }
        }

        // public methods
        public Start():void {

            this._bgMusic = createjs.Sound.play("level1bgm");
            this._bgMusic.loop = -1;
            this._bgMusic.volume = 0.1;

            this._numOfBoxes = 3;
            this._numOfBullets = 3;
            this._background = new objects.Background();
            this._floor = new objects.Floor();
            this._boxes = new Array<objects.Box>();
            this._hero = new objects.Hero();
            this._launcher = new objects.Launcher();
            this._bullets = new Array<objects.Bullet>();
            this._scoreText = new objects.ScoreText();
            
            for(let i = 0; i < this._numOfBoxes; i++) {
                this._boxes.push(new objects.Box(i+1));
            }

            for(let i = 0; i < this._numOfBullets; i++) {
                this._bullets.push(new objects.Bullet(this._launcher.y - (this._launcher.getBounds().height * 0.5), i+1));
            }

            this.Main();
        }

        public Update(keyCodes: Array<number>):void {
            //update objects

            for (let i = 0; i < keyCodes.length; i++) {
                if(keyCodes[i] == 68 || keyCodes[i] == 39) {
                    managers.Score.SCORE += 1;
                    break;
                }
            }

            this._background.Update();
            this._floor.Update(keyCodes);

            this._boxes.forEach(box => {
                box.Update(keyCodes);
            });

            this._launcher.Update(keyCodes);

            this._bullets.forEach(bullet => bullet.NextY = this._launcher.y - (this._launcher.getBounds().height * 0.5));

            this.fixBoxes();

            this._hero.Update(keyCodes);

            this._bullets.forEach(bullet => bullet.Update(keyCodes));

            //collision check
            this._boxes.forEach(box => managers.Collision.check(this._hero, box));

            this._bullets.forEach(bullet => managers.Collision.check(this._hero, bullet));

            this._scoreText.Update();
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this._bgMusic.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - PLAY SCENE`);
            // add children
            this.addChild(this._background);
            this.addChild(this._floor);
            this._boxes.forEach(box => {
                this.addChild(box);
            });
            this.addChild(this._hero);
            this._bullets.forEach(bullet => this.addChild(bullet));
            this.addChild(this._launcher);
            this.addChild(this._scoreText);
        }
    }
} 