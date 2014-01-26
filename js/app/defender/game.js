/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player, enemies, camera, shield, weapon, points, space, spaceCloser, spaceYeah, intro) {
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
            _space,
            _spaceCloser,
            _spaceYeah,
            _enemies = [],
            _renderer,
            _weapons = [],
            checkWeapons,
            weaponVelocity = 12;

        init = function () {
            intro.call(true);
            _space = space.call();
            _spaceCloser = spaceCloser.call();
            _spaceYeah = spaceYeah.call();
            _planet = planet.call();
            _renderer = renderer.call();
            _camera = camera.call();
            _player = player.call();
            _shield = shield.call();
            _shield[activeShield].render();
            createEnemies();
			points.call({reset: true, color: activeShield});

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
					points.call({reset: false, color: activeShield});
                }
            });
            checkWeapons();
            _spaceYeah.rotation += -_camera.velocity * 0.65;
            _spaceCloser.rotation += -_camera.velocity * 0.85;
            _space.rotation += -_camera.velocity * 0.95;
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
        'defender.game.points',
        'defender.game.space',
        'defender.game.spaceCloser',
        'defender.game.spaceYeah',
        'defender.intro'
    ]
);
