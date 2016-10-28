"use strict";

let Item = require("./Item");

function Armor (armorBuyPrice, armorCount, armorDescription, armorID, armorName, armorSellPrice, armorWeight,
                armorAgiBonus, armorIntBonus, armorIsHeavy, armorPhysDR,
                armorSpellDR, armorSpiBonus, armorStaBonus, armorStrBonus){

    Item.call(this, armorBuyPrice, armorCount, armorDescription, armorID, armorName, armorSellPrice, armorWeight);

    let AgiBonus = armorAgiBonus;
    let IntBonus = armorIntBonus;
    let IsHeavy = armorIsHeavy;
    let PhysDR = armorPhysDR;
    let SpellDR = armorSpellDR;
    let SpiBonus = armorSpiBonus;
    let StaBonus = armorStaBonus;
    let StrBonus = armorStrBonus;

    Object.defineProperty(this, "getAgiBonus", {
        value: function getAgiBonus (){
            return AgiBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getIntBonus", {
        value: function getIntBonus (){
            return IntBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "isItHeavy", {
        value: function isItHeavy (){
            return IsHeavy;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getPhysDR", {
        value: function getPhysDR (){
            return PhysDR;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSpellDR", {
        value: function getSpellDR (){
            return SpellDR;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSpiBonus", {
        value: function getSpiBonus (){
            return SpiBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStaBonus", {
        value: function getStaBonus (){
            return StaBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStrBonus", {
        value: function getStrBonus (){
            return StrBonus;
        },
        enumerable: true
    });

}

module.exports = Armor;
