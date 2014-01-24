/*global _li, PIXI*/

_li.define(
    'defender.renderer.spine',
    function (addToCanvas) {
        'use strict';

        var init;

        init = function (options) {
            var spine = new PIXI.Spine(options.asset);

            addToCanvas.call(spine);

            return spine;
        };

        this.on(init);
    },
    [
        'defender.renderer.addToCanvas'
    ]
);