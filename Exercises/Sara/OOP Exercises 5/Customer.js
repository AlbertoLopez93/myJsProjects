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
var c=new Customer(34567,"Sara",20);
// console.log(c.getID());
// console.log(c.getName());
// console.log(c.getDiscount());
// console.log(c.toString());
// console.log(c.id);
// c.setDiscount(45);
// console.log(c.getDiscount());
module.exports=Customer;
