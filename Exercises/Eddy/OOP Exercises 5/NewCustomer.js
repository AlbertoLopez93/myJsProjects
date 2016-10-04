"use strict";
/**
 * Created by jazielsama on 3/10/16.
 */
/*
 * Create a new class called NewCustomer. It will contain 3
 * private properties:
 ID:int
 name:string
 gender:string (‘m’ or ‘f’)
 The constructor class will receive these 3 properties as
 arguments. You will end up with a signature like:
 NewCustomer(ID:int, name:string, gender:string).
 It will also have the following methods:
 getID():int returns the ID of the instance.
 getName():string returns the name of the instance.
 getGender():string returns the gender of the instance.
 toString():string returns a string following the pattern “name(ID)”.

 * */

function NewCustomer (ID, name, gender) {
	var ID = ID;
	var name = name;
	var gender = gender;
	this.getID = function getID () {
		return ID;
	};

	this.getName = function getName () {
		return name;
	};

	this.getGender = function getGender () {
		return gender;
	};
}
NewCustomer.prototype.toString = function () {
	return this.getName () + '(' + this.getID () + ')'
};
module.exports = NewCustomer;