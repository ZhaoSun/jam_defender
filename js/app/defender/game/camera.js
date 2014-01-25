/*global _li*/

_li.define(
    'defender.game.camera',
    function (container) {
        'use strict';

        var init,
            camera;

        init = function () {
            var options = {
                x: window.innerWidth / 2,
                y: window.innerHeight + 250
            };
            if (!camera) {
                camera = container.call(options);
                camera.velocity = 0;
            }
            return camera;
        };

        this.on(init);
    },
    [
        'defender.renderer.container'
    ]
);