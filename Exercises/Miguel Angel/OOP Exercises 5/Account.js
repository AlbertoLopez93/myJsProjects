"use strict"

let NewCustomer = require("./NewCustomer");

function Account (id, customer, balance){
  var newID = id;
  var newCustomer = customer;
  var newBalance = balance || 0.0;
  this.getID = function getID(){
    return newID;
  };
  this.getCustomer = function getCustomer(){
    return newCustomer;
  };
  this.getBalance = function getBalance(){
    return newBalance;
  };
  this.setBalance = function setBalance(myNewBalance){
    newBalance = myNewBalance;
  };
}

Account.prototype.toString = function toString(){
  return this.getCustomer().toString() + " balance=$" + this.getBalance().toFixed(2);
};

Account.prototype.getCustomerName = function getCustomerName(){
  return this.getCustomer().getName();
};

Account.prototype.deposit = function deposit(amount){
  this.setBalance(this.getBalance() + amount);
  return this;
};

Account.prototype.withdraw = function withdraw(amount){
  if(amount < this.getBalance()){
    this.setBalance(this.getBalance() - amount);
  } else {
    console.log("Amount exceeded balance");
  }
  return this;
};

module.exports = Account;
