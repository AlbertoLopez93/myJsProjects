"use strict"

var Customer = require("./Customer");

function Invoice(newID, newCustomer, newAmount) {
  let ID = newID;
  let customer = newCustomer;
  let amount = newAmount;

  this.getID = function () {
    return ID;
  };
  this.getCustomer = function () {
    return customer;
  };
  this.getAmount = function () {
    return amount;
  };
  this.setCustomer = function (newCustomer) {
    customer = newCustomer;
  };
  this.setAmount = function (newAmount) {
    amount = newAmount;
  };
  this.getCustomerName = function () {
    return customer.getName();
  };

}


Invoice.prototype.getAmountAfterDiscount = function () {
  let descuento = this.getCustomer().getDiscount() * this.getAmount() / 100;
  return  this.getAmount() - descuento;
};
/*
let x = new Customer(23, "olegario", 20);
let w = new Customer(26, "ole", 20);
let s = new Invoice(24, x,100);

console.log(s.getID());
console.log(s.getCustomer());
console.log(s.getAmount());
console.log(s.getCustomerName());
console.log(s.getAmountAfterDiscount());
s.setCustomer(w);
s.setAmount(10);
console.log("Despues de la insercion");
console.log(s.getCustomer());
console.log(s.getAmount());
console.log(s.getCustomerName());
console.log(s.getAmountAfterDiscount());*/

module.exports = Invoice;
