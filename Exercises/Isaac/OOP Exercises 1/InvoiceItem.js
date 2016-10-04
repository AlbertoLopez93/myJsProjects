(function() {
    'use strict';

    var assert = require('./assert');

    function InvoiceItem(invoice) {
        var id = invoice.id;
        var desc = invoice.desc;
        var qty = invoice.qty;
        var unitPrice = invoice.unitPrice;

        // getID():string returns the id of the invoiceItem
        this.getID = function getID() {
            return id;
        };

        // getDesc():string returns the desc (description) of the invoiceItem.
        this.getDesc = function getDesc() {
            return desc;
        };

        // getQty():int returns the qty (quantity) of the invoiceItem.
        this.getQty = function getQty() {
            return qty;
        };

        // getUnitPrice():float returns the unitPrice of the invoiceItem.
        this.getUnitPrice = function getUnitPrice() {
            return unitPrice;
        };

        // setUnitPrice(unitPrice:float):void set a new unitPrice for the invoiceItem.
        this.setUnitPrice = function setUnitPrice(_unitPrice) {
            if (assert.Number(_unitPrice)) {
                unitPrice = _unitPrice;
            }
        };
    }

    // getTotal():float calculates the total of the invoiceItem and returns it.
    InvoiceItem.prototype.getTotal = function getTotal() {
        return this.getQty() * this.getUnitPrice();
    };

    // toString():string returns a string that will follow the pattern: “InvoiceItem[id=?, desc=?, qty=?, unitPrice=?]”
    InvoiceItem.prototype.toString = function toString() {
        return "InvoiceItem[id=" + this.getID() + ", desc=" + this.getDesc() + ", qty=" + this.getQty() + ", unitPrice=" + this.getUnitPrice() + "]";
    };

    module.exports = InvoiceItem;
}());
