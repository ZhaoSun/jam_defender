/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player, enemies, camera, shield, weapon, points) {
        'use strict';

        var init,
            loop,
            createEnemies,
            activeShield = 0,
            newShield = 0,
            _shield,
            _camera,
            _planet,
            _player,
            _enemies = [],
            _renderer,
            _weapons = [],
            checkWeapons,
            weaponVelocity = 15;

        init = function () {
            _planet = planet.call();
            _renderer = renderer.call();
            _camera = camera.call();
            _player = player.call();
            _shield = shield.call();
            _shield[activeShield].render();
            createEnemies();
			points.call(true);

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);
            _enemies.forEach(function (enemy, i) {
                newShield = enemy.fall(_planet, _shield, activeShield, _weapons, i);
                if (newShield !== activeShield) {
                    if (_shield[activeShield]) {
                        _shield[activeShield].parent.removeChild(_shield[activeShield]);
                    }
                    if (_shield[newShield]) {
                        _shield[newShield].render();
                    }
                    activeShield = newShield;
                }
            });
            checkWeapons();

            _camera.rotation += _camera.velocity;
            _renderer.renderer.render(_renderer.stage);
        };

        checkWeapons = function () {
            _weapons = weapon.call(true);
            _weapons.forEach(function (weapon, i) {
                weapon.fire(weaponVelocity, i);
            });
        };

        createEnemies = function () {
            for (var i = 0; i < 1; i += 1) {
                _enemies = enemies.call({
                    number: 1,
                    action: 'add',
                    distance: window.innerHeight / 2 + Math.random() * 400,
                    rotation: 0,
                    type: 'default'
                });
            }
        };

        this.on(init);
    },
    [
        'defender.renderer',
        'defender.game.planet',
        'defender.game.player',
        'defender.game.enemies',
        'defender.game.camera',
        'defender.game.shield',
        'defender.game.weapon',
		'defender.game.points'
    ]
);
