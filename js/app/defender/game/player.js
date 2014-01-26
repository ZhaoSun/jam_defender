/*global _li*/

_li.define(
    'defender.game.player',
    function (spine) {
        'use strict';

        var init,
            _player,
            options,
            walkLeft,
            walkRight,
            clearAnimation;

        options = {
            asset: 'assets/spine/ra/skeleton.json',
            x: window.innerWidth / 2,
            y: window.innerHeight - 200,
            animation: function () {
                this.stateData.setMixByName('idle', 'move', 0.2);
                this.stateData.setMixByName('move', 'idle', 0.4);
            }
        };

        init = function () {
            if (!_player) {
                _player = spine.call(options);
                _player.walkLeft = walkLeft.bind(_player);
                _player.walkRight = walkRight.bind(_player);
                _player.clearAnimation = clearAnimation.bind(_player);
            }
            return _player;
        };

        walkLeft = function () {
            this.scale.x = 1;
            this.state.setAnimationByName('move', true);
        };

        walkRight = function () {
            this.scale.x = -1;
            this.state.setAnimationByName('move', true);
        };

        clearAnimation = function () {
            this.state.setAnimationByName('idle', true);
        };

        this.on(init);
    },
    [
        'defender.renderer.spine'
    ]
);