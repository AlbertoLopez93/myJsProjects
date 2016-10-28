(function() {
    'use strict';

    const Item = require('./Item');

    function Armor() {
        let agiBonus = arguments[7],
            intBonus = arguments[8],
            isHeavy = arguments[9],
            physDR = arguments[10],
            spellDR = arguments[11],
            spiBonus = arguments[12],
            staBonus = arguments[13],
            strBouns = arguments[14];

        Item.apply(this, arguments);

        Object.defineProperty(this, 'getAgiBonus', {
            value: function getAgiBonus() {
                return agiBonus;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getIntBonus', {
            value: function getIntBonus() {
                return intBonus;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'isItHeavy', {
            value: function isItHeavy() {
                return isHeavy;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getPhysDR', {
            value: function getPhysDR() {
                return physDR;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getSpellDR', {
            value: function getSpellDR() {
                return spellDR;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getSpiBonus', {
            value: function getSpiBonus() {
                return spiBonus;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getStaBonus', {
            value: function getStaBonus() {
                return staBonus;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getStrBonus', {
            value: function getStrBonus() {
                return strBouns;
            },
            enumerable: true
        });

    }

    module.exports = Armor;

}());
