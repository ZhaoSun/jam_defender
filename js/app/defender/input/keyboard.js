/*global _li, requestAnimationFrame */

_li.define(
	'defender.input.keyboard',
	function (input) {
		'use strict';

		var init,
			_animating;

		init = function () {
			//_input = input.call();

			window.addEventListener('keydown', function (e) {
				var key = e.keyCode;

				if (key === 37) {
					if (!_animating) {
						input.call('walkLeft');
						_animating = true;
					}

				}

				if (key === 39) {
					if (!_animating) {
						input.call('walkRight');
						_animating = true;
					}

				}
			}, false);

			window.addEventListener('keyup', function (e) {
				_animating = false;
				input.call('clearAnimation');
			}, false);

		};

		this.on(init);
	},
	[
		'defender.input'
	]
);