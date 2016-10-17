"use strict"

function NewCustomer(ID, name, gender) {
  this.getID = function getID() {
    return ID;
  }
  this.getName = function getName() {
    return name;
  }
  this.getGender = function getGender() {
    return gender;
  }
}
NewCustomer.prototype.toString = function toString() {
  return this.getName() + '(' + this.getID() + ')';
}

module.exports = NewCustomer;
