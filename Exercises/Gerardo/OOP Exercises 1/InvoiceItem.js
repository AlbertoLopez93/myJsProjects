"use strict"

function InvoiceItem(data) {
  var id = data.id;
  var desc = data.desc;
  var qty = data.qty;
  var unitPrice = data.unitPrice;
  this.getID = function getID() {
    return id;
  }
  this.getDesc = function getDesc() {
    return desc;
  }
  this.getQty = function getQty() {
    return qty;
  }
  this.getUnitPrice = function getUnitPrice() {
    return unitPrice;
  }
  this.setUnitPrice = function setUnitPrice(newUnitPrice) {
    unitPrice = newUnitPrice;
  }
  this.getTotal = function getTotal() {
    var total = qty * unitPrice;
    return total;
  }
  this.toString = function toString() {
    return "InvoiceItem[id=" + id + ", desc=" + desc + ", qty=" + qty + ", unitPrice=" + unitPrice + "]";
  }
}

module.exports = InvoiceItem;
