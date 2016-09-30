"use strict"

function Author(human) {
  var name = human.name;
  var email = human.email;
  var gender = human.gender;
  this.getName = function getName() {
    return name;
  }
  this.getEmail = function getEmail() {
    return email;
  }
  this. setEmail = function setEmail(mail) {
    email = mail;
  }
  this.getGender = function getGender() {
    return gender;
  }
}

Author.prototype.toString = function() {
  return 'Author[name='+this.getName()+', email='+this.getEmail()+', gender='+this.getGender()+']';
}

module.exports = Author;

var Person = new Author({name:'Peter Hunts',email:'peter@domain',gender:'m'});
console.log(Person.getName());
Person.setEmail('peter@mx');
console.log(Person.toString());
