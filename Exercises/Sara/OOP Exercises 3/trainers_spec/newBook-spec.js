"use strict";

let NewBook = require("../NewBook");
let Author = require("../Author");

describe("NewBook class", () => {
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

  let newBook1Data = {
    name: "The Book 1",
    authors: [author1, author2],
    price: 12.34,
    qty: 10
  };

  let newBook2Data = {
    name: "The Book 2",
    authors: [author2],
    price: 10.00
  };

  let newBook1;
  let newBook2

  beforeEach(() => {
    newBook1 = new NewBook(newBook1Data);
    newBook2 = new NewBook(newBook2Data);
  });

  it("should be defined", () => {
    expect(NewBook).toBeDefined();
  });

  describe("Private properties", () => {
    it("should have a private property called name", () => {
      expect(newBook1.name).toBeUndefined();
    });
    it("should have a private property called authors", () => {
      expect(newBook1.authors).toBeUndefined();
    });
    it("should have a private property called price", () => {
      expect(newBook1.price).toBeUndefined();
    });
    it("should have a private property called qty", () => {
      expect(newBook1.qty).toBeUndefined();
    });
  });

  describe("Methods", () => {
    describe("getName method", () => {
      it("should be defined", () => {
        expect(newBook1.getName).toBeDefined();
        expect(typeof newBook1.getName).toBe("function");
      });
      it("should return the name of the instance", () => {
        expect(newBook1.getName()).toBe("The Book 1");
        expect(newBook2.getName()).toBe("The Book 2");
      });
    });
    describe("getAuthors method", () => {
      it("should be defined", () => {
        expect(newBook1.getAuthors).toBeDefined();
        expect(typeof newBook1.getAuthors).toBe("function");
      });
      it("should return the authors of the instance", () => {
        expect(newBook1.getAuthors()).toBeDefined();
      });
      it("should return the authors as array", () => {
        expect(Array.isArray(newBook1.getAuthors())).toBe(true);
        expect(newBook1.getAuthors().length).toBe(2);
      });
    });
    describe("getPrice method", () => {
      it("should be defined", () => {
        expect(newBook1.getPrice).toBeDefined();
        expect(typeof newBook1.getPrice).toBe("function");
      });
      it("should return the price of the instance", () => {
        expect(newBook1.getPrice()).toBe(12.34);
        expect(newBook2.getPrice()).toBe(10);
      });
    });
    describe("getQty method", () => {
      it("should be defined", () => {
        expect(newBook1.getQty).toBeDefined();
        expect(typeof newBook1.getQty).toBe("function");
      });
      it("should return the qty of the instance", () => {
        expect(newBook1.getQty()).toBe(10);
      });
      it("should return 0 if the qty was not set to the constructor", () => {
        expect(newBook2.getQty()).toBe(0);
      });
    });
    describe("setPrice method", () => {
      it("should be defined", () => {
        expect(newBook1.setPrice).toBeDefined();
        expect(typeof newBook1.setPrice).toBe("function");
      });
      it("should set a new price to the instance", () => {
        newBook1.setPrice(43.21);
        expect(newBook1.getPrice()).toBe(43.21);
      });
    });
    describe("setQty method", () => {
      it("shold be defined", () => {
        expect(newBook1.setQty).toBeDefined();
        expect(typeof newBook1.setQty).toBe("function");
      });
      it("should set a new qty to the instance", () => {
        newBook1.setQty(20);
        expect(newBook1.getQty()).toBe(20);
      });
    });
    describe("toString method", () => {
      it("should be defined", () => {
        expect(newBook1.toString).toBeDefined();
        expect(typeof newBook1.toString).toBe("function");
      });
      it("should return a string following the pattern NewBook[name=?, authors={Author[name=?, email=?, gender=?], …}, price=?, qty=?]", () => {
        expect(newBook1.toString()).toBe("NewBook[name=The Book 1, authors={Author[name=John, email=john@gmail.com, gender=m], Author[name=Jennifer, email=jennifer@gmail.com, gender=f]}, price=12.34, qty=10]");
        expect(newBook2.toString()).toBe("NewBook[name=The Book 2, authors={Author[name=Jennifer, email=jennifer@gmail.com, gender=f]}, price=10, qty=0]");
      });
    });
    describe("getAuthorNames method", () => {
      it("should be defined", () => {
        expect(newBook1.getAuthorNames).toBeDefined();
        expect(typeof newBook1.getAuthorNames).toBe("function");
      });
      it("should a string with a list of authors name following the pattern authorsName1, authorsName2, ...", () => {
        expect(newBook1.getAuthorNames()).toBe("John, Jennifer");
        expect(newBook2.getAuthorNames()).toBe("Jennifer");
      });
    });
  });
});
