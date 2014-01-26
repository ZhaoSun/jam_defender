/*global _li*/

_li.define(
    'defender.intro',
    function (keyboard, touch, intro, renderer) {
        'use strict';

        var init,
            loaded = false,
            _renderer,
            _intro;

        init = function (hideIntro) {
            if (!loaded) {
if ('ontouchstart' in window) {
    touch.call();
} else {
    keyboard.call();
}
            }

            if (hideIntro) {
                _intro.parent.removeChild(_intro);
            } else {
                _renderer = renderer.call();
                _intro = intro.call();
                _renderer.renderer.render(_renderer.stage);
            }
        };

        this.on(init);
    },
    [
        'defender.input.keyboard',
        'defender.input.touch',
        'defender.game.intro',
        'defender.renderer'
    ]
);
