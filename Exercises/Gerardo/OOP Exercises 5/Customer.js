"use strict"

function Customer(id, name, discount) {
  var id = id;
  var name = name;
  var discount = discount;
  this.getID = function getID() {
    return id;
  }
  this.getName = function getName() {
    return name;
  }
  this.getDiscount = function getDiscount() {
    return discount;
  }
  this.setDiscount = function setDiscount(newDiscount) {
    discount = newDiscount;
  }
}

Customer.prototype.toString = function toString() {
  return this.getName() + "(" + this.getID() + ")";
}

module.exports = Customer;
