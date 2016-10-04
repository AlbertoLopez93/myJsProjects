"use strict"

var Author = require("./Author");

function NewBook(instancia) {
  let name = instancia.name;
  let authors = instancia.authors;
  let price = instancia.price;
  let qty = instancia.qty ? instancia.qty : 0;

  this.getName = function () {
    return name;
  };
  this.getAuthors = function () {
    return authors;
  };
  this.getPrice = function () {
    return price;
  };
  this.setPrice = function (newPrice) {
    if (typeof(newPrice) === "number") {
      price = newPrice;
    }
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

NewBook.prototype.toString = function () {
  let autores = "";
  let resultAutores = this.getAuthors();
  for (let i = 0; i < resultAutores.length; i++) {
    autores += "Author[name=" + resultAutores[i].getName() + ", email=" + resultAutores[i].getEmail() + ", gender=" + resultAutores[i].getGender() + "]";
    if (i !== resultAutores.length - 1) {
      autores += ", ";
    }
  }
  return "NewBook[name=" + this.getName() + ", authors={" + autores + "}, price=" + this.getPrice() + ", qty="+ this.getQty() + "]";
};

NewBook.prototype.getAuthorNames = function () {
  let autores = "";
  let resultAutores = this.getAuthors();
  for (let i = 0; i < resultAutores.length; i++) {
    autores += resultAutores[i].getName();
    if (i !== resultAutores.length - 1) {
      autores += ", ";
    }
  }
  return autores;
};

var autor = {
  name : "olegario",
  email : "ole.com",
  gender : "m"
};

var autor2 = {
  name : "fernandez",
  email : "fernandez.net",
  gender : "f"
};


var x = {
  name : "Uno",
  authors : new Array(new Author(autor), new Author(autor2)),
  price : 235,
  qty : 34
};

var w = new NewBook(x);
/*
//console.log(w.getName(), w.getAuthors(), w.getPrice(), w.getQty());
console.log(w.setQty(10));
console.log(w.getName(), w.getAuthors(), w.getPrice(), w.getQty());

console.log(w.toString());*/

module.exports = NewBook;
