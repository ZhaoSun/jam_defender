/*global _li*/

_li.define(
	'defender.finish',
	function (finish, renderer, points) {
		'use strict';

		var init,
			gameOver = false,
			text,
			_renderer;

		init = function (finishGame) {
			if (finishGame) {
				gameOver = true;
				_renderer = renderer.call();
				finish.call();
				text = points.call({reset: false, color: 4, positionX: window.innerWidth / 2, positionY: window.innerHeight * 0.8});
				_renderer.stage.addChild(text);
				_renderer.renderer.render(_renderer.stage);
				window.renderer = _renderer;
				return false;
			} else {
				return gameOver;
			}
		};

		this.on(init);
	},
	[
		'defender.game.finish',
		'defender.renderer',
		'defender.game.points'
	]
);