"use strict"

var NewCustomer = require("./NewCustomer");

function Account() {
  let id, customer, balance;
  if (arguments.length === 3) {
    id = arguments[0];
    customer = arguments[1];
    balance = arguments[2];
  }
  if (arguments.length === 2) {
    id = arguments[0];
    customer = arguments[1];
    balance = 0.0;
  }

  this.getID = function () {
    return id;
  };
  this.getCustomer = function () {
    return customer;
  };
  this.getBalance = function () {
    return balance;
  };
  this.setBalance = function (newBalance) {
    balance = newBalance;
  };

}

Account.prototype.toString = function () {
  return this.getCustomer().getName() + "(" + this.getCustomer().getID() + ") balance=$" + this.getBalance().toFixed(2);
};

Account.prototype.getCustomerName = function () {
  return this.getCustomer().getName();
};

Account.prototype.deposit = function (newDeposit) {
  this.setBalance(this.getBalance() + newDeposit);
  return this;
};

Account.prototype.withdraw = function (newWithdraw) {
  if (newWithdraw <= this.getBalance()) {
   this.setBalance(this.getBalance() - newWithdraw);
  }
  else {
    console.log("Amount withdraw exceeds the current balance");
  }
  return this;
};
/*
let x = new NewCustomer(23, "olegario", "m");
let s = new Account(2, x, 50.555)
console.log(s.getID());
console.log(s.getCustomer());
console.log(s.getBalance());
console.log(s.setBalance(50.43));
console.log(s.toString());
console.log(s.getCustomerName());
console.log(s.deposit(50));
console.log(s.getBalance());
console.log(s.withdraw(100));
console.log(s.getBalance());*/

module.exports = Account;
