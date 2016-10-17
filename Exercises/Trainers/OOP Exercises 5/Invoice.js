"use strict";

function Invoice(ID, customer, amount) {

  this.getID = function getID() {
    return ID;
  };

  this.getCustomer = function getCustomer() {
    return customer;
  };

  this.getAmount = function getAmount() {
    return amount;
  };

  this.setCustomer = function setCustomer(newCustomer) {
    customer = newCustomer;
  };

  this.setAmount = function setAmount(newAmount) {
    amount = newAmount;
  };
}

Invoice.prototype.getCustomerName = function() {
  return this.getCustomer().getName();
};

Invoice.prototype.getAmountAfterDiscount = function() {
  return this.getAmount() * ( (100 - this.getCustomer().getDiscount()) / 100);
};

module.exports = Invoice;
