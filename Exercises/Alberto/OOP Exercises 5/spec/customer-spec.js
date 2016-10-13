"use strict";

var Customer = require("../Customer");

var myCustom = new Customer(4,"Peter",8);

describe("Protected properties", function() {
  it("Customer is defined", function() {
    expect(Customer).toBeDefined();
  });
  it("Customer is function", function() {
    expect(typeof Customer).toBe('function');
  });
  it("ID is protected", function() {
    expect(myCustom.ID).toBeUndefined();
  });
  it("name is protected", function() {
    expect(myCustom.name).toBeUndefined();
  });
  it("discount is protected", function() {
    expect(myCustom.discount).toBeUndefined();
  });
});

describe("'This' object", function() {
  it("getID is function", function() {
    expect(typeof myCustom.getID).toBe('function');
  });
  it("getID works", function() {
    expect(myCustom.getID()).toBe(4);
  });
  it("getName is function", function() {
    expect(typeof myCustom.getName).toBe('function');
  });
  it("getName works", function() {
    expect(myCustom.getName()).toBe("Peter");
  });
  it("getDiscount is function", function() {
    expect(typeof myCustom.getDiscount).toBe('function');
  });
  it("getDiscount works", function() {
    expect(myCustom.getDiscount()).toBe(8);
  });
  it("setDiscount is function", function() {
    expect(typeof myCustom.setDiscount).toBe('function');
  });
  it("setDiscount works is void", function() {
    expect(myCustom.setDiscount(15)).toBeUndefined();
  });
  it("setDiscount works", function() {
    expect(myCustom.getDiscount()).toBe(15);
  });
  it("toString is function", function() {
    expect(typeof myCustom.toString).toBe('function');
  });
  it("toString works", function() {
    expect(myCustom.toString()).toBe("Peter(4)");
  });
});
