/**
 * Created by jazielsama on 30/09/16.
 */

/*
 *
 * Create a class named Author, which will receive in its constructor an object with the following properties:
 name:string
 email:string
 gender:string (m for masculine, and f for femenine)
 All the above properties should be set as private properties. It will also have the following methods:
 getName():string returns the name of the instance
 getEmail():string returns the email of the instance
 setEmail(email:string):void set a new email to the instance.
 getGender():string returns the gender of the instance
 toString():string returns a string that follows the pattern: “Author[name=?, email=?, gender=?]”

 * */

function Author (data) {
	var name = data.name;
	var email = data.email;
	var gender = data.gender;

	this.getName = function getName () {
		return name;
	};

	this.getEmail = function getEmail () {
		return email;
	};

	this.getGender = function getGender () {
		return gender;
	};

	this.setEmail = function setEmail (newEmail) {
		email = newEmail;
	};

}

Author.prototype.toString = function toString () {
	return 'Author[name=' + this.getName () + ', email=' + this.getEmail () + ', gender=' + this.getGender () + ']';
};

module.exports = Author;