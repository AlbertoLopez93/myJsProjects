"use strict"

function Customer(newID, newName, newDiscount) {
  let ID = newID;
  let name = newName;
  let discount = newDiscount;

  this.getID = function () {
    return ID;
  };
  this.getName = function () {
    return name;
  };
  this.getDiscount = function () {
    return discount;
  };
  this.setDiscount = function (newDiscount) {
    discount = newDiscount;
  };
}

Customer.prototype.toString = function () {
  return  this.getName() + "(" + this.getID() + ")";
};

let x = new Customer(23, "olegario", 1);
/*console.log(x.getID());
console.log(x.getName());
console.log(x.getDiscount());
x.setDiscount(0);
console.log(x.getDiscount());
console.log(x.toString());*/

module.exports = Customer;
