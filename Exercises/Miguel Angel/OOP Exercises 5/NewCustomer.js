"use strict"

function NewCustomer(ID, name, gender){
  var newID = ID
  var newName = name;
  var newGender = gender;
  this.getID = function getID (){
    return newID;
  };
  this.getName = function getName(){
    return newName;
  };
  this.getGender = function getGender(){
    return newGender;
  };
}

NewCustomer.prototype.toString = function toString(){
  return this.getName() +"(" + this.getID() + ")";
}

module.exports = NewCustomer;
