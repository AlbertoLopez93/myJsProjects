"use strict";
/**
 * Created by jazielsama on 3/10/16.
 */
/*
 * Create a class called Invoice. It will contain 3 private properties:
 ID:int
 customer:Customer
 amount:float
 The constructor class will receive these 3 properties as arguments,
 therefore you will have a single
 signature: Invoice(ID:int, customer:Customer, amount:float).
 It will also have the following methods:
 getID():int returns the ID of the instance.
 getCustomer():Customer returns the customer object of the instance.
 getAmount():float returns the amount of the instance.
 setCustomer(customer:Customer):void sets a new customer of type Customer to the instance.
 setAmount(amount:float):void sets a new amount to the instance.
 getCustomerName():string returns the name of the customer of the instance.
 getAmountAfterDiscount():float returns calculated amount after applying the customer’s instance discount to it.

 * */
var Customer = require ('./Customer');

function Invoice (ID, customer, amount) {
	var ID = ID;
	var customer = customer;
	var amount = amount;

	this.getID = function getID () {
		return ID;
	};

	this.getCustomer = function getCustomer () {
		return customer;
	};

	this.getAmount = function getAmount () {
		return amount;
	};

	this.setCustomer = function setCustomer (newCustomer) {
		customer = newCustomer;
	};

	this.setAmount = function setAmount (newAmount) {
		amount = newAmount;
	};
}

Invoice.prototype.getCustomerName = function getCustomerName () {
	return this.getCustomer ().getName ();
};

Invoice.prototype.getAmountAfterDiscount = function getAmountAfterDiscount () {
	return this.getAmount () - (this.getAmount () * this.getCustomer ().getDiscount () / 100);
};

module.exports = Invoice;

