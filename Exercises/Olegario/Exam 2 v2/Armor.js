"use strict";

let Item = require("./Item");

function Armor(inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight, inputAgiBonus,inputIntBonus, inputIsHeavy, inputPhysDR, inputSpellDR, inputSpiBonus, inputStaBonus, inputStrBouns) {
  Item.call(this, inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight);

  let AgiBonus = inputAgiBonus;
  let IntBonus = inputIntBonus;
  let IsHeavy  = inputIsHeavy;
  let PhysDR   = inputPhysDR;
  let SpellDR  = inputSpellDR;
  let SpiBonus = inputSpiBonus;
  let StaBonus = inputStaBonus;
  let StrBouns = inputStrBouns;

  Object.defineProperties(this, {
    "getAgiBonus": {
      value: function () {
        return AgiBonus;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getIntBonus": {
      value: function () {
        return IntBonus;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "isItHeavy": {
      value: function () {
        if (IsHeavy) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getPhysDR": {
      value: function () {
        return PhysDR;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getSpellDR": {
      value: function () {
        return SpellDR;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getSpiBonus": {
      value: function () {
        return SpiBonus;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getStaBonus": {
      value: function () {
        return StaBonus;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getStrBonus": {
      value: function () {
        return StrBouns;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
}

Armor.prototype = Object.create(Item.prototype);
Object.defineProperty(Armor.prototype, "constructor" , {
  value: Armor,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Armor;
