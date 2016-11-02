"use strict";

let Human = require("./Human");

function Player(inputId, inputName, inputMaxHP, inputCurrentHP, inputAgility, inputArmorEquipped, inputCurrentMP, inputFaction, inputGold, inputIntellect, inputIsMale, inputMaxMP, inputSpirit, inputStamina, inputStrength,inputWeaponEquipped){
  Human.call(this, inputId, inputName, inputMaxHP, inputCurrentHP, inputAgility, inputArmorEquipped, inputCurrentMP, inputFaction, inputGold, inputIntellect, inputIsMale, inputMaxMP, inputSpirit, inputStamina, inputStrength,inputWeaponEquipped);

  let Experience = 0;
  let Level      = 1;
  let SP         = 0;

  Object.defineProperties(this, {
    "getExperience": {
      value: function () {
        return Experience;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setExperience": {
      value: function (newExperience) {
        if (typeof(newExperience) === "number") {
          if (newExperience >= 0) {
            Experience = newExperience;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getLevel": {
      value: function () {
        return Level;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setLevel": {
      value: function (newLevel) {
        if (typeof(newLevel) === "number") {
          if (newLevel >= 0) {
            Level = newLevel;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getSP": {
      value: function () {
        return SP;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setSP": {
      value: function (newSP) {
        if (typeof(newSP) === "number") {
          if (newSP >= 0) {
            SP = newSP;
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

Player.prototype = Object.create(Human.prototype);
Object.defineProperty(Player.prototype, "constructor" , {
  value: Player,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Player;
