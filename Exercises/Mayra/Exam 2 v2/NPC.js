"use strict";
const Human = require("./Human.js");
function NPC(ID , Name , MaxHP, CurrentPH, Agility, ArmorEquipped, CurrentMP, Faction, Gold, Intellect, IsMale, MaxMP,
    Spirit, Stamina, Strength, WeaponEquipped, HostileToNPC, LootDropped) {
    Human.call(this, ID , Name , MaxHP, CurrentPH, Agility, ArmorEquipped, CurrentMP, Faction, Gold, Intellect, IsMale, MaxMP,
        Spirit, Stamina, Strength, WeaponEquipped);

    Object.defineProperty(this, "isItHostileToPlayer", {
        value: function() {
            return HostileToNPC ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLootDropped", {
        value: function() {
            return LootDropped ;
        },
        enumerable: true
    });

}

module.exports = NPC;
