/* global _li */

var ejecta = ejecta || null,
    app = [
        'defender',
        'defender.assets',
        'defender.renderer',
        'defender.game',
        'defender.game.loop',
        'defender.game.player',
        'defender.game.enemies',
        'defender.game.planet',
        'defender.game.weapon',
        'defender.game.space'
    ],
    init = {
        event: 'defender'
    },
    loader = 'browser',
    baseURL = '/defender/js/app/';

if (ejecta) {
    loader = 'ejecta';
}

_li.core.init(app, init, baseURL, loader);
