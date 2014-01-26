/*global _li, console*/

_li.define(
    'defender.game.enemies',
    function (texture, camera, finish, points) {
        'use strict';
        var init,
            actions,
            fall,
            self = this,
            _enemies = [],
            multiplier = 1,
            hitsToScale = 10,
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

            return _enemies;
        };

        actions = {
            add: function (data) {
                var number = data.number,
                    i = 0;

                for (i; i < number; i += 1) {
                    var enemy = texture.call(options);

                    enemy.fall = fall.bind(enemy);
                    _enemies.push(enemy);
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
                if ((bulletRotation > enemyRotation - 0.05 && bulletRotation < enemyRotation + 0.05) || (bulletRotation < enemyRotation + 0.05 && bulletRotation > enemyRotation - 0.05)) {
                    var bulletDistance = Math.abs(Math.sqrt(bullet.position.y * bullet.position.y + bullet.position.x * bullet.position.x)),
                        enemyDistance = this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x),
                        bulletDistanceFromCenter = bulletDistance + planet.radius + this.height;
                    if (bulletDistanceFromCenter - enemyDistance < 0 && bulletDistanceFromCenter - enemyDistance > -this.height * 1.5) {
                        planet.parent.removeChild(bullet);
                        planet.parent.removeChild(this);
						points.call();
                        _enemies.splice(index, 1);
                        weapons.splice(bIndex, 1);
                        for (var i = 0; i < Math.floor(multiplier); i += 1) {
                            _enemies = self.call({
                                number: 1,
                                action: 'add',
                                distance: window.innerHeight / 2 + Math.random() * 200,
                                rotation: Math.random() * ((Math.PI / 8) * multiplier) - ((Math.PI / 8) * multiplier / 2)
                            });
                        }
                        multiplier += 0.05;
                    }
                }
            }.bind(this));

            if (this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x) < radius + this.height / 2) {
                if (gameOver) {
                    finish.call();
                }

                planet.parent.removeChild(this);
                _enemies.splice(index, 1);

                return activeShield + 1;
            }

            return activeShield;
        };

        this.on(init);
    },
    [
        'defender.renderer.texture',
        'defender.game.camera',
        'defender.finish',
		'defender.game.points'
    ]
);