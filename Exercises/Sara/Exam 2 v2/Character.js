"use strict";
function Character(ID, name, maxHP, currentHP){

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

  Object.defineProperty(this, "getCurrentHP", {
    value: function() {
      return currentHP;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getMaxHP", {
    value: function() {
      return maxHP;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setCurrentHP", {
    value: function(newCurrentHP) {
      if(typeof newCurrentHP==="number" && newCurrentHP%1===0){
        if(newCurrentHP<this.getMaxHP()){
          currentHP=newCurrentHP;
        }
        else{
          currentHP=this.getMaxHP();
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setMaxHP", {
    value: function(newMaxHP) {
      if(typeof newMaxHP==="number" && newMaxHP%1===0){
        if(newMaxHP>0){
          maxHP=newMaxHP;
        }
      }
      return this;
    },
    enumerable:true
  });
}

// let c=new Character(121212,"Will",600,200);
// console.log(c.getID(),c.getName(),c.getMaxHP(),c.getCurrentHP());
// console.log(c.setMaxHP(1));
// console.log(c.getID(),c.getName(),c.getMaxHP(),c.getCurrentHP());
// console.log(c.setCurrentHP(2.5));
// console.log(c.getID(),c.getName(),c.getMaxHP(),c.getCurrentHP());

module.exports=Character;
