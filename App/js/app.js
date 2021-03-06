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
        'defender.game.space',
        'defender.game.spaceCloser',
        'defender.game.spaceYeah',
        'defender.game.camera',
        'defender.game.shield',
        'defender.game.points',
        'defender.game.intro',
        'defender.game.finish',
        'defender.input',
        'defender.input.keyboard',
        'defender.input.touch',
        'defender.intro',
        'defender.finish'
    ],
    init = {
        event: 'defender'
    },
    loader = 'browser',
    baseURL = '/jam_defender/App/js/app/';

if (window.ejecta) {
    loader = 'ejecta';
    baseURL = '/js/app/'
}

_li.core.init(app, init, baseURL, loader);
