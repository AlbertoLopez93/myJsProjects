"use strict";

let Item = require("./Item");

function Weapon(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight, _IsOneHanded, _MaxDmg, _MinDmg, _StrReq){
    Item.call(this, _BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight);
    let IsEnchanted = false;
    let IsOneHanded = _IsOneHanded;
    let IsUpgraded = false;
    let MaxDmg = _MaxDmg;
    let MinDmg = _MinDmg;
    let StrReq = _StrReq;

    Object.defineProperties(this, {
        "isItEnchanted": {
            value: function () {
                if (IsEnchanted) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "Enchante": {
            value: function () {
                IsEnchanted = true;
            },
            enumerable: true
        },
        "isItOneHanded": {
            value: function () {
                if (IsOneHanded) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "isItUpgraded": {
            value: function () {
                if (IsUpgraded) {
                    return true;
                } else {
                    return false;
                }
            },
            enumerable: true
        },
        "Upgrade": {
            value: function () {
                IsUpgraded = true;
            },
            enumerable: true
        },
        "getMaxDmg": {
            value: function () {
                return MaxDmg;
            },
            enumerable: true
        },
        "setMaxDmg": {
            value: function (newMaxDmg) {
                if (newMaxDmg > 0 && typeof newMaxDmg === "number") {
                    MaxDmg = newMaxDmg;
                    return this;
                }
            }
        },
        "getMinDmg": {
            value: function () {
                return MinDmg;
            }
        },
        "setMinDmg": {
            value: function (newMinDmg) {
                if (newMinDmg > 0 && typeof newMinDmg === "number") {
                    if (newMinDmg >= MaxDmg) {
                        MinDmg = MaxDmg;
                        return this;
                    } else {
                        MinDmg = newMinDmg;
                        return this;
                    }
                }
            }
        },
        "getStrReq": {
            value: function () {
                return StrReq;
            },
            enumerable: true
        },
        "setStrReq": {
            value: function (newStrReq) {
                if (newStrReq > 0 && newStrReq < 999999999 && typeof newStrReq === "number") {
                    StrReq = newStrReq;
                    return this;
                }
            },
            enumerable: true
        }
    });
}

// function Weapon(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight, _IsOneHanded, _MaxDmg, _MinDmg, _StrReq){
// let axel = new Weapon(100, 10, "Axel's weapon", 1234, "Axel", 200, 5, true, 300, 100, 10);
// console.log(axel.getBuyPrice());
// console.log(axel.getCount());
// console.log(axel.setCount(20));
// console.log(axel.getCount());
// console.log(axel.getDescription());
// console.log(axel.getID());
// console.log(axel.getName());
// console.log(axel.getSellPrice());
// console.log(axel.getWeight());
// console.log(axel.isItEnchanted());
// console.log(axel.Enchante());
// console.log(axel.isItEnchanted());
// console.log(axel.isItOneHanded());
// console.log(axel.isItUpgraded());
// console.log(axel.Upgrade());
// console.log(axel.isItUpgraded());
// console.log(axel.getMaxDmg());
// axel.setMaxDmg(350);
// console.log(axel.getMaxDmg());
// console.log(axel.getMinDmg());
// axel.setMinDmg(349);
// console.log(axel.getMinDmg());
// console.log(axel.getStrReq());
// axel.setStrReq(12);
// console.log(axel.getStrReq());


module.exports = Weapon;
