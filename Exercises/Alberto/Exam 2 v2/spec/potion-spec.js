"use strict";

let Potion = require("../Potion");
let pistol = new Potion( 40, 26, "short pistol", 3, "cowboy's pistol", 80, 70,
46, 870 );

describe("Testing Potion's inherit functions. ", function() {
  it("getBuyPrice", function() {
    expect(pistol.getBuyPrice()).toBe(40);
  });
  it("getCount", function() {
    expect(pistol.getCount()).toBe(26);
    pistol.setCount(4);
    expect(pistol.getCount()).toBe(4);
  });
  it("getDescription", function() {
    expect(pistol.getDescription()).toBe("short pistol");
  });
  it("getWeight", function() {
    expect(pistol.getWeight()).toBe(70);
  });
  it("getName", function() {
    expect(pistol.getName()).toBe("cowboy's pistol");
  });
  it("getID", function() {
    expect(pistol.getID()).toBe(3);
  });
  it("getSellPrice", function() {
    expect(pistol.getSellPrice()).toBe(80);
  });
});

describe("Testing Potion's own functions. ", function() {
  it("HPRestore", function() {
    expect(pistol.HPRestore()).toBe(46);
    expect(pistol.HPRestore(9)).toBe(9);
  });
  it("MPRestore", function() {
    expect(pistol.MPRestore()).toBe(870);
    expect(pistol.MPRestore(9)).toBe(9);
  });
});
