/*global _li*/

_li.define(
    'defender.game.player',
    function (spine) {
        'use strict';

        var init,
            player,
            options;

        options = {
            asset: 'assets/spine/spineboy/spineboy.json',
            x: window.innerWidth / 2,
            y: window.innerHeight - 150,
            animation: function () {
                this.stateData.setMixByName('walk', 'jump', 0.2);
                this.stateData.setMixByName('jump', 'walk', 0.4);
            },
            scale: {
                x: 0.2,
                y: 0.2
            }
        };

        init = function () {
            if (!player) {
                player = spine.call(options);
            }
            return player;
        };

        this.on(init);
    },
    [
        'defender.renderer.spine'
    ]
);