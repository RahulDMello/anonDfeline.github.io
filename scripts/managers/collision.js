var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (hero, otherObj) {
            switch (otherObj.name) {
                case "box":
                    Collision.handleCollisionWithBox(hero, otherObj);
                    break;
                case "bullet":
                    Collision.handleCollisionWithBullet(hero, otherObj);
                    break;
            }
        };
        Collision.handleCollisionWithBullet = function (hero, object) {
            var P1 = new math.Vec2(hero.x + (hero.width * 0.5), hero.y - (hero.height * 0.5));
            var P2 = new math.Vec2(object.x, object.y);
            if (math.Vec2.Distance(P1, P2) < hero.halfHeight + object.halfHeight) {
                managers.Game.CurrentState = config.Scene.END;
            }
        };
        Collision.handleCollisionWithBox = function (hero, object) {
            if (hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if (hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    //config.ObjectSpeed.SPEED = 5;
                }
                else {
                    //config.ObjectSpeed.SPEED = 0;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map