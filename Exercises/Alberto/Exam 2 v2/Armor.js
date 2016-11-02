"use strict"

let Item = require("./Item");

function Armor( buyPrice, count, description, ID, name, sellPrice, weight,
  agiBonus, intBonus, isHeavy, physDR, spellDR, spiBonus, staBonus, strBonus ) {

  Item.call( this, buyPrice, count, description, ID, name, sellPrice, weight )

  Object.defineProperty( this, "getAgiBonus", {
    value: function() {
      return agiBonus;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getIntBonus", {
    value: function() {
      return intBonus;
    },
    enumerable: true
  });
  Object.defineProperty( this, "isItHeavy", {
    value: function() {
      return isHeavy;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getPhysDR", {
    value: function() {
      return physDR;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getSpellDR", {
    value: function() {
      return spellDR;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getSpiBonus", {
    value: function() {
      return spiBonus;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getStaBonus", {
    value: function() {
      return staBonus;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getStrBonus", {
    value: function() {
      return strBonus;
    },
    enumerable: true
  });

}

module.exports = Armor;
