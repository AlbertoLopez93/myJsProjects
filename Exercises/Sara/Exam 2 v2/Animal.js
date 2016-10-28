"use strict";
let Character=require("./Character");
function Animal(hostileToPlayer, lootDropped, maxDmg, minDmg){
  Character.call(this);

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
// let c=new Animal(true, 3, 500, 50);
// console.log(c.isItHostileToPlayer(),c.getLootDropped(),c.getMaxDmg(),c.getMinDmg());
module.exports=Animal;
