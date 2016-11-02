"use strict";
function Item(BuyPrice, Count, Description, ID, Name, SellPrice, Weight) {

    Object.defineProperty(this, "getBuyPrice", {
        value: function() {
            return BuyPrice;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getCount", {
        value: function() {
            return Count;
        },
        enumerable: true
    });


    Object.defineProperty(this, "setCount", {
        value: function(newCount) {
            if (typeof newCount === "number" && newCount > 0 ) {
                Count = newCount;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getDescription", {
        value: function() {
            return Description;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getID", {
        value: function() {
            return ID;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getName", {
        value: function() {
            return Name;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSellPrice", {
        value: function() {
            return SellPrice;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getWeight", {
        value: function() {
            return Weight;
        },
        enumerable: true
    });

}

module.exports = Item;
