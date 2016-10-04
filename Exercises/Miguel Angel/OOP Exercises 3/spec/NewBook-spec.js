"use strict"

let NewBook = require("../NewBook");
let Author = require("../Author");

describe("Testing NewBook", function (){
	let newAuthor = new Author({name: "Miguel Delgado", email: "miguedelgado1324@gmail.com", gender: "m"});
	let newAuthor2 = new Author({name: "Angel Martinez", email: "angelmartinez1324@hotmail.com", gender: "m"});
	let newAuthor3 = new Author({name: "Maria Hernandez", email: "mariahernandez@hotmail.com", gender: "f"});
	let arrayAuthors = [newAuthor, newAuthor2, newAuthor3];
	let newBook = new NewBook({name:"New Book", price: 1234, authors: arrayAuthors, qty: 12});
	let newBook2 = new NewBook({name:"New Book2", price: 1324, authors: arrayAuthors});
	it("Should create a Book", function(){
		expect(newBook instanceof NewBook).toBe(true);
	});
	it("Get methods should work", function(){
		expect(newBook.getName()).toBe("New Book");
		expect(newBook.getAuthors()).toEqual(arrayAuthors);
		expect(newBook.getPrice()).toBe(1234);
		expect(newBook.getQty()).toBe(12);
		expect(newBook2.getName()).toBe("New Book2");
		expect(newBook2.getAuthors()).toEqual(arrayAuthors);
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
		let result = "NewBook[name=New Book, authors={Author[name=Miguel Delgado, email=miguedelgado1324@gmail.com, gender=m], Author[name=Angel Martinez, email=angelmartinez1324@hotmail.com, gender=m], Author[name=Maria Hernandez, email=mariahernandez@hotmail.com, gender=f]}, price=1324, qty=10]";
		expect(newBook.toString()).toBe(result);
	});
});
