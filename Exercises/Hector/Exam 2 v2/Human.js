"use strict";

let Character = require("./Character");
let Weapon = require("./Weapon");
let Armor = require("./Armor");

function Human(_id, _name, _maxHP, _currentHP, _Agility, _ArmorEquipped, _CurrentMP, _Faction, _Gold, _Intellect, _IsMale, _MaxMP, _Spirit, _Stamina, _Strength, _WeaponEquipped){
    Character.call(this, _id, _name, _maxHP, _currentHP);
    let Agility = _Agility;
    let ArmorEquipped = _ArmorEquipped;
    let CurrentMP = _CurrentMP;
    let Faction = _Faction;
    let Gold = _Gold;
    let Intellect = _Intellect;
    let IsMale = _IsMale;
    let MaxMP = _MaxMP;
    let Spirit = _Spirit;
    let Stamina = _Stamina;
    let Strength = _Strength;
    let WeaponEquipped = _WeaponEquipped;

    Object.defineProperties(this, {
        "getAgility": {
            value: function () {
                return Agility;
            },
            enumerable: true
        },
        "setAgility": {
            value: function (newAgility) {
                if (newAgility === 0) {
                    Agility = 0;
                    return this;
                }
                if (typeof newAgility === "number" && newAgility > 0) {
                    Agility = newAgility;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getArmorEquipped": {
            value: function () {
                return ArmorEquipped;
            },
            enumerable: true
        },
        "addArmorEquipped": {
            value: function (item) {
                if (item instanceof Armor === false) {
                    return ArmorEquipped.length;
                }
                let itemName = item.getName();
                for (let i = 0; i < ArmorEquipped.length; i++) {
                    if (ArmorEquipped[i].getName() === itemName) {
                        return ArmorEquipped.length;
                    }
                }
                return ArmorEquipped.push(item);
            },
            enumerable: true
        },
        "removeArmorEquipped": {
            value: function (name) {
                for (let i = 0; i < ArmorEquipped.length; i++) {
                    if (ArmorEquipped[i].getName() === name) {   /*COME BACK HERE ********************************************/
                        return ArmorEquipped.splice(i,1).pop();
                    }
                }
                return false;
            }
        },
        "switchArmorEquipped": {
            value: function (newArmorEquipped) {
                let oldArmorEquiped = ArmorEquipped;
                if (newArmorEquipped instanceof Array) {
                    ArmorEquipped = newArmorEquipped;
                    return oldArmorEquiped;
                } else {
                    return oldArmorEquiped;
                }
            },
            enumerable: true
        },
        "getCurrentMP": {
            value: function () {
                return CurrentMP;
            },
            enumerable: true
        },
        "setCurrentMP": {
            value: function (newMP) {
                if (newMP === 0) {
                    CurrentHP = 0;
                    return this;
                }
                let max = this.getMaxMP();
                if (typeof newMP === "number") {
                    if (newMP <= max) {
                        CurrentMP = newMP;
                        return this;
                    } else {
                        CurrentMP = max;
                        return this;
                    }
                }
                return this;
            },
            enumerable: true
        },
        "getFaction": {
            value: function () {
                return Faction;
            },
            enumerable: true
        },
        "getGold": {
            value: function () {
                return Gold;
            },
            enumerable: true
        },
        "setGold": {
            value: function (newGold) {
                if (newGold === 0) {
                    Gold = 0;
                    return this;
                }
                if (typeof newGold === "number" && newGold > 0 && newGold < 999999999) {
                    Gold = newGold;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getIntellect": {
            value: function () {
                return Intellect;
            },
            enumerable: true
        },
        "setIntellect": {
            value: function (newIntellect) {
                if (newIntellect === 0) {
                    Intellect = 0;
                    return this;
                }
                if (typeof newIntellect === "number" && newIntellect > 0) {
                    Intellect = newIntellect;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "isItMale": {
            value: function () {
                if (IsMale) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "getMaxMP": {
            value: function () {
                return MaxMP;
            },
            enumerable: true
        },
        "setMaxMP": {
            value: function (newMaxMP) {
                if (typeof newMaxMP === "number" && newMaxMP > 0) {
                    MaxMP = newMaxMP;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getSpirit": {
            value: function () {
                return Spirit;
            },
            enumerable: true
        },
        "setSpirit": {
            value: function (newSpirit) {
                if (newSpirit === 0) {
                    Spirit = 0;
                    return this;
                }
                if (newSpirit > 0 && typeof newSpirit === "number") {
                    Spirit = newSpirit;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getStamina": {
            value: function () {
                return Stamina;
            },
            enumerable: true
        },
        "setStamina": {
            value: function (newStamina) {
                if (newStamina === 0) {
                    Stamina = 0;
                    return this;
                }
                if (newStamina > 0 && typeof newStamina === "number") {
                    Stamina = newStamina;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getStrength": {
            value: function () {
                return Strength;
            },
            enumerable: true
        },
        "setStrength": {
            value: function (newStrength) {
                if (newStrength === 0) {
                    Strength = 0;
                    return this;
                }
                if (newStrength > 0 && typeof newStrength === "number") {
                    Strength = newStrength;
                    return this;
                }
                return this;
            },
            enumerable: true
        },
        "getWeaponEquipped": {
            value: function () {
                return WeaponEquipped;
            },
            enumerable: true
        },
        "addWeaponEquipped": {
            value: function (item) {
                if (item instanceof Weapon === false) {
                    return ArmorEquipped.length;
                }
                let itemName = item.getName();
                for (let i = 0; i < WeaponEquipped.length; i++) {
                    if (WeaponEquipped[i].getName() === itemName) {
                        return WeaponEquipped.length;
                    }
                }
                return WeaponEquipped.push(item);
            },
            enumerable: true
        },
        "removeWeaponEquipped": {
            value: function (name) {
                for (let i = 0; i < WeaponEquipped.length; i++) {
                    if (WeaponEquipped[i].getName() === name) {   /*COME BACK HERE ********************************************/
                        return WeaponEquipped.splice(i,1).pop();
                    }
                }
                return false;
            },
            enumerable: true
        },
        "switchWeaponEquipped": {
            value: function (newWeaponEquipped) {
                let oldWeaponEquiped = WeaponEquipped;
                if (newWeaponEquipped instanceof Array) {
                    WeaponEquipped = newWeaponEquipped;
                    return oldWeaponEquiped;
                } else {
                    return oldWeaponEquiped;
                }
            },
            enumerable: true
        }
    });
}

let axel = new Human(1234, "axel", 100, 0, 20, [], 8, "Tepa", 0, 10, true, 200, 3, 50, 30, []);
// let armor1 = new Armor(100, 10, "Axel's Armor", 1234, "Axel", 200, 5, 100, 200, false, 50, 50, 80, 80, 80);
// let armor2 = new Armor(100, 10, "Axel's Armor", 1234, "Juan", 200, 5, 100, 200, false, 50, 50, 80, 80, 80);
// let armor3 = new Armor(100, 10, "Axel's Armor", 1234, "Axel", 200, 5, 100, 200, false, 50, 50, 80, 80, 80);

let weapon1 = new Weapon(100, 10, "Axel's weapon", 1234, "Axel", 200, 5, true, 300, 100, 10);
let weapon2 = new Weapon(100, 10, "Axel's weapon", 1234, "Juan", 200, 5, true, 300, 100, 10);
let weapon3 = new Weapon(100, 10, "Axel's weapon", 1234, "Axela", 200, 5, true, 300, 100, 10);

console.log(axel.getWeaponEquipped());
console.log(axel.addWeaponEquipped(weapon1));
console.log(axel.getWeaponEquipped());
console.log(axel.addWeaponEquipped(weapon2));
console.log(axel.getWeaponEquipped());
console.log(axel.addWeaponEquipped(weapon3));
console.log(axel.getWeaponEquipped());
console.log(axel.removeWeaponEquipped("Juan"));

console.log("\n");




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

module.exports = Human;
