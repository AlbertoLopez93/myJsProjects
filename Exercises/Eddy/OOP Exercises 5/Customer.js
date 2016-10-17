"use strict";
/**
 * Created by jazielsama on 3/10/16.
 */

/*
 *
 * Create a class called Customer. It will contain 3 private properties:
 ID:int
 name:string
 discount:int
 The constructor of the class will receive these 3 properties as arguments,
 therefore you will have a signature like: Customer(ID:int, name:string, discount:int).
 It will also have the following methods:
 getID():int returns the ID of the instance.
 getName():string returns the name of the instance.
 getDiscount():int returns the discount of the instance.
 setDiscount(discount:int):void sets a new discount to the instance.
 toString():string returns a string following the pattern “name(ID)”

 * */
function Customer (ID, name, discount) {
	var ID = ID;
	var name = name;
	var discount = discount;

	this.getID = function getID () {
		return ID;
	};

	this.getName = function getName() {
		return name;
	};

	this.getDiscount = function getDiscount() {
		return discount;
	};

	this.setDiscount = function (newDiscount) {
		discount = newDiscount;
	};
}

Customer.prototype.toString = function () {
		return this.getName()+'('+this.getID()+')'
};

module.exports = Customer;

