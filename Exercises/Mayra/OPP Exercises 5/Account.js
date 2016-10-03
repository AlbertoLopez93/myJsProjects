"use strict";
let  NewCustomer=require("./NewCustomer.js");
function Account(id,customer,balance) {
    let balance=balance||0.0;
    this.getID=function getID() {
        return ID;
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
    let str="name("+this.getID()+" balance=$"+thi.getBalance().toFixed(); +")";
    return str;
};
Account.prototype.getCustomerName=function getCustomerName() {
    return this.getCustomer().getName();
}
Account.prototype.deposit=function deposit(amount) {

    if (typeof amount==="number"&&amount>0){
        let result=this.getBalance()+amount;
        this.setBalance(result);
        return this
    }
}
Account.prototype.withdraw=function withdraw(amount) {
        if (amount<=this.getBalance()) {
            let subtract=this.getBalance()-amount;
            this.setBalance(subtract);
            return this;

        }else {

            return this;
        }
}

module.exports=Account;
