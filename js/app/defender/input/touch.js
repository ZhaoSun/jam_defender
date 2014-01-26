/*global _li, requestAnimationFrame */

_li.define(
    'defender.input.touch',
    function (input, game, weapon) {
        'use strict';

        var init,
            _animating,
            date = +new Date(),
            touchStart,
            timeout,
            touchPosition,
            lastFire = 0;

        init = function () {
            var gameStarted = false;

            window.addEventListener('touchstart', function (e) {
                touchStart = +new Date();
                touchPosition = e.touches[0].clientX;
                if (gameStarted) {
                    if (+new Date() - touchStart < 100) {
                        if (date > lastFire + 750) {
                            lastFire = date;
                            weapon.call();
                        }
                        date = +new Date();
                    }
                    if (touchPosition < window.innerWidth / 2) {
                        timeout = window.setTimeout(function () {
                            if (!_animating) {
                                input.call('walkLeft');
                                _animating = true;
                            }
                        }, 100);
                    } else {
                        timeout = window.setTimeout(function () {
                            if (!_animating) {
                                input.call('walkRight');
                                _animating = true;
                            }
                        }, 100);
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
                    lastFire = 0;
                    _animating = false;
                    input.call('clearAnimation');
                    window.clearTimeout(timeout);
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