"use strict"

let Human = require("./Human");

function NPC( ID, name, maxHP, CurrentHP,
  agility, armorEquipped, currentMP, faction, gold, intellect,
  isMale, maxMP, spirit, stamina, strength, weaponEquipped,
  hostileToPlayer, lootDropped ) {

  if(!hostileToPlayer) {
    hostileToPlayer = false;
  }
  else {
    hostileToPlayer = true;
  }

  Human.call( this, ID, name, maxHP, CurrentHP,
    agility, armorEquipped, currentMP, faction, gold, intellect,
    isMale, maxMP, spirit, stamina, strength, weaponEquipped );

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

}

module.exports = NPC;
