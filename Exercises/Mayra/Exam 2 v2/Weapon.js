"use strict";
const Item = require("./Item.js");
function Weapon(BuyPrice, Count, Description, ID, Name, SellPrice, Weight, IsEnchanted, IsOneHanded, IsUpgraded, MaxDmg, MinDmg) {
    Item.call(this,BuyPrice, Count, Description, ID, Name, SellPrice, Weight);
    if (IsEnchanted !== false) {
        IsEnchanted = false;

    }

    Object.defineProperty(this, "itIsEnchanted", {
        value: function() {
            return IsEnchanted;
        },
        enumerable: true
    });

    Object.defineProperty(this, "beEnchanted", {
        value: function() {
            if (this.itIsEnchanted() === false) {
                IsEnchanted = true;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "itIsUpgraded", {
        value: function() {
            return IsUpgraded;
        },
        enumerable: true
    });

    Object.defineProperty(this, "beUpgradedWeapon", {
        value: function() {
            if (this.itIsUpgraded() === false) {
                IsUpgraded  = true;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "itIsOneHanded", {
        value: function() {
            return IsOneHanded;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxDmg ", {
        value: function() {
            return MaxDmg;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMaxDmg ", {
        value: function(newMaxDmg) {
            if (this.itIsUpgraded() === true  || this.itIsEnchanted() === true) {
                MaxDmg  = newMaxDmg;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMinDmg ", {
        value: function() {
            return MinDmg;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMinDmg ", {
        value: function(newMinDmg) {
            if (this.itIsUpgraded() === true  || this.itIsEnchanted() === true) {
                MinDmg  = newMinDmg;
            }
            return this;
        },
        enumerable: true
    });


}
module.exports = Weapon;
