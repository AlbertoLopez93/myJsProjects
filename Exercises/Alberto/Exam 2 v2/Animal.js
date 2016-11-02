"use strict"

let Character = require("./Character");

function Animal( ID, name, maxHP, CurrentHP, hostileToPlayer, lootDropped, maxDmg, minDmg ) {
  if(!hostileToPlayer) {
    hostileToPlayer = false;
  }
  else {
    hostileToPlayer = true;
  }
  
  Character.call( this, ID, name, maxHP, CurrentHP );

  Object.defineProperty( this, "isItHostileToPlayer", {
    value: function() {
      return hostileToPlayer;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getLootDropped", {
    value: function() {
      return lootDropped;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getMaxDmg", {
    value: function() {
      return maxDmg;
    },
    enumerable: true
  });
  Object.defineProperty( this, "getMinDmg", {
    value: function() {
      return minDmg;
    },
    enumerable: true
  });

}

module.exports = Animal;
