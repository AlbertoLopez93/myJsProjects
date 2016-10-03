"use strict";
var Customer=require("./Customer.js");
function Invoice(ID,customer,amount){
  this.getID=function getID(){
    return ID;
  }
  this.getCustomer=function getCustomer(){
    return customer;
  }
  this.getAmount=function getAmount(){
    return amount;
  }
  this.setCustomer=function setCustomer(newCustomer){
    customer=newCustomer;
  }
  this.setAmount=function setAmount(newAmount){
    amount=newAmount;
  }
}
Invoice.prototype.getCustomerName=function(){
  return this.getCustomer().getName();
}
Invoice.prototype.getAmountAfterDiscount=function(){
  var amount=this.getAmount();
  amount=amount-(amount*(this.getCustomer().getDiscount())/100);
  return amount;
}
var cliente=new Customer(34567,"Sara Wong",20);
var c=new Invoice(121312313,cliente,200);
console.log(c.getCustomerName());
console.log(c.getAmountAfterDiscount());
  module.exports=Invoice;
