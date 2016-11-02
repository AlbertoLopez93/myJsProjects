"use strict";

let Item = require("./Item");

function Potion (potionBuyPrice, potionCount, potionDescription, potionID, potionName, potionSellPrice, potionWeight,
                 potionHPRestore, potionMPRestore){

    Item.call(this, potionBuyPrice, potionCount, potionDescription, potionID, potionName, potionSellPrice, potionWeight);

    let HPRestore = potionHPRestore;
    let MPRestore = potionMPRestore;

    Object.defineProperty(this, "getHPRestore", {
        value: function getHPRestore (){
            return HPRestore;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMPRestore", {
        value: function getMPRestore (){
            return MPRestore;
        },
        enumerable: true
    });
}

module.exports = Potion;
