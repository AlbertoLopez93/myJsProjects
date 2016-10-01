"use strict";
let Author = require("./Author.js");
function NewBook(obj) {
    let name=obj.name,authors=obj.authors,price=obj.price,qty;
    if (qty===undefined) {
        qty=0;
    }else{
        qty=obj.qty
    }
    this.getName=function getName() {
        return name;
    }
    this.getAuthors=function getAuthors() {
        return authors;
    }
    this.getPrice=function getPrice() {
        return price;
    }
    this.setPrice=function setPrice(newPrice) {
        if (typeof newPrice==="number") {
            price=newPrice;
        }
    }
    this.getQty=function getQty() {
        return qty;
    }
    this.setQty=function setQty(newQty) {
        if (typeof newQty==="number") {
            qty=newQty;
        }
    }

}

NewBook.prototype.toString = function toString() {
  return "Newbook[name=" + this.getName() + ", authors={" + this.getAuthors().reduce(function(previus,current) {return previus.toString() +  ", "  +
  current.toString();}) + "}" + ", price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
}
NewBook.prototype.getAuthorsNames = function getAuthorsNames() {
    let ary=this.getAuthors(),aux="";
    for (var i = 0; i < ary.length; i++) {
        aux+=ary[i].getName();
        if (i<ary.length-1) {
            aux+=", ";
        }
    }
    return aux;
}
var paulo=new Author({name:"Paulo",email:"email@email",gender:"m"})
var coelo=new Author({name:"coelo",email:"coelo@email",gender:"m"})
var jhon=new Author({name:"jhon",email:"john@email",gender:"m"})
var libro= new NewBook({name:"narnia",authors:[paulo,coelo,jhon],price:220.20,qty:3})
/*console.log(libro.toString());
console.log(libro.getName());
console.log(libro.getPrice());
libro.setPrice(100.33);
console.log(libro.getPrice());
libro.setQty(2);
console.log(libro.getQty());
var libro= new NewBook({name:"narnia",authors:[paulo,coelo,jhon],price:55})
console.log(libro.toString());
console.log(libro.getAuthorsNames());*/
module.exports = NewBook;
