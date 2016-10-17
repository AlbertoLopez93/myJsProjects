"use strict";
function Invoice(_id, _customer, _amount){
    var ID = _id;
    this.getID = function() {
        return ID;
    }
    var Invoice = _customer;
    this.getInvoice = function() {
        return Invoice;
    }
    var customer = _customer;
    this.getCustomer = function() {
        return customer;
    }
    this.setCustomer = function(newCustomer) {
        customer = newCustomer;
    }
    var amount = _amount;
    this.getAmount = function() {
        return amount;
    }
    this.setAmount = function(newAmount) {
        amount = newAmount;
    }
}
Invoice.prototype.getInvoiceName = function () {
    var instance = this.getInvoice();
    return instance.getName();
};
Invoice.prototype.getCustomerName = function () {
    var instance = this.getCustomer();
    return instance.getName();
};
Invoice.prototype.getAmountAfterDiscount = function () {
    var instance = this.getInvoice();
    var discountPer = instance.getDiscount();
    var newAmount = this.getAmount() - (this.getAmount() * (discountPer / 100));
    return newAmount;
};
module.exports = Invoice;
