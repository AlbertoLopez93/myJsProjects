(function () {
    'use strict';

    function Book(book) {
        let name = book.name;
        let author = book.author;
        let price = book.price;
        let qty = book.qty || 0;

        //getName():string returns the name of the book.
        this.getName = function getName() {
            return name;
        };

        //getAuthor():Author returns the author (object) of the book.
        this.getAuthor = function getAuthor() {
            return author;
        };

        //getPrice():float returns the price of the book.
        this.getPrice = function getPrice() {
            return price;
        };

        //setPrice(price:float):void set a new price to the book.
        this.setPrice = function setPrice(newPrice) {
            price = newPrice;
        };

        //getQty():int returns the qty property of the book.
        this.getQty = function getQty() {
            return qty;
        };

        //setQty(qty:int):void set a new qty to the book.
        this.setQty = function setQty(newQty) {
            qty = newQty;
        };
    }

    //toString():string returns a string following the pattern: “[Book[name=?, Author[name=?, email=?, gender=?], price=?, qty=?]”
    Book.prototype.toString = function toString() {
        let author = this.getAuthor();
        return "Book[name=" + this.getName() + ", Author[name=" + author.getName() + ", email=" + author.getEmail() + ", gender=" + author.getGender() + "], price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
    };

    module.exports = Book;
}());