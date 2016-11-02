"use strict";

let Human = require("./Human");
let Armor = require("./Armor");

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

let w = new Armor(10, 1, "inputDescription", 100, "uno", 2, 3, 4, 5, true, 6, 7, 8, 9, 11);

let x = new NPC(55, "uno", 5, 2, 10, [w], 10, "Faction", 10, 10, true, 5, 1, 10, 10, [{name: "uno"},{name:"dos"}], false, 10);
let y = new Armor(10, 1, "inputDescription", 100, "dos", 2, 3, 4, 5, true, 6, 7, 8, 9, 11);
let z = new Armor(10, 1, "inputDescription", 100, "tres", 2, 3, 4, 5, true, 6, 7, 8, 9, 11);
let a = new NPC(55, "uno", 5, 2, 10, [w], 10, "Faction", 10, 10, true, 5, 1, 10, 10, [{name: "uno"},{name:"dos"}], false, 10);

console.log(x.getID());
console.log(x.getName());
console.log(x.getMaxHP());
console.log(x.getCurrentHP());
x.setMaxHP(3);
x.setCurrentHP(2);
console.log(x.getMaxHP());
console.log(x.getCurrentHP());
console.log("Human");
console.log();
console.log(x.getAgility());
console.log(x.getArmorEquipped());
console.log(x.getCurrentMP());
console.log(x.getFaction());
console.log(x.getGold());
console.log(x.getIntellect());
console.log(x.isItMale());
console.log(x.getMaxMP());
console.log(x.getSpirit());
console.log(x.getStamina());
console.log(x.getStrength());
console.log(x.getWeaponEquipped());
console.log("NPC");
console.log();
console.log(x.isItHostileToPlayer());
console.log(x.getLootDropped());
console.log("Cambios");
console.log();
console.log(x.setAgility(11));
console.log(x.getAgility());

console.log("Agrego");
console.log(x.addArmorEquipped(a));
console.log(x.getArmorEquipped());
console.log("Borro");
console.log(x.removeArmorEquipped("dos"));
console.log("Mostrando");
console.log(x.getArmorEquipped());
console.log("Cambio");
console.log(x.switchArmorEquipped([y,z]));
console.log(x.getArmorEquipped());

console.log(x.setCurrentHP(2));
console.log(x.getCurrentMP());

// console.log(x.getGold());
// console.log(x.set());
// console.log(x.getIntellect());
// console.log(x.set());
// console.log(x.isItMale());
// console.log(x.set());
// console.log(x.getMaxMP());
// console.log(x.set());
// console.log(x.getSpirit());
// console.log(x.set());
// console.log(x.getStamina());
// console.log(x.set());
// console.log(x.getStrength());
// console.log(x.set());
// console.log(x.getWeaponEquipped());
// console.log(x.set());
