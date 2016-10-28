"use strict";

let Item = require("./Item");
function Weapon(inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight, inputIsEnchanted, inputIsOneHanded, inputIsUpgraded, inputMaxDmg, inputMinDmg, inputStrReq) {
  Item.call(this, inputBuyPrice, inputCount, inputDescription, inputID, inputName, inputSellPrice, inputWeight);

  let IsEnchanted = inputIsEnchanted;
  let IsOneHanded = inputIsOneHanded;
  let IsUpgraded  = inputIsUpgraded;
  let MaxDmg      = inputMaxDmg;
  let MinDmg      = inputMinDmg;
  let StrReq      = inputStrReq;

  Object.defineProperties(this, {
    "isEnchanted": {
      value: function () {
        if (IsEnchanted) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "isOneHanded": {
      value: function () {
        if (IsOneHanded) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "isUpgraded": {
      value: function () {
        if (IsUpgraded) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getMaxDmg": {
      value: function () {
        return MaxDmg;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getMinDmg": {
      value: function () {
        return MinDmg;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getStrReq": {
      value: function () {
        return StrReq;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setIsEnchanted": {
      value: function (newEnchanted) {
        if (typeof(newEnchanted) === "boolean") {
          IsEnchanted = newEnchanted;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setIsUpgraded": {
      value: function (newUpgraded) {
        if (typeof(newUpgraded) === "boolean") {
          IsUpgraded = newUpgraded;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setMaxDmg": {
      value: function (newMaxDmg) {
        if (typeof(newMaxDmg) === "number") {
          if (newMaxDmg >= 0) {
            MaxDmg = newMaxDmg;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setMinDmg": {
      value: function (newMinDmg) {
        if (typeof(newMinDmg) === "number") {
          if (newMinDmg >= 0) {
            MinDmg = newMinDmg;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setStrReq": {
      value: function (newStrReq) {
        if (typeof(newStrReq) === "number") {
          if (newStrReq >= 0) {
            StrReq = newStrReq;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
}

Weapon.prototype = Object.create(Item.prototype);
Object.defineProperty(Weapon.prototype, "constructor" , {
  value: Weapon,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Weapon;
