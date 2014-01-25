/*global _li*/

_li.define(
    'defender.game.planet',
    function (texture, camera) {
        'use strict';

        var init,
            world;

        init = function () {
            var options = {
                radius: 300,
                container: camera.call(),
                x: -400,
                y: -400,
                asset: 'assets/images/planet.png'
            };

            if (!world) {
                world = texture.call(options);
            }

            return world;
        };

        this.on(init);
    },
    [
        'defender.renderer.texture',
        'defender.game.camera'
    ]
);