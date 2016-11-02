"use strict";

let Author = require("../Author");
let Book   = require("../Book");

describe("Book class", () => {
  let author1Data = {
    name: "John",
    email : "john@gmail.com",
    gender: "m"
  };
  let author2Data = {
    name: "Jennifer",
    email: "jennifer@gmail.com",
    gender: "f"
  };
  let author1 = new Author(author1Data);
  let author2 = new Author(author2Data);

  let book1Data = {
    name: "The Book 1",
    author: author1,
    price: 12.34,
    qty: 10
  };

  let book2Data = {
    name: "The Book 2",
    author: author2,
    price: 10.00
  };
  let book1;
  let book2;

  beforeEach(() => {
    book1 = new Book(book1Data);
    book2 = new Book(book2Data);
  });

  it("should be defined", () => {
    expect(Book).toBeDefined();
  });

  describe("Private properties", () => {
    it("should have a private property called name", () => {
      expect(book1.name).toBeUndefined();
    });
    it("should have a private property called author", () => {
      expect(book1.author).toBeUndefined();
    });
    it("should have a private property called price", () => {
      expect(book1.price).toBeUndefined();
    });
    it("should have a private property called qty", () => {
      expect(book1.qty).toBeUndefined();
    });
  });

  describe("Methods", () => {
    describe("getName Method", () => {
      it("should be defined", () => {
        expect(book1.getName).toBeDefined();
        expect(typeof book1.getName).toBe("function");
      });
      it("should return the name of the instance", () => {
        expect(book1.getName()).toBe("The Book 1");
      });
    });
    describe("getAuthor method", () => {
      it("should be defined", () => {
        expect(book1.getAuthor).toBeDefined();
        expect(typeof book1.getAuthor).toBe("function");
      });
      it("should return the author object of the instance", () => {
        expect(book1.getAuthor() instanceof Author).toBe(true);
        expect(book1.getAuthor()).toEqual(author1);
      });
    });
    describe("getPrice method", () => {
      it("should be defined", () => {
        expect(book1.getPrice).toBeDefined();
        expect(typeof book1.getPrice).toBe("function");
      });
      it("should return the price of the instance", () => {
        expect(book1.getPrice()).toBe(12.34);
      });
    });
    describe("getQty method", () => {
      it("should be defined", () => {
        expect(book1.getQty).toBeDefined();
        expect(typeof book1.getQty).toBe("function");
      });
      it("should return the qty of the instance", () => {
        expect(book1.getQty()).toBe(10);
        expect(book2.getQty()).toBe(0);
      });
    });
    describe("setPrice method", () => {
      it("should be defined", () => {
        expect(book1.setPrice).toBeDefined();
        expect(typeof book1.setPrice).toBe("function");
      });
      it("should set a new price to the instance", () => {
        book1.setPrice(43.21);
        expect(book1.getPrice()).toBe(43.21);
      });
    });
    describe("setQty method", () => {
      it("should be defined", () => {
        expect(book1.setQty).toBeDefined();
        expect(typeof book1.setQty).toBe("function");
      });
      it("should set a new qty to the instance", () => {
        book1.setQty(20);
        expect(book1.getQty()).toBe(20);
      });
    });
    describe("toString method", () => {
      it("should be defined", () => {
        expect(book1.toString).toBeDefined();
        expect(typeof book1.toString).toBe("function");
      });
      it("should return a string following the pattern Book[name=?, Author[name=?, email=?, gender=?], price=?, qty=?]", () => {
        expect(book1.toString()).toBe("Book[name=The Book 1, Author[name=John, email=john@gmail.com, gender=m], price=12.34, qty=10]");
        expect(book2.toString()).toBe("Book[name=The Book 2, Author[name=Jennifer, email=jennifer@gmail.com, gender=f], price=10, qty=0]");
      });
    });
  });
});
