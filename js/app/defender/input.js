/*global _li, requestAnimationFrame */

_li.define(
	'defender.input',
	function (player, camera) {
		'use strict';

		var init,
			_player,
			_camera,
			clearAnimation;

		init = function (action) {
			_player = player.call();
			_camera = camera.call();

			if (action === 'walkLeft') {
				_camera.velocity = 0.05;
				console.log('left');
				_player.walkLeft();
			}
			if (action === 'walkRight') {
				_camera.velocity = -0.05;
				console.log('right');
				_player.walkRight();
			}
			if (action === 'clearAnimation') {
				_camera.velocity = 0;
				console.log('clear');
				_player.clearAnimation();
			}
		};

		this.on(init);
	},
	[
		'defender.game.player',
		'defender.game.camera'
	]
);