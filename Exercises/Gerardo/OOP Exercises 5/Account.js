"use strict"

var NewCustomer = require("./NewCustomer.js");

function Account(id, customer, balance) {
  var id = id;
  var customer = customer;
  var balance = balance || 0;
  this.getID = function getID() {
    return id;
  }
  this.getCustomer = function getCustomer() {
    return customer;
  }
  this.getBalance = function getBalance() {
    return balance;
  }
  this.setBalance = function setBalance(newBalance) {
    balance = newBalance;
  }
}

Account.prototype.toString = function toString() {
  return this.getCustomer().toString() + " balance=$" + this.getBalance().toFixed(2);
}

Account.prototype.getCustomerName = function getCustomerName() {
  return this.getCustomer().getName();
}

Account.prototype.deposit = function deposit(amount) {
  this.setBalance(this.getBalance() + amount);
  return this;
}

Account.prototype.withdraw = function withdraw(amount) {
  if(amount <= this.getBalance()) {
    this.setBalance(this.getBalance() - amount);
  } else {
    console.log("Amount exceeded balance")
  }
  return this;
}

module.exports = Account;
