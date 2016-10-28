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
let Character = require("./Character");

function Animal(ID,
                name,
                maxHP,
                currentHP,
                hostile,
                LootDropped,
                maxDmg,
                minDmg) {

	let _HostileToPlayer, _LootDropped, _MaxDmg, _MinDmg;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	_HostileToPlayer = typeof hostile === "boolean" ? hostile : undefined;
	_LootDropped = Number.isInteger(LootDropped) ? LootDropped : undefined;
	_MaxDmg = typeof maxDmg === "number" ? maxDmg : undefined;
	if(minDmg <= maxDmg && Number.isInteger(minDmg)) {
		_MinDmg = minDmg;
	} else {
		_MinDmg = _MaxDmg;
	}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getLootDropped = function getLootDropped() {
		return _LootDropped;
	};
	let getMaxDmg = function getMaxDmg() {
		return _MaxDmg;
	};
	let getMinDmg = function getMinDmg() {
		return _MinDmg;
	};

	let isHostileToPlayer = function isHostileToPlayer() {
		return _HostileToPlayer;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		isItHostileToPlayer: {
			value: isHostileToPlayer,
			enumerable: true
		},
		getLootDropped: {
			value: getLootDropped,
			enumerable: true
		},
		getMaxDmg: {
			value: getMaxDmg,
			enumerable: true
		},
		getMinDmg: {
			value: getMinDmg,
			enumerable: true
		}
	});

	Character.call(this, ID, name, maxHP, currentHP);

}

module.exports = Animal;
