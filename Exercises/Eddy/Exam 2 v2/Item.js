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

function Item(BuyPrice, Count, Description, ID, Name, SellPrice, Weight) {

	let _BuyPrice, _Count, _Description, _ID, _Name, _SellPrice, _Weight;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	_BuyPrice = typeof BuyPrice === "number"?BuyPrice:undefined;
	_Count = typeof Count === "number"?Count:undefined;
	_Description = typeof Description === "string"?Description:undefined;
	_ID = typeof ID === "number"?ID:undefined;
	_Name = typeof Name === "string"?Name:undefined;
	_SellPrice =typeof  SellPrice === "number"?SellPrice:undefined;
	_Weight = typeof Weight === "number"?Weight:undefined;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters
	let getBuyPrice = function getBuyPrice() {
		return _BuyPrice;
	};
	let getCount = function getCount() {
		return _Count;
	};
	let getDescription = function getDescription() {
		return _Description;
	};
	let getID = function getID() {
		return _ID;
	};
	let getName = function getName() {
		return _Name;
	};
	let getSellPrice = function getSellPrice() {
		return _SellPrice;
	};
	let getWeight = function getWeight() {
		return _Weight;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters
	let setCount = function setCount(newCount) {
		if(typeof  newCount === "number" && newCount > 0) {
			_Count = newCount;
		}
		return this;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getBuyPrice: {
			value: getBuyPrice,
			enumerable: true
		},
		getCount: {
			value: getCount,
			enumerable: true
		},
		getDescription: {
			value: getDescription,
			enumerable: true
		},
		getID: {
			value: getID,
			enumerable: true
		},
		getName: {
			value: getName,
			enumerable: true
		},
		getWeight: {
			value: getWeight,
			enumerable: true
		},
		getSellPrice: {
			value: getSellPrice,
			enumerable: true
		},
		setCount:{
			value:setCount,
			enumerable:true
		}
	});

}
module.exports = Item;

