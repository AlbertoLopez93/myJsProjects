"use strict";
function Customer(ID,name,discount) {

    this.getID=function getID() {
        return ID;
    }
    this.getName=function getName() {
        return name;
    }
    this.getDiscount=function getDiscount() {
        return discount;
    }
    this.setDiscount=function setDiscount(newDiscount) {
        if (typeof newDiscount==="number") {
            discount=newDiscount;
        }
    }
}

Customer.prototype.toString = function toString() {
    let str="name("+this.getID()+")";
    return str;
};/*
var cus= new Customer(2323,"sara",25);
console.log(cus.getID());
console.log(cus.getName());
console.log(cus.getDiscount());
cus.setDiscount(50)
console.log(cus.getDiscount());
console.log(cus.toString());*/

module.exports=Customer;
