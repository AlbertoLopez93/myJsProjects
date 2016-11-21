"use strict";

let Animal = require("../Animal");
let Coffee = new Animal(2, "Coffee", 3, 7, true, 4, 9, 1 );

describe("Testing Animal's inherit properties. ", function() {
  it("getName", function() {
    expect(Coffee.getName()).toBe("Coffee");
  });
  it("setMaxHP with positive less", function() {
    expect(Coffee.setMaxHP(13).getMaxHP()).toBe(13);
  });
});

describe("Testing Animal's own properties. ", function() {
  it("isItHostileToPlayer", function() {
    expect(Coffee.isItHostileToPlayer()).toBe(true);
  });
  it("getLootDropped", function() {
    expect(Coffee.getLootDropped()).toBe(4);
  });
  it("getMaxDmg", function() {
    expect(Coffee.getMaxDmg()).toBe(9);
  });
  it("getMinDmglayer", function() {
    expect(Coffee.getMinDmg()).toBe(1);
  });
});
