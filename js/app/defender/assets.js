/*global _li, PIXI*/

_li.define(
    'defender.assets',
    function (intro) {
        'use strict';

        var init,
            assets;

        assets = [
            // rocks
            'assets/images/rock.png',
            'assets/images/bomb.png',
			'assets/images/shield.png',

            'assets/spine/rock/skeleton.atlas',
            'assets/spine/rock/skeleton.json',
            'assets/spine/rock/skeleton.png',

            // stars
            'assets/images/stars.png',

            // planet
            'assets/images/planet.png',
            'assets/images/intro.png',
			'assets/images/gameover.png',

            // bullet
            'assets/images/bullet.png',

            // spineboy
            'assets/spine/spineboy/spineboy.atlas',
            'assets/spine/spineboy/spineboy.json',
            'assets/spine/spineboy/spineboy.png'
        ];

        init = function () {
            var loader = new PIXI.AssetLoader(assets, false);

            loader.onComplete = intro.call;
            loader.load();
        };

        this.on(init);
    },
    [
        'defender.intro'
    ]
);