(function() {
    'use strict';

    var assert = require('./assert');

    function Account(account) {
        var id = account.id;
        var name = account.name;
        var balance = account.balance;

        // 	getID():string returns the id of the account.
        this.getID = function getID() {
            return id;
        };

        // getName():string return the name of the account.
        this.getName = function getName() {
            return name;
        };

        // getBalance():int return the balance of the account.
        this.getBalance = function getBalance() {
            return balance;
        };

        // credit(amount:int):int add the given amount to the balance of the instance and returns the new balance.
        this.credit = function credit(amount) {
            if (assert.Number(amount)) {
                balance += amount;
            }
            return this.getBalance();
        };

        // debit(amount:int):int this method will check the amount you wanna use is less than the balance you have in the account.
        // If it is, then the amount will be subtracted from the balance and the new balance will be returned.
        // If the amount you wanna subtract is greater than the balance,
        // the method will print to the screen/console the message: “Amount exceeded balance”,
        // will not subtract the amount and will return the balance.
        this.debit = function debit(amount) {
            if (assert.Number(amount)) {
                if (amount <= this.getBalance()) {
                    balance -= amount;
                } else {
                    console.log("Amount exceeded balance");
                }
            }
            return this.getBalance();
        };
    }

    // transferTo(another:Account, amount:int):int this method will receive another instance of Account and an amount.
    // If the current account have a balance greater than the amount you wanna subtract,
    // then the method should subtract the amount from the balance of the source account,
    // and then add that amount to the target account.
    // If the balance of the source account is not enough (amount is greater than the balance)
    // then the method will print to the screen/console “Amount exceeded balance”.
    // Either scenario should return the balance of the account.
    Account.prototype.transferTo = function transferTo(another, amount) {
        if (another instanceof Account && assert.Number(amount)) {
            if (this.getBalance() >= amount) {
                this.debit(amount);
                another.credit(amount);
            } else {
                console.log("Amount exceeded balance");
            }
        }
        return this.getBalance();
    };

    // toString():string returns a string that will follow the pattern: “Account[id=?, name=?, balance=?]”.
    Account.prototype.toString = function toString() {
        return "Account[id=" + this.getID() + ", name=" + this.getName() + ", balance=" + this.getBalance() + "]";
    };

    module.exports = Account;
}());
