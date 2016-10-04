"use strict";
let Author = require("./Author.js");
function Book(obj) {
    let name=obj.name, author=obj.author,price=obj.price,qty=obj.qty||0;
        
    this.getName=function getName() {
        return name;
    }
    this.getAuthor=function getAuthor() {
        return author;
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
Book.prototype.toString=function toString() {
    let str= "Book[name="+this.getName()+", "+this.getAuthor().toString()+", price="+this.getPrice()+", qty="+this.getQty()+"]";
    return str;
}
/*var paulo=new Author({name:"Paulo",email:"email@email",gender:"m"})
var libro= new Book({name:"narnia",author:paulo,price:220.20,qty:3})
console.log(libro.toString());
console.log(libro.getName());
console.log(libro.getAuthor());
console.log(libro.getPrice());
libro.setPrice(100.33);
console.log(libro.getPrice());
libro.setQty(2);
console.log(libro.getQty());
var libro= new Book({name:"narnia",author:paulo,price:220.20})
console.log(libro.toString());*/
module.exports=Book;
