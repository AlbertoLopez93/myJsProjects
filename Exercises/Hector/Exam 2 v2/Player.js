"use strict";

let Human = require("./Human");

function Player(_id, _name, _maxHP, _currentHP, _Agility, _ArmorEquipped, _CurrentMP, _Faction, _Gold, _Intellect, _IsMale, _MaxMP, _Spirit, _Stamina, _Strength, _WeaponEquipped ) {
    Human.call(this, _id, _name, _maxHP, _currentHP, _Agility, _ArmorEquipped, _CurrentMP, _Faction, _Gold, _Intellect, _IsMale, _MaxMP, _Spirit, _Stamina, _Strength, _WeaponEquipped);
    let Experience = 0;
    let Level = 1;
    let SP = 0;

    Object.defineProperties(this, {
        "getExperience": {
            value: function () {
                return Experience;
            },
            enumerable: true
        },
        "setExperience": {
            value: function (newExperience) {
                if (newExperience === 0) {
                    Experience = 0;
                    return this;
                }
                if (newExperience > 0 && typeof newExperience === "number") {
                    Experience = newExperience;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getLevel": {
            value: function () {
                return Level;
            },
            enumerable: true
        },
        "setLevel": {
            value: function (newLevel) {
                if (newLevel === 0) {
                    Level = 0;
                    return this;
                }
                if (newLevel > 0 && typeof newLevel === "number") {
                    Level = newLevel;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getSP": {
            value: function () {
                return SP;
            },
            enumerable: true
        },
        "setSP": {
            value: function (newSP) {
                if (newSP === 0) {
                    SP = 0;
                    return this;
                }
                if (typeof newSP === "number" && newSP > 0) {
                    SP = newSP;
                    return this;
                }
                return this;
            },
            enumerable: true
        }
    });
}

//
// let axel = new Player(1234, "axel", 100, 0, 20, [], 8, "Tepa", 0, 10, true, 200, 3, 50, 30, []);
// console.log(axel.getID());
// console.log(axel.getName());
// console.log(axel.getCurrentHP());
// console.log(axel.getMaxHP());
// console.log("\n");
// console.log(axel.setCurrentHP(50));
// console.log(axel.setMaxHP(51));
// console.log(axel.getCurrentHP());
// console.log(axel.getMaxHP());
// console.log("\n");
// console.log(axel.getAgility());
// console.log(axel.setAgility(100));
// console.log(axel.getAgility());
// console.log(axel.setAgility(0));
// console.log(axel.getAgility());
// console.log("\n");
// console.log(axel.getArmorEquipped());
// console.log(axel.addArmorEquipped());
// console.log("\n");
// console.log(axel.getCurrentMP());
// console.log(axel.setCurrentMP(9));
// console.log(axel.getCurrentMP());
// console.log("\n");
// console.log(axel.getFaction());
// console.log("\n");
// console.log(axel.getGold());
// console.log(axel.setGold(2));
// console.log(axel.getGold());
// console.log("\n");
// console.log(axel.getIntellect());
// console.log(axel.setIntellect(80));
// console.log(axel.getIntellect());
// console.log("\n");
// console.log(axel.isItMale());
// console.log("\n");
// console.log(axel.getMaxMP());
// console.log(axel.setMaxMP(300));
// console.log(axel.getMaxMP());
// console.log("\n");
// console.log(axel.getSpirit());
// console.log(axel.setMaxMP(5));
// console.log(axel.getMaxMP());
// console.log("\n");
// console.log(axel.getStamina());
// console.log(axel.setStamina(40));
// console.log(axel.getStamina());
// console.log("\n");
// console.log(axel.getStrength());
// console.log(axel.setStrength(9));
// console.log(axel.getStrength());
// console.log("\n");
// console.log(axel.getWeaponEquipped());
// console.log("\n");
// console.log(axel.getExperience());
// console.log(axel.setExperience(20));
// console.log(axel.getExperience());
// console.log("\n");
// console.log(axel.getLevel());
// console.log(axel.setLevel(20));
// console.log(axel.getLevel());
// console.log("\n");
// console.log(axel.getSP());
// console.log(axel.setSP(20));
// console.log(axel.getSP());




module.exports = Player;
