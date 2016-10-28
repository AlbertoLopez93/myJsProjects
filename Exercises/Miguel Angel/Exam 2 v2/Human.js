    "use strict";

let Character = require("./Character");
let Armor = require("./Armor");
let Weapon = require("./Weapon");

function Human (humanID, humanName, humanMaxHP, humanCurrentHP,
                humanAgility, humanArmorEquipped, humanCurrentMP, humanFaction,
                humanGold, humanIntellect, humanIsMale, humanMaxMP,
                humanSpirit, humanStamina, humanStrength, humanWeaponEquipped){

    Character.call(this, humanID, humanName, humanMaxHP, humanCurrentHP);

    let Agility = humanAgility;
    let ArmorEquipped = humanArmorEquipped;
    let CurrentMP = humanCurrentMP;
    let Faction = humanFaction;
    let Gold = humanGold;
    let Intellect = humanIntellect;
    let IsMale = humanIsMale;
    let MaxMP = humanMaxMP;
    let Spirit = humanSpirit;
    let Stamina = humanStamina;
    let Strength = humanStrength;
    let WeaponEquipped = humanWeaponEquipped;

    Object.defineProperty(this, "getAgility", {
        value: function getAgility (){
            return Agility;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setAgility", {
        value: function setAgility (newAgility){
            if((typeof newAgility === "number" || newAgility instanceof Number) && newAgility >= 0){
                Agility = newAgility;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getArmorEquipped", {
        value: function getArmorEquipped (){
            return ArmorEquipped;
        },
        enumerable: true
    });

    Object.defineProperty(this, "addArmorEquipped", {
        value: function addArmorEquipped (newArmor){
            let flag;

            if(newArmor instanceof Armor){
                flag = ArmorEquipped.some(function (elem){
                    return elem.getName() === newArmor.getName();
                });

                if(!flag){
                    ArmorEquipped.push(newArmor);
                }
            }
            return ArmorEquipped.length;
        },
        enumerable: true
    });

    Object.defineProperty(this, "removeArmorEquipped", {
        value: function removeArmorEquipped (armorName){
            let flag;
            let index;

            flag = ArmorEquipped.some(function (elem){
                return elem.getName() === armorName;
            });

            if(flag){
                index = ArmorEquipped.findIndex(function (elem){
                    return elem.getName() === armorName;
                });

                flag = ArmorEquipped.splice(index, 1).pop();
            }

            return flag;
        },
        enumerable: true
    });

    Object.defineProperty(this, "switchArmorEquipped", {
        value: function switchArmorEquipped (newArmorSet){
            let oldArmorSet = ArmorEquipped;
            ArmorEquipped = newArmorSet;

            return oldArmorSet;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getCurrentMP", {
        value: function getCurrentMP (){
            return CurrentMP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setCurrentMP", {
        value: function setCurrentMP (newMP){
            if((typeof newMP === "number" || newMP instanceof Number)){
                if(newMP <= MaxMP){
                    CurrentMP = newMP;
                } else {
                    CurrentMP = MaxMP;
                }
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getFaction", {
        value: function getFaction (){
            return Faction;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getGold", {
        value: function getGold (){
            return Gold;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setGold", {
        value: function setGold (newGold){
             if(typeof newGold === "number" || newGold instanceof Number){
                 if(newGold >= 0 && newGold <= 999999999){
                     Gold = newGold;
                 }
             }

             return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getIntellect", {
        value: function getIntellect (){
            return Intellect;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setIntellect", {
        value: function setIntellect (newIntellect){
            if((typeof newIntellect === "number" || newIntellect instanceof Number) && newIntellect >= 0){
                Intellect = newIntellect;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "isItMale", {
        value: function isItMale (){
            return IsMale;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxMP", {
        value: function getMaxMP (){
            return MaxMP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMaxMP", {
        value: function setMaxMP (newMaxMP){
            if((typeof newMaxMP === "number" || newMaxMP instanceof Number) && newMaxMP > 0){
                MaxMP = newMaxMP;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSpirit", {
        value: function getSpirit (){
            return Spirit;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setSpirit", {
        value: function setSpirit (newSpirit){
            if((typeof newSpirit === "number" || newSpirit instanceof Number) && newSpirit >= 0){
                Spirit = newSpirit;
            }

            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStamina", {
        value: function getStamina (){
            return Stamina;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setStamina", {
        value: function setStamina (newStamina){
            if((typeof newStamina === "number" || newStamina instanceof Number) && newStamina >= 0){
                Stamina = newStamina;
            }

            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStrength", {
        value: function getStrength (){
            return Strength;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setStrength", {
        value: function setStrength (newStrength){
            if((typeof newStrength === "number" || newStrength instanceof Number) && newStrength >= 0){
                Strength = newStrength;
            }

            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getWeaponEquipped", {
        value: function getWeaponEquipped (){
            return WeaponEquipped;
        },
        enumerable: true
    });

    Object.defineProperty(this, "addWeaponEquipped", {
        value: function addWeaponEquipped (newWeapon){
            let flag;

            if(newWeapon instanceof Weapon){
                flag = WeaponEquipped.some(function (elem){
                    return elem.getName() === newWeapon.getName();
                });

                if(!flag){
                    WeaponEquipped.push(newWeapon);
                }
            }
            return WeaponEquipped.length;
        },
        enumerable: true
    });

    Object.defineProperty(this, "removeWeaponEquipped", {
        value: function removeWeaponEquipped (weaponName){
            let flag;
            let index;

            flag = WeaponEquipped.some(function (elem){
                return elem.getName() === weaponName;
            });

            if(flag){
                index = WeaponEquipped.findIndex(function (elem){
                    return elem.getName() === weaponName;
                });

                flag = WeaponEquipped.splice(index, 1).pop();
            }

            return flag;
        },
        enumerable: true
    });

    Object.defineProperty(this, "switchWeaponEquipped", {
        value: function switchWeaponEquipped (newWeaponSet){
            let oldWeaponSet = WeaponEquipped;
            WeaponEquipped = newWeaponSet;

            return oldWeaponSet;
        },
        enumerable: true
    });

}

module.exports = Human;
