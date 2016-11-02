"use strict";
const Item = require("./Item.js");
function Potion(BuyPrice, Count, Description, ID, Name, SellPrice, Weight, HPRestore, MPRestore) {
    Item.call(this,BuyPrice, Count, Description, ID, Name, SellPrice, Weight);

    Object.defineProperty(this, "getHPRestore  ", {
        value: function() {
            return HPRestore ;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMPRestore  ", {
        value: function() {
            return MPRestore ;
        },
        enumerable: true
    });

}

module.exports = Potion;
