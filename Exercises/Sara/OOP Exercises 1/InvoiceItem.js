"use strict";
function InvoiceItem(object){
  var id=object.id;
  var desc=object.desc;
  var qty=object.qty;
  var unitPrice=object.unitPrice;
  this.getID = function() {
    return id;
  };
  this.getDesc = function() {
    return desc;
  };
  this.getQty = function() {
    return qty;
  };
  this.getUnitPrice = function() {
    return unitPrice;
  };
  this.setUnitPrice = function(newUnitPrice){
      unitPrice = newUnitPrice;
  };
}
InvoiceItem.prototype.getTotal=function(){
  var qty=this.getQty();
  var unitPrice=this.getUnitPrice();
  return qty*unitPrice;
}
InvoiceItem.prototype.toString=function(){
  var id=this.getID();
  var desc=this.getDesc();
  var qty=this.getQty();
  var unitPrice=this.getUnitPrice();
  return "InvoiceItem[id="+id+", desc="+desc+", qty="+qty+", unitPrice="+unitPrice+"]";
}
module.exports = InvoiceItem;
