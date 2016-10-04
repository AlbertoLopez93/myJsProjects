"use strict";

let Author = require("../Author");

describe("Author class", () => {
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

  let author1;
  let author2;

  beforeEach(() => {
    author1 = new Author(author1Data);
    author2 = new Author(author2Data);
  });

  it("should be defined", () => {
    expect(Author).toBeDefined();
  });

  describe("Private properties", () => {
    it("should have a private property called name", () => {
      expect(author1.name).toBe(undefined);
    });
    it("should have a private property called email", () => {
      expect(author1.email).toBeUndefined();
    });
    it("should have a private property called gender", () => {
      expect(author1.gender).toBeUndefined();
    });
  });

  describe("Methods", () => {
    describe("getName method", () => {
      it("should be defined", () => {
        expect(author1.getName).toBeDefined();
        expect(typeof author1.getName).toBe("function");
      });
      it("should return the name of the author", () => {
        expect(author1.getName()).toBe("John");
      });
    });
    describe("getEmail method", () => {
      it("should be defined", () => {
        expect(author1.getEmail).toBeDefined();
        expect(typeof author1.getEmail).toBe("function");
      });
      it("should return the email of the instance", () => {
        expect(author1.getEmail()).toBe("john@gmail.com");
      });
    });
    describe("getGender method", () => {
      it("should be defined", () => {
        expect(author1.getGender).toBeDefined();
        expect(typeof author1.getGender).toBe("function");
      });
      it("should return the gender of the instance", () => {
        expect(author1.getGender()).toBe("m");
      });
    });
    describe("setEmail method", () => {
      it("should be defined", () => {
        expect(author1.setEmail).toBeDefined();
        expect(typeof author1.setEmail).toBe("function");
      });
      it("should set a new email to the instance", () => {
        let newEmail = "newemail@gmail.com";
        author1.setEmail(newEmail);
        expect(author1.getEmail()).toBe(newEmail);
      });
    });
    describe("toString method", () => {
      it("should be defined", () => {
        expect(author1.toString).toBeDefined();
        expect(typeof author1.toString).toBe("function");
      });
      it("should return a string following the pattern Author[name=?, email=?, gender=?]", () => {
        expect(author1.toString()).toBe("Author[name=John, email=john@gmail.com, gender=m]");
        expect(author2.toString()).toBe("Author[name=Jennifer, email=jennifer@gmail.com, gender=f]");
      });
    });
  });
});