"use strict";

let Character = require("./Character");

function Animal(inputId, inputName, inputMaxHP, inputCurrentHP, inputHostileToPlayer, inputLootDropped, inputMaxDmg, inputMinDmg) {
  Character.call(this, inputId, inputName, inputMaxHP, inputCurrentHP);
  let HostileToPlayer = inputHostileToPlayer;
  let LootDropped     = inputLootDropped;
  let MaxDmg          = inputMaxDmg;
  let MinDmg          = inputMinDmg;

  Object.defineProperties(this, {
    "isItHostileToPlayer": {
      value: function () {
        if (HostileToPlayer) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getLootDropped": {
      value: function () {
        return LootDropped;
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
    }
  });
}

Animal.prototype = Object.create(Character.prototype);
Object.defineProperty(Animal.prototype, "constructor" , {
  value: Animal,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Animal;
