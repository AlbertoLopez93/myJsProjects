"use strict";
const Human = require("./Human.js");
function Player(ID , Name , MaxHP, CurrentPH, Agility, ArmorEquipped, CurrentMP, Faction, Gold, Intellect, IsMale, MaxMP,
    Spirit, Stamina, Strength, WeaponEquipped) {
    let Experience = 0, Level = 1, SP = 0 ;
    Human.call(this, ID , Name , MaxHP, CurrentPH, Agility, ArmorEquipped, CurrentMP, Faction, Gold, Intellect, IsMale, MaxMP,
        Spirit, Stamina, Strength, WeaponEquipped);

    Object.defineProperty(this, "getExperience", {
        value: function() {
            return Experience ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setExperience", {
        value: function(newExperience) {
            if (typeof newExperience === "number" && newExperience > 0 ) {
                Experience = newExperience;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLevel", {
        value: function() {
            return Level ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setLevel", {
        value: function(newLevel) {
            if (typeof newLevel === "number" && newLevel > 0 ) {
                Level = newLevel;
            }
            return this;
        },
        enumerable: true
    });
    Object.defineProperty(this, "getSP", {
        value: function() {
            return SP  ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setSP", {
        value: function(newSP) {
            if (typeof newSP === "number" && newSP > 0 ) {
                SP = newSP;
            }
            return this;
        },
        enumerable: true
    });

}

module.exports = Player;
