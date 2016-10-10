"use strict";
/**
 * Created by jazielsama on 3/10/16.
 */
/*
 *
 * Create a new class called Account. It will contain 3 private properties:
 id:int
 customer:NewCustomer
 balance:float = 0.0
 The constructor will receive 2 or 3 arguments.
 The id and customer are required,
 but the balance is optional.
 You will have to overload the constructor to allow these 2 signatures:
 Account(id:int, customer:Customer, balance:float).
 Account(id:int, customer:Customer).
 If the balance is not given, it will be set to 0.0.
 It will also have the following methods:
 getID():int returns the id of the instance.
 getCustomer():Customer returns the customer object of the instance.
 getBalance():float returns the balance of the instance.
 setBalance(balance:float):void sets a new balance to the instance.
 toString():string returns a string following the pattern “name(ID) balance=$xxx.xx” (balance is rounded to 2 decimal places).
 getCustomerName():string returns the customer’s name of the instance.
 deposit(amount:float):Account adds amount to the balance of the instance (follow the same logic as the created in previous exercises).
 withdraw(amount:float):Account subtract the amount to the balance of the instance if possible (follow the same logic as the created in previous exercises).

 * */
var Customer = require ('./Customer');


function Account () {
	var len = arguments.length;
	if (len === 2 || len === 3) {
		var id = arguments[0];
		var customer = arguments[1];
		var balance;

		if (len === 2) {
			balance = 0.0;

		} else {
			balance = arguments[2];
		}

		this.getID = function getID () {
			return id;
		};

		this.getCustomer = function getCustomer () {
			return customer;
		};

		this.getBalance = function getBalance () {
			return balance;

		};

		this.setBalance = function setBalance (newBalance) {
			balance = newBalance;
		};

		this.deposit = function deposit (amount) {
			balance += amount;
			return this;  // forget to return this :(
		};

		this.withdraw = function withdraw (amount) {
			if (amount < this.getBalance()){
				balance -= amount;
			}return this; //forget to return this :(
		}
	}
}

Account.prototype.toString = function toString () {
	return this.getCustomer ().toString () + ' balance=$' + this.getBalance ().toFixed(2);
};

Account.prototype.getCustomerName = function () {
	return this.getCustomer().getName();
};

module.exports = Account;

