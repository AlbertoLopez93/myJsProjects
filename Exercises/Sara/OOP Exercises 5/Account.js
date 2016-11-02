"use strict";
var NewCustomer=require("./NewCustomer");
function Account(id,customer,balance){
  if(balance===undefined){
    balance=0.0;
  }
  this.getID=function getID(){
    return id;
  }
  this.getCustomer=function getCustomer(){
    return customer;
  }
  this.getBalance=function getBalance(){
    return balance;
  }
  this.setBalance=function setBalance(newBalance){
    balance=newBalance;
  }
}
Account.prototype.toString=function(){
  var name=this.getCustomer().getName();
  var id=this.getCustomer().getID();
  var balance=this.getBalance().toFixed(2);
  return name+"("+id+")"+" balance=$"+balance;
}
Account.prototype.getCustomerName=function(){
  return this.getCustomer().getName();
}
Account.prototype.deposit=function(newAmount){
  this.setBalance(this.getBalance()+newAmount);
  return this;
}
Account.prototype.withdraw=function(newAmount){
  if(newAmount<=this.getBalance()){
    this.setBalance(this.getBalance()-newAmount);
  }
  else{
    console.log("Amount withdraw exceeds the current balance");
  }
  return this;
}
module.exports=Account;
