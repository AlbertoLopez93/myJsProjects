"use strict"

let Human = require('./human').Human;

function Friend (friend){
	this.id = friend.id;
	var name = friend.name.split(' ');
	this.firstName = name[0];
	this.lastName = name[1];
}

Friend.prototype = new Human();
Friend.prototype.constructor = Friend;

module.exports = {
	Friend: Friend
};