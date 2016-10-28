"use strict"

let Character = require("./Character");

function Human( ID, name, maxHP, CurrentHP,
  agility, armorEquipped, currentMP, faction, gold, intellect,
  isMale, maxMP, spirit, stamina, strength, weaponEquipped ) {

  Character.call( this, ID, name, maxHP, CurrentHP );

  Object.defineProperty( this, "getAgility", {
    value: function() {
      return agility;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setAgility", {
    value: function(newValue) {
      if(typeof newValue !== "number" || newValue < 0) {
        return this;
      }
      agility = newValue;
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getArmorEquipped", {
    value: function() {
      return armorEquipped;
    },
    enumerable: true
  });
  Object.defineProperty( this, "addArmorEquipped", {
    value: function(item) {
      armorEquipped.push(item);
      return armorEquipped.length;
    },
    enumerable: true
  });
  Object.defineProperty( this, "removeArmorEquipped", {
    value: function(nameArmor) {
      for(let k=0; k<armorEquipped.length; k++) {
        if(armorEquipped[k].name === nameArmor) {
          return armorEquipped.splice(k,1);
        }
      }
      return false;
    },
    enumerable: true
  });
  Object.defineProperty( this, "switchArmorEquipped", {
    value: function(newArmor) {
      let old = armorEquipped;
      armorEquipped = newArmor;
      return old;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getCurrentMP", {
    value: function() {
      return currentMP
    },
    enumerable: true
  });
  Object.defineProperty( this, "setCurrentMP", {
    value: function(newValue) {
      if(typeof newValue !== "number") { return this; }
      if(newValue > maxMP) { currentMP = maxMP; }
      else { currentMP = newValue; }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getFaction", {
    value: function() {
      return faction;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getGold", {
    value: function() {
      return gold;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setGold", {
    value: function(newValue) {
      if(typeof newValue === "number" && newValue >= 0 && newValue <= 999999999 ) {
        gold = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getIntellect", {
    value: function(newValue) {
      return intellect;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setIntellect", {
    value: function(newValue) {
      if(typeof newValue === "number" && newValue >= 0 ) {
        intellect = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "isItMale", {
    value: function() {
      return isMale;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getMaxMP", {
    value: function() {
      return maxMP;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setMaxMP", {
    value: function(newValue) {
      if( typeof newValue === "number" && newValue > 0 ) {
        maxMP = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getSpirit", {
    value: function() {
      return spirit;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setSpirit", {
    value: function(newValue) {
      if( typeof newValue === "number" && newValue >= 0 ) {
        spirit = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getStamina", {
    value: function() {
      return stamina;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setStamina", {
    value: function(newValue) {
      if( typeof newValue === "number" && newValue >= 0 ) {
        stamina = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getStrength", {
    value: function() {
      return strength;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setStrength", {
    value: function(newValue) {
      if( typeof newValue === "number" && newValue >= 0 ) {
        strength = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getWeaponEquipped", {
    value: function() {
      return weaponEquipped;
    },
    enumerable: true
  });
  Object.defineProperty( this, "addWeaponEquipped", {
    value: function(item) {
      weaponEquipped.push(item);
      return weaponEquipped.length;
    },
    enumerable: true
  });
  Object.defineProperty( this, "removeWeaponEquipped", {
    value: function(nameWeapon) {
      for(let k=0; k<weaponEquipped.length; k++) {
        if(weaponEquipped[k].name === nameWeapon) {
          return weaponEquipped.splice(k,1);
        }
      }
      return false;
    },
    enumerable: true
  });
  Object.defineProperty( this, "switchWeaponEquipped", {
    value: function(newWeapon) {
      let old = weaponEquipped;
      weaponEquipped = newWeapon;
      return old;
    },
    enumerable: true
  });

}

module.exports = Human;
