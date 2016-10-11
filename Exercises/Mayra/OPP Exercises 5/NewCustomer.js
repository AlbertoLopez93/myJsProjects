"use strict";
function NewCustomer(ID,name,gender) {
    this.getID=function getID() {
        return ID;
    }
    this.getName=function getName() {
        return name;
    }
    this.getGender=function getGender() {
        return gender;
    }
    this.setDiscount=function setDiscount(newDiscount) {
        if (typeof newDiscount==="number") {
            discount=newDiscount;
        }
    }
}
NewCustomer.prototype.toString = function toString() {
    let str=this.getName()+"("+this.getID()+")";
    return str;
};/*
var cus= new NewCustomer(111,"mayra","f");
console.log(cus.getID());
console.log(cus.getName());
console.log(cus.getGender());
console.log(cus.toString());*/
module.exports=NewCustomer;
