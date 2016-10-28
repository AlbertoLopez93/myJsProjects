"use strict";

let Item = require("./Item");
function Potion(inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight, inputHPRestore, inputMPRestore) {
  Item.call(this, inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight);

  let HPRestore = inputHPRestore;
  let MPRestore = inputMPRestore;

  Object.defineProperties(this, {
    "getHPRestore": {
      value: function () {
        return HPRestore;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getMPRestore": {
      value: function () {
        return MPRestore;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
}

Potion.prototype = Object.create(Item.prototype);
Object.defineProperty(Potion.prototype, "constructor" , {
  value: Potion,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Potion;
