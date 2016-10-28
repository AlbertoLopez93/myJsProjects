(function() {
    'use strict';

    const Character = require('./Character');

    function Animal() {
        let hostileToPlayer = arguments[4],
            lootDropped = arguments[5],
            maxDmg = arguments[6],
            minDmg = arguments[7];

        Character.call(this, arguments);

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

        Object.defineProperty(this, 'getMaxDmg', {
            value: function getMaxDmg() {
                return maxDmg;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMinDmg', {
            value: function getMinDmg() {
                return minDmg;
            },
            enumerable: true
        });
    }

    module.exports = Animal;

}());
