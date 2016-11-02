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

function Character(ID, name, maxHP, currentHP) {

	let _ID, _Name, _MaxHP, _CurrentHP;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	_ID = Number.isInteger(ID) ? ID : undefined;
	_Name = typeof name === "string" ? name : undefined;
	_MaxHP = Number.isInteger(maxHP) ? maxHP : undefined;
	if(currentHP <= _MaxHP && Number.isInteger(currentHP)) {
		_CurrentHP = currentHP;
	} else {
		_CurrentHP = _MaxHP;
	}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getID = function getID() {
		return _ID;
	};
	let getName = function getName() {
		return _Name;
	};
	let getCurrentHP = function() {
		return _CurrentHP;
	};
	let getMaxHP = function getMaxHP() {
		return _MaxHP;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters
	let setCurrentHP = function setCurrenHP(newHP) {
		if(newHP < _CurrentHP && Number.isInteger(newHP) && newHP <= _MaxHP) {
			_CurrentHP = newHP;
		}
		return this;
	};
	let setMaxHP = function setMaxHP(newMaxHP) {
		if(newMaxHP > 0 && Number.isInteger(newMaxHP)) {
			_MaxHP = newMaxHP;
			if(_CurrentHP > _MaxHP) {
				_CurrentHP = _MaxHP;
			}
			return this;
		}
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getID: {
			value: getID,
			enumerable: true
		},
		getName: {
			value: getName,
			enumerable: true
		},
		getCurrentHP: {
			value: getCurrentHP,
			enumerable: true
		},
		setCurrentHP: {
			value: setCurrentHP,
			enumerable: true
		},
		getMaxHP: {
			value: getMaxHP,
			enumerable: true
		},
		setMaxHP: {
			value: setMaxHP,
			enumerable: true
		}

	});
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ prototype
module.exports = Character;
