/*global _li, PIXI*/

_li.define(
    'defender.renderer.spine',
    function (addToCanvas) {
        'use strict';

        var init;

        init = function (options) {
            var spine = new PIXI.Spine(options.asset);

            addToCanvas.call(
                {
                    object: spine,
                    container: options.container
                }
            );

			spine.scale.x = 0.3;
			spine.scale.y = 0.3;
			spine.position.x = options.x;
			spine.position.y = options.y;

			spine.stateData.setMixByName('walk', 'jump', 0.2);
			spine.stateData.setMixByName('jump', 'walk', 0.4);

            return spine;
        };

        this.on(init);
    },
    [
        'defender.renderer.addToCanvas'
    ]
);