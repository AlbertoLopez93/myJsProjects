"use strict";

function Character (characterID, characterName, characterMaxHP, characterCurrentHP) {
    let ID = characterID;
    let name = characterName;
    let maxHP = characterMaxHP;
    let currentHP = characterCurrentHP;

    Object.defineProperty(this, "getID", {
        value: function getID (){
            return ID;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getName", {
        value: function getName (){
            return name;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getCurrentHP", {
        value: function getCurrentHP () {
            return currentHP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setCurrentHP", {
        value: function setCurrentHP (newHP){
            if((typeof newHP === "number" || newHP instanceof Number)){
                if(newHP <= maxHP){
                    currentHP = newHP;
                } else {
                    currentHP = maxHP;
                }
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getMaxHP", {
        value: function getMaxHP (){
            return maxHP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setMaxHP", {
        value: function setMaxHP (newMaxHP){
            if((typeof newMaxHP === "number" || newMaxHP instanceof Number) && newMaxHP > 0){
                maxHP = newMaxHP;
            }
            return this;
        },
        enumerable: true
    });
}

module.exports = Character;
