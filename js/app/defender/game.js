/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player, keyboard) {
        'use strict';

        var init,
            loop,
			_planet,
            _player,
            _renderer;

        init = function () {
            _renderer = renderer.call();
            _planet = planet.call();
            _player = player.call();
			keyboard.call();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);

			_planet.rotation += 0.01;
            _renderer.renderer.render(_renderer.stage);
        };

        this.on(init);
    },
    [
        'defender.renderer',
        'defender.game.planet',
        'defender.game.player',
		'defender.input.keyboard'
    ]
);
