"use strict";
let Character=require("./Character");
function Human(agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped)
{
  Character.call(this);

  Object.defineProperty(this, "getAgility", {
    value: function() {
      return agility;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getArmorEquipped", {
    value: function() {
      return armorEquipped;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setAgility", {
    value: function(newAgility) {
      if(typeof newAgility==="number" && newAgility%1===0){
        if(newAgility>0){
          agility=newAgility;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "addArmorEquipped", {
    value: function(newItem) {
      armorEquipped[armorEquipped.length]=newItem;
      return armorEquipped.length;
    },
    enumerable:true
  });

  Object.defineProperty(this, "removeArmorEquipped", {
    value: function(nameArmor) {
        let contador=0, removed;
        for(var i=0;i<armorEquipped.length;i++){
          if(armorEquipped[i].name===nameArmor){
            contador++;
            removed=armorEquipped[i];
            for(var k=i;k<armorEquipped.length-1;k++){
              armorEquipped[k]=armorEquipped[k+1];
            }
          }
        }
        if(contador===1){
          armorEquipped.length=armorEquipped.length-1;
          return removed;
        }
        else{
          return false;
        }
    },
    enumerable: true
  });

  Object.defineProperty(this, "switchArmorEquipped", {
    value: function(newArmorEquipped) {
      let old;
      old=armorEquipped;
      armorEquipped.length=newArmorEquipped.length;
      for(let i=0;i<newArmorEquipped.length;i++){
        armorEquipped[i]=newArmorEquipped[i];
      }
      return old;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getCurrentMP", {
    value: function() {
      return currentMP;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setCurrentMP", {
    value: function(newMaxMP) {
      if(typeof newMaxMP==="number" && newMaxMP%1===0){
        if(newMaxMP<this.getMaxMp()){
          currentMP=newMaxMP;
        }
        else{
          currentMP=this.getMaxMp();
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getFaction", {
    value: function() {
      return faction;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getGold", {
    value: function() {
      return gold;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setGold", {
    value: function(newGold) {
      if(typeof newGold==="number" && newGold%1===0){
        if(newGold>=0 && newGold<=999999999){
          gold=newGold;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getIntellect", {
    value: function() {
      return intellect;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setIntellect", {
    value: function(newIntellect) {
      if(typeof newIntellect==="number" && newIntellect%1===0){
        if(newIntellect>=0){
          gold=newIntellect;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "isItMale", {
    value: function() {
      return isMale;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getMaxMP", {
    value: function() {
      return maxMP;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setMaxMP", {
    value: function(newMaxMP) {
      if(typeof newMaxMP==="number" && newMaxMP%1===0){
        if(newMaxMP>0){
          maxMP=newMaxMP;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getSpirit", {
    value: function() {
      return spirit;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setSpirit", {
    value: function(newSpirit) {
      if(typeof newSpirit==="number" && newSpirit%1===0){
        if(newSpirit>0){
          spirit=newSpirit;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getStamina", {
    value: function() {
      return stamina;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setStamina", {
    value: function(newStamina) {
      if(typeof newStamina==="number" && newStamina%1===0){
        if(newStamina>0){
          stamina=newStamina;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getStrength", {
    value: function() {
      return strength;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setStrength", {
    value: function(newStrength) {
      if(typeof newStrength==="number" && newStrength%1===0){
        if(newStrength>0){
          strength=newStrength;
        }
      }
      return this;
    },
    enumerable:true
  });

  Object.defineProperty(this, "getWeaponEquipped", {
    value: function() {
      return weaponEquipped;
    },
    enumerable:true
  });

  Object.defineProperty(this, "addWeaponEquipped", {
    value: function(newWeapon) {
      weaponEquipped[weaponEquipped.length]=newWeapon;
      return weaponEquipped.length;
    },
    enumerable:true
  });

  Object.defineProperty(this, "removeWeaponEquipped", {
    value: function(nameWeapon) {
        let contador=0, removed;
        for(var i=0;i<weaponEquipped.length;i++){
          if(weaponEquipped[i].name===nameWeapon){
            contador++;
            removed=weaponEquipped[i];
            for(var k=i;k<weaponEquipped.length-1;k++){
              weaponEquipped[k]=weaponEquipped[k+1];
            }
          }
        }
        if(contador===1){
          weaponEquipped.length=weaponEquipped.length-1;
          return removed;
        }
        else{
          return false;
        }
    },
    enumerable: true
  });

  Object.defineProperty(this, "switchWeaponEquipped", {
    value: function(newWeaponEquipped) {
      let old;
      old=weaponEquipped;
      weaponEquipped.length=newWeaponEquipped.length;
      for(let i=0;i<newWeaponEquipped.length;i++){
        weaponEquipped[i]=newWeaponEquipped[i];
      }
      return old;
    },
    enumerable:true
  });
}
// let c=new Human(132, [{name:"rojo",material:"metal"},{name:"orange",material:"estambre"},{name:"blue",material:"estambre"}], 45, "nose", 5, 200, true, 1000, 40, 100, 10,[{name:"knife"},{name:"map"}]);
// // console.log(c.getAgility(),c.getWeaponEquipped());
// c.addWeaponEquipped({name:"sweater"});
// console.log(c.getWeaponEquipped());
// console.log(c.removeArmorEquipped("rojo"));
// c.switchArmorEquipped([{name:"purple",material:"metal"},{name:"black",material:"estambre"},{name:"black",material:"estambre"},{name:"black",material:"estambre"},{name:"black",material:"estambre"}]);
// console.log(c.getArmorEquipped());
module.exports=Human;
