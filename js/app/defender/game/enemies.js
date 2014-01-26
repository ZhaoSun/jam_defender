/*global _li, console*/

_li.define(
    'defender.game.enemies',
    function (spine, camera, finish, points) {
        'use strict';
        var init,
            actions,
            fall,
            self = this,
            _enemies = [],
            multiplier = 1,
            hitsToScale = 10,
            currentHits = 0,
            options = {
                y: 0,
                asset: 'assets/spine/rock/skeleton.json',
                relative: true,
                radius: 400,
                type: 'default'
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
                    var enemy = spine.call(options);


                    if (data.type === 'bomb') {
                        enemy.skeleton.setSkinByName('bomb');
                    } else {
                        enemy.skeleton.setSkinByName('enemy');
                    }
                    enemy.skeleton.setSlotsToSetupPose();

                    enemy.type = data.type;
                    enemy.fall = fall.bind(enemy);
                    enemy.velocity = 0.5;
                    enemy.state.setAnimationByName('animation', true);
                    _enemies.push(enemy);
                }
            }
        };

        fall = function (planet, shield, activeShield, weapons, index) {
            var radius = null,
                gameOver = false,
                type;

            if (shield[activeShield]) {
                radius = shield[activeShield].radius;
            } else {
                gameOver = true;
                radius = planet.radius;
            }
            this.position.y += this.velocity * Math.cos(this.rotation);
            this.position.x -= this.velocity * Math.sin(this.rotation);
            this.velocity *= 1.008 - (0.003 * this.rotation) / Math.PI;


            if (weapons.length > 10) {
                var removed = weapons.splice(0, weapons.length - 10);
                removed.forEach(function (removedItem) {
                    planet.parent.removeChild(removedItem);
                });
            }


            _enemies.forEach(function (enemy, index) {
                if (enemy.state.isComplete() && !enemy.state.currentLoop) {
                    planet.parent.removeChild(enemy);
                    _enemies.splice(index, 1);
                }
            });

            weapons.forEach(function (bullet, bIndex) {
                var bulletRotation = Math.sin(bullet.rotation),
                    enemyRotation = Math.sin(this.rotation),
                    number = 1;
                if ((bulletRotation > enemyRotation - 0.05 && bulletRotation < enemyRotation + 0.05) || (bulletRotation < enemyRotation + 0.05 && bulletRotation > enemyRotation - 0.05)) {
                    var bulletDistance = Math.abs(Math.sqrt(bullet.position.y * bullet.position.y + bullet.position.x * bullet.position.x)),
                        enemyDistance = this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x),
                        bulletDistanceFromCenter = bulletDistance + planet.radius + bullet.height;

                    if (bulletDistanceFromCenter - enemyDistance < 0 && bulletDistanceFromCenter - enemyDistance > -(bullet.height) * 1.5 && this.state.current.name !== 'destroy') {

                        planet.parent.removeChild(bullet);
                        this.state.setAnimationByName('destroy', false);
                        points.call({reset: false, color: activeShield, points: true});
                        weapons.splice(bIndex, 1);

                        if (this.type === 'bomb') {
                            _enemies.forEach(function (enemy, index) {
                                enemy.state.setAnimationByName('destroy', false);
                            });

                            number += 2;
                        } else {
                            currentHits += 1;
                        }

                        if (currentHits === Math.ceil(hitsToScale)) {
                            currentHits = 0;
                            hitsToScale -= -0.5;
                            number += 1;
                        }

                        if (this.type !== 'bomb' && Math.random() - 0.3 * multiplier / 20 > 0.6) {
                            type = 'bomb';
                        } else {
                            type = 'default';
                        }
                        for (var i = 0; i < number; i += 1) {
                            if (i > 0) {
                                type = 'default';
                            }
                            self.call({
                                number: 1,
                                action: 'add',
                                distance: window.innerHeight / 2 + 200,
                                rotation: Math.random() * ((Math.PI / 16) * multiplier) - ((Math.PI / 16) * multiplier / 2),
                                type: type
                            });
                        }
                        multiplier += 0.1;
                    }
                }
            }.bind(this));

            if (this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x) < radius + 30 && this.state.current.name !== 'destroy') {
                if (gameOver) {
                    finish.call();
                }

                if (this.parent) {
                    planet.parent.removeChild(this);
                    _enemies.splice(index, 1);
                    self.call({
                        number: 1,
                        action: 'add',
                        distance: window.innerHeight / 2 + 200,
                        rotation: Math.random() * ((Math.PI / 16) * multiplier) - ((Math.PI / 16) * multiplier / 2),
                        type: 'bomb'
                    });
                }

                return activeShield + 1;
            }

            return activeShield;
        };

        this.on(init);
    },
    [
        'defender.renderer.spine',
        'defender.game.camera',
        'defender.finish',
        'defender.game.points'
    ]
);