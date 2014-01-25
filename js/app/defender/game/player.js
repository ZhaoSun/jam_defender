/*global _li*/

_li.define(
    'defender.game.player',
    function (spine) {
        'use strict';

        var init,
            player,
            options;

        options = {
			asset: 'assets/spine/spineboy/spineboy.json'
        };

        init = function () {
            if (!player) {
                player = spine.call(options);
            }

            return player;
        };

        this.on(init);
    },
    'defender.renderer.spine'
);