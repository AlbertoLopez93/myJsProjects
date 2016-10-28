/**
 * version: 0.0.1
 *
 * Author: Eddy Velazquez on 28/10/16.
 * mail: eddy.velazquez@wocom-labs.com
 *
 * description:
 *
 */

"use strict";

let Human = require("./Human");

function NPC(ID,
             name,
             maxHP,
             currentHP,
             Agility,
             ArmorEquipped,
             CurrentMP,
             Faction,
             Gold,
             Intellect,
             IsMale,
             MaxMP,
             Spirit,
             Stamina,
             Strength,
             WeaponEquipped,
             HostileToPlayer,
             LootDropped) {

	let _HostileToPlayer, _LootDropped;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	_HostileToPlayer = HostileToPlayer;
	_LootDropped = LootDropped;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let isHostileToPlayer = function isHostileToPlayer() {
		return _HostileToPlayer;
	};
	let getLootDropped = function() {
		return _LootDropped;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		isHostileToPlayer: {
			value: isHostileToPlayer,
			enumerable: true
		},
		getLootDropped: {
			value: getLootDropped,
			enumerable: true
		},
	});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ inheritage
	Human.call(this,ID,
	           name,
	           maxHP,
	           currentHP,
	           Agility,
	           ArmorEquipped,
	           CurrentMP,
	           Faction,
	           Gold,
	           Intellect,
	           IsMale,
	           MaxMP,
	           Spirit,
	           Stamina,
	           Strength,
	           WeaponEquipped);

}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ prototype
module.exports = NPC;
