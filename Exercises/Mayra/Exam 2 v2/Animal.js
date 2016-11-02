"use strict";
const Character = require("./Character.js");
function Animal(ID , Name , MaxHP, CurrentPH, HostileToPlayer, LootDropped, MaxDmg, MinDmg) {
    Character.call(this, ID , Name , MaxHP, CurrentPH);

    Object.defineProperty(this, "isItHostileToPlayer", {
        value: function() {
            return HostileToPlayer;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLootDropped", {
        value: function() {
            return LootDropped;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxDmg", {
        value: function() {
            return MaxDmg;
        },
        enumerable: true
    });
    Object.defineProperty(this, "getMinDmg", {
        value: function() {
            return MinDmg;
        },
        enumerable: true
    });

}

module.exports = Animal;
