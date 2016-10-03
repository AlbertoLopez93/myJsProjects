"use strict"

var Customer = require("./Customer.js");

function Invoice(id, customer, amount) {
  var id = id;
  var customer = customer;
  var amount = amount;
  this.getID = function getID() {
    return id;
  }
  this.getCustomer = function getCustomer() {
    return customer;
  }
  this.getAmount = function getAmount() {
    return amount;
  }
  this.setCustomer = function setCustomer(newCustomer) {
    customer = newCustomer;
  }
  this.setAmount = function setAmount(newAmount) {
    amount = newAmount;
  }
}

Invoice.prototype.getCustomerName = function getCustomerName() {
  return this.getCustomer().getName();
}

Invoice.prototype.getAmountAfterDiscount = function getAmountAfterDiscount() {
  return this.getAmount() * (1 - this.getCustomer().getDiscount() / 100);
}

module.exports = Invoice;
