(function() {
    'use strict';

    const Assert = require('./Assert');
    const Human = require('./Human');

    function Player() {
        let experience = 0,
            level = 1,
            sp = 0;

        Human.call(this, arguments);

        Object.defineProperty(this, 'getExperience', {
            value: function getExperience() {
                return experience;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setExperience', {
            value: function setExperience(newExperience) {
                if (Assert.Integer(newExperience) && newExperience >= 0) {
                    experience = newExperience;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getLevel', {
            value: function getLevel() {
                return level;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setLevel', {
            value: function setLevel(setLevel) {
                if (Assert.Integer(setLevel) && setLevel >= 0) {
                    level = setLevel;
                }
                return this;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'getSP', {
            value: function getSP() {
                return sp;
            },
            enumerable: true
        });

        Object.defineProperty(this, 'setSP', {
            value: function setSP(newSP) {
                if (Assert.Integer(newSP) && newSP >= 0) {
                    sp = newSP;
                }
                return this;
            },
            enumerable: true
        });
    }

    module.exports = Player;

}());
