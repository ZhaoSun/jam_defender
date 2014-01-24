/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer) {
        'use strict';

        var init,
            loop,
			rendererInstance;

        init = function () {
			rendererInstance = renderer.call();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);
        };

        this.on(init);
    },
	[
		'defender.renderer'
	]
);
