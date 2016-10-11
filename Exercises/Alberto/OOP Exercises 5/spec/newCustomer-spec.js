"use strict";

var NewCustomer = require("../NewCustomer");

var myCustom = new NewCustomer(9,'George','m');

describe("Protected properties", function() {
  it("NewCustomer is defined", function() {
    expect(NewCustomer).toBeDefined();
  });
  it("NewCustomer is function", function() {
    expect(typeof NewCustomer).toBe('function');
  });
  it("ID is protected", function() {
    expect(myCustom.ID).toBeUndefined();
  });
  it("name is protected", function() {
    expect(myCustom.name).toBeUndefined();
  });
  it("discount is protected", function() {
    expect(myCustom.gender).toBeUndefined();
  });
});

describe("'This' object", function() {
  it("getID is function", function() {
    expect(typeof myCustom.getID).toBe('function');
  });
  it("getID works", function() {
    expect(myCustom.getID()).toBe(9);
  });
  it("getName is function", function() {
    expect(typeof myCustom.getName).toBe('function');
  });
  it("getName works", function() {
    expect(myCustom.getName()).toBe("George");
  });
  it("getGender is function", function() {
    expect(typeof myCustom.getGender).toBe('function');
  });
  it("getGender works", function() {
    expect(myCustom.getGender()).toBe('m');
  });
  it("toString is function", function() {
    expect(typeof myCustom.toString).toBe('function');
  });
  it("toString works", function() {
    expect(myCustom.toString()).toBe("George(9)");
  });
});
