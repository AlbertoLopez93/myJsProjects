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

function Human(ID,
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
               WeaponEquipped) {

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	let _Agility = Agility;
	let _ArmorEquipped = ArmorEquipped;
	let _CurrentMP = CurrentMP;
	let _Faction = Faction;
	let _Gold = Gold;
	let _Intellect = Intellect;
	let _IsMale = IsMale;
	let _MaxMP = MaxMP;
	let _Spirit = Spirit;
	let _Stamina = Stamina;
	let _Strength = Strength;
	let _WeaponEquipped = WeaponEquipped;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getAgility = function getAgility() {
		return _Agility;
	};
	let getArmorEquipped = function getArmorEquipped() {
		return _ArmorEquipped;
	};
	let getMaxMP = function getMaxMP() {
		return _MaxMP;
	};
	let getCurrentMP = function getCurrentMP() {
		return _CurrentMP;
	};
	let getFaction = function getFaction() {
		return _Faction;
	};
	let getGold = function getGold() {
		return _Gold;
	};
	let getIntellect = function getIntellect() {
		return _Intellect;
	};
	let getSpirit = function getSpirit() {
		return _Spirit;
	};
	let getStamina = function getStamina() {
		return _Stamina;
	};
	let getStrength = function getStrength() {
		return _Strength;
	};
	let getWeaponEquipped = function getWeaponEquipped() {
		return _WeaponEquipped;
	};
	let isItMale = function isItMale() {
		return _IsMale;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters
	let setAgility = function setAgility(newAgility) {
		_Agility = newAgility;
		return this;
	};
	let setMaxMP = function setMaxHP(newMaxMP) {
		if(newMaxMP > 0) {
			_MaxMP = newMaxMP;
			if(this.getCurrentMP() > this.getMaxMP()) {
				_CurrentMP = _MaxMP;
			}
			return this;
		}
	};
	let setCurrentMP = function setCurrenMP(newMP) {
		if(newMP < this.getMaxMP()) {
			_CurrentMP = newMP;
		}
		return this;
	};
	let setGold = function setGold(newGold) {
		if(newGold > 0 && newGold < 1000000000) {
			_Gold = newGold;
		}
	};
	let setIntellect = function setIntellect(newIntellect) {
		if(newIntellect > 0) {
			_Intellect = newIntellect;
		}
	};
	let setSpirit = function setSpirit(newSpirit) {
		if(newSpirit > 0) {
			_Spirit = newSpirit;
		}
		return this;
	};
	let setStamina = function setStamina(newStamina) {
		if(newStamina > 0) {
			_Stamina = newStamina;
		}
		return this;
	};
	let setStrength = function getStrength(newStrength) {
		if(newStrength > 0) {
			_Strength = newStrength;
		}
		return this;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let addArmorEquipped = function addArmorEquipped(Armor) {
		_ArmorEquipped.push(Armor);
		return _ArmorEquipped.length;
	};
	let addWeaponEquipped = function addWeaponEquipped(Armor) {
		_WeaponEquipped.push(Armor);
		return _WeaponEquipped.length;
	};

	let removeArmorEquipped = function removeArmorEquipped(name) {

	};
	let removeWeaponEquipped = function removeWeaponEquipped(name) {

	};

	let switchArmorEquipped = function switchArmorEquipped() {

	};
	let switchWeaponEquipped = function switchWeaponEquipped() {

	};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getAgility: {
			value: getAgility,
			enumerable: true
		},
		setAgility: {
			value: setAgility,
			enumerable: true
		},
		getArmorEquipped: {
			value: getArmorEquipped,
			enumerable: true
		},
		addArmorEquipped: {
			value: addArmorEquipped,
			enumerable: true
		},
		removeArmorEquipped: {
			value: removeArmorEquipped,
			enumerable: true
		},
		switchArmorEquipped: {
			value: switchArmorEquipped,
			enumerable: true
		},
		getCurrentMP: {
			value: getCurrentMP,
			enumerable: true
		},
		setCurrentMP: {
			value: setCurrentMP,
			enumerable: true
		},
		getMaxMP: {
			value: getMaxMP,
			enumerable: true
		},
		setMaxMP: {
			value: setMaxMP,
			enumerable: true
		},
		getSpirit: {
			value: getSpirit,
			enumerable: true
		},
		setSpirit: {
			value: setSpirit,
			enumerable: true
		},
		getStamina: {
			value: getStamina,
			enumerable: true
		},
		setStamina: {
			value: setStamina,
			enumerable: true
		},
		getStrength: {
			value: getStrength,
			enumerable: true
		},
		setStrength: {
			value: setStrength,
			enumerable: true
		},
		getWeaponEquipped: {
			value: getWeaponEquipped,
			enumerable: true
		},
		addWeaponEquipped: {
			value: addWeaponEquipped,
			enumerable: true
		},
		removeWeaponEquipped: {
			value: removeWeaponEquipped,
			enumerable: true
		},
		switchWeaponEquipped: {
			value: switchWeaponEquipped,
			enumerable: true
		},
		getFaction: {
			value: getFaction,
			enumerable: true
		},
		getGold: {
			value: getGold,
			enumerable: true
		},
		setGold: {
			value: setGold,
			enumerable: true
		},
		getIntellect: {
			value: getIntellect,
			enumerable: true
		},
		setIntellect: {
			value: setIntellect,
			enumerable: true
		},
		isItMale: {
			value: isItMale,
			enumerable: true
		}
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ inheritage
	Character.call(this, ID, name, maxHP, currentHP);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ prototype

module.exports = Human;

/*
let person = new Human("satan1987","lilwayne",1000,999,true,555,2000,666);
console.log(person.getID());
console.log(person.getName());
console.log(person.getCurrentHP());
console.log(person.getMaxHP());
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
*/