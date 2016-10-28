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
		if(newExperience > 0) {
			_Experience = newExperience;
		}
		return this;
	};
	let setLevel = function setLeve(newLevel) {
		if(newLevel > 0) {
			_Level = newLevel;
		}
		return this;
	};
	let setSP = function setSP(newSP) {
		if(newSP > 0) {
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


let eddy = new Player("jazielsama1987","eddy",1000,1000,100, [{name: "uno"}, {name: "dos"}, {name: "tres"}]);
console.log(eddy.getID());
console.log(eddy.getName());
console.log(eddy.getCurrentHP());
eddy.setCurrentHP(2000);
console.log(eddy.getCurrentHP());
eddy.setCurrentHP(900);
console.log(eddy.getCurrentHP());
console.log(eddy.getMaxHP());
eddy.setMaxHP(2000);
console.log(eddy.getMaxHP());
eddy.setMaxHP(200);
console.log(eddy.getMaxHP());
console.log(eddy.getCurrentHP());
										//Human
console.log(eddy.getAgility());
eddy.setAgility(500);
console.log(eddy.getAgility());
console.log(eddy.getArmorEquipped());
console.log(eddy.addArmorEquipped("lol"));
console.log(eddy.getArmorEquipped());
eddy.removeArmorEquipped("dos");
console.log(eddy.getArmorEquipped());

