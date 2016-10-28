"use strict"

let Human = require("./Human");

function Player( ID, name, maxHP, CurrentHP,
  agility, armorEquipped, currentMP, faction, gold, intellect,
  isMale, maxMP, spirit, stamina, strength, weaponEquipped,
  experience, level, SP ) {

  Human.call( this, ID, name, maxHP, CurrentHP,
    agility, armorEquipped, currentMP, faction, gold, intellect,
    isMale, maxMP, spirit, stamina, strength, weaponEquipped );

  Object.defineProperty( this, "getExperience", {
    value: function() {
      return experience;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getLevel", {
    value: function() {
      return level;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getSP", {
    value: function() {
      return SP;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setExperience", {
    value: function(newValue) {
      if(typeof === "number" && newValue >= 0) {
        experience = newValue;
      }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setLevel", {
    value: function(newValue) {
      if(typeof === "number" && newValue >= 0) {
        level = newValue;
      }
    },
    enumerable: true
  });
  Object.defineProperty( this, "setSP", {
    value: function(newValue) {
      if(typeof === "number" && newValue >= 0) {
        SP = newValue;
      }
    },
    enumerable: true
  });

}

module.exports = Player;
