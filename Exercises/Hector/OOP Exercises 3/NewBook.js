/*Create a class named NewBook. This class will used the Author class,
so don’t start this exercise until you have completed #2.
The NewBook class which will receive in its constructor an object with the following properties:
name:string
authors:Author[] (<- this [] is used to define that a property will be a list of things, in this case a list of Author’s instances).
price:float
qty:int (optional)
All above properties should be private properties.
    The qty property can be set when the an instance is created or not,
    which means that it will be an optional value for the constructor.
    If it’s not passed then, it will defaults to zero. The class will
    also have the following methods:
getName():string returns the name of the book.
getAuthors():Author returns a list of Author’s instances.
getPrice():float returns the price of the book.
setPrice(price:float):void set a new price to the book.
getQty():int returns the qty property of the book.
setQty(qty:int):void set a new qty to the book.
toString():string returns a string following the pattern:
    “Book[name=?, authors={Author[name=?, email=?, gender=?], …}, price=?, qty=?]”
getAuthorNames():string will return a string containing all the instance’s
    authors’ names following the pattern: “authorName1, authorName2, …”*/
"use strict"
let Author = require("./Author");
// var author1 = new Author({ name: "Axel", email: "axl_nolasco@hotmail.com", gender: "m"});
// var author2 = new Author({ name: "Juan", email: "juan@hotmail.com", gender: "f"});
function NewBook(data){
    let name = data.name;
    this.getName = function(){
        if (typeof name === "string") {
            return name;
        }
    }
    let authors = data.authors;
    this.getAuthors = function(){
        return authors;
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
NewBook.prototype.toString = function(){
    // return "NewBook[name=" + this.getName() + ", authors={" + this.getAuthors().map(function(current){
    //     return "Author[name=" + current.getName() + ", email=" + current.getEmail() + ", gender=" + current.getGender() + "], ";
    // }) + "}, price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
    return "NewBook[name=" + this.getName() + ", authors={" + this.getAuthors().join(', ') + "}, price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
}//:string returns a string following the pattern:
//“Book[name=?, authors={Author[name=?, email=?, gender=?], …}, price=?, qty=?]”
NewBook.prototype.getAuthorNames = function(){
    var string = "";
    return string += this.getAuthors().map(function(current){
        return current.getName();
    });
};
//
// var newBook = new NewBook({name : "FootBall Life", authors : [author1 , author2], price : 30.50, qty : 30});
// console.log(newBook.getAuthorNames());
module.exports = NewBook;
