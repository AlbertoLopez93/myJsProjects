"use strict"

let Item = require("./Item");

function Weapon( buyPrice, count, description, ID, name, sellPrice, weight,
  enchanted, is_OneHanded, upgraded, maxDmg, minDmg, strReq ) {

  Item.call( this, buyPrice, count, description, ID, name, sellPrice, weight )

  Object.defineProperty( this, "isEnchanted", {
    value: function(value) { // get and set
      if(enchanted === true) { //it's imposible disenchante
        return true;
      }
      else if(value !== undefined) { enchanted = value; }
      return enchanted;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "isOneHanded", {
    value: function(value) { // get and set
      if(value !== undefined) { is_OneHanded = value; }
      return is_OneHanded;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "isUpgraded", {
    value: function(value) { // get and set
      if(value !== undefined) { upgraded = value; }
      return upgraded;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "getMaxDmg", {
    value: function() {
      return maxDmg;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "getMinDmg", {
    value: function() {
      return minDmg;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "getStrReq", {
    value: function() {
      return strReq;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "setMaxDmg", {
    value: function(newValue) {
      if(newValue < minDmg) {
        console.log("Max has to be greater or equal than min");
        return;
      }
      maxDmg = newValue;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "setMinDmg", {
    value: function(newValue) {
      if(newValue > maxDmg) {
        console.log("Min has to be less or equal than max");
        return;
      }
      minDmg = newValue;
    },
    enumerable: true,
  });
  Object.defineProperty( this, "setStrReq", {
    value: function(newValue) {
      strReq = newValue;
    },
    enumerable: true,
  });

}

module.exports = Weapon;
