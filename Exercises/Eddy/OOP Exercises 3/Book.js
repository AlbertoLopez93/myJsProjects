/**
 * Created by jazielsama on 30/09/16.
 */


/*
 Create a class named Book. This class will used the Author class, so don’t start this exercise until you have completed #2.
 The Book class which will receive in its constructor an object with the following properties:
 name:string
 author:Author
 price:float
 qty:int (optional)
 All above properties should be private properties. The qty property can be set when the an instance is created or not, which means that it will be an optional value for the constructor. If it’s not passed then, it will defaults to zero. The class will also have the following methods:
 getName():string returns the name of the book.
 getAuthor():Author returns the author (object) of the book.
 getPrice():float returns the price of the book.
 setPrice(price:float):void set a new price to the book.
 getQty():int returns the qty property of the book.
 setQty(qty:int):void set a new qty to the book.
 toString():string returns a string following the pattern: “Book[name=?, Author[name=?, email=?, gender=?], price=?, qty=?]”

 */
var Author = require ('./Author');

function Book (data) {
	var name = data.name;
	author = data.author;
	var price = data.price;
	var qty = data.qty?data.qty:0;

	this.getName = function getName () {
		return name;
	};

	this.getAuthor = function getAuthor () {
		return author;
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
	}

}

Book.prototype.toString = function toString () {
	return 'Book[name='+this.getName()+', Author[name='+this.getAuthor().getName()+', email='+this.getAuthor().getEmail()+', gender='+this.getAuthor().getGender()+'], price='+this.getPrice()+', qty='+this.getQty()+']'
};

module.exports = Book;