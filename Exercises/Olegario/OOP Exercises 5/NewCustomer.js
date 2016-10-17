"use strict"

var Invoice = require("./Invoice");

function NewCustomer(newID, newName, newGender) {
  let ID = newID;
  let name = newName;
  let gender = newGender;

  this.getID = function () {
    return ID;
  };
  this.getName = function () {
    return name;
  };
  this.getGender = function () {
    return gender;
  };

}

NewCustomer.prototype.toString = function () {
  return this.getName() + "(" + this.getID() + ")";
};

/*
let x = new NewCustomer(23, "olegario", "m");
console.log(x.getID());
console.log(x.getName());
console.log(x.getGender());
console.log(x.toString());*/

module.exports = NewCustomer;
