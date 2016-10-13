"use strict"

function NewCustomer(id, name, gender) {
  var id = id;
  var name = name;
  var gender = gender;
  this.getID = function getID() {
    return id;
  }
  this.getName = function getName() {
    return name;
  }
  this.getGender = function getGender() {
    return gender;
  }
}

NewCustomer.prototype.toString = function toString() {
  return this.getName() + "(" + this.getID() + ")";
}

module.exports = NewCustomer;
