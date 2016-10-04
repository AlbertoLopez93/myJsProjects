"use strict";
function Customer(id,name,discount){
  this.getID=function getID(){
    return id;
  }
  this.getName=function getName(){
    return name;
  }
  this.getDiscount=function getDiscount(){
    return discount;
  }
  this.setDiscount=function setDiscount(newDiscount){
    discount=newDiscount;
  }
}
Customer.prototype.toString=function(){
  var name,id;
  name=this.getName();
  id=this.getID();
  return name+"("+id+")";
}
module.exports=Customer;
