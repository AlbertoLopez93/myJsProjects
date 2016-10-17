(function() {
    'use strict';

    function Account(newId, newCustomer, newBalance) {
        let id = newId,
            customer = newCustomer,
            balance = newBalance || 0;

        // getID():int returns the id of the instance.
        this.getID = function getID() {
            return id;
        };

        // getCustomer():NewCustomer returns the customer object of the instance.
        this.getCustomer = function getCustomer() {
            return customer;
        };

        // getBalance():float returns the balance of the instance.
        this.getBalance = function getBalance() {
            return balance;
        };

        // setBalance(balance:float):void sets a new balance to the instance.
        this.setBalance = function setBalance(newBalance) {
            balance = newBalance;
        };
    }

    // toString():string returns a string following the pattern “name(ID) balance=$xxx.xx” (balance is rounded to 2 decimal places).
    Account.prototype.toString = function toString() {
        return this.getCustomerName() + '(' + this.getCustomer().getID() + ') balance=$' + this.getBalance().toFixed(2);
    };

    // getCustomerName():string returns the customer’s name of the instance.
    Account.prototype.getCustomerName = function getCustomerName() {
        return this.getCustomer().getName();
    };

    // deposit(amount:float):Account adds amount to the balance of the instance
    // (follow the same logic as the created in previous exercises).
    Account.prototype.deposit = function deposit(amount) {
        let newBalance = this.getBalance() + amount;
        this.setBalance(newBalance);
        return this;
    };

    // withdraw(amount:float):Account subtract the amount to the balance of the instance if possible
    // (follow the same logic as the created in previous exercises).
    Account.prototype.withdraw = function withdraw(amount) {
        if (this.getBalance() >= amount) {
            let newBalance = this.getBalance() - amount;
            this.setBalance(newBalance);
        } else {
            console.log('Amount withdraw exceeds the current balance');
        }
        return this;
    };

    module.exports = Account;
}());
