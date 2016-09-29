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
  qty=this.getQty();
  unitPrice=this.getUnitPrice();
  return qty*unitPrice;
}
InvoiceItem.prototype.toString=function(){
  id=this.getID();
  desc=this.getDesc();
  qty=this.getQty();
  unitPrice=this.getUnitPrice();
  return "InvoiceItem[id="+id+", desc="+desc+", qty="+qty+", unitPrice="+unitPrice+"]";
}
var c=new InvoiceItem({id:"idejemplo",desc:"lo que sea",qty:3,unitPrice:"3"});
console.log(c.getID());
console.log(c.getDesc());
console.log(c.getQty());
console.log(c.getUnitPrice());
c.setUnitPrice("4");
console.log(c.getUnitPrice());
console.log(c.getTotal());
console.log(c.toString());

module.exports = InvoiceItem;