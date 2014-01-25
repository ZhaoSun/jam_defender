/*global _li*/

_li.define(
    'defender.game.weapon',
    function (texture) {
        'use strict';

        var init,
			options,
			fire,
			_weapons = [];

		options = {
			asset: 'assets/images/bullet.png',
			x: window.innerWidth / 2,
			y: window.innerHeight - 150
		};

        init = function (getWeapons) {
			var weapon;

			if (getWeapons) {
				return _weapons;
			} else {
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
		'defender.renderer.texture'
	]
);