"use strict";
let Human=require("./Human");
let Animal=require("./Animal");
function NPC(hostileToPlayer,lootDropped){
  Human.call(this);

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

let c=new NPC(true,1000);
console.log(c.isItHostileToPlayer(),c.getLootDropped());
module.exports=NPC;
