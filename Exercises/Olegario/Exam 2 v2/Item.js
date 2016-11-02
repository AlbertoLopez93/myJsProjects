"use strict";

function Item(inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight){
  let BuyPrice    = inputBuyPrice;
  let Count       = inputCount;
  let Description = inputDescription;
  let ID          = inputID;
  let Name        = inputName;
  let SellPrice   = inputSellPrice;
  let Weight      = inputWeight;

  Object.defineProperties(this, {
    "getBuyPrice": {
      value: function () {
        return BuyPrice;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getCount": {
      value: function () {
        return Count;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setCount": {
      value: function (newCount) {
        if (typeof(newCount) === "number") {
          if (newCount >= 0) {
            Count = newCount;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getDescription": {
      value: function () {
        return Description;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getID": {
      value: function () {
        return ID;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getName": {
      value: function () {
        return Name;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getSellPrice": {
      value: function () {
        return SellPrice;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getWeight": {
      value: function () {
        return Weight;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }

  });

}
module.exports = Item;
