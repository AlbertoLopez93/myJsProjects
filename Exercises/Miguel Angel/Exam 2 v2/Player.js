"use strict";

let Human = require("./Human");

function Player(playerID, playerName, playerMaxHP, playerCurrentHP,
                playerAgility, playerArmorEquipped, playerCurrentMP, playerFaction,
                playerGold, playerIntellect, playerIsMale, playerMaxMP,
                playerSpirit, playerStamina, playerStrength, playerWeaponEquipped) {

    Human.call(this, playerID, playerName, playerMaxHP, playerCurrentHP,
               playerAgility, playerArmorEquipped, playerCurrentMP, playerFaction,
               playerGold, playerIntellect, playerIsMale, playerMaxMP,
               playerSpirit, playerStamina, playerStrength, playerWeaponEquipped);

    let Experience = 0;
    let Level = 1;
    let SP = 0;

    Object.defineProperty(this, "getExperience", {
        value: function getExperience (){
            return Experience;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setExperience", {
        value: function setExperience (newExperience){
            if((typeof newExperience === "number" || newExperience instanceof Number) && newExperience >= 0){
                Experience = newExperience;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLevel", {
        value: function getLevel (){
            return Level;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setLevel", {
        value: function setLevel (newLevel){
            if((typeof newLevel === "number" || newLevel instanceof Number) && newLevel >= 0){
                Level = newLevel;
            }
            return this;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getSP", {
        value: function getSP (){
            return SP;
        },
        enumerable: true
    });

    Object.defineProperty(this, "setSP", {
        value: function setSP (newSP){
            if((typeof newSP === "number" || newSP instanceof Number) && newSP >= 0){
                SP = newSP;
            }

            return this;
        },
        enumerable: true
    });

}

module.exports = Player;
