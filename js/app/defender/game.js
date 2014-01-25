/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player, enemies, camera, keyboard) {
        'use strict';

        var init,
            loop,
            velocity = 1,
            createEnemies,
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

            createEnemies();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);
            _enemies.forEach(function (enemy, i) {
                enemy.fall(velocity, _planet, i);
            });

            _camera.rotation += _camera.velocity;
            _renderer.renderer.render(_renderer.stage);
        };

        createEnemies = function () {
            for (var i = 0; i < 100; i += 1) {
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
        'defender.input.keyboard'
    ]
);
