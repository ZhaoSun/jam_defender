/*global _li, PIXI*/

_li.define(
    'defender.renderer.texture',
    function (addToCanvas) {
        'use strict';

        var init;

        init = function (options) {
			var texture = PIXI.Texture.fromImage(options.asset),
				sprite = new PIXI.Sprite(texture);

			addToCanvas.call(sprite, options.container);

			return sprite;
		};

        this.on(init);
    },
	[
		'defender.renderer.addToCanvas'
	]
);