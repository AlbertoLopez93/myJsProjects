"use strict";
function Item(buyPrice, count, description, ID, name, sellPrice, weight){

  Object.defineProperty(this, "getBuyPrice", {
    value: function() {
      return buyPrice;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getCount", {
    value: function() {
      return count;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setCount", {
    value: function(newCount) {
      if(typeof newCount==="number" && newCount%1===0){
        if(newCount>0){
          count=newCount;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getDescription", {
    value: function() {
      return description;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getID", {
    value: function() {
      return ID;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getName", {
    value: function() {
      return name;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getSellPrice", {
    value: function() {
      return sellPrice;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getWeight", {
    value: function() {
      return weight;
    },
    enumerable:true
  });
}
let c=new Item(500, 3, "blusa rosa", 1234, "blusa", 550, .200);
// console.log(c.getBuyPrice(),c.getCount(),c.getDescription());
// console.log(c.getID(),c.getName(),c.getSellPrice(),c.getWeight());
module.exports=Item;
