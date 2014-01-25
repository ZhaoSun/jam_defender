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
            asset: 'assets/spine/spineboy/spineboy.json',
            x: window.innerWidth / 2,
            y: window.innerHeight - 150,
            animation: function () {
                this.stateData.setMixByName('walk', 'jump', 0.2);
                this.stateData.setMixByName('jump', 'walk', 0.4);
            },
            scale: {
                x: 0.2,
                y: 0.2
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
            this.scale.x = -0.2;
            this.state.setAnimationByName('walk', true);
        };

        walkRight = function () {
            this.scale.x = 0.2;
            this.state.setAnimationByName('walk', true);
        };

        clearAnimation = function () {
            this.state.clearAnimation();
        };

        this.on(init);
    },
    [
        'defender.renderer.spine'
    ]
);