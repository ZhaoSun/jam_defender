/*global _li, console*/

_li.define(
    'defender.game.enemies',
    function (texture, camera, finish) {
        'use strict';

        var init,
            actions,
            fall,
            enemies = [],
            options = {
                y: 0,
                asset: 'assets/images/bunny.png',
                relative: true,
                radius: 400
            };

        init = function (data) {
            options.container = camera.call();
            options.x = data.distance;
            options.rotation = data.rotation;

            actions[data.action](data);

            return enemies;
        };

        actions = {
            add: function (data) {
                var number = data.number,
                    i = 0;

                for (i; i < number; i += 1) {
                    var enemy = texture.call(options);

                    enemy.fall = fall.bind(enemy);
                    enemies.push(enemy);
                }
            }
        };

        fall = function (velocity, planet, shield, activeShield, weapons, index) {
            var radius = null,
                gameOver = false;

            if (shield[activeShield]) {
                radius = shield[activeShield].radius;
            } else {
                gameOver = true;
                radius = planet.radius;
            }
            this.position.y += velocity * Math.cos(this.rotation);
            this.position.x -= velocity * Math.sin(this.rotation);

            weapons.forEach(function (bullet, bIndex) {
                var bulletRotation = Math.sin(bullet.rotation),
                    enemyRotation = Math.sin(this.rotation);

                if ((bulletRotation > enemyRotation * 0.95 && bulletRotation < enemyRotation / 0.95) || (bulletRotation < enemyRotation * 0.95 && bulletRotation > enemyRotation / 0.95)) {
                    if (Math.abs(Math.sqrt(bullet.position.y * bullet.position.y + bullet.position.x * bullet.position.x)) >= Math.abs(Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x) - planet.radius)) {
                        planet.parent.removeChild(bullet);
                        planet.parent.removeChild(this);
                        enemies.splice(index, 1);
                        weapons.splice(bIndex, 1);
                    }
                }
            }.bind(this));

            if (this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x) < radius + this.height / 2) {
                if (gameOver) {
					finish.call();
                }

                planet.parent.removeChild(this);
                enemies.splice(index, 1);

                return activeShield + 1;
            }

            return activeShield;
        };

        this.on(init);
    },
    [
        'defender.renderer.texture',
        'defender.game.camera',
		'defender.finish'
    ]
);