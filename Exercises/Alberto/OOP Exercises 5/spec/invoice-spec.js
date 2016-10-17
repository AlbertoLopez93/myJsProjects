"use strict";

var Invoice = require("../Invoice");
var Customer = require("../Customer");

var person = new Customer(4,"Peter",8);
var Ticket = new Invoice(96,person,100);

describe("Protected properties", function() {
  it("Customer is defined", function() {
    expect(Customer).toBeDefined();
  });
  it("Customer is function", function() {
    expect(typeof Customer).toBe('function');
  });
  it("Invoice is defined", function() {
    expect(Invoice).toBeDefined();
  });
  it("Invoice is function", function() {
    expect(typeof Invoice).toBe('function');
  });
  it("ID is protected", function() {
    expect(Ticket.ID).toBeUndefined();
  });
  it("customer is protected in Invoice", function() {
    expect(Ticket.customer).toBeUndefined();
  });
  it("amount is protected", function() {
    expect(Ticket.amount).toBeUndefined();
  });
});

describe("'This' object", function() {
  it("getID is function", function() {
    expect(typeof Ticket.getID).toBe('function');
  });
  it("getID works", function() {
    expect(Ticket.getID()).toBe(96);
  });
  it("getName is function", function() {
    expect(typeof Ticket.getCustomer).toBe('function');
  });
  it("getName works", function() {
    expect(Ticket.getCustomer().toString()).toBe("Peter(4)");
  });
  it("getDiscount is function", function() {
    expect(typeof Ticket.getAmount).toBe('function');
  });
  it("getDiscount works", function() {
    expect(Ticket.getAmount()).toBe(100);
  });
  it("getCustomerName is function", function() {
    expect(typeof Ticket.getCustomerName).toBe('function');
  });
  it("getCustomerName works", function() {
    expect(Ticket.getCustomerName()).toBe('Peter');
  });
  it("getAmountAfterDiscount is function", function() {
    expect(typeof Ticket.getAmountAfterDiscount).toBe('function');
  });
  it("getAmountAfterDiscount works", function() {
    expect(Ticket.getAmountAfterDiscount()).toBe(92);
  });
  it("setCustomer is function", function() {
    expect(typeof Ticket.setCustomer).toBe('function');
  });
  let person2 = new Customer(9,'Jasmine',24);
  it("setCustomer works is void", function() {
    expect(Ticket.setCustomer(person2)).toBeUndefined();
  });
  it("setCustomer works", function() {
    expect(Ticket.getCustomer().getName()).toBe('Jasmine');
  });
  it("setAmount is function", function() {
    expect(typeof Ticket.setAmount).toBe('function');
  });
  it("setAmount works is void", function() {
    expect(Ticket.setAmount(105)).toBeUndefined();
  });
  it("setAmount works", function() {
    expect(Ticket.getAmount()).toBe(105);
  });
});
