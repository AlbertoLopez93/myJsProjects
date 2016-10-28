"use strict";

let Item = require("../Item");
let obj = new Item( 24, 8, "description", 1, "article", 28, 500 );

describe("Testing Item's functions. ", function() {
  it("getBuyPrice", function() {
    expect(obj.getBuyPrice()).toBe(24);
  });
  it("getCount", function() {
    expect(obj.getCount()).toBe(8);
    obj.setCount(4);
    expect(obj.getCount()).toBe(4);
  });
  it("getDescription", function() {
    expect(obj.getDescription()).toBe("description");
  });
  it("getWeight", function() {
    expect(obj.getWeight()).toBe(500);
  });
});
