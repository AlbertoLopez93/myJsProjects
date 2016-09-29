"use strict";

function Account(data) {
    var id = data.id;
    var name = data.name;
    var balance = data.balance;

    this.getID = function getID() {
        return id;
    };

    this.getName = function getName() {
        return name;
    };

    this.getBalance = function getBalance() {
        return balance;
    };

    this.credit = function credit(amount) {
        return balance += amount;
    };

    this.debit = function debit(amount) {
        if (amount <= balance) {
            balance = balance - amount;
        } else {
            console.log("Amount exceeded balance");
        }
        return balance;
    }
}

Account.prototype.transferTo = function transferTo(account, amount) {
    if (this.getBalance() >= amount) {
        this.debit(amount);
        account.credit(amount);
    } else {
        console.log("Amount exceeded balance");
    }
    return this.getBalance();
};

Account.prototype.toString = function toString() {
    return "Account[id=" + this.getID() + ", name=" + this.getName() +", balance=" + this.getBalance() +"]";
};

module.exports = Account;
