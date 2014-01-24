/*global _li*/

_li.define(
    'defender.renderer.addToCanvas',
    function (renderer) {
        'use strict';

        var init,
            rendererInstance = renderer.call();

        init = function (object, container) {
            if (container) {
                container.addChild(object);
            } else {
                rendererInstance.stage.addChild(object);
            }
        };

        this.on(init);
    },
    [
        'defender.renderer'
    ]
);