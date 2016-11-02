"use strict";
let Human=require("./Human");
let Animal=require("./Animal");
function NPC(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped, hostileToPlayer,lootDropped){

  Human.call(this, ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped);

  Object.defineProperty(this, "isItHostileToPlayer", {
    value: function() {
      return hostileToPlayer;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getLootDropped", {
    value: function() {
      return lootDropped;
    },
    enumerable:true
  });
}
// let c=new NPC(121212,"Will", 600, 200,132, [{name:"pistola"}], 45, "nose", 5, 200, true, 1000, 40, 100, 10,[{name:"knife"},{name:"map"}],true,1000);
// console.log(c.isItHostileToPlayer(),c.getLootDropped());
// console.log(c.getName(),c.getAgility());
module.exports=NPC;
