"use strict";

function Character(inputId, inputName, inputMaxHP, inputCurrentHP) {
  let ID         = inputId;
  let Name       = inputName;
  let MaxHP      = inputMaxHP;
  let CurrentHP  = inputCurrentHP;

  Object.defineProperties(this, {
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
    "getCurrentHP": {
      value: function () {
        return CurrentHP;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getMaxHP": {
      value: function () {
        return MaxHP;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setCurrentHP": {
      value: function (newCurrent) {
        if ((typeof(newCurrent) === "number") && (newCurrent >= 0) && (Number.isInteger(newCurrent))) {
          if (newCurrent <= MaxHP) {
            CurrentHP = newCurrent;
          } else {
            CurrentHP = MaxHP;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setMaxHP": {
      value: function (newMaxHP) {
        if (typeof(newMaxHP) === "number") {
          if ((newMaxHP > 0) && (Number.isInteger(newMaxHP))) {
            MaxHP = newMaxHP;
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

module.exports = Character;
