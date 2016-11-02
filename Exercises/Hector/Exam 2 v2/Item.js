"use strict";

function Item(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight){
    let BuyPrice = _BuyPrice;
    let Count = _Count;
    let Description = _Description;
    let ID = _ID;
    let Name = _Name;
    let SellPrice = _SellPrice;
    let Weight = _Weight;

    Object.defineProperties(this, {
        "getBuyPrice": {
            value: function() {
                return BuyPrice;
            },
            enumerable: true
        },
        "getCount": {
            value: function () {
                return Count;
            },
            enumerable: true
        },
        "setCount": {
            value: function (newCount) {
                if (newCount > 0 && typeof newCount === "number") {
                    Count = newCount;
                    return this;
                }
            },
            enumerable: true
        },
        "getDescription": {
            value: function () {
                return Description;
            },
            enumerable: true
        },
        "getID": {
            value: function () {
                return ID;
            },
            enumerable: true
        },
        "getName": {
            value: function () {
                return Name;
            },
            enumerable: true
        },
        "getSellPrice": {
            value: function functionName() {
                return SellPrice;
            },
            enumerable: true
        },
        "getWeight": {
            value: function () {
                return Weight;
            },
            enumerable: true
        }
    });
}

// function Item(_BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight){
// let axel = new Item(100, 10, "Axel's Item", 1234, "Axel", 200, 5);
// console.log(axel.getBuyPrice());
// console.log(axel.getCount());
// console.log(axel.setCount(20));
// console.log(axel.getCount());
// console.log(axel.getDescription());
// console.log(axel.getID());
// console.log(axel.getName());
// console.log(axel.getSellPrice());
// console.log(axel.getWeight());



module.exports = Item;
