"use strict";
function Account(obj) {
    var id=obj.id,name=obj.name,balance=obj.balance;
    this.setId=function setId(newId) {
        newId=id;
        return this;
    }
    this.getID=function getID() {
        return id;

    }
    this.setName=function setName(newName) {
        if (typeof newFirstName!=='string') {
            return this;
        }
        Name=newName;
        return this;
    }
    this.getName=function getName() {
        return name;

    }
    this.getBalance=function getBalance() {
        return balance;

    }
    this.setBalance=function setBalance(newBalance) {
        if (typeof newBalance!=='number') {
            return this;
        }
        salary=newBalance;
        return this;
    }

}
Account.prototype={};
Account.prototype.credit = function credit(amount) {


};
