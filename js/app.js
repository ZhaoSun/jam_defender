/* global _li */

var ejecta = ejecta || null,
    app = [
        'defender'
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
