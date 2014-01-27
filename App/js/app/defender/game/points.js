/*global _li, PIXI*/

_li.define(
    'defender.game.points',
    function (renderer) {
        'use strict';

        var init,
            points = 0,
            _renderer,
            text,
            style,
            colors = ['#EEFFEC', '#FFFECB', '#FFECEC', '#D84933', '#920000'];

        init = function (options) {
            if (options.reset) {
                points = 0;
                _renderer = renderer.call();
                text = new PIXI.Text('Points: ' + points, {font: '40px Arial', fill: colors[options.color]});
                text.position.x = 20;
                text.position.y = 20;
                _renderer.stage.addChild(text);
            } else {
                if (options.points) {
                    points += options.points;
                }
                if (options.negative) {
                    points -= options.negative;
                }
                if (options.positionX && options.positionY) {
                    text.position.x = options.positionX - text.width / 2;
                    text.position.y = options.positionY;
                }
                text.setText('Points: ' + points);
                style = {font: '40px Arial', fill: colors[options.color]};
                text.setStyle(style);
                return text;
            }
        };

        this.on(init);
    },
    [
        'defender.renderer'
    ]
);