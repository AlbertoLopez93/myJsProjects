"use strict";
let  NewCustomer=require("./NewCustomer.js");
function Account(id,customer,balance) {

    if (balance===undefined) {
        balance=0.0;

    }
    this.getID=function getID() {
        return id;
    }
    this.getCustomer=function getCustomer() {
        return customer;
    }
    this.getBalance=function getBalance() {
        return balance;
    }
    this.setBalance=function setBalance(newBalance) {
        if (typeof newBalance==="number"){
            balance=newBalance;
        }
    }
}
Account.prototype.toString = function toString() {
    let str=this.getName()+"("+this.getID()+" balance=$"+this.getBalance().toFixed(2)+")";
    return str;
};
Account.prototype.getCustomerName=function getCustomerName() {
    return this.getCustomer().getName();
}
Account.prototype.deposit=function deposit(amount) {

    if (typeof amount==="number"&&amount>0){
        let result=this.getBalance()+amount;
        this.setBalance(result);
        return this;
    }
}
Account.prototype.withdraw=function withdraw(amount) {
    let msj="Amount withdraw exceeds the current balance";
        if (amount<=this.getBalance()) {
            let subtract=this.getBalance()-amount;
            this.setBalance(subtract);
            return this;

        }else {
            console.log(msj);
            return this;
        }
}/*
var cus= new NewCustomer(111,"mayra","f");
var prueba= new Account(5555,cus,52.0);
var prueba2= new Account(2222,cus);
console.log(prueba.getID());
console.log(prueba.getBalance());
console.log(prueba2.getID());
console.log(prueba2.getBalance());
prueba.setBalance(100.2233);
console.log(prueba.getBalance());
console.log(prueba.toString());
console.log(prueba.getCustomerName());
console.log(prueba.deposit(100));
console.log(prueba.getBalance());
console.log(prueba.withdraw(100));
console.log(prueba.getBalance());*/
module.exports=Account;
