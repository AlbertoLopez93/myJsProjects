"use strict"

function InvoiceItem(cons) {
  var id = cons.id;
  var desc = cons.desc;
  var qty = cons.qty;
  var unitPrice = cons.unitPrice;

  this.getID = function() {
    return id;
  }
  this.getDesc = function() {
    return desc;
  }
  this.getQty = function() {
    return qty;
  }
  this.getUnitPrice = function() {
    return unitPrice;
  }
  this.setUnitPrice = function(value) {
    unitPrice=value;
  }
}

InvoiceItem.prototype ={};
InvoiceItem.prototype.getTotal = function() {
  return this.getQty()*this.getUnitPrice();
}
InvoiceItem.prototype.toString = function() {
  return 'InvoiceItem[id='+this.getID()+', desc='+this.getDesc()+', qty='+this.getQty()+', unitPrice='+this.getUnitPrice()+']';
}

var product = new InvoiceItem({id:'xz3', desc:'chips', qty:3, unitPrice:9.5});
console.log(product.getTotal());
console.log(product.toString());

module.exports = InvoiceItem;
