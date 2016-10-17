"use strict"

function Customer(ID, name, discount) {
  this.getID = function getID() {
    return ID;
  }
  this.getName = function getName() {
    return name;
  }
  this.getDiscount = function getDiscount() {
    return discount;
  }
  this.setDiscount = function setDiscount(value) {
    discount=value;
  }
}
Customer.prototype.toString = function toString() {
  return this.getName() + '(' + this.getID() + ')';
}

module.exports = Customer;
