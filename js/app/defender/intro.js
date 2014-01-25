/*global _li*/

_li.define(
	'defender.intro',
	function (keyboard) {
		'use strict';

		var init;

		init = function (hideIntro) {
			keyboard.call();

			if (hideIntro) {
				//hide logo
				console.log('hide intro');
			} else {
				//show image with logo and start menu
				console.log('press enter to start game');
			}
		};

		this.on(init);
	},
	[
		'defender.input.keyboard'
	]
);