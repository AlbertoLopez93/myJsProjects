"use strict"

function Customer (ID, name, discount){
  var newID = ID;
  var newName = name;
  var newDiscount = discount;
  this.getID = function getID (){
    return newID;
  };
  this.getName = function getName(){
    return newName;
  };
  this.getDiscount = function getDiscount(){
    return newDiscount
  };
  this.setDiscount = function setDiscount(myNewDiscount){
    newDiscount = myNewDiscount;
  };
}

Customer.prototype.toString = function toString(){
  return this.getName() + "("+ this.getID() +")";
};

module.exports = Customer;
