"use strict";
let Item=require("./Item");
function Armor(buyPrice, count, description, ID, name, sellPrice, weight, agiBonus, intBonus, isHeavy, physDR, spellDR, spiBonus, staBonus, strBonus){

  Item.call(this, buyPrice, count, description, ID, name, sellPrice, weight);

  Object.defineProperty(this, "getAgiBonus", {
    value: function() {
      return agiBonus;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getIntBonus", {
    value: function() {
      return intBonus;
    },
    enumerable:true
  });

  Object.defineProperty(this, "isItHeavy", {
    value: function() {
      return isHeavy;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getPhysDR", {
    value: function() {
      return physDR;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getSpellDR", {
    value: function() {
      return spellDR;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getSpiBonus", {
    value: function() {
      return spiBonus;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getStaBonus", {
    value: function() {
      return staBonus;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getStrBonus", {
    value: function() {
      return strBonus;
    },
    enumerable:true
  });
}
// let armadura=new Armor(500, 3, "blusa rosa", 1234, "blusa", 550, .20,550, .200, 20,13,true,5,32,11,8,0);
// console.log(armadura.getName());
// console.log(c.getAgiBonus(),c.getIntBonus(),c.isItHeavy(),c.getPhysDR());
// console.log(c.getSpellDR(),c.getSpiBonus(),c.getStaBonus(),c.getStrBonus());
module.exports=Armor;
