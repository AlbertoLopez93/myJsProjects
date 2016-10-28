"use strict";
let Item=require("./Item");
function Potion(buyPrice, count, description, ID, name, sellPrice, weight, hpRestore, mpRestore){

  Item.call(this, buyPrice, count, description, ID, name, sellPrice, weight);

  Object.defineProperty(this, "getHPRestore", {
    value: function() {
      return hpRestore;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getMPRestore", {
    value: function() {
      return mpRestore;
    },
    enumerable:true
  });
}
// var c=new Potion(500, 3, "perfume freesia", 1234, "Zara", 550, .200, 300, 500);
// console.log(c.getHPRestore());
// console.log(c.getMPRestore());
// console.log(c.getDescription());

module.exports=Potion;
