/*global _li*/

_li.define(
    'defender',
    function (assets) {
        'use strict';

        var init;

        init = function () {
            assets.call();
        };

        this.on(init);
    },
    [
        'defender.assets'
    ]
);
