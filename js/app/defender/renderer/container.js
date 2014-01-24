/*global _li, PIXI*/

_li.define(
    'defender.renderer.container',
    function (addToCanvas) {
        'use strict';

        var init,
            container;

        init = function (options) {
            container = new PIXI.DisplayObjectContainer();

            container.position.x = options.x;
            container.position.y = options.y;

            addToCanvas.call(container, options.container);

            return container;
        };

        this.on(init);
    },
    [
        'defender.renderer.addToCanvas'
    ]
);