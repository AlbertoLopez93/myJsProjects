"use strict"

var Author = require("./Author");

function Book(book) {
  var name = book.name;
  var author = book.author;
  var price = book.price;
  var qty = book.qty||0;
  this.getName = function getName() {
    return name;
  }
  this.getAuthor = function getAuthor() {
    return author;
  }
  this.getPrice = function getPrice() {
    return price;
  }
  this.setPrice = function setPrice(newPrice) {
    price = newPrice;
  }
  this.setQty = function setQty(quantity) {
    qty = quantity;
  }
  this.getQty = function getQty() {
    return qty;
  }
}

Book.prototype.toString = function() {
  var aName = this.getAuthor().getName();
  var aMail = this.getAuthor().getEmail();
  var aGender = this.getAuthor().getGender();
  return 'Book[name='+this.getName()+', Author[name='+aName+', email='+aMail+', gender='+aGender+']\
, price='+this.getPrice()+', qty='+this.getQty()+']';
}
module.exports = Book;

var Person = new Author({name:'I Manuel Altamirano',email:'ima@domain',gender:'m'});
var Navidad = new Book({name:'Navidad en Montañas',author:Person,price:35.6});
//console.log(Navidad.toString());
