(function() {
    'use strict';


    const Assert = require('./Assert');
    const Item = require('./Item');

    function Weapon() {
        let isEnchanted = false,
            isUpgraded = false,
            isOneHanded = arguments[7],
            maxDmg = arguments[8],
            minDmg = arguments[9],
            strReq = arguments[10];

        Item.apply(this, arguments);

        Object.defineProperty(this, 'setEnchanted', {
            value: function setEnchanted(newEnchanted) {
                isEnchanted = newEnchanted;
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isItEnchanted', {
            value: function isItEnchanted() {
                return isEnchanted;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setUpgraded', {
            value: function setUpgraded(newUpgraded) {
                isUpgraded = newUpgraded;
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isItUpgraded', {
            value: function isItUpgraded() {
                return isUpgraded;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isItOneHanded', {
            value: function isItOneHanded() {
                return isOneHanded;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setMaxDmg', {
            value: function setMaxDmg(newMaxDmg) {
                if (Assert.Integer(newMaxDmg) && newMaxDmg >= 0) {
                    maxDmg = newMaxDmg;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMaxDmg', {
            value: function getMaxDmg() {
                return maxDmg;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setMinDmg', {
            value: function setMinDmg(newMinDmg) {
                if (Assert.Integer(newMinDmg) && newMinDmg >= 0) {
                    minDmg = newMinDmg;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getMinDmg', {
            value: function getMinDmg() {
                return minDmg;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getStrReq', {
            value: function getStrReq() {
                return strReq;
            },
            enumerable: true
        });
    }

    module.exports = Weapon;

}());
