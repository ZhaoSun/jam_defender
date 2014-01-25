/*global _li*/

_li.define(
    'defender.renderer.addToCanvas',
    function (renderer) {
        'use strict';

        var init,
            rendererInstance;

        init = function (options) {
            var container = options.container,
                object = options.object,
                at = options.at;

            rendererInstance = renderer.call();
            if (container) {
                if (!isNaN(at)) {
                    container.addChildAt(object, at);
                } else {
                    container.addChild(object);
                }
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