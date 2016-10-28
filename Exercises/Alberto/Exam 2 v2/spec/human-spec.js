"use strict";

let Human = require("../Human");
let Peter = new Human( 3, "Peter", 8, 2,
  6, [{name:"x", any:4}, {name:"w", other:true}],
  5, "faction", 2, 8,
  true, 57, 58, 59, 26,
  [{name:"r"}, {name:"z"}]);

describe("Testing Human's inherit properties. ", function() {
  it("getName", function() {
    expect(Peter.getName()).toBe("Peter");
  });
  it("getMaxHP", function() {
    expect(Peter.getMaxHP()).toBe(8);
  });
});

describe("Testing Human's own properties. ", function() {
  it("getAgility", function() {
    expect(Peter.getAgility()).toBe(6);
  });
  it("setAgility", function() {
    Peter.setAgility(12);
    expect(Peter.getAgility()).toBe(12);
    Peter.setAgility(-8);
    expect(Peter.getAgility()).toBe(12);
  });
  it("getArmorEquipped", function() {
    //expect(Peter.getArmorEquipped()).toBe([{name:"x", any:4}, {name:"w", other:true}]);
  });
  it("addArmorEquipped", function() {
    Peter.addArmorEquipped({name:"p", any:4});
    //expect(Peter.getArmorEquipped()).toBe([{name:"x", any:4}, {name:"w", other:true},{name:"p", any:4}]);
  });
  it("removeArmorEquipped", function() {
    expect(Peter.removeArmorEquipped("u")).toBe(false);
    // expect(Peter.removeArmorEquipped("x")).toBe({name:"x", any:4});
    // expect(Peter.getArmorEquipped()).toBe([{name:"w", other:true},{name:"p", any:4}]);
  });
  it("switchArmorEquipped", function() {
    // expect(Peter.switchArmorEquipped([{name:"h"}, {name:"q"}])).toBe([{name:"x", any:4},{name:"w", other:true},{name:"p", any:4}]);
    // expect(Peter.getArmorEquipped()).toBe([{name:"h"}, {name:"q"}]);
  });
  it("setCurrentMP and getCurrentMP", function() {
    expect(Peter.setCurrentMP(76).getCurrentMP()).toBe(57);
    expect(Peter.setCurrentMP(7).getCurrentMP()).toBe(7);
  });
  it("setGold and getGold", function() {
    expect(Peter.setGold(27).getGold()).toBe(27);
    expect(Peter.setGold(-7).getGold()).toBe(27);
    expect(Peter.setGold(2e12).getGold()).toBe(27);
  });
  it("setIntellect and getIntellect", function() {
    expect(Peter.setIntellect(86).getIntellect()).toBe(86);
    expect(Peter.setIntellect(-2).getIntellect()).toBe(86);
    expect(Peter.setIntellect(2e12).getIntellect()).toBe(2e12);
  });
  it("setMaxMP and getMaxMP", function() {
    expect(Peter.setMaxMP(8).getMaxMP()).toBe(8);
    expect(Peter.setMaxMP(-8).getMaxMP()).toBe(8);
  });
  it("getWeaponEquipped", function() {
    //expect(Peter.getWeaponEquipped()).toBe([ { name : 'r' }, { name : 'z' } ] );
  });
  it("addWeaponEquipped", function() {
    Peter.addWeaponEquipped({name:"p", any:4});
  });
  it("removeWeaponEquipped", function() {
    expect(Peter.removeWeaponEquipped("u")).toBe(false);
    //expect(Peter.removeWeaponEquipped("z")).toBe({ name : 'z' });
  });
  it("switchWeaponEquipped", function() {
    // expect(Peter.switchWeaponEquipped([{name:"h"}, {name:"q"}])).toBe([ { name : 'r' }, { name : 'z' }, { name : 'p', any : 4 } ]);
    // expect(Peter.getWeaponEquipped()).toBe([{name:"h"}, {name:"q"}]);
  });
});
