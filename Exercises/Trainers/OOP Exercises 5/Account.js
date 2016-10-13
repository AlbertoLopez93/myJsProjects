"use strict";

function Account() {
  let id = arguments[0];
  let customer = arguments[1];
  let balance = arguments[2] || 0;

  this.getID = function getID() {
    return id;
  };

  this.getCustomer = function getCustomer() {
    return customer;
  };

  this.getBalance = function getBalance() {
    return balance;
  };

  this.setBalance = function setBalance(newBalance) {
    balance = newBalance;
  };
}

Account.prototype.toString = function() {
  let roundedBalance = Math.round(this.getBalance()).toFixed(2);
  let customer = this.getCustomer();

  return customer.getName() + "(" + customer.getID() + ") balance=$" + roundedBalance;
};

Account.prototype.getCustomerName = function() {
  return this.getCustomer().getName();
};

Account.prototype.deposit = function(amount) {
  let currentBalance = this.getBalance();
  this.setBalance(currentBalance + amount);
  return this;
};

Account.prototype.withdraw = function(amount) {
  let currentBalance = this.getBalance();
  if (amount > currentBalance) {
    console.log("Amount withdraw exceeds the current balance");
  } else {
    this.setBalance(currentBalance - amount);
  }
  return this;
};

module.exports = Account;
