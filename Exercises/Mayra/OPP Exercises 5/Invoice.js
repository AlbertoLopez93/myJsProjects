"use strict";
let Customer=require("./Customer.js");
function Invoice(ID,customer,amount) {
    this.getID=function getID() {
        return ID;
    }
    this.getCustomer=function getCustomer() {
        return customer;
    }
    this.getAmount=function getAmount() {
        return amount;
    }
    this.setCustomer=function setCustomer(newCustomer) {
        customer=newCustomer;
    }
    this.setAmount=function setAmount(newAmount) {
        amount=newAmount;
    }

}
Invoice.prototype.getCustomerName=function getCustomerName() {
    return this.getCustomer().getName();
}
Invoice.prototype.getAmountAfterDiscount=function getAmountAfterDiscount() {
    let result=this.getAmount()-(this.getAmount()*this.getCustomer().getDiscount()/100);
    return result;
}/*
var cus= new Customer(2323,"sara",25);
var cus2= new Customer(2222,"beto",15);

var inv=new Invoice(2324,cus,100);
console.log(inv.getID());
console.log(inv.getCustomer());
console.log(inv.getAmount());
console.log(inv.getCustomerName());
inv.setCustomer(cus2);
console.log(inv.getCustomerName());
inv.setAmount(200);
console.log(inv.getAmount());
console.log(inv.getAmountAfterDiscount());*/
module.exports=Invoice;
