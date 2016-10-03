"use strict";
function NewCustomer(ID,name,gender){
  this.getID=function getID(){
    return ID;
  }
  this.getName=function getName(){
    return name;
  }
  this.getGender=function getGender(){
    return gender;
  }
}
NewCustomer.prototype.toString=function(){
  var name,id;
  name=this.getName();
  id=this.getID();
  return name+"("+id+")";
}
var c=new NewCustomer(34567,"Sara","f");
// console.log(c.getID());
// console.log(c.getName());
// console.log(c.getGender());
// console.log(c.toString());
module.exports=NewCustomer;
