"use strict";
let Character=require("./Character");
let Armor=require("./Armor");
let Weapon=require("./Weapon");
function Human(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped){

  Character.call(this, ID, name, maxHP, currentHP);

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
    value: function(newArmor) {
      if(newArmor instanceof Armor===true){
        let contador=0;
        if(armorEquipped.length===0){
          armorEquipped[0]=newArmor;
        }
        else{
          armorEquipped.forEach(function(armor) {
            if(armor.getName()===newArmor.getName()){
              contador++;
            }
          })
          if(contador===0){
            armorEquipped[armorEquipped.length]=newArmor;
          }
        }
      }
      return armorEquipped.length;
    },
    enumerable:true
  });

  Object.defineProperty(this, "removeArmorEquipped", {
    value: function(nameArmor) {
        let contador=0, removed;
          for(var i=0;i<armorEquipped.length;i++){
            if(armorEquipped[i].getName()===nameArmor){
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
    value: function(newArmorArray) {
      let old=[];
      for(let i=0;i<armorEquipped.length;i++){
        old[i]=armorEquipped[i];
      }
      let contador=0;
      for(let i=0;i<newArmorArray.length;i++){
        if(newArmorArray[i] instanceof Armor===true){
          contador++;
        }
      }
      if(contador===newArmorArray.length){
        armorEquipped.length=newArmorArray.length;
        for(let i=0;i<newArmorArray.length;i++){
          armorEquipped[i]=newArmorArray[i];
        }
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
      if(newWeapon instanceof Weapon===true){
        let contador=0;
        if(weaponEquipped.length===0){
          weaponEquipped[0]=newWeapon;
        }
        else{
          weaponEquipped.forEach(function(weapon) {
            if(weapon.getName()===newWeapon.getName()){
              contador++;
            }
          })
          if(contador===0){
            weaponEquipped[weaponEquipped.length]=newWeapon;
          }
        }
      }
      return weaponEquipped.length;
    },
    enumerable:true
  });

  Object.defineProperty(this, "removeWeaponEquipped", {
    value: function(nameWeapon) {
        let contador=0, removed;
          for(var i=0;i<weaponEquipped.length;i++){
            if(weaponEquipped[i].getName()===nameWeapon){
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
    value: function(newWeaponArray) {
      let old=[];
      for(let i=0;i<weaponEquipped.length;i++){
        old[i]=weaponEquipped[i];
      }
      let contador=0;
      for(let i=0;i<newWeaponArray.length;i++){
        if(newWeaponArray[i] instanceof Weapon===true){
          contador++;
        }
      }
      if(contador===newWeaponArray.length){
        weaponEquipped.length=newWeaponArray.length;
        for(let i=0;i<newWeaponArray.length;i++){
          weaponEquipped[i]=newWeaponArray[i];
        }
      }
      return old;
    },
    enumerable:true
  });
}
// let armadura=new Armor(500, 3, "blusa rosa", 1234, "tank top", 550, .200, 20,13,true,5,32,11,8,0);
// let armadura2=new Armor(500, 3, "blusa azul", 1234, "blue tank top", 550, .200, 20,13,true,5,32,11,8,0);
// // let armadura3=new Armor(500, 3, "pantalon", 1234, "mezclilla", 550, .200, 20,13,true,5,32,11,8,0);
// // let arma1=new Weapon(500, 3, "yellow gun", 1234, "pistola amarilla", 550, .200, true, 500, 60, 35);
// // let arma2=new Weapon(500, 3, "pink gun", 1234, "pistola rosa", 550, .200, true, 500, 60, 35);
// // let arma3=new Weapon(500, 3, "red gun", 1234, "pistola roja", 550, .200, true, 500, 60, 35);
// // // console.log(armadura.getName());
// let c=new Human(121212,"Will",600,200,132, [armadura2], 45, "nose", 5, 200, true, 1000, 40, 100, 10,[]);
// // // console.log(c.switchWeaponEquipped([arma2]));
// console.log(c.switchArmorEquipped([armadura,2]));
// console.log(c.getAgility(),c.getWeaponEquipped());
// console.log(c.addArmorEquipped());
// console.log(c.addArmorEquipped({name:"hola",edad:12}));
// console.log(c.addArmorEquipped(armadura2));
// console.log(c.getWeaponEquipped());
// console.log(c.removeWeaponEquipped("pistola amarilla"));
// console.log(c.getWeaponEquipped());
// console.log(c.switchWeaponEquipped([arma1,arma2]));
// console.log(c.getWeaponEquipped());
// console.log(c.getSpirit(),c.getFaction(),c.isItMale(),c.getStamina());
module.exports=Human;
