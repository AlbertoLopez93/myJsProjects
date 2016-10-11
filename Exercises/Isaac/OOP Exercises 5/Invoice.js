(function() {
    'use strict';

    function Invoice(newID, newCustomer, newAmount) {
        let ID = newID,
            customer = newCustomer,
            amount = newAmount;

        // getID():int returns the ID of the instance.
        this.getID = function getID() {
            return ID;
        };

        // getCustomer():Customer returns the customer object of the instance.
        this.getCustomer = function getCustomer() {
            return customer;
        };

        // getAmount():float returns the amount of the instance.
        this.getAmount = function getAmount() {
            return amount;
        };

        // setCustomer(customer:Customer):void sets a new customer of type Customer to the instance.
        this.setCustomer = function setCustomer(newCustomer) {
            customer = newCustomer;
        };

        // setAmount(amount:float):void sets a new amount to the instance.
        this.setAmount = function setAmount(newAmount) {
            amount = newAmount;
        };
    }

    // getCustomerName():string returns the name of the customer of the instance.
    Invoice.prototype.getCustomerName = function getCustomerName() {
        return this.getCustomer().getName();
    };

    // getAmountAfterDiscount():float returns calculated amount after applying the customer’s instance discount to it.
    Invoice.prototype.getAmountAfterDiscount = function getAmountAfterDiscount() {
        return this.getAmount() - this.getAmount() * this.getCustomer().getDiscount() / 100;
    };

    module.exports = Invoice;
}());
