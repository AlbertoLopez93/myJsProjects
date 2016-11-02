"use strict";

function Item (itemBuyPrice, itemCount, itemDescription, itemID, itemName, itemSellPrice, itemWeight){
    let BuyPrice = itemBuyPrice;
    let Count = itemCount;
    let Description = itemDescription;
    let ID = itemID;
    let Name = itemName;
    let SellPrice = itemSellPrice;
    let Weight = itemWeight;

    Object.defineProperty(this, "getBuyPrice", {
        value: function getBuyPrice (){
            return BuyPrice;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getCount", {
        value: function getCount (){
            return Count;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setCount", {
        value: function setCount (newCount){
            if((typeof newCount === "number" || newCount instanceof Number) && newCount >= 0){
                Count = newCount;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getDescription", {
        value: function getDescription (){
            return Description;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getID", {
        value: function getID (){
            return ID;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getName", {
        value: function getName (){
            return Name;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSellPrice", {
        value: function getSellPrice (){
            return SellPrice;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getWeight", {
        value: function getWeight (){
            return Weight;
        },
        enumerable: true
    });

}

module.exports = Item;
