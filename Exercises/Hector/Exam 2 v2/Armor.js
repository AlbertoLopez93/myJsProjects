"use strict";

let Item = require("./Item");

function Armor(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight, _AgiBonus, _IntBonus, _IsHeavy, _PhysDR, _SpellDR, _SpiBonus, _StaBonus, _StrBouns ){
    Item.call(this, _BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight);
    let AgiBonus = _AgiBonus;
    let IntBonus = _IntBonus;
    let IsHeavy = _IsHeavy;
    let PhysDR = _PhysDR;
    let SpellDR = _SpellDR;
    let SpiBonus = _SpiBonus;
    let StaBonus = _StaBonus;
    let StrBouns = _StrBouns;

    Object.defineProperties(this, {
        "getAgiBonus": {
            value: function () {
                return AgiBonus;
            },
            enumerable: true
        },
        "getIntBonus": {
            value: function () {
                return IntBonus;
            },
            enumerable: true
        },
        "isItHeavy": {
            value: function () {
                if (IsHeavy) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "getPhysDR": {
            value: function () {
                return PhysDR;
            },
            enumerable: true
        },
        "getSpellDR": {
            value: function () {
                return SpellDR;
            },
            enumerable: true
        },
        "getSpiBonus": {
            value: function () {
                return SpiBonus;
            },
            enumerable: true
        },
        "getStaBonus": {
            value: function () {
                return StaBonus;
            },
            enumerable: true
        },
        "getStrBonus": {
            value: function () {
                return StrBouns;
            }
        }

    });
}

// _AgiBonus, _IntBonus, _IsHeavy, _PhysDR, _SpellDR, _SpiBonus, _StaBonus, _StrBouns
// let axel = new Armor(100, 10, "Axel's Armor", 1234, "Axel", 200, 5, 100, 200, false, 50, 50, 80, 80, 80);
// console.log(axel.getBuyPrice());
// console.log(axel.getCount());
// console.log(axel.setCount(20));
// console.log(axel.getCount());
// console.log(axel.getDescription());
// console.log(axel.getID());
// console.log(axel.getName());
// console.log(axel.getSellPrice());
// console.log(axel.getWeight());
// console.log(axel.getAgiBonus());
// console.log(axel.getIntBonus());
// console.log(axel.isItHeavy());
// console.log(axel.getPhysDR());
// console.log(axel.getSpellDR());
// console.log(axel.getSpiBonus());
// console.log(axel.getStaBonus());
// console.log(axel.getStrBonus());

module.exports = Armor;
