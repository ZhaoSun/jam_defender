/*global _li*/

_li.define(
	'defender.game.weapon',
	function (texture, camera) {
		'use strict';

		var init,
			options,
			fire,
			_weapons = [];

		options = {
			asset: 'assets/images/bullet.png',
			x: 80,
			y: 0,
			radius: 400,
			relative: true
		};

		init = function (getWeapons) {
			var weapon,
				_camera = camera.call();

			if (getWeapons) {
				return _weapons;
			} else {
				options.container = _camera;
				options.rotation = -_camera.rotation;
				weapon = texture.call(options);
				weapon.fire = fire.bind(weapon);
				_weapons.push(weapon);
			}

		};

		fire = function (velocity, index) {
			this.position.y -= velocity * Math.cos(this.rotation);
			this.position.x += velocity * Math.sin(this.rotation);

			/*if (this.pivot.y - Math.sqrt(this.position.y * this.position.y + this.position.x * this.position.x) < planet.radius + this.height / 2) {
			 planet.parent.removeChild(this);
			 enemies.splice(index, 1);
			 }*/
		};

		this.on(init);
	},
	[
		'defender.renderer.texture',
		'defender.game.camera'
	]
);