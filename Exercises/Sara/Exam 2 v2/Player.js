"use strict";
let Human=require("./Human");
function Player(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped){

  Human.call(this, ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped);
  let experience=0, level=1, SP=0;

  Object.defineProperty(this, "getExperience", {
    value: function() {
      return experience;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setExperience", {
    value: function(newExperience) {
      if(typeof newExperience==="number" && newExperience%1===0){
        if(newExperience>0){
          experience=newExperience;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getLevel", {
    value: function() {
      return level;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setLevel", {
    value: function(newLevel) {
      if(typeof newLevel==="number" && newLevel%1===0){
        if(newLevel>0){
          level=newLevel;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getSP", {
    value: function() {
      return SP;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setSP", {
    value: function(newSP) {
      if(typeof newSP==="number" && newSP%1===0){
        if(newSP>0){
          SP=newSP;
        }
      }
      return this;
    },
    enumerable:true
  });
}
// let c=new Player(121212,"Will", 600, 200,132, [{name:"pistola"}], 45, "nose", 5, 200, true, 1000, 40, 100, 10,[{name:"knife"},{name:"map"}]);
// console.log(c.setSP(4));
// console.log(c.getSP());
module.exports=Player;
