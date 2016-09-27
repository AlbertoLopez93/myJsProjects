"use strict"

function Human (){
	this.getFirstName = function getFirstName(){
		return this.firstName;
	}
	this.getLastName = function getLastName(){
		return this.lastName;
	}
	this.getFullName = function getFullName(){
		return this.firstName + ' ' + this.lastName;
	}
}

module.exports = { Human: Human };