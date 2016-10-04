"use strict"

var Author = require("./Author");

function NewBook(book) {
  var name = book.name;
  var authors = book.authors;
  var price = book.price;
  var qty = book.qty||0;
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
  this.setQty = function setQty(quantity) {
    qty = quantity;
  }
  this.getQty = function getQty() {
    return qty;
  }
}

NewBook.prototype.toString = function() {
  var stringy='NewBook[name='+this.getName()+', authors={';
  let autors = this.getAuthors();
  for (let k in autors) {
    stringy = stringy.toString()+autors[k]+', ';
  }
  stringy = stringy.slice(0,-2);
  stringy +='}, price='+this.getPrice()+', qty='+this.getQty()+']';
  return stringy;
}
NewBook.prototype.getAuthorNames = function() {
  var authorNames=this.getAuthors().map(function(g){return g.getName()});
  return authorNames.reduce(function(g,h){return g+', '+h});
}

module.exports = NewBook;

var Manuel = new Author({name:'I Manuel Altamirano',email:'ima@domain',gender:'m'});
var Peter = new Author({name:'Peter Hunts',email:'peter@domain',gender:'m'});
var Navidad = new NewBook({name:'Navidad en Montañas',authors:[Manuel,Peter],price:35.6});
console.log(Navidad.getAuthors());
console.log(Navidad.toString());
console.log(Navidad.getAuthorNames());
