var Author = require('../Author');
var Book = require('../Book');

describe ("Testing Book", function () {
	it ("Should create a Book", function () {
		let newAuthor = new Author ({
			name: "String Stringson",
			email: "eddy.velazquez@gmail.com",
			gender: "m"
		});
		let newBook = new Book ({name: "New Book", price: 1234, author: newAuthor, qty: 12});
		expect (newBook instanceof Book).toBe (true);
	});
	it ("Get methods should work", function () {
		let newAuthor = new Author ({
			name: "String Stringson",
			email: "eddy.velazquez@gmail.com",
			gender: "m"
		});
		let newBook = new Book ({name: "New Book", price: 1234, author: newAuthor, qty: 12});
		let newBook2 = new Book ({name: "New Book2", price: 1324, author: newAuthor});
		expect (newBook.getName ()).toBe ("New Book");
		expect (newBook.getAuthor ()).toBe (newAuthor);
		expect (newBook.getPrice ()).toBe (1234);
		expect (newBook.getQty ()).toBe (12);
		expect (newBook2.getName ()).toBe ("New Book2");
		expect (newBook2.getAuthor ()).toBe (newAuthor);
		expect (newBook2.getPrice ()).toBe (1324);

	});
	it ("Set methods should work", function () {
		let newAuthor = new Author ({
			name: "String Stringson",
			email: "eddy.velazquez@gmail.com",
			gender: "m"
		});
		let newBook = new Book ({name: "New Book", price: 1234, author: newAuthor, qty: 12});
		let newBook2 = new Book ({name: "New Book2", price: 1324, author: newAuthor});
		newBook.setPrice (1324);
		newBook.setQty (10);
		newBook2.setPrice (1234);
		newBook2.setQty (11);
		expect (newBook.getPrice ()).toBe (1324);
		expect (newBook2.getPrice ()).toBe (1234);
		expect (newBook.getQty ()).toBe (10);
		expect (newBook2.getQty ()).toBe (11)
	});
	it ("Method toString should work", function () {
		let newAuthor = new Author ({
			name: "String Stringson",
			email: "eddy.velazquez@gmail.com",
			gender: "m"
		});
		let newBook = new Book ({name: "New Book", price: 1234, author: newAuthor, qty: 12});
		let result = "Book[name=New Book, Author[name=String Stringson, email=eddy.velazquez@gmail.com, gender=m], price=1234, qty=12]";
		expect (newBook.toString ()).toBe (result);
	});
});
