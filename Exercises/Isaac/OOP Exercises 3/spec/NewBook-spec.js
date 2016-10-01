(function () {
    'use strict';
    let Author = require('../Author');
    let NewBook = require('../NewBook');

    describe("Testing NewBook class", function () {
        it("should be defined", function () {
            expect(NewBook).toBeDefined();
        });

        it("should work with all its methods", function () {
            let author1 = new Author({
                name: "Isaac",
                email: "iramirezc@live.com.mx",
                gender: "m"
            });
            let author2 = new Author({
                name: "Nahum",
                email: "nahum@live.com.mx",
                gender: "m"
            });
            let author3 = new Author({
                name: "Pamela",
                email: "pamela@gmail.com",
                gender: "f"
            });
            let authors = [author1, author2, author3];
            let book = new NewBook({
                name: "JavaScript II",
                authors: authors,
                price: 99.99
            });

            expect(book.getName()).toBe("JavaScript II");
            expect(book.getAuthors()).toEqual(authors);
            expect(book.getPrice()).toBe(99.99);
            book.setPrice(101);
            expect(book.getPrice()).toBe(101);
            expect(book.getQty()).toBe(0);
            book.setQty(1000);
            expect(book.getQty()).toBe(1000);
            console.log(book.toString());
            expect(book.toString()).toBe("NewBook[name=JavaScript II, authors={Author[name=Isaac, email=iramirezc@live.com.mx, gender=m], Author[name=Nahum, email=nahum@live.com.mx, gender=m], Author[name=Pamela, email=pamela@gmail.com, gender=f]}, price=101, qty=1000]");

        });
    });
}());