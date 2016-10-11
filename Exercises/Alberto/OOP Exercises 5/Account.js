"use strict"

var NewCustomer = require("./NewCustomer");

function Account(id, customer, bala) {
  var balance = bala ||0.0;
  this.getID = function getID() {
    return id;
  }
  this.getCustomer = function getCustomer() {
    return customer;
  }
  this.getBalance = function getBalance() {
    return balance;
  }
  this.setBalance = function setBalance(yourBalance) {
    balance = yourBalance;
  }
}
Account.prototype.toString = function toString() {
  return this.getCustomer().toString() + ' balance=$' + this.getBalance().toFixed(2);
}
Account.prototype.getCustomerName = function getCustomerName() {
  return this.getCustomer().getName();
}
Account.prototype.deposit = function deposit(quantity) {
  let total = this.getBalance();
  total += quantity;
  this.setBalance(total);
  return this;
}
Account.prototype.withdraw = function withdraw(quantity) {
  let total = this.getBalance();
  if(total<quantity) {
    console.log("Amount withdraw exceeds the current balance");
  }
  else {
    total-=quantity;
    this.setBalance(total);
  }
  return this;
}

module.exports = Account;

var myCustom = new NewCustomer(9,'George','m');
var myAccount = new Account(5,myCustom,400.95);
console.log(myAccount.toString());
console.log(myAccount.getCustomerName());
console.log(myAccount.deposit(150));
console.log(myAccount.getBalance());
console.log(myAccount.withdraw(360).getBalance());
console.log(myAccount.toString());
