module managers {
    export class Collision {

        public static check(hero: objects.Hero, otherObj: objects.GameObject): void {
            switch(otherObj.name) {
                case "box":
                    Collision.handleCollisionWithBox(hero, otherObj);
                break;
                case "bullet":
                    Collision.handleCollisionWithBullet(hero, otherObj);
                break;
            }
        }

        private static handleCollisionWithBullet(hero: objects.Hero, object: objects.GameObject): void {
            let P1 = new math.Vec2(hero.x + (hero.width * 0.5), hero.y - (hero.height * 0.5));
            let P2 = new math.Vec2(object.x, object.y);
            if (math.Vec2.Distance(P1, P2) < hero.halfHeight + object.halfHeight) {
                managers.Game.CurrentState = config.Scene.END;
            }
        }

        private static handleCollisionWithBox(hero: objects.Hero, object: objects.GameObject): void {
            if(hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if(hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    //config.ObjectSpeed.SPEED = 5;
                } else {
                    //config.ObjectSpeed.SPEED = 0;
                }
            }
        }

    }

}