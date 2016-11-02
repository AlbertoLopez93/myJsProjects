"use strict";
let Item=require("./Item");
function Weapon(buyPrice, count, description, ID, name, sellPrice, weight, isOneHanded, maxDmg, minDmg, strReq){
  let isEnchanted=false, isUpgraded=false;

  Item.call(this, buyPrice, count, description, ID, name, sellPrice, weight);

  Object.defineProperty(this, "isItEnchanted", {
    value: function() {
      return isEnchanted;
    },
    enumerable:true
  });

  Object.defineProperty(this, "isItOneHanded", {
    value: function() {
      return isOneHanded;
    },
    enumerable:true
  });

  Object.defineProperty(this, "isItUpgraded", {
    value: function() {
      return isUpgraded;
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

  Object.defineProperty(this, "getStrReq", {
    value: function() {
      return strReq;
    },
    enumerable:true
  });

  Object.defineProperty(this, "enchant", {
    value: function() {
      isEnchanted=true;
    },
    enumerable:true
  });

  Object.defineProperty(this, "upgrade", {
    value: function() {
      isUpgraded=true;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setMaxDmg", {
    value: function(newMaxDmg) {
      if(typeof newMaxDmg==="number" && newMaxDmg%1===0){
        if(newMaxDmg>0 && newMaxDmg>this.getMinDmg()){
          maxDmg=newMaxDmg;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setMinDmg", {
    value: function(newMinDmg) {
      if(typeof newMinDmg==="number" && newMinDmg%1===0){
        if(newMinDmg>=0 && newMinDmg<this.getMaxDmg()){
          minDmg=newMinDmg;
        }
        if(newMinDmg<0){
          minDmg=0;
        }
      }
      return this;
    },
    enumerable:true
  });

}
// let c=new Weapon(500, 3, "blusa rosa", 1234, "blusa", 550, .200, true, 500, 60, 35);
// console.log(c.getName());
// console.log(c.isItEnchanted(),c.isItOneHanded(),c.isItUpgraded());
// console.log(c.getMaxDmg(),c.getMinDmg(),c.getStrReq());
// c.enchant();
// c.upgrade();
// console.log(c.setMaxDmg(61));
// console.log(c.getMaxDmg(),c.getMinDmg(),c.getStrReq());
// console.log(c.isItEnchanted(),c.isItOneHanded(),c.isItUpgraded());
module.exports=Weapon;
