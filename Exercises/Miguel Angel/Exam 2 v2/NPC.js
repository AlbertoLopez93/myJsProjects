"use strict";

let Human = require("./Human");

function NPC (npcID, npcName, npcMaxHP, npcCurrentHP,
              npcAgility, npcArmorEquipped, npcCurrentMP, npcFaction,
              npcGold, npcIntellect, npcIsMale, npcMaxMP,
              npcSpirit, npcStamina, npcStrength, npcWeaponEquipped,
              npcHostileToPlayer, npcLootDropped){

    Human.call(this, npcID, npcName, npcMaxHP, npcCurrentHP,
               npcAgility, npcArmorEquipped, npcCurrentMP, npcFaction,
               npcGold, npcIntellect, npcIsMale, npcMaxMP,
               npcSpirit, npcStamina, npcStrength, npcWeaponEquipped);

    let HostileToPlayer = npcHostileToPlayer;
    let LootDropped = npcLootDropped;

    Object.defineProperty(this, "isItHostileToPlayer", {
        value: function isItHostileToPlayer (){
            return HostileToPlayer;
        },
        enumerable: true
    });

    Object.defineProperty(this, "getLootDropped", {
        value: function getLootDropped (){
            return LootDropped;
        },
        enumerable: true
    });
}

module.exports = NPC;
