/*global _li, PIXI*/

_li.define(
    'defender.renderer.texture',
    function (addToCanvas) {
        'use strict';

        var init;

        init = function (options) {
            var texture = PIXI.Texture.fromImage(options.asset),
                sprite = new PIXI.Sprite(texture);

            sprite.position.x = options.x;
            sprite.position.y = options.y;


            sprite.anchor.x = 0.5;
            sprite.anchor.y = 0.5;

            sprite.radius = options.radius;

            if (options.relative) {
                sprite.position.x = 0;
                sprite.pivot.y = options.radius + options.x;

                sprite.rotation = options.rotation;
            }

            addToCanvas.call(
                {
                    object: sprite,
                    container: options.container
                }
            );

            return sprite;
        };

        this.on(init);
    },
    [
        'defender.renderer.addToCanvas'
    ]
);