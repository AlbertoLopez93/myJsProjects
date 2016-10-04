/**
 * Created by jazielsama on 30/09/16.
 */
/*
 * Create a class named NewBook. This class will used the Author class, so don’t start this exercise until you have completed #2.
 The Book class which will receive in its constructor an object with the following properties:
 name:string
 authors:Author[] (<- this [] is used to define that a property will be a list of things, in this case a list of Author’s instances).
 price:float
 qty:int (optional)
 All above properties should be private properties. The qty property can be set when the an instance is created or not, which means that it will be an optional value for the constructor. If it’s not passed then, it will defaults to zero. The class will also have the following methods:
 getName():string returns the name of the book.
 getAuthors():Author returns a list of Author’s instances.
 getPrice():float returns the price of the book.
 setPrice(price:float):void set a new price to the book.
 getQty():int returns the qty property of the book.
 setQty(qty:int):void set a new qty to the book.
 toString():string returns a string following the pattern: “Book[name=?, authors={Author[name=?, email=?, gender=?], …}, price=?, qty=?]”
 getAuthorNames():string will return a string containing all the instance’s authors’ names following the pattern: “authorName1, authorName2, …”
 */

var Author = require ('./Author');

function NewBook (data) {
	var name = data.name;
	var authors = Array.from (data.authors);
	var price = data.price;
	var qty = data.qty ? data.qty : 0;

	this.getName = function getName () {
		return name;
	};

	this.getAuthors = function getAuthors () {
		return authors;
	};

	this.getPrice = function getPrice () {
		return price;
	};

	this.setPrice = function setPrice (newPrice) {
		price = newPrice;
	};

	this.getQty = function getQty () {
		return qty;
	};

	this.setQty = function setQty (newQty) {
		qty = newQty;
	};

}

NewBook.prototype.toString = function toString () {
	return "NewBook[name=" + this.getName () + ", authors={" + this.getAuthors ().join (', ') + "}, price=" + this.getPrice () + ", qty=" + this.getQty () + "]";
};



NewBook.prototype.getAuthorNames = function getAuthorNames () {
	var authors = [];
	for (var i = 0; i < this.getAuthors ().length; i++) {
		authors.push (this.getAuthors()[i].getName ());
	}
	return authors.join(', ');
};

module.exports = NewBook;


