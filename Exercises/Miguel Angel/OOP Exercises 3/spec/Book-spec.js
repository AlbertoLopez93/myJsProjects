"use strict"

let Book = require("../Book");
let Author = require("../Author");

describe("Testing Book", function (){
	let newAuthor = new Author({name: "Miguel Delgado", email: "miguedelgado1324@gmail.com", gender: "m"});
	let newBook = new Book({name:"New Book", price: 1234, author: newAuthor, qty: 12});
	let newBook2 = new Book({name:"New Book2", price: 1324, author: newAuthor});
	it("Should create a Book", function(){
		expect(newBook instanceof Book).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newBook.getName()).toBe("New Book");
		expect(newBook.getAuthor()).toBe(newAuthor);
		expect(newBook.getPrice()).toBe(1234);
		expect(newBook.getQty()).toBe(12);
		expect(newBook2.getName()).toBe("New Book2");
		expect(newBook2.getAuthor()).toBe(newAuthor);
		expect(newBook2.getPrice()).toBe(1324);
		expect(newBook2.getQty()).toBe(0);
	});
	it("Set methods should work", function(){
		newBook.setPrice(1324);
		newBook.setQty(10);
		newBook2.setPrice(1234);
		newBook2.setQty(11);
		expect(newBook.getPrice()).toBe(1324);
		expect(newBook2.getPrice()).toBe(1234);
		expect(newBook.getQty()).toBe(10);
		expect(newBook2.getQty()).toBe(11)
	});
	it("Method toString should work", function(){
		let result = "Book[name=New Book, Author[name=Miguel Delgado, email=miguedelgado1324@gmail.com, gender=m], price=1324, qty=10]";
		expect(newBook.toString()).toBe(result);
	});
});