/*global _li*/

_li.define(
    'defender.game.shield',
    function (texture) {
        'use strict';

        var init,
            shields = [],
            states = [],
            options;

        options = {
            state: null
        };

        init = function () {
            if (!shields) {
                states.forEach(function (state) {
                    options.state = state;
                    shields.push(texture.call(options));
                });
            }

            return shields;
        };

        this.on(init);
    },
    [
        'defender.renderer.texture'
    ]
);