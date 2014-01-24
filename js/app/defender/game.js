/*global _li, requestAnimationFrame*/

_li.define(
    'defender.game',
    function () {
        'use strict';

        var init,
            loop;

        init = function () {
            requestAnimationFrame(loop);
        };

        loop = function () {
            requestAnimationFrame(loop);
        };

        this.on(init);
    }
);
