/* global _li */

var ejecta = ejecta || null,
    app = [
        'defender',
        'defender.assets',
        'defender.renderer',
        'defender.renderer.addToCanvas',
        'defender.renderer.container',
		'defender.renderer.texture',
		'defender.renderer.spine',
        'defender.game',
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
    baseURL = '/jam_defender/js/app/';

if (ejecta) {
    loader = 'ejecta';
}

_li.core.init(app, init, baseURL, loader);
