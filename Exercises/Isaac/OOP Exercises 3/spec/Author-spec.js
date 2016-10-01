(function () {
    'use strict';
    let Author = require('../Author');

    describe("Testing Author class", function () {
        it("should be defined", function () {
            expect(Author).toBeDefined();
        });

        it("should work with all its methods", function () {
            let author = new Author({
                name: "Isaac",
                email: "iramirezc@live.com.mx",
                gender: "m"
            });
            expect(author.getName()).toBe("Isaac");
            expect(author.getEmail()).toBe("iramirezc@live.com.mx");
            author.setEmail("iramirezc.279@gmail.com");
            expect(author.getEmail()).toBe("iramirezc.279@gmail.com");
            expect(author.getGender()).toBe("m");
            expect(author.toString()).toBe("Author[name=Isaac, email=iramirezc.279@gmail.com, gender=m]");
        });
    });

    // Miguel's tests
    describe("Testing Author", function () {
        it("Should create an Author", function () {
            let newAuthor = new Author({
                name: "Miguel Delgado",
                email: "miguedelgado1324@gmail.com",
                gender: "m"
            });
            expect(newAuthor instanceof Author).toBe(true);
        });
        it("Get methods should work", function () {
            let newAuthor = new Author({
                name: "Miguel Delgado",
                email: "miguedelgado1324@gmail.com",
                gender: "m"
            });
            expect(newAuthor.getName()).toBe("Miguel Delgado");
            expect(newAuthor.getEmail()).toBe("miguedelgado1324@gmail.com");
            expect(newAuthor.getGender()).toBe("m");
        });
        it("Method setEmail should work", function () {
            let newAuthor = new Author({
                name: "Miguel Delgado",
                email: "miguedelgado1324@gmail.com",
                gender: "m"
            });
            newAuthor.setEmail("migueldelgado1992@hotmail.com");
            expect(newAuthor.getEmail()).toBe("migueldelgado1992@hotmail.com");
        });
        it("Method toString should work", function () {
            let newAuthor = new Author({
                name: "Miguel Delgado",
                email: "miguedelgado1324@gmail.com",
                gender: "m"
            });
            let result = "Author[name=Miguel Delgado, email=miguedelgado1324@gmail.com, gender=m]";
            expect(newAuthor.toString()).toBe(result);
        });
    });
}());