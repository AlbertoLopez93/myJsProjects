"use strict"

function Author(data){
	let name = data.name;
	let email = data.email;
	let gender = data.gender;
	this.getName = function getName(){
		return name;
	};
	this.getEmail = function getEmail(){
		return email;
	};
	this.getGender = function getGender(){
		return gender;
	};
	this.setEmail = function setEmail(newEmail){
		email = newEmail;
	};
}

Author.prototype.toString = function toString(){
	return "Author[name=" + this.getName() + ", email=" + this.getEmail() + ", gender=" + this.getGender() + "]";
};

module.exports = Author;