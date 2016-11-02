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

function Potion(BuyPrice,
                Count,
                Description,
                ID,
                Name,
                SellPrice,
                Weight,
                HPRestore,
                MPRestore
                ) {


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ private properties
	let _HPRestore = Number.isInteger(HPRestore)?HPRestore:undefined;
	let _MPRestore = Number.isInteger(MPRestore)?HPRestore:undefined;

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ getters

	let getHPRestore = function HPRestore() {
		return _HPRestore;
	};

	let getMPRestore = function MPRestore() {
		return _MPRestore;
	};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setters

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Instance methods
	Object.defineProperties(this, {

		getHPRestore: {
			value: getHPRestore,
			enumerable: true
		},
		getMPRestore:{
			value:getMPRestore,
			enumerable:true
		}

	});

	Item.call(this, BuyPrice, Count, Description, ID, Name, SellPrice, Weight);

}
module.exports = Potion;


/*
 let item = new Potion(1000, 100, "Description", 20001, "semilla del hermitaño", 500, 200,50,100);

 console.log(item.getBuyPrice());
 console.log(item.getCount());
 console.log(item.getDescription());
 console.log(item.getID());
 console.log(item.getWeight());
 console.log(item.getSellPrice());
 console.log(item.setCount(200));
 console.log(item.getCount());

 //potion

console.log(item.getHPRestore());
console.log(item.getMPRestore());*/