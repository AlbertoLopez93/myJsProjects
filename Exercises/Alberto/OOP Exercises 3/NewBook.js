"use strict"

var Author = require("./Author");

function NewBook(book) {
  var name = book.name;
  var authors = book.Author;
  var price = book.price;
  var qty = book.qty||0;
  this.getName = function getName() {
    return name;
  }
  this.getAuthors = function getAuthors() {
    for(var i in authors) {
      authors[i].name = authors[i].getName();
      authors[i].email = authors[i].getEmail();
      authors[i].gender = authors[i].getGender();
    }
    /*for(var i in authors) {
      delete authors[i].getName;
      delete authors[i].getEmail;
      delete authors[i].setEmail;
      delete authors[i].getGender;
    }*/
    return authors;
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

NewBook.prototype.toString = function() {
  var stringy='Book[name='+this.getName()+', authors={';
  stringy += this.getAuthors();
  stringy +='}, price='+this.getPrice()+', qty='+this.getQty()+']';
  return stringy;
}
module.exports = NewBook;

var Manuel = new Author({name:'I Manuel Altamirano',email:'ima@domain',gender:'m'});
var Peter = new Author({name:'Peter Hunts',email:'peter@domain',gender:'m'});
var Navidad = new NewBook({name:'Navidad en Montañas',Author:[Manuel,Peter],price:35.6});
console.log(Navidad.getAuthors());
console.log(Navidad.toString());
