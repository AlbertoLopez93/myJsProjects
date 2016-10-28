"use strict"

function Character( ID, name, maxHP, CurrentHP ) {
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
  Object.defineProperty( this, "getCurrentHP", {
    value: function() {
      return CurrentHP;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setCurrentHP", {
    value: function(newHP) {
      if(typeof newHP !== "number") { return this; }
      if(newHP > maxHP) { CurrentHP = maxHP; }
      else { CurrentHP = newHP; }
      return this;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getMaxHP", {
    value: function() {
      return maxHP;
    },
    enumerable: true
  });
  Object.defineProperty( this, "setMaxHP", {
    value: function(newMax) {
      if(typeof newMax != "number" || newMax <= 0) {
        return this;
      }
      maxHP = newMax;
      return this;
    },
    enumerable: true
  });

}

module.exports = Character;
