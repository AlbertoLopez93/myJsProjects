"use strict";

let Human = require("./Human");

function NPC(_id, _name, _maxHP, _currentHP, _Agility, _ArmorEquipped, _CurrentMP, _Faction, _Gold, _Intellect, _IsMale, _MaxMP, _Spirit, _Stamina, _Strength, _WeaponEquipped, _HostileToPlayer, _LootDropped) {
    Human.call(this, _id, _name, _maxHP, _currentHP, _Agility, _ArmorEquipped, _CurrentMP, _Faction, _Gold, _Intellect, _IsMale, _MaxMP, _Spirit, _Stamina, _Strength, _WeaponEquipped);
    let HostileToPlayer = _HostileToPlayer;
    let LootDropped = _LootDropped;

    Object.defineProperties(this, {
        "isItHostileToPlayer": {
            value: function () {
                if (HostileToPlayer) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "getLootDropped": {
            value: function () {
                return LootDropped;
            },
            enumerable: true
        }
    });
}


let axel = new NPC(1234, "axel", 100, 0, 20, [], 8, "Tepa", 0, 10, true, 200, 3, 50, 30, [], true, 25);
console.log(axel.getID());
console.log(axel.getName());
console.log(axel.getCurrentHP());
console.log(axel.getMaxHP());
console.log("\n");
console.log(axel.setCurrentHP(50));
console.log(axel.setMaxHP(51));
console.log(axel.getCurrentHP());
console.log(axel.getMaxHP());
console.log("\n");
console.log(axel.getAgility());
console.log(axel.setAgility(100));
console.log(axel.getAgility());
console.log(axel.setAgility(0));
console.log(axel.getAgility());
console.log("\n");
console.log(axel.getArmorEquipped());
console.log(axel.addArmorEquipped());
console.log("\n");
console.log(axel.getCurrentMP());
console.log(axel.setCurrentMP(9));
console.log(axel.getCurrentMP());
console.log("\n");
console.log(axel.getFaction());
console.log("\n");
console.log(axel.getGold());
console.log(axel.setGold(2));
console.log(axel.getGold());
console.log("\n");
console.log(axel.getIntellect());
console.log(axel.setIntellect(80));
console.log(axel.getIntellect());
console.log("\n");
console.log(axel.isItMale());
console.log("\n");
console.log(axel.getMaxMP());
console.log(axel.setMaxMP(300));
console.log(axel.getMaxMP());
console.log("\n");
console.log(axel.getSpirit());
console.log(axel.setMaxMP(5));
console.log(axel.getMaxMP());
console.log("\n");
console.log(axel.getStamina());
console.log(axel.setStamina(40));
console.log(axel.getStamina());
console.log("\n");
console.log(axel.getStrength());
console.log(axel.setStrength(9));
console.log(axel.getStrength());
console.log("\n");
console.log(axel.getWeaponEquipped());
console.log("\n");
console.log(axel.isItHostileToPlayer());
console.log("\n");
console.log(axel.getLootDropped());


module.exports = NPC;
