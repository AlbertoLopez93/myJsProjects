"use strict";

let Item = require("./Item");

function Weapon (weaponBuyPrice, weaponCount, weaponDescription, weaponID, weaponName, weaponSellPrice, weaponWeight,
                 weaponIsOneHanded, weaponMaxDmg, weaponMinDmg, weaponStrReq){

    Item.call(this, weaponBuyPrice, weaponCount, weaponDescription, weaponID, weaponName, weaponSellPrice, weaponWeight);

    let IsEnchanted = false;
    let IsOneHanded = weaponIsOneHanded;
    let IsUpgraded = false;
    let MaxDmg = weaponMaxDmg;
    let MinDmg = weaponMinDmg;
    let StrReq = weaponStrReq;

    Object.defineProperty(this, "isItEnchanted", {
        value: function isItEnchanted (){
            return IsEnchanted;
        },
        enumerable: true
    });

    Object.defineProperty(this, "enchant", {
        value: function setEnchanted (){
            if(!IsEnchanted){
                IsEnchanted = !IsEnchanted;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "isItOneHanded", {
        value: function isItOneHanded (){
            return IsOneHanded;
        },
        enumerable: true
    });

    Object.defineProperty(this, "isItUpgraded", {
        value: function isItUpgraded (){
            return IsUpgraded;
        },
        enumerable: true
    });

    Object.defineProperty(this, "upgrade", {
        value: function upgrade (){
            if(!IsUpgraded){
                IsUpgraded = !IsUpgraded;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxDmg", {
        value: function getMaxDmg (){
            return MaxDmg;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMaxDmg", {
        value: function setMaxDmg (newMaxDmg){
            if((typeof newMaxDmg === "number" || newMaxDmg instanceof Number) && newMaxDmg >= 0 && newMaxDmg >= MinDmg){
                MaxDmg = newMaxDmg;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMinDmg", {
        value: function getMinDmg (){
            return MinDmg;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMinDmg", {
        value: function setMinDmg (newMinDmg){
            if((typeof newMinDmg === "number" || newMinDmg instanceof Number) && newMinDmg >= 0 && newMinDmg <= MaxDmg){
                MinDmg = newMinDmg;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStrReq", {
        value: function getStrReq (){
            return StrReq;
        },
        enumerable: true
    });

}

module.exports = Weapon;
