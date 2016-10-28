(function() {
    'use strict';

    const Human = require('./Human');

    function NPC() {
        let hostileToPlayer = arguments[16],
            lootDropped = arguments[17];

        Human.call(this, arguments);

        Object.defineProperty(this, 'isItHostileToPlayer', {
            value: function isItHostileToPlayer() {
                return hostileToPlayer;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getLootDropped', {
            value: function getLootDropped() {
                return lootDropped;
            },
            enumerable: true
        });
    }

    module.exports = NPC;

}());
