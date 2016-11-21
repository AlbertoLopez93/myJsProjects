"use strict";

let Weapon = require("../Weapon");
let pistol = new Weapon( 240, 18, "revolver", 1, "pistol", 280, 50,
false, false, false, 9, 5, 6 );

describe("Testing Weapon's inherit functions. ", function() {
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

describe("Testing Weapon's own functions. ", function() {
  it("isEnchanted", function() {
    expect(pistol.isEnchanted()).toBe(false);
    expect(pistol.isEnchanted(true)).toBe(true);
    expect(pistol.isEnchanted(false)).toBe(true);
  });
  it("isOneHanded", function() {
    expect(pistol.isOneHanded()).toBe(false);
    expect(pistol.isOneHanded(true)).toBe(true);
  });
  it("isUpgraded", function() {
    expect(pistol.isUpgraded()).toBe(false);
    expect(pistol.isUpgraded(true)).toBe(true);
  });
  it("getMinDmg and setMinDmg", function() {
    expect(pistol.getMinDmg()).toBe(5);
    pistol.setMinDmg(2);
    expect(pistol.getMinDmg()).toBe(2);
    pistol.setMinDmg(23);
    expect(pistol.getMinDmg()).toBe(2);
  });
  it("getMaxDmg and setMaxDmg", function() {
    expect(pistol.getMaxDmg()).toBe(9);
    pistol.setMaxDmg(0);
    expect(pistol.getMaxDmg()).toBe(9);
    pistol.setMaxDmg(2);
    expect(pistol.getMaxDmg()).toBe(2);
  });
});
