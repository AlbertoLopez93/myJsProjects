"use strict";

let Human = require("../Human");
let Weapon = require("../Weapon");
let Armor = require("../Armor");

let human;
let helmet;
let boots;
let dagger;
let sword;

let ID,
    name,
    maxHP,
    currentHP,
    agility,
    armorEquipped,
    currentMP,
    faction,
    gold,
    intellect,
    isMale,
    maxMP,
    spirit,
    stamina,
    strength,
    weaponEquipped;

let helmetBuyPrice,
    helmetCount,
    helmetDescription,
    helmetID,
    helmetName,
    helmetSellPrice,
    helmetWeight,
    helmetAgiBonus,
    helmetIntBonus,
    helmetIsHeavy,
    helmetPhysDR,
    helmetSpellDR,
    helmetSpiBonus,
    helmetStaBonus,
    helmetStrBonus;

let bootsBuyPrice,
    bootsCount,
    bootsDescription,
    bootsID,
    bootsName,
    bootsSellPrice,
    bootsWeight,
    bootsAgiBonus,
    bootsIntBonus,
    bootsIsHeavy,
    bootsPhysDR,
    bootsSpellDR,
    bootsSpiBonus,
    bootsStaBonus,
    bootsStrBonus;

let daggerBuyPrice,
    daggerCount,
    daggerDescription,
    daggerID,
    daggerName,
    daggerSellPrice,
    daggerWeight,
    daggerIsOneHanded,
    daggerMaxDmg,
    daggerMinDmg,
    daggerStrReq;

let swordBuyPrice,
    swordCount,
    swordDescription,
    swordID,
    swordName,
    swordSellPrice,
    swordWeight,
    swordIsOneHanded,
    swordMaxDmg,
    swordMinDmg,
    swordStrReq;

describe('Human class', () => {
  beforeEach(() => {
    ID = 100,
    name = "John",
    maxHP = 1000,
    currentHP = 500,
    agility = 10,
    armorEquipped = [],
    currentMP = 500,
    faction = "Horde",
    gold = 9999,
    intellect = 8,
    isMale = true,
    maxMP = 1000,
    spirit = 6,
    stamina = 10,
    strength = 10,
    weaponEquipped = [];

    helmetBuyPrice = 500,
    helmetCount = 1,
    helmetDescription = "The corrupted helmet of god",
    helmetID = 101,
    helmetName = "Fallen God Helmet",
    helmetSellPrice = 250,
    helmetWeight = 4.0,
    helmetAgiBonus = 7,
    helmetIntBonus = 7,
    helmetIsHeavy = false,
    helmetPhysDR = 45,
    helmetSpellDR = 35,
    helmetSpiBonus = 7,
    helmetStaBonus = 7,
    helmetStrBonus = 7;

    bootsBuyPrice = 400,
    bootsCount = 1,
    bootsDescription = "The corrupted boots of god",
    bootsID = 102,
    bootsName = "Fallen God Boots",
    bootsSellPrice = 200,
    bootsWeight = 3.0,
    bootsAgiBonus = 6,
    bootsIntBonus = 6,
    bootsIsHeavy = false,
    bootsPhysDR = 35,
    bootsSpellDR = 25,
    bootsSpiBonus = 6,
    bootsStaBonus = 6,
    bootsStrBonus = 6;

    daggerBuyPrice = 1000,
    daggerCount = 1,
    daggerDescription = "A really really dark dagger",
    daggerID = 103,
    daggerName = "The Dark Dagger",
    daggerSellPrice = 500,
    daggerWeight = 5.5,
    daggerIsOneHanded = true,
    daggerMaxDmg = 50,
    daggerMinDmg = 40,
    daggerStrReq = 10;

    swordBuyPrice = 2000,
    swordCount = 1,
    swordDescription = "A really really dark sword",
    swordID = 104,
    swordName = "The Dark Sword",
    swordSellPrice = 1000,
    swordWeight = 15.5,
    swordIsOneHanded = false,
    swordMaxDmg = 150,
    swordMinDmg = 100,
    swordStrReq = 40;
  });
  describe('Constructor function', () => {
    it('should create a new human', () => {
      human = new Human(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped);
      expect(human instanceof Human).toBe(true);
    });
  });
  describe('Public methods', () => {
    beforeEach(() => {
      human = new Human(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped);
      helmet = new Armor(helmetBuyPrice, helmetCount, helmetDescription, helmetID, helmetName, helmetSellPrice, helmetWeight, helmetAgiBonus, helmetIntBonus, helmetIsHeavy, helmetPhysDR, helmetSpellDR, helmetSpiBonus, helmetStaBonus, helmetStrBonus);
      boots = new Armor(bootsBuyPrice, bootsCount, bootsDescription, bootsID, bootsName, bootsSellPrice, bootsWeight, bootsAgiBonus, bootsIntBonus, bootsIsHeavy, bootsPhysDR, bootsSpellDR, bootsSpiBonus, bootsStaBonus, bootsStrBonus);
      dagger = new Weapon(daggerBuyPrice, daggerCount, daggerDescription, daggerID,daggerName, daggerSellPrice, daggerWeight, daggerIsOneHanded, daggerMaxDmg, daggerMinDmg, daggerStrReq);
      sword = new Weapon(swordBuyPrice, swordCount, swordDescription, swordID,swordName, swordSellPrice, swordWeight, swordIsOneHanded, swordMaxDmg, swordMinDmg, swordStrReq);
    });
    describe('Own methods', () => {
      describe('getAgility method', () => {
        it('should return the value of the Agility property of the instance', () => {
          expect(human.getAgility()).toBe(agility);
        });
      });
      describe('setAgility method', () => {
        it('should set a new value to the Agility property of the instance', () => {
          human.setAgility(5);
          expect(human.getAgility()).toBe(5);
        });
        it('should return the instance when executed', () => {
          expect(human.setAgility(5)).toBe(human);
        });
        it('should be able to set 0 as the new value of the Agility of the instance', () => {
          expect(human.setAgility(0).getAgility()).toBe(0);
        });
        it('should not set the value if its something different than a number', () => {
          expect(human.setAgility("hola").getAgility()).toBe(agility);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setAgility(-10).getAgility()).toBe(agility);
        });
      });
      describe('getArmorEquipped method', () => {
        it('should return the value of the ArmorEquipped property of the instance', () => {
          expect(Array.isArray(human.getArmorEquipped())).toBe(true);
          expect(human.getArmorEquipped().length).toBe(armorEquipped.length);
        });
      });
      describe('addArmorEquipped method', () => {
        it('should add a new object of type Armor to the ArmorEquipped property of the instance', () => {
          human.addArmorEquipped(helmet);
          expect(human.getArmorEquipped().length).toBe(1);
        });
        it('should return the length of the ArmorEquipped property of the instance', () => {
          expect(human.addArmorEquipped(helmet)).toBe(1);
        });
        it('should not add objects to the ArmorEquipped property if the object received is not an object of type Armor', () => {
          expect(human.addArmorEquipped(dagger)).toBe(0);
        });
        it('should not add an Armor object that has the same name of one that already exists in the ArmorEquipped property', () => {
          human.addArmorEquipped(helmet);
          expect(human.getArmorEquipped().length).toBe(1);
          expect(human.addArmorEquipped(helmet)).toBe(1);
        });
      });
      describe('removeArmorEquipped method', () => {
        it('should remove an object of type Armor using the name receive as parameter from the ArmorEquipped property of the instance', () => {
          expect(human.addArmorEquipped(helmet)).toBe(1);
          human.removeArmorEquipped(helmetName);
          expect(human.getArmorEquipped().length).toBe(0);
        });
        it('should return the object of type Armor if its found in the ArmorEquipped property of the instance', () => {
          human.addArmorEquipped(helmet);
          expect(human.removeArmorEquipped(helmetName)).toBe(helmet);
        });
        it('should return false if the object of type Armor that we trying to remove doesnt exist in the ArmorEquipped property of the instance', () => {
          expect(human.removeArmorEquipped("Shadow Ring")).toBe(false);
        });
      });
      describe('switchArmorEquipped method', () => {
        it('should switch the ArmorEquipped property of the instance with the one received as parameter', () => {
          let newArmorEquipped = [boots];
          human.addArmorEquipped(helmet);
          human.switchArmorEquipped(newArmorEquipped);
          expect(human.getArmorEquipped().length).toBe(1);
          expect(human.removeArmorEquipped(helmetName)).toBe(false);
          expect(human.removeArmorEquipped(bootsName)).toBe(boots);
        });
      });
      describe('getCurrentMP method', () => {
        it('should return the value of the CurrentMP property of the instance', () => {
          expect(human.getCurrentMP()).toBe(currentMP);
        });
      });
      describe('setCurrentMP method', () => {
        it('should set a new value to the CurrentMP property of the instance', () => {
          human.setCurrentMP(200);
          expect(human.getCurrentMP()).toBe(200);
        });
        it('should return the instance when executed', () => {
          expect(human.setCurrentMP(200)).toBe(human);
        });
        it('should not set a new value if the value isnt a number', () => {
          expect(human.setCurrentMP("hola").getCurrentMP()).toBe(currentMP);
        });
        it('should set as value, the maxMP if the new value for currentMP is greater than the maxHP value', () => {
          expect(human.setCurrentMP(5000).getCurrentMP()).toBe(maxHP);
        });
        xit('should be able to set currentMP value to 0', () => {
          expect(human.setCurrentMP(0).getCurrentMP()).toBe(0);
        });
        xit('should set currentMP to 0 if it receives a new value lower than 0', () => {
          expect(human.setCurrentMP(-100).getCurrentMP()).toBe(0);
        });
      });
      describe('getFaction method', () => {
        it('should return the value of the Faction property of the instance', () => {
          expect(human.getFaction()).toBe(faction);
        });
      });
      describe('getGold method', () => {
        it('should return the value of the Gold property of the instance', () => {
          expect(human.getGold()).toBe(gold);
        });
      });
      describe('setGold method', () => {
        it('should set a new value to the Gold property of the instance', () => {
          human.setGold(500);
          expect(human.getGold()).toBe(500);
        });
        it('should return the instance when executed', () => {
          expect(human.setGold(500)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setGold("hola").getGold()).toBe(gold);
        });
        it('should be able to set 0 as value', () => {
          expect(human.setGold(0).getGold()).toBe(0);
        });
        it('should not set the value if the new value is lower than 0', () => {
          expect(human.setGold(-1).getGold()).toBe(gold);
        });
        it('should not set the value if the new value is greater than 999\'999,999', () => {
          expect(human.setGold(1000000000).getGold()).toBe(gold);
        });
        xit('should set 999\'999,999 if you try to set anything greater than that', () => {
          expect(human.setGold(1000000000).getGold()).toBe(999999999);
        });
      });
      describe('getIntellect method', () => {
        it('should return the value of the Intellect property of the instance', () => {
          expect(human.getIntellect()).toBe(intellect);
        });
      });
      describe('setIntellect method', () => {
        it('should set a nw value to the Intellect property of the instance', () => {
          human.setIntellect(15);
          expect(human.getIntellect()).toBe(15);
        });
        it('should return the instance when executed', () => {
          expect(human.setIntellect(15)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setIntellect("hola").getIntellect()).toBe(intellect);
        });
        it('should be able to set 0 as value', () => {
          expect(human.setIntellect(0).getIntellect()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setIntellect(-1).getIntellect()).toBe(intellect);
        });
      });
      describe('isItMale method', () => {
        it('should return true if the instance has true as value of the IsMale property', () => {
          expect(human.isItMale()).toBe(isMale);
        });
      });
      describe('getMaxMP method', () => {
        it('should return the value of the MaxHP property of the instance', () => {
          expect(human.getMaxMP()).toBe(maxMP);
        });
      });
      describe('setMaxMP method', () => {
        it('should set a new value to the MaxHP property of the instance', () => {
          human.setMaxMP(900);
          expect(human.getMaxMP()).toBe(900);
        });
        it('should return the instance when executed', () => {
          expect(human.setMaxMP(900)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setMaxMP("hola").getMaxMP()).toBe(maxMP);
        });
        it('should not set the value if its 0', () => {
          expect(human.setMaxMP(0).getMaxMP()).toBe(maxMP);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setMaxMP(-1).getMaxMP()).toBe(maxMP);
        });
        it('should be able to set the value if its lower than the currentMP', () => {
          let lessThanCurrentMP = human.getCurrentMP() - 100;
          expect(human.setMaxMP(lessThanCurrentMP).getMaxMP()).toBe(lessThanCurrentMP);
        });
        xit('should set the value to MaxMP and to CurrentMP if the new value is less than the CurrentMP', () => {
          let lessThanCurrentMP = human.getCurrentMP() - 100;
          expect(human.setMaxMP(lessThanCurrentMP).getMaxMP()).toBe(lessThanCurrentMP);
          expect(human.getCurrentMP()).toBe(lessThanCurrentMP);
        });
      });
      describe('getSpirit method', () => {
        it('should return the value of the Spirit property of the instance', () => {
          expect(human.getSpirit()).toBe(spirit);
        });
      });
      describe('setSpirit method', () => {
        it('should set a new value to the Spirit property of the instance', () => {
          human.setSpirit(5);
          expect(human.getSpirit()).toBe(5);
        });
        it('shoudl return the instance when executed', () => {
          expect(human.setSpirit(5)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setSpirit("hola").getSpirit()).toBe(spirit);
        });
        it('should be able to set 0 as value', () => {
          expect(human.setSpirit(0).getSpirit()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setSpirit(-1).getSpirit()).toBe(spirit);
        });
      });
      describe('getStamina method', () => {
        it('should return the value of the Stamina property of the instance', () => {
          expect(human.getStamina()).toBe(stamina);
        });
      });
      describe('setStamina method', () => {
        it('should set a new value to the Stamina property of the instance', () => {
          human.setStamina(5);
          expect(human.getStamina()).toBe(5);
        });
        it('shoudl return the instance when executed', () => {
          expect(human.setStamina(5)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setStamina("hola").getStamina()).toBe(stamina);
        });
        it('should be able to set 0 as value', () => {
          expect(human.setStamina(0).getStamina()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setStamina(-1).getStamina()).toBe(stamina);
        });
      });
      describe('getStrength method', () => {
        it('should return the value of the Strength property of the instance', () => {
          expect(human.getStrength()).toBe(strength);
        });
      });
      describe('setStrength method', () => {
        it('should set a new value to the Strength property of the instance', () => {
          human.setStrength(5);
          expect(human.getStrength()).toBe(5);
        });
        it('shoudl return the instance when executed', () => {
          expect(human.setStrength(5)).toBe(human);
        });
        it('should not set the value if it isnt a number', () => {
          expect(human.setStrength("hola").getStrength()).toBe(strength);
        });
        it('should be able to set 0 as value', () => {
          expect(human.setStrength(0).getStrength()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(human.setStrength(-1).getStrength()).toBe(strength);
        });
      });
      describe('getWeaponEquipped method', () => {
        it('should return the value of the WeaponEquipped property of the instance', () => {
          expect(Array.isArray(human.getWeaponEquipped())).toBe(true);
          expect(human.getWeaponEquipped().length).toBe(weaponEquipped.length);
        });
      });
      describe('addWeaponEquipped method', () => {
        it('should add a new object of type Weapon to the WeaponEquipped property of the instance', () => {
          human.addWeaponEquipped(dagger);
          expect(human.getWeaponEquipped().length).toBe(1);
        });
        it('should return the length of the WeaponEquipped property of the instance', () => {
          expect(human.addWeaponEquipped(dagger)).toBe(1);
        });
        it('should not add objects to the WeaponEquipped property if the object received is not an object of type Weapon', () => {
          expect(human.addWeaponEquipped(helmet)).toBe(0);
        });
        it('should not add an Weapon object that has the same name of one that already exists in the WeaponEquipped property', () => {
          human.addWeaponEquipped(dagger);
          expect(human.getWeaponEquipped(dagger).length).toBe(1);
          expect(human.addWeaponEquipped(dagger)).toBe(1);
        });
      });
      describe('removeWeaponEquipped method', () => {
        it('should remove an object of type Weapon using the name receive as parameter from the WeaponEquipped property of the instance', () => {
          expect(human.addWeaponEquipped(dagger)).toBe(1);
          human.removeWeaponEquipped(daggerName);
          expect(human.getWeaponEquipped().length).toBe(0);
        });
        it('should return the object of type Weapon if its found in the WeaponEquipped property of the instance', () => {
          human.addWeaponEquipped(dagger);
          expect(human.removeWeaponEquipped(daggerName)).toBe(dagger);
        });
        it('should return false if the object of type Weapon that we trying to remove doesnt exist in the WeaponEquipped property of the instance', () => {
          expect(human.removeWeaponEquipped("Shadow Dagger")).toBe(false);
        });
      });
      describe('switchWeaponEquipped method', () => {
        it('should switch the WeaponEquipped property of the instance with the one received as parameter', () => {
          let newWeaponEquipped = [dagger];
          human.addWeaponEquipped(sword);
          human.switchWeaponEquipped(newWeaponEquipped);
          expect(human.getWeaponEquipped().length).toBe(1);
          expect(human.removeWeaponEquipped(swordName)).toBe(false);
          expect(human.removeWeaponEquipped(daggerName)).toBe(dagger);
        });
      });
    });
    describe('Inherited methods', () => {
      describe('getID function', () => {
        it('should return the ID of the instance', () => {
          expect(human.getID()).toBe(100);
        });
      });
      describe('getName function', () => {
        it('should return the name of the instance', () => {
          expect(human.getName()).toBe("John");
        });
      });
      describe('getCurrentHP function', () => {
        it('should return the value of the current HP of the instance', () => {
          expect(human.getCurrentHP()).toBe(500);
        });
      });
      describe('getMaxHP function', () => {
        it('should return the value of the maximum HP of the instance', function() {
          expect(human.getMaxHP()).toBe(1000);
        });
      });
      describe('setCurrentHP function', () => {
        it('shold set a new value to the current HP of the instance', () => {
          human.setCurrentHP(200);
          expect(human.getCurrentHP()).toBe(200);
        });
        it('should return the instance when executed', () => {
          expect(human.setCurrentHP(200)).toBe(human);
        });
        it('should not set a new value if the value isnt a number', () => {
          human.setCurrentHP("hola");
          expect(human.getCurrentHP()).toBe(500);
        });
        it('should set the MaxHP if the new value for currentHP is greater than the MaxHP', () => {
          human.setCurrentHP(2000);
          expect(human.getCurrentHP()).toBe(1000);
        });
        it('should be able to set current HP to 0', () => {
          expect(human.setCurrentHP(0).getCurrentHP()).toBe(0);
        });
        xit('should set current HP to 0 if it receives a number lower than 0', () => {
          expect(human.setCurrentHP(-100).getCurrentHP()).toBe(0);
        });
      });
      describe('setMaxHP function', () => {
        it('should set a new value to the maximum HP of the instance', () => {
          human.setMaxHP(5000);
          expect(human.getMaxHP()).toBe(5000);
        });
        it('should return the instance when executed', () => {
          expect(human.setMaxHP(5000)).toBe(human);
        });
        it('should set a the value even if the max is lower than the currentHP', () => {
          expect(human.setMaxHP(300).getMaxHP()).toBe(300);
        });
        it('should not set a new value if the value isnt a number', () => {
          human.setMaxHP("Hola");
          expect(human.getMaxHP()).toBe(1000);
        });
        it('should not set the value if the value is 0', () => {
          expect(human.setMaxHP(0).getMaxHP()).toBe(1000);
        });
        xit('should not set the value if the value is lower than 0', () => {
          expect(human.setMaxHP(-1).getMaxHP()).toBe(1000);
        });
        xit('should set currentHP to MaxHP if currentHP is lower than the new value of maxHP', () => {
          human.setMaxHP(300);
          expect(human.getMaxHP()).toBe(300);
          expect(human.getCurrentHP()).toBe(300);
        });
      });
    });
  });
});
