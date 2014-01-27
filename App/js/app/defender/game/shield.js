/*global _li*/

_li.define(
    'defender.game.shield',
    function (texture, camera) {
        'use strict';

        var init,
            shields = [],
            states = [
                {
                    asset: 'assets/images/shield/full.png',
                    radius: 550
                },
                {
                    asset: 'assets/images/shield/damaged.png',
                    radius: 500
                },
                {
                    asset: 'assets/images/shield/omg.png',
                    radius: 425
                }
            ],
            options;

        options = {
            state: null,
            radius: 400,
            x: 0,
            y: 0,
            at: 0
        };

        init = function () {
            if (!shields.length) {
                options.container = camera.call();

                states.forEach(function (state) {
                    options.asset = state.asset;
                    options.radius = state.radius;
                    options.disabled = true;
                    shields.push(texture.call(options));
                });
            }
            return shields;
        };

        this.on(init);
    },
    [
        'defender.renderer.texture',
        'defender.game.camera'
    ]
);