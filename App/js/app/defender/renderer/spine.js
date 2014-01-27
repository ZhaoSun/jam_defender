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

            if (options.scale) {
                spine.scale.x = options.scale.x;
                spine.scale.y = options.scale.y;
            }

            spine.position.x = options.x;
            spine.position.y = options.y;

            if (options.relative) {

                spine.radius = options.radius;
                spine.position.x = 0;
                spine.pivot.y = options.radius + options.x;
                spine.rotation = options.rotation;
            }

            if (options.animation) {
                options.animation.bind(spine)();
            }


            return spine;
        };

        this.on(init);
    },
    [
        'defender.renderer.addToCanvas'
    ]
);