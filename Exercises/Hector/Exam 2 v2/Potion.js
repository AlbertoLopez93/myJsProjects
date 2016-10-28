"use strict";

let Item = require("./Item");

function Potion(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight, _HPRestore, _MPRestore){
    Item.call(this, _BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight);
    let HPRestore = _HPRestore;
    let MPRestore = _MPRestore;

    Object.defineProperties(this, {
        "getHPRestore": {
            value: function () {
                return HPRestore;
            },
            enumerable: true
        },
        "getMPRestore": {
            value: function () {
                return MPRestore;
            },
            enumerable: true
        }
    });
}
//
// let axel = new Potion(10,1,"axel's potion", 666, "axel", 100, 10, 25,35);
// console.log(axel.HPRestore);
// // axel.HPRestore = 20;
// console.log(axel.MPRestore);

module.exports = Potion;
