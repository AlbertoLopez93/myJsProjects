"use strict"

let Customer = require("./Customer");

function Invoice (ID, customer, amount){
  var newID = ID;
  var newCustomer = customer;
  var newAmount = amount;
  this.getID = function getID(){
    return newID;
  };
  this.getCustomer = function getCustomer(){
    return newCustomer;
  };
  this.getAmount = function getAmount(){
    return newAmount;
  };
  this.setCustomer = function setCustomer(myNewCustomer){
    newCustomer = myNewCustomer;
  };
  this.setAmount = function setAmount(myNewAmount){
    newAmount = myNewAmount;
  };
}

Invoice.prototype.getCustomerName = function getCustomerName(){
  return this.getCustomer().getName();
}

Invoice.prototype.getAmountAfterDiscount = function getAmountAfterDiscount(){
  return this.getAmount() - ((this.getAmount() * this.getCustomer().getDiscount()) / 100);
}

module.exports = Invoice;
