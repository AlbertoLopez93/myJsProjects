"use strict";
var Human=require("./Human.js");
var Pokemon=require("./Pokemon.js");

function Trainer(){
  let badges=[],pokemons=[];
  let pokeballs={["Poke Ball"]:5,["Great Ball"]:0,["Ultra Ball"]:0,["Master Ball"]:0,["Safari Ball"]:0};
  let items=[{name:"Pokedex",unique:true}];

  Human.call(this);

  Object.defineProperty(this,'type',{
    value:"trainer",
    enumerable:true,
    writable:true
  });

  Object.defineProperty(this, "addBadge", {
    value: function(newBadge) {
      let contador=0;
      if(badges.length===0){
        badges[0]=newBadge;
        return true;
      }
      else{
        badges.forEach(function(badge) {
          if(badge===newBadge){
            contador++;
          }
        })
      }
      if(contador===0){
        badges[badges.length]=newBadge;
        return true;
      }
      else{
        console.log("You already have this badge");
        return false;
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "removeBadge", {
    value: function(nameBadge) {
      let contador=0;
      for(var i=0;i<badges.length;i++){
        if(badges[i]===nameBadge){
          contador++;
          for(var k=i;k<badges.length;k++){
            badges[k]=badges[k+1];
          }
        }
      }
      if(contador===1){
        badges.length=badges.length-1;
        console.log("Sorry to hear that");
        return true;
      }
      else{
        console.log("You don't have that badge");
        return false;
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "getBadges", {
    value: function() {
      return badges;
    },
    enumerable: true
  });

  Object.defineProperty(this, "addPokemon", {
    value: function(newPokemon) {
        pokemons[pokemons.length]=newPokemon;
        return pokemons.length;
    },
    enumerable: true
  });

  Object.defineProperty(this, "removePokemon", {
    value: function(namePokemon) {
      let contador=0,removed;
      for(var i=0;i<pokemons.length;i++){
        if(pokemons[i].getName()===namePokemon){
          contador++;
          removed=pokemons[i];
          for(var k=i;k<pokemons.length;k++){
            pokemons[k]=pokemons[k+1];
          }
          i=pokemons.length;
        }
      }
      if(contador===1){
        pokemons.length=pokemons.length-1;
        return removed;
      }
      else{
        console.log("You don't have that pokemon yet");
        return false;
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "getPokemons", {
    value: function() {
      return pokemons;
    },
    enumerable: true
  });

  Object.defineProperty(this, "addPokeball", {
    value: function(typePokeball, qty) {
      pokeballs[typePokeball]=pokeballs[typePokeball]+qty;
    },
    enumerable: true
  });

  Object.defineProperty(this, "removePokeball", {
    value: function(typePokeball) {
      let pokeballTypes=Object.keys(pokeballs);
      let contador=0;
      for(let i=0;i<pokeballTypes.length;i++){
         if(pokeballTypes[i]===typePokeball){
           contador++;
          pokeballs[typePokeball]=pokeballs[typePokeball]-1;
          return true;
         }
       }
         if(contador===0){
          console.log("Sorry you no longer have that type of pokeball");
          return false;
        }
     },
    enumerable: true
  });

  Object.defineProperty(this, "getPokeballs", {
    value: function(typePokeball) {
      if(typePokeball===undefined){
        return pokeballs;
      }
      else{
        return pokeballs[typePokeball];
      }
    },
    enumerable: true
  });

  Object.defineProperty(this, "addItem", {
    value: function(newItem) {
      items[items.length]=newItem;
    },
    enumerable: true
  });

  Object.defineProperty(this, "removeItem", {
    value: function(nameItem) {
        let contador=0;
        for(var i=0;i<items.length;i++){
          if(items[i].name===nameItem){
            contador++;
            for(var k=i;k<items.length;k++){
              items[k]=items[k+1];
            }
          }
        }
        if(contador===1){
          items.length=items.length-1;
          return true;
        }
        else{
          console.log("You don't have that item");
          return false;
        }
    },
    enumerable: true
  });

  Object.defineProperty(this, "getItems", {
    value: function() {
      return items;
    },
    enumerable: true
  });
}

module.exports=Trainer;
