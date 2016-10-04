(function () {
    'use strict';
    let Author = require('../Author');
    let Book = require('../Book');

    describe("Testing Book class", function () {
        it("should be defined", function () {
            expect(Book).toBeDefined();
        });

        it("should work with all its methods", function () {
            let author = new Author({
                name: "Isaac",
                email: "iramirezc@live.com.mx",
                gender: "m"
            });
            let book = new Book({
                name: "JavaScript",
                author: author,
                price: 99.99
            });

            expect(book.getName()).toBe("JavaScript");
            expect(book.getAuthor()).toBe(author);
            expect(book.getPrice()).toBe(99.99);
            book.setPrice(100);
            expect(book.getPrice()).toBe(100);
            expect(book.getQty()).toBe(0);
            book.setQty(1000);
            expect(book.getQty()).toBe(1000);
            expect(book.toString()).toBe("Book[name=JavaScript, Author[name=Isaac, email=iramirezc@live.com.mx, gender=m], price=100, qty=1000]");

        });
    });
}());