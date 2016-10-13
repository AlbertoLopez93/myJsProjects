"use strict"

var Customer = require("./Customer");

function Invoice(ID,customer,amount) {
  this.getID = function getID() {
    return ID;
  }
  this.getCustomer = function getCustomer() {
    return customer;
  }
  this.getAmount = function getAmount() {
    return amount;
  }
  this.setCustomer = function setCustomer(instance) {
    customer = instance;
  }
  this.setAmount = function setAmount(quantity) {
    amount = quantity;
  }
}
Invoice.prototype.getCustomerName = function getCustomerName() {
  return this.getCustomer().getName();
}
Invoice.prototype.getAmountAfterDiscount = function() {
  let percentage = this.getCustomer().getDiscount();
  let prize = this.getAmount();
  percentage = prize*percentage/100;
  return prize-percentage;
}

module.exports = Invoice;
