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
                y: window.innerHeight
            };
            if (!camera) {
                camera = container.call(options);
            }
            return camera;
        };

        this.on(init);
    },
    [
        'defender.renderer.container'
    ]
);