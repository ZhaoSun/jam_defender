/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function (renderer, planet, player) {
        'use strict';

        var init,
            loop,
            camera,
            character,
            rendererInstance;

        init = function () {
            rendererInstance = renderer.call();
            camera = planet.call();
            character = player.call();

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
        'defender.game.planet',
        'defender.game.player'
    ]
);
