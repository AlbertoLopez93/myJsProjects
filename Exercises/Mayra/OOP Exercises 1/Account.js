"use strict";
function Account(obj){
    var id=obj.id,name=obj.name,balance=obj.balance;
    this.setId=function setId(newId) {
        id=newId;
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
        balance=newBalance;
        return this;
    }
    this.credit = function credit(amount) {
        let total= this.getBalance()+amount;
        this.setBalance(total);
        return this.getBalance();

    };
    this.debit = function debit(amount) {
        let msj="Amount exceeded balance";
            if (amount<=this.getBalance()) {
                let subtract=this.getBalance()-amount;
                this.setBalance(subtract);
                return this.getBalance();

            }else {
                console.log(msj);
                return this.getBalance();
            }
    };
}
Account.prototype={};

Account.prototype.transferTo = function transferTo(another,amount) {
    let msj= "Amount exceeded balance";
        if (amount<=this.getBalance()) {
            this.debit(amount);
            another.credit(amount);
            return this.getBalance();

        }else {
            console.log(msj);
            return this.getBalance();
        }
};
Account.prototype.toString = function toString() {
    let str="Account[id="+this.getID()+", name="+this.getName()+", balance="+this.getBalance()+"]";
    return str;
};

module.exports = Account;
