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

let Item = require("./Item");

function Armor(BuyPrice,
               Count,
               Description,
               ID,
               Name,
               SellPrice,
               Weight,
               AgiBonus,
               IntBonus,
               IsHeavy,
               PhysDR,
               SpellDR,
               SpiBonus,
               StaBonus,
               StrBonus) {

	let _AgiBonus = Number.isInteger(AgiBonus) ? AgiBonus : undefined;
	let _IntBonus = Number.isInteger(IntBonus) ? IntBonus : undefined;
	let _IsHeavy = typeof IsHeavy === "boolean" ? IsHeavy : undefined;
	let _PhysDR = Number.isInteger(PhysDR) ? PhysDR : undefined;
	let _SpellDR = Number.isInteger(SpellDR) ? SpellDR : undefined;
	let _SpiBonus = Number.isInteger(SpiBonus) ? SpiBonus : undefined;
	let _StaBonus = Number.isInteger(StaBonus) ? StaBonus : undefined;
	let _StrBonus = Number.isInteger(StrBonus) ? StrBonus : undefined;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getAgiBonus = function getAgiBonus() {
		return _AgiBonus;
	};
	let getIntBonus = function getIntBonus() {
		return _IntBonus;
	};
	let getPhysDR = function getPhysDR() {
		return _PhysDR;
	};
	let getSpellDR = function getSpellDR() {
		return _SpellDR;
	};
	let getSpiBonus = function getSpiBonus() {
		return _SpiBonus;
	};
	let getStaBonus = function getStaBonus() {
		return _StaBonus;
	};
	let getStrBonus = function getStrBonus() {
		return _StrBonus;
	};

	let isItHeavy = function isItHeavy() {
		return _IsHeavy;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getAgiBonus: {
			value: getAgiBonus,
			enumerable: true
		},
		getIntBonus: {
			value: getIntBonus,
			enumerable: true
		},
		isItHeavy: {
			value: isItHeavy,
			enumerable: true
		},
		getPhysDR: {
			value: getPhysDR,
			enumerable: true
		},
		getSpellDR: {
			value: getSpellDR,
			enumerable: true
		},
		getSpiBonus: {
			value: getSpiBonus,
			enumerable: true
		},
		getStaBonus: {
			value: getStaBonus,
			enumerable: true
		},
		getStrBonus: {
			value: getStrBonus,
			enumerable: true
		}

	});
	Item.call(this, BuyPrice, Count, Description, ID, Name, SellPrice, Weight);

}
module.exports = Armor;
