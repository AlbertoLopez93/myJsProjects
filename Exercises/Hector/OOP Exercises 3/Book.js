/*Create a class named Book. This class will used the Author class, so don’t start this exercise until you have completed #2.
The Book class which will receive in its constructor an object with the following properties:
name:string
author:Author
price:float
qty:int (optional)
All above properties should be private properties. The qty property can be set when the an
instance is created or not, which means that it will be an optional value for the constructor.
If it’s not passed then, it will defaults to zero. The class will also have the following methods:
getName():string returns the name of the book.
getAuthor():Author returns the author (object) of the book.
getPrice():float returns the price of the book.
setPrice(price:float):void set a new price to the book.
getQty():int returns the qty property of the book.
setQty(qty:int):void set a new qty to the book.
toString():string returns a string following the pattern: “[Book[name=?, Author[name=?, email=?, gender=?], price=?, qty=?]”*/
"use strict"
let Author = require("./Author");
//var author = new Author({ name: "Axel", email: "axl_nolasco@hotmail.com", gender: "m"});
//console.log(author.toString());
function Book(data){
    let name = data.name;
    this.getName = function(){
        if (typeof name === "string") {
            return name;
        }
    }
    let author = data.author;
    this.getAuthor = function(){
        return author;
    }
    let price = data.price;
    this.getPrice = function(){
        if (typeof price === "number") {
            return price;
        }
    }
    this.setPrice = function(newPrice){
        if (typeof newPrice === "number") {
            price = newPrice;
        }
    }
    let qty;
    if (data.qty){
        qty = data.qty;
    } else {
        qty = 0;
    }

    this.getQty = function(){
        return qty;
    }
    this.setQty = function(newQty){
        qty = newQty;
    }
}
Book.prototype.toString = function(){
    return "Book[name=" + this.getName() + ", Author[name=" + this.getAuthor().getName() + ", email=" + this.getAuthor().getEmail() + ", gender=" + this.getAuthor().getGender() + "], price=" + this.getPrice() + ", qty=" + this.getQty() + "]";

};//:string returns a string following the pattern:
//“[Book[name=?, Author[name=?, email=?, gender=?], price=?, qty=?]”
// var book = new Book({ name : "How to play the guitar", author : author, price : 20.50});
// console.log(book.toString());
// book.setPrice(50);
// console.log(book.toString());
// book.setQty(10);
// console.log(book.toString());
module.exports = Book;
