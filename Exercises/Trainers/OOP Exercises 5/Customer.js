"use strict";

function Customer(ID, name, discount) {

  this.getID = function getID() {
    return ID;
  };

  this.getName = function getName() {
    return name;
  };

  this.getDiscount = function getDiscount() {
    return discount
  };

  this.setDiscount = function setDiscount(newDiscount) {
    discount = newDiscount;
  };
}

Customer.prototype.toString = function() {
  return "" + this.getName() + "(" + this.getID() + ")";
};

module.exports = Customer;
