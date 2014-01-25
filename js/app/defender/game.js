/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player, enemies, camera, keyboard, shield) {
        'use strict';

        var init,
            loop,
            velocity = 1,
            createEnemies,
            activeShield = 0,
            newShield = 0,
            _shield,
            _camera,
            _planet,
            _player,
            _enemies = [],
            _renderer;

        init = function () {
            keyboard.call();

            _planet = planet.call();
            _renderer = renderer.call();
            _camera = camera.call();
            _player = player.call();
            _shield = shield.call();
            _shield[activeShield].render();
            createEnemies();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);
            _enemies.forEach(function (enemy, i) {
                newShield = enemy.fall(velocity, _planet, _shield, activeShield, i);
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

            _camera.rotation += _camera.velocity;
            _renderer.renderer.render(_renderer.stage);
        };

        createEnemies = function () {
            for (var i = 0; i < 4; i += 1) {
                _enemies = enemies.call({
                    number: 1,
                    action: 'add',
                    distance: 300 + Math.random() * 500,
                    rotation: Math.random() * 2 * Math.PI
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
        'defender.input.keyboard',
        'defender.game.shield'
    ]
);
