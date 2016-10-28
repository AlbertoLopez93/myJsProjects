"use strict";
const Item = require("./Item.js");
function Armor(BuyPrice, Count, Description, ID, Name, SellPrice, Weight, AgiBonus, IntBonus, IsHeavy, PhysDR, SpellDR, SpiBonus, StaBonus, StrBonus) {
    Item.call(this,BuyPrice, Count, Description, ID, Name, SellPrice, Weight);

    Object.defineProperty(this, "getAgiBonus", {
        value: function() {
            return AgiBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getIntBonus", {
        value: function() {
            return IntBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "isItHeavy", {
        value: function() {
            return IsHeavy;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getPhysDR", {
        value: function() {
            return PhysDR ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSpellDR", {
        value: function() {
            return SpellDR ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSpiBonus", {
        value: function() {
            return SpiBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStaBonus", {
        value: function() {
            return StaBonus;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getStrBonus", {
        value: function() {
            return StrBonus;
        },
        enumerable: true
    });

}

module.exports = Armor;
