"use strict";
let Character=require("./Character");
function Animal(ID, name, maxHP, currentHP, hostileToPlayer, lootDropped, maxDmg, minDmg){

  Character.call(this, ID, name, maxHP, currentHP);

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

  Object.defineProperty(this, "getMaxDmg", {
    value: function() {
      return maxDmg;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getMinDmg", {
    value: function() {
      return minDmg;
    },
    enumerable:true
  });
}
// let c=new Animal(121212,"Will",600,200,true, 3, 500, 50);
// console.log(c.getID());
// console.log(c.isItHostileToPlayer(),c.getLootDropped(),c.getMaxDmg(),c.getMinDmg());
module.exports=Animal;
