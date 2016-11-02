"use strict"

function Item( buyPrice, count, description, ID, name, sellPrice, weight ) {
  Object.defineProperty( this, "getBuyPrice", {
    value: function() {
      return buyPrice;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getCount", {
    value: function() {
      return count;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getDescription", {
    value: function() {
      return description;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getID", {
    value: function() {
      return ID;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getName", {
    value: function() {
      return name;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getSellPrice", {
    value: function() {
      return sellPrice;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getWeight", {
    value: function() {
      return weight;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setCount", {
    value: function(newValue) {
      if(typeof newValue === "number" && newValue >=0 ) {
        count = newValue;
      }
    },
    enumerable: true
  });
  
}

module.exports = Item;
