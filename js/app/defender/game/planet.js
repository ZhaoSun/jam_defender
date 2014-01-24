/*global _li*/

_li.define(
	'defender.game.planet',
	function (texture, container) {
		'use strict';

		var init,
			world;

		init = function () {
			var containerOptions = {
					x: window.innerWidth,
					y: window.innerHeight
				},
				options = {
					radius: 300,
					container: container.call(containerOptions),
					x: -400,
					y: -400,
					asset: 'assets/images/planet.png'
				};

			if (!world) {
				world = texture.call(options);
			}

			return world;
		};

		this.on(init);
	},
	[
		'defender.renderer.texture',
		'defender.renderer.container'
	]
);