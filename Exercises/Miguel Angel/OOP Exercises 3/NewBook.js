"use strict"

function NewBook(data){
	let name = data.name;
	let authors = data.authors;
	let price = data.price;
	let qty = data.qty || 0;
	this.getName = function getName(){
		return name;
	};
	this.getAuthors = function getAuthors(){
		return authors;
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

NewBook.prototype.toString = function toString(){
	let authorsString = this.getAuthors().map(function(current){
			return current.toString();
	}).join(", ");
	return "NewBook[name=" + this.getName() + ", authors={" + authorsString + "}, price=" + this.getPrice() + ", qty=" + this.getQty() + "]"
};

NewBook.prototype.getAuthorNames = function getAuthorNames(){
	let authorsNames = this.getAuthors().map(function(current){
		return current.getName();
	}).join(", ");
	return authorsNames;
};

module.exports = NewBook;