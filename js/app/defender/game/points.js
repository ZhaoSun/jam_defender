/*global _li, PIXI*/

_li.define(
	'defender.game.points',
	function (renderer) {
		'use strict';

		var init,
			points = 0,
			_renderer,
			text,
			style,
			colors = ['#EEFFEC', '#FFFECB', '#FFECEC', '#D84933'];

		init = function (options) {
			if (options.reset) {
				points = 0;
				_renderer = renderer.call();
				text = new PIXI.Text('Points: ' + points, {font: "40px Arial", fill: colors[options.color]});
				text.position.x = 20;
				text.position.y = 20;
				_renderer.stage.addChild(text);
			} else {
				if (options.points) {
					points++;
				}
				text.setText('Points: ' + points);
				style = {font: "40px Arial", fill: colors[options.color]};
				text.setStyle(style);
			}
		};

		this.on(init);
	},
	[
		'defender.renderer',
		'defender.'
	]
);