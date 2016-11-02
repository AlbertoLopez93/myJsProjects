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

function Weapon(BuyPrice,
                Count,
                Description,
                ID,
                Name,
                SellPrice,
                Weight,
                IsEnchanted,
                IsOneHanded,
                IsUpgraded,
                MaxDmg,
                MinDmg,
                StrReq) {

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties

	let _IsEnchanted = typeof IsEnchanted === "boolean" ? IsEnchanted : false;
	let _IsOneHanded = typeof IsOneHanded === "boolean" ? IsOneHanded : false;
	let _IsUpgraded = typeof IsUpgraded === "boolean" ? IsUpgraded : false;
	let _MaxDmg = Number.isInteger(MaxDmg) ? MaxDmg : undefined;
	let _MinDmg = Number.isInteger(MinDmg) ? MinDmg : undefined;
	let _StrReq = Number.isInteger(StrReq) ? StrReq : undefined;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters

	let getMaxDmg = function getMaxDmg() {
		return _MaxDmg;
	};

	let getMinDmg = function getMinDmg() {
		return _MinDmg;
	};


	let getStrReq = function getStrReq() {
		return _StrReq;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters
	let setMaxDmg = function settMaxDmg(newMaxDmg) {
		if (newMaxDmg>0 && Number.isInteger(newMaxDmg)){
			_MaxDmg = newMaxDmg;
		}
	};
	let setMinDmg = function setMinDmg(newMinDmg) {
		if (newMinDmg>0 && Number.isInteger(newMinDmg)){
			if(newMinDmg<=_MaxDmg){
				_MinDmg = newMinDmg;
			}
		}
	};
	let setStrReq = function setStrReq(newStrReq) {
		if(newStrReq>0){
			 _StrReq=newStrReq;
		}

	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		IsEnchanted: {
			value: _IsEnchanted,
			enumerable: true,
			writable:!_IsEnchanted
		},
		IsOneHanded: {
			value: _IsOneHanded,
			enumerable: true
		},
		IsUpgraded: {
			value: _IsUpgraded,
			enumerable: true
		},
		getMaxDmg: {
			value: getMaxDmg,
			enumerable: true
		},
		getMinDmg: {
			value: getMinDmg,
			enumerable: true
		},
		getStrReq: {
			value: getStrReq,
			enumerable: true
		},
		setMaxDmg: {
			value: setMaxDmg,
			enumerable: true
		},
		setMinDmg: {
			value: setMinDmg,
			enumerable: true
		},
		setStrReq: {
			value: setStrReq,
			enumerable: true
		}

	})
	;
	Item.call(this, BuyPrice, Count, Description, ID, Name, SellPrice, Weight);

}
module.exports = Weapon;

/*
 let item = new Weapon(1000, 100, "Description", 20001, "semilla del hermitaño", 500, 200,false,true,true);

 console.log(item.getBuyPrice());
 console.log(item.getCount());
 console.log(item.getDescription());
 console.log(item.getID());
 console.log(item.getWeight());
 console.log(item.getSellPrice());
 console.log(item.setCount(200));
 console.log(item.getCount());

 //weapon

console.log(item.IsEnchanted);
item.IsEnchanted=true;
item.IsEnchanted=false;
console.log(item.IsEnchanted);

console.log(item.IsOneHanded);
console.log(item.IsOneHanded);

console.log(item.IsUpgraded);
console.log(item.IsUpgraded);

console.log(item.getMaxDmg());
item.setMaxDmg(3000);
console.log(item.getMaxDmg());

console.log(item.getMinDmg());
item.setMinDmg(3000);
console.log(item.getMinDmg());
item.setMinDmg(4000);
console.log(item.getMinDmg());
console.log(item.getStrReq());
item.setStrReq(5000);
console.log(item.getStrReq());*/