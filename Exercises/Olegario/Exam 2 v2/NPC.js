"use strict";

let Human = require("./Human");

function NPC(inputId, inputName, inputMaxHP, inputCurrentHP, inputAgility, inputArmorEquipped, inputCurrentMP, inputFaction, inputGold, inputIntellect, inputIsMale, inputMaxMP, inputSpirit, inputStamina, inputStrength,inputWeaponEquipped, inputHostileToPlayer, inputLootDropped){
  Human.call(this, inputId, inputName, inputMaxHP, inputCurrentHP, inputAgility, inputArmorEquipped, inputCurrentMP, inputFaction, inputGold, inputIntellect, inputIsMale, inputMaxMP, inputSpirit, inputStamina, inputStrength,inputWeaponEquipped);

  let HostileToPlayer = inputHostileToPlayer;
  let LootDropped     = inputLootDropped;


  Object.defineProperties(this, {
    "isItHostileToPlayer": {
      value: function () {
        if (HostileToPlayer) {
          return true;
        } else {
          return false;
        }
      },
      writable: false,
      enumerable: true,
      configurable: false
    },
    "getLootDropped": {
      value: function () {
        return LootDropped;
      },
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
}

NPC.prototype = Object.create(Human.prototype);
Object.defineProperty(NPC.prototype, "constructor" , {
  value: NPC,
  configurable : false,
  enumerable: false,
  writable : false
});

module.exports = NPC;
