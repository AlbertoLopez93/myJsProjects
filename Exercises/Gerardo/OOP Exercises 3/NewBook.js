"use strict"

var Author = require("./Author.js");

function NewBook(data) {
  let name = data.name;
  let authors = data.authors;
  let price = data.price;
  let qty = data.qty;
  this.getName = function getName() {
    return name;
  }
  this.getAuthors = function getAuthors() {
    return authors;
  }
  this.getPrice = function getPrice() {
    return price;
  }
  this.setPrice = function setPrice(newPrice) {
    price = newPrice;
  }
  this.getQty = function getQty() {
    return qty;
  }
  this.setQty = function setQty(newQty) {
    qty = newQty;
  }
}

NewBook.prototype.toString = function toString() {
  return "Book[name=" + this.getName() + ", authors={" + this.getAuthors().reduce(function(first, second) {return first.toString() +  ", "  +
  second.toString();}) + "}" + ", price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
}

NewBook.prototype.getAuthorsNames = function getAuthorsNames() {
  return this.getAuthors().reduce(function(first, second) {return first.getName() + ", " + second.getName();})
}

module.exports = NewBook;
