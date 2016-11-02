"use strict";

let Player = require("../Player");
let Weapon = require("../Weapon");
let Armor = require("../Armor");

let player;
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

describe('Player class', () => {
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

    player = new Player(ID, name, maxHP, currentHP, agility, armorEquipped, currentMP, faction, gold, intellect, isMale, maxMP, spirit, stamina, strength, weaponEquipped);
    helmet = new Armor(helmetBuyPrice, helmetCount, helmetDescription, helmetID, helmetName, helmetSellPrice, helmetWeight, helmetAgiBonus, helmetIntBonus, helmetIsHeavy, helmetPhysDR, helmetSpellDR, helmetSpiBonus, helmetStaBonus, helmetStrBonus);
    boots = new Armor(bootsBuyPrice, bootsCount, bootsDescription, bootsID, bootsName, bootsSellPrice, bootsWeight, bootsAgiBonus, bootsIntBonus, bootsIsHeavy, bootsPhysDR, bootsSpellDR, bootsSpiBonus, bootsStaBonus, bootsStrBonus);
    dagger = new Weapon(daggerBuyPrice, daggerCount, daggerDescription, daggerID,daggerName, daggerSellPrice, daggerWeight, daggerIsOneHanded, daggerMaxDmg, daggerMinDmg, daggerStrReq);
    sword = new Weapon(swordBuyPrice, swordCount, swordDescription, swordID,swordName, swordSellPrice, swordWeight, swordIsOneHanded, swordMaxDmg, swordMinDmg, swordStrReq);
  });
  describe('Constructor function', () => {
    it('should create a new player', () => {
      expect(player instanceof Player).toBe(true);
    });
  });
  describe('Public methods', () => {
    describe('Own methods', () => {
      describe('getExperience method', () => {
        it('should return the value of the Experience property of the instance', () => {
          expect(player.getExperience()).toBe(0);
        });
      });
      describe('setExperience method', () => {
        it('should set a new value to the Experience property of the instance', () => {
          player.setExperience(100);
          expect(player.getExperience()).toBe(100);
        });
        it('should return the instance when executed', () => {
          expect(player.setExperience(100)).toBe(player);
        });
        it('should not set the value if its something different than a number', () => {
          expect(player.setExperience("hola").getExperience()).toBe(0);
        });
        it('should be able to set 0 as the new value of the Experience property of the instance', () => {
          expect(player.setExperience(100).getExperience()).toBe(100);
          expect(player.setExperience(0).getExperience()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(player.setExperience(100).getExperience()).toBe(100);
          expect(player.setExperience(-1).getExperience()).toBe(100);
        });
      });
      describe('getLevel method', () => {
        it('should return the value of the Level property of the instance', () => {
          expect(player.getLevel()).toBe(1);
        });
      });
      describe('setLevel method', () => {
        it('should set a new value to the Level property of the instance', () => {
          player.setLevel(100);
          expect(player.getLevel()).toBe(100);
        });
        it('should return the instance when executed', () => {
          expect(player.setLevel(100)).toBe(player);
        });
        it('should not set the value if its something different than a number', () => {
          expect(player.setLevel("hola").getLevel()).toBe(1);
        });
        it('should be able to set 0 as the new value of the Level property of the instance', () => {
          expect(player.setLevel(100).getLevel()).toBe(100);
          expect(player.setLevel(0).getLevel()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(player.setLevel(100).getLevel()).toBe(100);
          expect(player.setLevel(-1).getLevel()).toBe(100);
        });
      });
      describe('getSP method', () => {
        it('should return the value of the Level property of the instance', () => {
          expect(player.getSP()).toBe(0);
        });
      });
      describe('setSP method', () => {
        it('should set a new value to theSP property of the instance', () => {
          player.setSP(100);
          expect(player.getSP()).toBe(100);
        });
        it('should return the instance when executed', () => {
          expect(player.setSP(100)).toBe(player);
        });
        it('should not set the value if its something different than a number', () => {
          expect(player.setSP("hola").getSP()).toBe(0);
        });
        it('should be able to set 0 as the new value of theSP property of the instance', () => {
          expect(player.setSP(100).getSP()).toBe(100);
          expect(player.setSP(0).getSP()).toBe(0);
        });
        it('should not set the value if its lower than 0', () => {
          expect(player.setSP(100).getSP()).toBe(100);
          expect(player.setSP(-1).getSP()).toBe(100);
        });
      });
    });
    describe('Inherited methods', () => {
      describe('From Human', () => {
        describe('getID function', () => {
          it('should return the ID of the instance', () => {
            expect(player.getID()).toBe(100);
          });
        });
        describe('getName function', () => {
          it('should return the name of the instance', () => {
            expect(player.getName()).toBe("John");
          });
        });
        describe('getCurrentHP function', () => {
          it('should return the value of the current HP of the instance', () => {
            expect(player.getCurrentHP()).toBe(500);
          });
        });
        describe('getMaxHP function', () => {
          it('should return the value of the maximum HP of the instance', function() {
            expect(player.getMaxHP()).toBe(1000);
          });
        });
        describe('setCurrentHP function', () => {
          it('shold set a new value to the current HP of the instance', () => {
            player.setCurrentHP(200);
            expect(player.getCurrentHP()).toBe(200);
          });
          it('should return the instance when executed', () => {
            expect(player.setCurrentHP(200)).toBe(player);
          });
          it('should not set a new value if the value isnt a number', () => {
            player.setCurrentHP("hola");
            expect(player.getCurrentHP()).toBe(500);
          });
          it('should set the MaxHP if the new value for currentHP is greater than the MaxHP', () => {
            player.setCurrentHP(2000);
            expect(player.getCurrentHP()).toBe(1000);
          });
          it('should be able to set current HP to 0', () => {
            expect(player.setCurrentHP(0).getCurrentHP()).toBe(0);
          });
          xit('should set current HP to 0 if it receives a number lower than 0', () => {
            expect(player.setCurrentHP(-100).getCurrentHP()).toBe(0);
          });
        });
        describe('setMax function', () => {
          it('should set a new value to the maximum HP of the instance', () => {
            player.setMaxHP(5000);
            expect(player.getMaxHP()).toBe(5000);
          });
          it('should return the instance when executed', () => {
            expect(player.setMaxHP(5000)).toBe(player);
          });
          it('should set a the value even if the max is lower than the currentHP', () => {
            expect(player.setMaxHP(300).getMaxHP()).toBe(300);
          });
          it('should not set a new value if the value isnt a number', () => {
            player.setMaxHP("Hola");
            expect(player.getMaxHP()).toBe(1000);
          });
          it('should not set the value if the value is 0', () => {
            expect(player.setMaxHP(0).getMaxHP()).toBe(1000);
          });
          it('should not set the value if the value is lower than 0', () => {
            expect(player.setMaxHP(-1).getMaxHP()).toBe(1000);
          });
          xit('should set currentHP to MaxHP if currentHP is lower than the new value of maxHP', () => {
            player.setMaxHP(300);
            expect(player.getMaxHP()).toBe(300);
            expect(player.getCurrentHP()).toBe(300);
          });
        });
        describe('getAgility method', () => {
          it('should return the value of the Agility property of the instance', () => {
            expect(player.getAgility()).toBe(agility);
          });
        });
        describe('setAgility method', () => {
          it('should set a new value to the Agility property of the instance', () => {
            player.setAgility(5);
            expect(player.getAgility()).toBe(5);
          });
          it('should return the instance when executed', () => {
            expect(player.setAgility(5)).toBe(player);
          });
          it('should be able to set 0 as the new value of the Agility of the instance', () => {
            expect(player.setAgility(0).getAgility()).toBe(0);
          });
          it('should not set the value if its something different than a number', () => {
            expect(player.setAgility("hola").getAgility()).toBe(agility);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setAgility(-10).getAgility()).toBe(agility);
          });
        });
        describe('getArmorEquipped method', () => {
          it('should return the value of the ArmorEquipped property of the instance', () => {
            expect(Array.isArray(player.getArmorEquipped())).toBe(true);
            expect(player.getArmorEquipped().length).toBe(armorEquipped.length);
          });
        });
        describe('addArmorEquipped method', () => {
          it('should add a new object of type Armor to the ArmorEquipped property of the instance', () => {
            player.addArmorEquipped(helmet);
            expect(player.getArmorEquipped().length).toBe(1);
          });
          it('should return the length of the ArmorEquipped property of the instance', () => {
            expect(player.addArmorEquipped(helmet)).toBe(1);
          });
          it('should not add objects to the ArmorEquipped property if the object received is not an object of type Armor', () => {
            expect(player.addArmorEquipped(dagger)).toBe(0);
          });
          it('should not add an Armor object that has the same name of one that already exists in the ArmorEquipped property', () => {
            player.addArmorEquipped(helmet);
            expect(player.getArmorEquipped().length).toBe(1);
            expect(player.addArmorEquipped(helmet)).toBe(1);
          });
        });
        describe('removeArmorEquipped method', () => {
          it('should remove an object of type Armor using the name receive as parameter from the ArmorEquipped property of the instance', () => {
            expect(player.addArmorEquipped(helmet)).toBe(1);
            player.removeArmorEquipped(helmetName);
            expect(player.getArmorEquipped().length).toBe(0);
          });
          it('should return the object of type Armor if its found in the ArmorEquipped property of the instance', () => {
            player.addArmorEquipped(helmet);
            expect(player.removeArmorEquipped(helmetName)).toBe(helmet);
          });
          it('should return false if the object of type Armor that we trying to remove doesnt exist in the ArmorEquipped property of the instance', () => {
            expect(player.removeArmorEquipped("Shadow Ring")).toBe(false);
          });
        });
        describe('switchArmorEquipped method', () => {
          it('should switch the ArmorEquipped property of the instance with the one received as parameter', () => {
            let newArmorEquipped = [boots];
            player.addArmorEquipped(helmet);
            player.switchArmorEquipped(newArmorEquipped);
            expect(player.getArmorEquipped().length).toBe(1);
            expect(player.removeArmorEquipped(helmetName)).toBe(false);
            expect(player.removeArmorEquipped(bootsName)).toBe(boots);
          });
        });
        describe('getCurrentMP method', () => {
          it('should return the value of the CurrentMP property of the instance', () => {
            expect(player.getCurrentMP()).toBe(currentMP);
          });
        });
        describe('setCurrentMP method', () => {
          it('should set a new value to the CurrentMP property of the instance', () => {
            player.setCurrentMP(200);
            expect(player.getCurrentMP()).toBe(200);
          });
          it('should return the instance when executed', () => {
            expect(player.setCurrentMP(200)).toBe(player);
          });
          it('should not set a new value if the value isnt a number', () => {
            expect(player.setCurrentMP("hola").getCurrentMP()).toBe(currentMP);
          });
          it('should set as value, the maxMP if the new value for currentMP is greater than the maxHP value', () => {
            expect(player.setCurrentMP(5000).getCurrentMP()).toBe(maxHP);
          });
          xit('should be able to set currentMP value to 0', () => {
            expect(player.setCurrentMP(0).getCurrentMP()).toBe(0);
          });
          xit('should set currentMP to 0 if it receives a new value lower than 0', () => {
            expect(player.setCurrentMP(-100).getCurrentMP()).toBe(0);
          });
        });
        describe('getFaction method', () => {
          it('should return the value of the Faction property of the instance', () => {
            expect(player.getFaction()).toBe(faction);
          });
        });
        describe('getGold method', () => {
          it('should return the value of the Gold property of the instance', () => {
            expect(player.getGold()).toBe(gold);
          });
        });
        describe('setGold method', () => {
          it('should set a new value to the Gold property of the instance', () => {
            player.setGold(500);
            expect(player.getGold()).toBe(500);
          });
          it('should return the instance when executed', () => {
            expect(player.setGold(500)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setGold("hola").getGold()).toBe(gold);
          });
          it('should be able to set 0 as value', () => {
            expect(player.setGold(0).getGold()).toBe(0);
          });
          it('should not set the value if the new value is lower than 0', () => {
            expect(player.setGold(-1).getGold()).toBe(gold);
          });
          it('should not set the value if the new value is greater than 999\'999,999', () => {
            expect(player.setGold(1000000000).getGold()).toBe(gold);
          });
          xit('should set 999\'999,999 if you try to set anything greater than that', () => {
            expect(player.setGold(1000000000).getGold()).toBe(999999999);
          });
        });
        describe('getIntellect method', () => {
          it('should return the value of the Intellect property of the instance', () => {
            expect(player.getIntellect()).toBe(intellect);
          });
        });
        describe('setIntellect method', () => {
          it('should set a nw value to the Intellect property of the instance', () => {
            player.setIntellect(15);
            expect(player.getIntellect()).toBe(15);
          });
          it('should return the instance when executed', () => {
            expect(player.setIntellect(15)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setIntellect("hola").getIntellect()).toBe(intellect);
          });
          it('should be able to set 0 as value', () => {
            expect(player.setIntellect(0).getIntellect()).toBe(0);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setIntellect(-1).getIntellect()).toBe(intellect);
          });
        });
        describe('isItMale method', () => {
          it('should return true if the instance has true as value of the IsMale property', () => {
            expect(player.isItMale()).toBe(isMale);
          });
        });
        describe('getMaxMP method', () => {
          it('should return the value of the MaxHP property of the instance', () => {
            expect(player.getMaxMP()).toBe(maxMP);
          });
        });
        describe('setMaxMP method', () => {
          it('should set a new value to the MaxHP property of the instance', () => {
            player.setMaxMP(900);
            expect(player.getMaxMP()).toBe(900);
          });
          it('should return the instance when executed', () => {
            expect(player.setMaxMP(900)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setMaxMP("hola").getMaxMP()).toBe(maxMP);
          });
          it('should not set the value if its 0', () => {
            expect(player.setMaxMP(0).getMaxMP()).toBe(maxMP);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setMaxMP(-1).getMaxMP()).toBe(maxMP);
          });
          it('should be able to set the value if its lower than the currentMP', () => {
            let lessThanCurrentMP = player.getCurrentMP() - 100;
            expect(player.setMaxMP(lessThanCurrentMP).getMaxMP()).toBe(lessThanCurrentMP);
          });
          xit('should set the value to MaxMP and to CurrentMP if the new value is less than the CurrentMP', () => {
            let lessThanCurrentMP = player.getCurrentMP() - 100;
            expect(player.setMaxMP(lessThanCurrentMP).getMaxMP()).toBe(lessThanCurrentMP);
            expect(player.getCurrentMP()).toBe(lessThanCurrentMP);
          });
        });
        describe('getSpirit method', () => {
          it('should return the value of the Spirit property of the instance', () => {
            expect(player.getSpirit()).toBe(spirit);
          });
        });
        describe('setSpirit method', () => {
          it('should set a new value to the Spirit property of the instance', () => {
            player.setSpirit(5);
            expect(player.getSpirit()).toBe(5);
          });
          it('shoudl return the instance when executed', () => {
            expect(player.setSpirit(5)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setSpirit("hola").getSpirit()).toBe(spirit);
          });
          it('should be able to set 0 as value', () => {
            expect(player.setSpirit(0).getSpirit()).toBe(0);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setSpirit(-1).getSpirit()).toBe(spirit);
          });
        });
        describe('getStamina method', () => {
          it('should return the value of the Stamina property of the instance', () => {
            expect(player.getStamina()).toBe(stamina);
          });
        });
        describe('setStamina method', () => {
          it('should set a new value to the Stamina property of the instance', () => {
            player.setStamina(5);
            expect(player.getStamina()).toBe(5);
          });
          it('shoudl return the instance when executed', () => {
            expect(player.setStamina(5)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setStamina("hola").getStamina()).toBe(stamina);
          });
          it('should be able to set 0 as value', () => {
            expect(player.setStamina(0).getStamina()).toBe(0);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setStamina(-1).getStamina()).toBe(stamina);
          });
        });
        describe('getStrength method', () => {
          it('should return the value of the Strength property of the instance', () => {
            expect(player.getStrength()).toBe(strength);
          });
        });
        describe('setStrength method', () => {
          it('should set a new value to the Strength property of the instance', () => {
            player.setStrength(5);
            expect(player.getStrength()).toBe(5);
          });
          it('shoudl return the instance when executed', () => {
            expect(player.setStrength(5)).toBe(player);
          });
          it('should not set the value if it isnt a number', () => {
            expect(player.setStrength("hola").getStrength()).toBe(strength);
          });
          it('should be able to set 0 as value', () => {
            expect(player.setStrength(0).getStrength()).toBe(0);
          });
          it('should not set the value if its lower than 0', () => {
            expect(player.setStrength(-1).getStrength()).toBe(strength);
          });
        });
        describe('getWeaponEquipped method', () => {
          it('should return the value of the WeaponEquipped property of the instance', () => {
            expect(Array.isArray(player.getWeaponEquipped())).toBe(true);
            expect(player.getWeaponEquipped().length).toBe(weaponEquipped.length);
          });
        });
        describe('addWeaponEquipped method', () => {
          it('should add a new object of type Weapon to the WeaponEquipped property of the instance', () => {
            player.addWeaponEquipped(dagger);
            expect(player.getWeaponEquipped().length).toBe(1);
          });
          it('should return the length of the WeaponEquipped property of the instance', () => {
            expect(player.addWeaponEquipped(dagger)).toBe(1);
          });
          it('should not add objects to the WeaponEquipped property if the object received is not an object of type Weapon', () => {
            expect(player.addWeaponEquipped(helmet)).toBe(0);
          });
          it('should not add an Weapon object that has the same name of one that already exists in the WeaponEquipped property', () => {
            player.addWeaponEquipped(dagger);
            expect(player.getWeaponEquipped(dagger).length).toBe(1);
            expect(player.addWeaponEquipped(dagger)).toBe(1);
          });
        });
        describe('removeWeaponEquipped method', () => {
          it('should remove an object of type Weapon using the name receive as parameter from the WeaponEquipped property of the instance', () => {
            expect(player.addWeaponEquipped(dagger)).toBe(1);
            player.removeWeaponEquipped(daggerName);
            expect(player.getWeaponEquipped().length).toBe(0);
          });
          it('should return the object of type Weapon if its found in the WeaponEquipped property of the instance', () => {
            player.addWeaponEquipped(dagger);
            expect(player.removeWeaponEquipped(daggerName)).toBe(dagger);
          });
          it('should return false if the object of type Weapon that we trying to remove doesnt exist in the WeaponEquipped property of the instance', () => {
            expect(player.removeWeaponEquipped("Shadow Dagger")).toBe(false);
          });
        });
        describe('switchWeaponEquipped method', () => {
          it('should switch the WeaponEquipped property of the instance with the one received as parameter', () => {
            let newWeaponEquipped = [dagger];
            player.addWeaponEquipped(sword);
            player.switchWeaponEquipped(newWeaponEquipped);
            expect(player.getWeaponEquipped().length).toBe(1);
            expect(player.removeWeaponEquipped(swordName)).toBe(false);
            expect(player.removeWeaponEquipped(daggerName)).toBe(dagger);
          });
        });
      });
      describe('From Character', () => {
        describe('getID function', () => {
          it('should return the ID of the instance', () => {
            expect(player.getID()).toBe(100);
          });
        });
        describe('getName function', () => {
          it('should return the name of the instance', () => {
            expect(player.getName()).toBe("John");
          });
        });
        describe('getCurrentHP function', () => {
          it('should return the value of the current HP of the instance', () => {
            expect(player.getCurrentHP()).toBe(500);
          });
        });
        describe('getMaxHP function', () => {
          it('should return the value of the maximum HP of the instance', function() {
            expect(player.getMaxHP()).toBe(1000);
          });
        });
        describe('setCurrentHP function', () => {
          it('shold set a new value to the current HP of the instance', () => {
            player.setCurrentHP(200);
            expect(player.getCurrentHP()).toBe(200);
          });
          it('should return the instance when executed', () => {
            expect(player.setCurrentHP(200)).toBe(player);
          });
          it('should not set a new value if the value isnt a number', () => {
            player.setCurrentHP("hola");
            expect(player.getCurrentHP()).toBe(500);
          });
          it('should set the MaxHP if the new value for currentHP is greater than the MaxHP', () => {
            player.setCurrentHP(2000);
            expect(player.getCurrentHP()).toBe(1000);
          });
          it('should be able to set current HP to 0', () => {
            expect(player.setCurrentHP(0).getCurrentHP()).toBe(0);
          });
          xit('should set current HP to 0 if it receives a number lower than 0', () => {
            expect(player.setCurrentHP(-100).getCurrentHP()).toBe(0);
          });
        });
        describe('setMax function', () => {
          it('should set a new value to the maximum HP of the instance', () => {
            player.setMaxHP(5000);
            expect(player.getMaxHP()).toBe(5000);
          });
          it('should return the instance when executed', () => {
            expect(player.setMaxHP(5000)).toBe(player);
          });
          it('should set a the value even if the max is lower than the currentHP', () => {
            expect(player.setMaxHP(300).getMaxHP()).toBe(300);
          });
          it('should not set a new value if the value isnt a number', () => {
            player.setMaxHP("Hola");
            expect(player.getMaxHP()).toBe(1000);
          });
          it('should not set the value if the value is 0', () => {
            expect(player.setMaxHP(0).getMaxHP()).toBe(1000);
          });
          xit('should not set the value if the value is lower than 0', () => {
            expect(player.setMaxHP(-1).getMaxHP()).toBe(1000);
          });
          xit('should set currentHP to MaxHP if currentHP is lower than the new value of maxHP', () => {
            player.setMaxHP(300);
            expect(player.getMaxHP()).toBe(300);
            expect(player.getCurrentHP()).toBe(300);
          });
        });
      });
    });
  });
});