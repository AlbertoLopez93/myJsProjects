"use strict";

function InvoiceItem(data) {
    let id = data.id;
    let desc = data.desc;
    let qty = data.qty;
    let unitPrice = data.unitPrice;

    this.getID = function getID() {
        return id;
    };

    this.getDesc = function getDesc() {
        return desc;
    };

    this.getQty = function getQty() {
        return qty;
    };

    this.getUnitPrice = function getUnitPrice() {
        return unitPrice;
    };

    this.setUnitPrice = function setUnitPrice(newUnitPrice) {
        unitPrice = newUnitPrice;
    }
}

InvoiceItem.prototype.getTotal = function getTotal() {
    return this.getQty() * this.getUnitPrice();
};

InvoiceItem.prototype.toString = function toString() {
    return "InvoiceItem[id=" + this.getID() + ", desc=" + this.getDesc() +", qty=" + this.getQty() + ", unitPrice=" + this.getUnitPrice() +"]";
};

module.exports = InvoiceItem;
