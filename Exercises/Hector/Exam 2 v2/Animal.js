"use strict";

let Character = require("./Character");

function Animal(_id, _name, _maxHP, _currentHP, _HostileToPlayer, _LootDropped, _MaxDmg, _MinDmg){
    Character.call(this, _id, _name, _maxHP, _currentHP);
    let HostileToPlayer = _HostileToPlayer;
    let LootDropped = _LootDropped;
    let MaxDmg = _MaxDmg;
    let MinDmg = _MinDmg;

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
        },
        "getMaxDmg": {
            value: function () {
                return MaxDmg;
            },
            enumerable: true
        },
        "getMinDmg": {
            value: function () {
                return MinDmg;
            },
            enumerable: true
        }
    });
}

let axel = new Animal(1234, "axel", 100, 0, true, 10, 20, 10);
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
console.log(axel.isItHostileToPlayer());
console.log(axel.getLootDropped());
console.log(axel.getMaxDmg());
console.log(axel.getMinDmg());

module.exports = Animal;
