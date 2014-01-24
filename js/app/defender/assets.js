/*global _li, PIXI*/

_li.define(
    'defender.assets',
    function (game) {
        'use strict';

        var init,
            assets;

        assets = [
            'assets/images/bunny.png'
        ];

        init = function () {
            var loader = new PIXI.AssetLoader(assets, false);

            loader.onComplete = game.call;
            loader.load();
        };

        this.on(init);
    },
    [
        'defender.game'
    ]
);