"use strict";

var NewCustomer = require("../NewCustomer");
var Account = require("../Account");

var myCustom = new NewCustomer(9,'George','m');

describe("Protected properties", function() {
  it("Account is defined", function() {
    expect(Account).toBeDefined();
  });
  it("Account is function", function() {
    expect(typeof Account).toBe('function');
  });
  it("NewCustomer is defined", function() {
    expect(NewCustomer).toBeDefined();
  });
  it("NewCustomer is function", function() {
    expect(typeof NewCustomer).toBe('function');
  });
  it("id is protected", function() {
    expect(myCustom.id).toBeUndefined();
  });
  it("customer is protected", function() {
    expect(myCustom.customer).toBeUndefined();
  });
  it("balance is protected", function() {
    expect(myCustom.balance).toBeUndefined();
  });
});
