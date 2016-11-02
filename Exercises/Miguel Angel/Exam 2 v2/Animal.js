"use strict";

let Character = require("./Character");

function Animal (animalID, animalName, animalMaxHP, animalCurrentHP,
                 animalHostileToPlayer, animalLootDropped, animalMaxDmg, animalMinDmg){

    Character.call(this, animalID, animalName, animalMaxHP, animalCurrentHP);

    let HostileToPlayer = animalHostileToPlayer;
    let LootDropped = animalLootDropped;
    let MaxDmg = animalMaxDmg;
    let MinDmg = animalMinDmg;

    Object.defineProperty(this, "isItHostileToPlayer", {
        value: function isItHostileToPlayer (){
            return HostileToPlayer;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLootDropped", {
        value: function getLootDropped (){
            return LootDropped;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxDmg", {
        value: function getMaxDmg (){
            return MaxDmg;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMinDmg", {
        value: function getMinDmg (){
            return MinDmg;
        },
        enumerable: true
    });
}

module.exports = Animal;
