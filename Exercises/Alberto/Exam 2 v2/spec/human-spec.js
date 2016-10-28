"use strict";

let Human = require("../Human");
let Armor = require("../Armor");
let Weapon = require("../Weapon");

let pistol = new Armor( 240, 18, "revolver", 1, "pistol", 280, 50,
  46, 870, false, 9, 8, 7, 6, 5 );
let canon = new Armor( 240, 18, "large", 1, "canon", 280, 500,
  46, 870, true, 9, 8, 7, 6, 5 );

let beretta = new Weapon( 240, 18, "arm", 1, "beretta", 280, 50,
  false, false, true, 9, 5, 8 );
let texan = new Weapon( 240, 18, "revolver", 1, "texan", 280, 500,
  false, false, true, 9, 5, 8 );

let Peter = new Human( 3, "Peter", 8, 2,
  6, [pistol],
  5, "faction", 2, 8,
  true, 57, 58, 59, 26,
  [texan]);

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
    expect(Peter.getArmorEquipped().length).toBe(1);
    expect(Peter.getArmorEquipped()[0].getName()).toBe("pistol");
  });
  it("addArmorEquipped", function() {
    Peter.addArmorEquipped(canon);
    expect(Peter.getArmorEquipped().length).toBe(2);
  });
  it("removeArmorEquipped", function() {
    expect(Peter.removeArmorEquipped("beretta")).toBe(false);
    expect(Peter.removeArmorEquipped("canon").getName()).toBe("canon");
    Peter.removeArmorEquipped("canon");
    expect(Peter.getArmorEquipped().length).toBe(1);
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
    expect(Peter.getWeaponEquipped().length).toBe(1);
    expect(Peter.getWeaponEquipped()[0].getName()).toBe("texan");
  });
  it("addWeaponEquipped", function() {
    Peter.addWeaponEquipped(beretta);
    expect(Peter.getWeaponEquipped().length).toBe(2);
  });
  it("removeWeaponEquipped", function() {
    expect(Peter.removeWeaponEquipped("winchester")).toBe(false);
    let deleted = Peter.removeWeaponEquipped("beretta");
    expect(deleted.getName()).toBe("beretta");
  });
  it("switchWeaponEquipped", function() {
    // expect(Peter.switchWeaponEquipped([{name:"h"}, {name:"q"}])).toBe([ { name : 'r' }, { name : 'z' }, { name : 'p', any : 4 } ]);
    // expect(Peter.getWeaponEquipped()).toBe([{name:"h"}, {name:"q"}]);
  });
});

describe("Extra test in Human class. ", function() {
  it("Weapon", function() {
    expect(Peter.getWeaponEquipped()[0].isEnchanted()).toBe(false);
    expect(Peter.getWeaponEquipped()[0].isEnchanted(true)).toBe(true);
    Peter.switchWeaponEquipped([]);
    Peter.addWeaponEquipped(texan);
    expect(Peter.getWeaponEquipped()[0].isUpgraded(false)).toBe(false);
    expect(Peter.getWeaponEquipped()[0].setMinDmg(0)).toBe(undefined);
    expect(Peter.getWeaponEquipped()[0].getMinDmg()).toBe(0);
    expect(Peter.getWeaponEquipped()[0].setStrReq(97)).toBe(undefined);
    expect(Peter.getWeaponEquipped()[0].getStrReq()).toBe(97);
  });
  it("Armor", function() {
    Peter.switchArmorEquipped([pistol,canon]);
    expect(Peter.getArmorEquipped()[1].isItHeavy()).toBe(true);
    expect(Peter.getArmorEquipped()[1].getStrBonus()).toBe(5);
  });
});
