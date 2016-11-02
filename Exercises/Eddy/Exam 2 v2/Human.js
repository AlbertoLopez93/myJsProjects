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
let Armor = require("./Armor");
let Weapon = require("./Weapon");
let Potion = require("./Potion");

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
	let _ArmorEquipped = [];
	let _WeaponEquipped = [];

	let _Agility = Number.isInteger(Agility) ? Agility : undefined;
	let _CurrentMP = Number.isInteger(CurrentMP) ? CurrentMP : undefined;
	let _Faction = typeof Faction === "string" ? Faction : undefined;
	let _Gold = Number.isInteger(Gold) ? Gold : 0;
	let _Intellect = Number.isInteger(Intellect) ? Intellect : undefined;
	let _IsMale = typeof IsMale === "boolean" ? IsMale : undefined;
	let _MaxMP = Number.isInteger(MaxMP) ? MaxMP : undefined;
	let _Spirit = Number.isInteger(Spirit) ? Spirit : undefined;
	let _Stamina = Number.isInteger(Stamina) ? Stamina : undefined;
	let _Strength = Number.isInteger(Strength) ? Strength : undefined;

	_WeaponEquipped = WeaponEquipped;
	_ArmorEquipped = ArmorEquipped;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getAgility = function getAgility() {
		return _Agility;
	};
	let getArmorEquipped = function addArmorEquipped() {

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
			if(_CurrentMP > _MaxMP()) {
				_CurrentMP = _MaxMP;
			}
			return this;
		}
	};
	let setCurrentMP = function setCurrenMP(newMP) {
		if(newMP < _MaxMP ) {
			_CurrentMP = newMP;
		}
		return this;
	};
	let setGold = function setGold(newGold) {
		if(newGold >= 0 && newGold < 1000000000) {
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
	let addArmorEquipped = function addArmorEquipped(armor) {

		if(armor instanceof Armor) {
			_ArmorEquipped.push(armor);
		}
		return _ArmorEquipped.length;
	};
	let addWeaponEquipped = function addWeaponEquipped(weapon) {
		if(weapon instanceof Weapon) {
			_WeaponEquipped.push(weapon);
		}

		return _WeaponEquipped.length;
	};
	let removeArmorEquipped = function removeArmorEquipped(armorName) {
		let flag;
		let index;

		flag = _ArmorEquipped.some(function(elem) {
			return elem.getName() === armorName;
		});

		if(flag) {
			index = _ArmorEquipped.findIndex(function(elem) {
				return elem.getName() === armorName;
			});

			flag = _ArmorEquipped.splice(index, 1).pop();
		}

		return flag;
	};
	let removeWeaponEquipped = function removeWeaponEquipped(weaponName) {
		let flag;
		let index;

		flag = _WeaponEquipped.some(function(elem) {
			return elem.getName() === weaponName;
		});

		if(flag) {
			index = _WeaponEquipped.findIndex(function(elem) {
				return elem.getName() === weaponName;
			});

			flag = _WeaponEquipped.splice(index, 1).pop();
		}

		return flag;
	};

	let switchArmorEquipped = function switchArmorEquipped(newArmorSet) {

		for(let i = 0 ; i< newArmorSet.length;i++){
			if (!(newArmorSet[i] instanceof Armor)){
			 return _ArmorEquipped;
			}
		}

		let oldArmorSet = _ArmorEquipped;
		_ArmorEquipped = newArmorSet;

		return oldArmorSet;
	};
	let switchWeaponEquipped = function switchWeaponEquipped(newWeaponSet) {
		for(let i = 0 ; i< newWeaponSet.length;i++){
			if (!(newWeaponSet[i] instanceof Weapon)){
				return _WeaponEquipped;
			}
		}

		let oldWeaponSet = _WeaponEquipped;
		_WeaponEquipped = newWeaponSet;

		return oldWeaponSet;
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
