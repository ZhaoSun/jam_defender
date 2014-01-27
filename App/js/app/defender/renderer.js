/*global _li, PIXI*/

_li.define(
    'defender.renderer',
    function () {
        'use strict';

        var init,
            width = window.innerWidth,
            height = window.innerHeight,
            renderer,
            stage,
            canvas;

        init = function () {

            if (!stage) {
                canvas = document.getElementById('canvas');
                renderer = PIXI.autoDetectRenderer(width, height, canvas, false, true);
                stage = new PIXI.Stage(0x040622);
            }

            return {
                renderer: renderer,
                stage: stage
            };
        };

        this.on(init);
    }
);
