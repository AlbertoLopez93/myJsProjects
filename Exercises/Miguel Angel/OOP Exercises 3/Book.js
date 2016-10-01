"use strict"

function Book(data){
	let name = data.name;
	let author = data.author;
	let price = data.price;
	let qty = data.qty || 0;
	this.getName = function getName(){
		return name;
	};
	this.getAuthor = function getAuthor(){
		return author;
	};
	this.getPrice = function getPrice(){
		return price;
	};
	this.getQty = function getQty(){
		return qty;
	};
	this.setPrice = function setPrice(newPrice){
		price = newPrice;
	};
	this.setQty = function setQty(newQty){
		qty = newQty;
	};
}

Book.prototype.toString = function toString(){
	return "Book[name=" + this.getName() + ", " + this.getAuthor().toString() + ", price=" + this.getPrice() + ", qty=" + this.getQty() + "]"
};

module.exports = Book;