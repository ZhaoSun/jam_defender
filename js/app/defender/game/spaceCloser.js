/*global _li*/

_li.define(
    'defender.game.spaceCloser',
    function (camera, texture) {
        'use strict';

        var init,
            space;

        init = function () {
            var options = {
                y: 0,
                x: 0,
                rotation: 0,
                container: camera.call(),
                asset: 'assets/images/starsCloser.png'
            };

            if (!space) {
                space = texture.call(options);
                space.name = 'test';
            }
            return space;
        };

        this.on(init);
    },
    [
        'defender.game.camera',
        'defender.renderer.texture'
    ]
);