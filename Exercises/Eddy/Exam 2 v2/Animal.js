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
	_HostileToPlayer = typeof hostile ==="boolean"?hostile:undefined;
	_LootDropped = typeof LootDropped ==="number"?LootDropped:undefined;
	_MaxDmg = typeof maxDmg === "number"?maxDmg:undefined;
	if(minDmg <= maxDmg && typeof minDmg === "number") {
		_MinDmg = minDmg;
	} else {

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

		isHostileToPlayer: {
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


/*
let person = new Animal("satan1987","lil",1000,100,true,555,2000,666);
console.log(person.getID());
console.log(person.getName());
console.log(person.getCurrentHP());
person.setCurrentHP(2000);
console.log(person.getCurrentHP());
person.setCurrentHP(900);
console.log(person.getCurrentHP());
console.log(person.getMaxHP());
person.setMaxHP(2000);
console.log(person.getMaxHP());
person.setMaxHP(200);
console.log(person.getMaxHP());
console.log(person.getCurrentHP());
console.log(person.isHostileToPlayer());
console.log(person.getLootDropped());
console.log(person.getMaxDmg());
console.log(person.getMinDmg());*/