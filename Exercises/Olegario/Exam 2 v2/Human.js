"use strict";

let Character = require("./Character");

function Human(inputId, inputName, inputMaxHP, inputCurrentHP, inputAgility, inputArmorEquipped, inputCurrentMP, inputFaction, inputGold, inputIntellect, inputIsMale, inputMaxMP, inputSpirit, inputStamina, inputStrength,inputWeaponEquipped){
  Character.call(this, inputId, inputName, inputMaxHP, inputCurrentHP);

  let Agility = inputAgility;
  let ArmorEquipped = inputArmorEquipped;
  let CurrentMP = inputCurrentMP;
  let Faction = inputFaction;
  let Gold = inputGold;
  let Intellect = inputIntellect;
  let IsMale = inputIsMale;
  let MaxMP = inputMaxMP;
  let Spirit = inputSpirit;
  let Stamina = inputStamina;
  let Strength = inputStrength;
  let WeaponEquipped = inputWeaponEquipped;

  Object.defineProperties(this, {
    "getAgility": {
      value: function () {
        return Agility;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setAgility": {
      value: function (newAgility) {
        if (typeof(newAgility) === "number") {
          if (newAgility >= 0) {
            Agility = newAgility;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getArmorEquipped": {
      value: function () {
        return ArmorEquipped;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "addArmorEquipped": {
      value: function (newArmor) {
        if (typeof(newArmor) === "object") {
          ArmorEquipped.push(newArmor);
        }
        return ArmorEquipped.length;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "removeArmorEquipped": {
      value: function (name) {
        let aux;
        let position = ArmorEquipped.findIndex(function(element,index) {
          if (element.name === name) {
            return index;
          }
        });

        if (position > -1) {
          aux = ArmorEquipped[position];
          ArmorEquipped.splice(position, 1);
          return aux;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "switchArmorEquipped": {
      value: function (newArmorEquipped) {
        let aux = [];
        if (Array.isArray(newArmorEquipped)) {
          for (let i = 0; i < ArmorEquipped.length; i++) {
            aux.push(ArmorEquipped[i]);
          }
          ArmorEquipped = newArmorEquipped;
          return aux;
        }
        return ArmorEquipped;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getCurrentMP": {
      value: function () {
        return CurrentMP;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setCurrentMP": {
      value: function (newCurrent) {
        if ((typeof(newCurrent) === "number") && (newCurrent >= 0)) {
          if (newCurrent <= MaxMP) {
            CurrentMP = newCurrent;
          } else {
            CurrentMP = MaxMP;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getFaction": {
      value: function () {
        return Faction;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getGold": {
      value: function () {
        return Gold;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setGold": {
      value: function (newGold) {
        if (typeof(newGold) === "number") {
          if ((newGold >= 0) && (newGold <= 999999999)) {
            Gold = newGold;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getIntellect": {
      value: function () {
        return Intellect;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setIntellect": {
      value: function (newIntellect) {
        if (typeof(newIntellect) === "number") {
          if (newIntellect >= 0) {
            Intellect = newIntellect;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "isItMale": {
      value: function () {
        if (IsMale) {
          return true;
        }
        else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getMaxMP": {
      value: function () {
        return MaxMP;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setMaxMP": {
      value: function (newMaxMP) {
        if (typeof(newMaxMP) === "number") {
          if (newMaxMP > 0) {
            MaxMP = newMaxMP;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getSpirit": {
      value: function () {
        return Spirit;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setSpirit": {
      value: function (newSpirit) {
        if (typeof(newSpirit) === "number") {
          if (newSpirit >= 0) {
            Spirit = newSpirit;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getStamina": {
      value: function () {
        return Stamina;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setStamina": {
      value: function (newStamina) {
        if (typeof(newStamina) === "number") {
          if (newStamina >= 0) {
            Stamina = newStamina;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getStrength": {
      value: function () {
        return Strength;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "setStrength": {
      value: function (newStrength) {
        if (typeof(newStrength) === "number") {
          if (newStrength >= 0) {
            Strength = newStrength;
          }
        }
        return this;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getWeaponEquipped": {
      value: function () {
        return WeaponEquipped;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "addWeaponEquipped": {
      value: function (item) {
        if (typeof(item) === "object") {
          WeaponEquipped.push(item);
        }
        return WeaponEquipped.length;
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "removeWeaponEquipped": {
      value: function (name) {
        let aux;
        let position = WeaponEquipped.findIndex(function(element,index) {
          if (element.name === name) {
            return index;
          }
        });

        if (position > -1) {
          aux = WeaponEquipped[position];
          WeaponEquipped.splice(position, 1);
          return aux;
        } else {
          return false;
        }
      }
    },
    "switchWeaponEquipped": {
      value: function (newWeaponEquipped) {
        let aux = [];
        if (Array.isArray(newWeaponEquipped)) {
          for (let i = 0; i < WeaponEquipped.length; i++) {
            aux.push(WeaponEquipped[i]);
          }
          WeaponEquipped = newWeaponEquipped;
          return aux;
        }

        return WeaponEquipped;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
}

Human.prototype = Object.create(Character.prototype);
Object.defineProperty(Human.prototype, "constructor" , {
  value: Human,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = Human;
