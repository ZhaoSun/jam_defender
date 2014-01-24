/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet) {
        'use strict';

        var init,
            loop,
			rendererInstance;

        init = function () {
			rendererInstance = renderer.call();
			planet.call();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);

			rendererInstance.renderer.render(rendererInstance.stage);
        };

        this.on(init);
    },
	[
		'defender.renderer',
		'defender.game.planet'
	]
);
