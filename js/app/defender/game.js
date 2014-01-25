/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet) {
        'use strict';

        var init,
            loop,
            camera,
            rendererInstance;

        init = function () {
            rendererInstance = renderer.call();
            camera = planet.call();

            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);

            camera.rotation += 0.01;
            rendererInstance.renderer.render(rendererInstance.stage);
        };

        this.on(init);
    },
    [
        'defender.renderer',
        'defender.game.planet'
    ]
);
