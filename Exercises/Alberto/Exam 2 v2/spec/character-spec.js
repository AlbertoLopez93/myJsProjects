"use strict";

let Character = require("../Character");
let myVoid = new Character();
let myChar = new Character(2, "unkown", 7, 3);

describe("Testing Character's properties. ", function() {
  it("getID", function() {
    expect(myVoid.getID()).toBe(undefined);
    expect(myChar.getID()).toBe(2);
  });
  it("getName", function() {
    expect(myVoid.getName()).toBe(undefined);
    expect(myChar.getName()).toBe("unkown");
  });
  it("setCurrentHP", function() {
    myChar.setCurrentHP(9);
    expect(myChar.getCurrentHP()).toBe(7);
    myChar.setCurrentHP(2);
    expect(myChar.getCurrentHP()).toBe(2);
  });
  it("setMaxHP with negatives", function() {
    myChar.setMaxHP(-3);
    expect(myChar.getMaxHP()).toBe(7);
  });
  it("setMaxHP with positive less", function() {
    expect(myChar.setMaxHP(4).getMaxHP()).toBe(4);
  });
});
