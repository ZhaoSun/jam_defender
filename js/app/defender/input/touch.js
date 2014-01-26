/*global _li, requestAnimationFrame */

_li.define(
    'defender.input.touch',
    function (input, game, weapon) {
        'use strict';

        var init,
            _animating,
            touchPositionX,
            gameStarted = false;


        init = function () {

            window.setInterval(function () {
                weapon.call();
            }, 300);

            window.addEventListener('touchstart', function (e) {
                touchPositionX = e.touches[0].clientX;
                if (gameStarted) {

                    if (touchPositionX < window.innerWidth / 2) {
                        if (!_animating) {
                            input.call('walkLeft');
                            _animating = true;
                        }
                    } else {
                        if (!_animating) {
                            input.call('walkRight');
                            _animating = true;
                        }
                    }
                }

                e.preventDefault();

            });

            window.addEventListener('touchmove', function (e) {

                e.preventDefault();
            });

            window.addEventListener('touchend', function (e) {
                if (!gameStarted) {
                    game.call();
                    gameStarted = true;
                } else {
                    _animating = false;
                    input.call('clearAnimation');
                }
                e.preventDefault();

            });

        };

        this.on(init);
    },
    [
        'defender.input',
        'defender.game',
        'defender.game.weapon'
    ]
);