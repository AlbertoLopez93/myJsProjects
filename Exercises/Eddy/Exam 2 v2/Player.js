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
let Armor = require("./Armor");
let Weapon = require("./Weapon");
let Potion = require("./Potion");

function Player(ID,
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
	let _Experience, _Level, _SP;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	_Experience = 0;
	_Level = 1;
	_SP = 0;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getExperience = function getExperience() {
		return _Experience;
	};
	let getLevel = function getLevel() {
		return _Level;
	};
	let getSP = function getSP() {
		return _SP;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters
	let setExperience = function setExperience(newExperience) {
		if(newExperience > 0 && Number.isInteger(newExperience)) {
			_Experience = newExperience;
		}
		return this;
	};
	let setLevel = function setLeve(newLevel) {
		if(newLevel > 0 && Number.isInteger(newLevel)) {
			_Level = newLevel;
		}
		return this;
	};
	let setSP = function setSP(newSP) {
		if(newSP > 0 && Number.isInteger(newSP)) {
			_SP = newSP;
		}
		return this;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getExperience: {
			value: getExperience,
			enumerable: true
		},
		setExperience: {
			value: setExperience,
			enumerable: true
		},
		getLevel: {
			value: getLevel,
			enumerable: true
		},
		setLevel: {
			value: setLevel,
			enumerable: true
		},
		getSP: {
			value: getSP,
			enumerable: true
		},
		setSP: {
			value: setSP,
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
module.exports = Player;

/*
 let armor1 = new Armor(1000, 100, "Description", 20001, "semilla del hermitaño1", 500, 200, 355, 99, true, 888, 777, 666, 555, 444);
 let armor2 = new Armor(1000, 100, "Description", 20001, "semilla", 500, 200, 355, 99, true, 888, 777, 666, 555, 444);
 let armor3 = new Armor(1000, 100, "Description", 20001, "semilla del hermitaño3", 500, 200, 355, 99, true, 888, 777, 666, 555, 444);

 let weapon1 = new Weapon(1000, 100, "Description", 20001, "filero", 500, 200, false, true, true);
 let weapon2 = new Weapon(1000, 100, "Description", 20001, "bomba", 500, 200, false, true, true);
 let weapon3 = new Weapon(1000, 100, "Description", 20001, "sarcasmo", 500, 200, false, true, true);

 let person = new Player(1000, "eddy", 5000, 4999, 9999, [armor1,
 armor3], 8888, "vatos locos", 7777, 6666, true, 10000, 10000, 10000, 10000, [weapon1,
 weapon2]);


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


 console.log(person.getArmorEquipped()[0].getName());
 console.log(person.getArmorEquipped().length);
 person.addArmorEquipped(armor2);
 console.log(person.getArmorEquipped().length);
 console.log(person.removeArmorEquipped("semilla"));
 console.log(person.getArmorEquipped().length);
 console.log(person.getWeaponEquipped()[0].getName());
 console.log(person.getWeaponEquipped().length);
 console.log(person.addWeaponEquipped(weapon2));
 console.log(person.getWeaponEquipped().length);
 console.log(person.removeWeaponEquipped("filero"));
 console.log(person.getWeaponEquipped().length);
 console.log(person.getArmorEquipped().length);
 console.log(person.switchArmorEquipped([weapon2]));
 console.log(person.getArmorEquipped().length);
*/