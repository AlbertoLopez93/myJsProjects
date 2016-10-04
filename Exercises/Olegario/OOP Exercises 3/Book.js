"use strict"
var Author = require("./Author");

function Book(instancia) {
  let name = instancia.name;
  let author = instancia.author;
  let price = instancia.price;
  let qty = instancia.qty ? instancia.qty : 0;

  this.getName = function () {
    return name;
  };
  this.getAuthor = function () {
    return author;
  };
  this.setPrice = function (newPrice) {
    if (typeof(newPrice) === "number") {
      price = newPrice;
    }
  };
  this.getPrice = function () {
    return price;
  };
  this.getQty = function () {
    return qty;
  };
  this.setQty = function (newQty) {
    if (typeof(newQty) === "number") {
      qty = newQty;
    }
  };
  this.getPrice = function () {
    return price;
  };

}

Book.prototype.toString = function () {
  return "Book[name="+this.getName()+", Author[name="+ this.getAuthor().getName() +", email="+ this.getAuthor().getEmail() +", gender="+ this.getAuthor().getGender() +"], price="+ this.getPrice() +", qty="+ this.getQty() +"]";
};

var autor = {
  name : "olegario",
  email : "ole.com",
  gender : "m"
};

var x = {
  name : "Uno",
  author : new Author(autor),
  price : 235
};

var w = new Book(x);
/*
console.log(w.getName(), w.getAuthor(), w.getPrice(), w.getQty());
console.log(w.setQty(10));
console.log(w.getName(), w.getAuthor(), w.getPrice(), w.getQty());
console.log(w.toString());
console.log(w.setQty("otro.com"));
console.log(w.getName(), w.getAuthor(), w.getPrice(), w.getQty());
console.log(w.toString());*/

module.exports = Book;
