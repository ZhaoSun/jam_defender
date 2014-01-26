/*global _li, PIXI*/

_li.define(
	'defender.game.points',
	function (renderer) {
		'use strict';

		var init,
			points = 0,
			_renderer,
			text;

		init = function (reset) {
			if (reset) {
				points = 0;
				_renderer = renderer.call();
				text = new PIXI.Text('Points: ' + points, {font: "40px Arial", fill: "#FFFFFF"});
				_renderer.stage.addChild(text);
			} else {
				points++;
				text.setText('Points: ' + points);
			}
		};

		this.on(init);
	},
	[
		'defender.renderer'
	]
);