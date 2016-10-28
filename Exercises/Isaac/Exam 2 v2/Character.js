(function() {
    'use strict';

    const Assert = require('./Assert');

    function Character() {
        let id = arguments[0],
            name = arguments[1],
            maxHP = arguments[2],
            currentHP = arguments[3];

        Object.defineProperty(this, 'getID', {
            value: function getID() {
                return id;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getName', {
            value: function getName() {
                return name;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMaxHP', {
            value: function getMaxHP() {
                return maxHP;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setMaxHP', {
            value: function setMaxHP(newMaxHP) {
                if (Assert.Integer(newMaxHP) && newMaxHP > 0) {
                    maxHP = newMaxHP;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getCurrentHP', {
            value: function getCurrentHP() {
                return currentHP;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setCurrentHP', {
            value: function setCurrentHP(newHP) {
                if (Assert.Integer(newHP)) {
                    currentHP = newHP > this.getMaxHP() ? this.getMaxHP() : newHP;
                }
                return this;
            },
            enumerable: true
        });
    }

    module.exports = Character;
}());
