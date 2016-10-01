(function () {
    'use strict';

    function NewBook(newBook) {
        let name = newBook.name;
        let authors = newBook.authors || [];
        let price = newBook.price;
        let qty = newBook.qty || 0;

        //getName():string returns the name of the book.
        this.getName = function getName() {
            return name;
        };

        //getAuthors():Author returns a list of Author’s instances.
        this.getAuthors = function getAuthors() {
            return authors;
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

    //toString():string returns a string following the pattern: “Book[name=?, authors={Author[name=?, email=?, gender=?], …}, price=?, qty=?]”
    NewBook.prototype.toString = function toString() {
        return "NewBook[name=" + this.getName() + ", authors={" + this.getAuthors().join(', ') + "}, price=" + this.getPrice() + ", qty=" + this.getQty() + "]";
    };

    //getAuthorNames():string will return a string containing all the instance’s authors’ names following the pattern: “authorName1, authorName2, …”
    NewBook.prototype.getAuthorNames = function getAuthorNames() {
        return this.getAuthors().map(a => {
            return a.getName();
        }).join(', ');
    };

    module.exports = NewBook;
}());