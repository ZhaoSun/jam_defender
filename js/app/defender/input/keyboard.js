/*global _li, requestAnimationFrame */

_li.define(
    'defender.input.keyboard',
    function (input, game, weapon) {
        'use strict';

        var init,
            _animating,
            date = +new Date(),
            lastFire = 0;

        init = function () {
            var gameStarted = false;

            window.addEventListener('keydown', function (e) {
                var key = e.keyCode;

                if (key === 13 && !gameStarted) {
                    game.call();
                    gameStarted = true;
                } else {

                    if (key === 32) {
                        if (date > lastFire + 750) {
                            lastFire = date;
                            weapon.call();
                        }
                        date = +new Date();
                    }

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
                }

            }, false);

            window.addEventListener('keyup', function (e) {
                var key = e.keyCode;

                if ((key === 37) || (key === 39)) {
                    _animating = false;
                    input.call('clearAnimation');
                }
                if (key === 32) {
                    lastFire = 0;
                }
            }, false);

        };

        this.on(init);
    },
    [
        'defender.input',
        'defender.game',
        'defender.game.weapon'
    ]
);