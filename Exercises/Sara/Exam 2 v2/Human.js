"use strict";
let Character=require("./Character");
function Human(agility, armorEquipped, currentMP, faction, gold, intellect:int, isMale, maxMP, spirit, stamina, strength,
              weaponEquipped:Array)
{
  Character.call(this);

  Object.defineProperty(this, "getAgility", {
    value: function() {
      return agility;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getArmorEquipped", {
    value: function() {
      return armorEquipped;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setAgility", {
    value: function(newAgility) {
      if(typeof newAgility==="number" && newMaxHP%1===0){
        if(newAgility>0){
          maxHP=newMaxHP;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "addArmorEquipped", {
    value: function(newItem) {
      armorEquipped[length]=newItem;
      }
      return armorEquipped.length;
    },
    enumerable:true
  });

// removeArmorEquipped(name:string):Armor  Receives the name of the Armor item you wan

}
module.exports=Human;
