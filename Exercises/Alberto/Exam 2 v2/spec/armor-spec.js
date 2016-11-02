"use strict";

let Armor = require("../Armor");
let pistol = new Armor( 240, 18, "revolver", 1, "pistol", 280, 50,
46, 870, false, 9, 8, 7, 6, 5 );

describe("Testing Armor's inherit functions. ", function() {
  it("getBuyPrice", function() {
    expect(pistol.getBuyPrice()).toBe(240);
  });
  it("getCount", function() {
    expect(pistol.getCount()).toBe(18);
    pistol.setCount(42);
    expect(pistol.getCount()).toBe(42);
  });
  it("getDescription", function() {
    expect(pistol.getDescription()).toBe("revolver");
  });
  it("getWeight", function() {
    expect(pistol.getWeight()).toBe(50);
  });
  it("getName", function() {
    expect(pistol.getName()).toBe("pistol");
  });
});

describe("Testing Armor's own functions. ", function() {
  it("getSpellDR", function() {
    expect(pistol.getSpellDR()).toBe(8);
  });
  it("isItHeavy", function() {
    expect(pistol.isItHeavy()).toBe(false);
  });
  it("getStrBonus", function() {
    expect(pistol.getStrBonus()).toBe(5);
  });
});
