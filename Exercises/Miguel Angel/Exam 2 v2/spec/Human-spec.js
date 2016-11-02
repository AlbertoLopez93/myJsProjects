"use strict";

let Human = require("../Human");
let Armor = require("../Armor");
let Weapon = require("../Weapon");

describe("Testing Human class", function() {
    it("It should be defined", function() {
        expect(Human).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof Human === "function").toBe(true);
    });
    let weapon1 = new Weapon (1100, 2, "Im a sword", 0, "Sword", 800, 20,
                              true, 150, 50, 800);
    let weapon2 = new Weapon (1450, 1, "Im a pistol", 1, "Pistol", 1000, 45,
                              false, 250, 28, 400);
    let weapon3 = new Weapon (1800, 4, "Im a rifle", 2, "Rifle", 1100, 50,
                              true, 400, 35, 1100);
    let weapon4 = new Weapon (800, 5, "Im a shield", 3, "Shield", 500, 15,
                              false, 100, 10, 100);
    let armor1 = new Armor (800, 1, "Im a helmet", 0, "Helmet", 500, 10,
                            20, 10, true, 15,
                            30, 13, 11, 45);
    let armor2 = new Armor (1000, 1, "We are boots", 1, "Boots", 800, 25,
                            50, 20, true, 30,
                            20, 16, 18, 47);
    let armor3 = new Armor (1100, 2, "Im a chest", 2, "Chest", 700, 12,
                            15, 20, true, 78,
                            15, 25, 33, 18);
    let armor4 = new Armor (1500, 1, "Im an armor", 3, "Armor", 800, 11,
                            13, 31, false, 25,
                            47, 23, 25, 35);
    let human = new Human (0, "Migue", 2000, 1500,
                           11, [armor1, armor2, armor3, armor4], 800, "Human",
                           500, 200, true, 2000,
                           100, 800, 1000, [weapon1, weapon2, weapon3, weapon4]);
    describe("Private properties", function() {
        it("Should have a private property called ID", function() {
            expect(human.ID).toBeUndefined();
        });
        it("Should have a private property called name", function() {
            expect(human.name).toBeUndefined();
        });
        it("Should have a private property called maxHP", function() {
            expect(human.maxHP).toBeUndefined();
        });
        it("Should have a private property called currentHP", function() {
            expect(human.currentHP).toBeUndefined();
        });
        it("Should have a private property called Agility", function() {
            expect(human.Agility).toBeUndefined();
        });
        it("Should have a private property called ArmorEquipped", function() {
            expect(human.ArmorEquipped).toBeUndefined();
        });
        it("Should have a private property called CurrentMP", function() {
            expect(human.CurrentMP).toBeUndefined();
        });
        it("Should have a private property called Faction", function() {
            expect(human.Faction).toBeUndefined();
        });
        it("Should have a private property called Gold", function() {
            expect(human.Gold).toBeUndefined();
        });
        it("Should have a private property called Intellect", function() {
            expect(human.Intellect).toBeUndefined();
        });
        it("Should have a private property called IsMale", function() {
            expect(human.IsMale).toBeUndefined();
        });
        it("Should have a private property called MaxMP", function() {
            expect(human.MaxMP).toBeUndefined();
        });
        it("Should have a private property called Spirit", function() {
            expect(human.Spirit).toBeUndefined();
        });
        it("Should have a private property called Stamina", function() {
            expect(human.Stamina).toBeUndefined();
        });
        it("Should have a private property called Strength", function() {
            expect(human.Strength).toBeUndefined();
        });
        it("Should have a private property called WeaponEquipped", function() {
            expect(human.WeaponEquipped).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(human.getID).toBeDefined();
                expect(typeof human.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(human.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(human.getName).toBeDefined();
                expect(typeof human.getName === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(human.getName()).toBe("Migue");
            });
        });
        describe("getCurrentHP method", function() {
            it("Should be defined", function() {
                expect(human.getCurrentHP).toBeDefined();
                expect(typeof human.getCurrentHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(human.getCurrentHP()).toBe(1500);
            });
        });
        describe("getMaxHP method", function() {
            it("Should be defined", function() {
                expect(human.getMaxHP).toBeDefined();
                expect(typeof human.getMaxHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(human.getMaxHP()).toBe(2000);
            });
        });
        describe("setCurrentHP method", function() {
            it("Should be defined", function() {
                expect(human.setCurrentHP).toBeDefined();
                expect(typeof human.setCurrentHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(human.getCurrentHP()).toBe(1500);
                human.setCurrentHP(1800);
                expect(human.getCurrentHP()).toBe(1800);
            });
            it("Shouldn't change the currentHP if the new HP isn't a number", function() {
                expect(human.getCurrentHP()).toBe(1800);
                human.setCurrentHP("pato");
                expect(human.getCurrentHP()).toBe(1800);
            });
            it("If the newHP it's bigger than the maxHP it will set the maxHP to the instance as the currentHP", function() {
                expect(human.getCurrentHP()).toBe(1800);
                human.setCurrentHP(human.getMaxHP() + 10);
                expect(human.getCurrentHP()).toBe(human.getMaxHP());
            });
            it("Should return the instance", function() {
                expect(human.setCurrentHP() instanceof Human).toBe(true);
            });
        });
        describe("setMaxHP method", function() {
            it("Should be defined", function() {
                expect(human.setMaxHP).toBeDefined();
                expect(typeof human.setMaxHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(human.getMaxHP()).toBe(2000);
                human.setMaxHP(1800);
                expect(human.getMaxHP()).toBe(1800);
            });
            it("Shouldn't change the maxHP if the new HP isn't a number", function() {
                expect(human.getMaxHP()).toBe(1800);
                human.setMaxHP("pato");
                expect(human.getMaxHP()).toBe(1800);
            });
            it("Should return the instance", function() {
                expect(human.setMaxHP() instanceof Human).toBe(true);
            });
        });
        describe("getAgility method", function() {
            it("Should be defined", function() {
                expect(human.getAgility).toBeDefined();
                expect(typeof human.getAgility === "function").toBe(true);
            });
            it("Should return the agility of the instance", function() {
                expect(human.getAgility()).toBe(11);
            });
        });
        describe("setAgility method", function() {
            it("Should be defined", function() {
                expect(human.setAgility).toBeDefined();
                expect(typeof human.setAgility === "function").toBe(true);
            });
            it("Should set a new agility to the agility of the instance", function() {
                expect(human.getAgility()).toBe(11);
                human.setAgility(25);
                expect(human.getAgility()).toBe(25);
            });
            it("Shouldn't change the agility if the new agility isn't a number", function() {
                expect(human.getAgility()).toBe(25);
                human.setAgility("pato");
                expect(human.getAgility()).toBe(25);
            });
            it("Should return the instance", function() {
                expect(human.setAgility() instanceof Human).toBe(true);
            });
        });
        describe("getArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(human.getArmorEquipped).toBeDefined();
                expect(typeof human.getArmorEquipped === "function").toBe(true);
            });
            it("Should return an array of the armor equipped of the instance", function() {
                expect(Array.isArray(human.getArmorEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Armor", function() {
                let flag = human.getArmorEquipped().every(function (elem){
                    return elem instanceof Armor;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(human.addArmorEquipped).toBeDefined();
                expect(typeof human.addArmorEquipped === "function").toBe(true);
            });
            it("Should add a new armor if it is an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(human.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if already exists", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(human.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if it isn't an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(human.addArmorEquipped(newWeapon)).toBe(5);
            });
        });
        describe("switchArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(human.switchArmorEquipped).toBeDefined();
                expect(typeof human.switchArmorEquipped === "function").toBe(true);
            });
            it("Should return the old armor set", function() {
                let oldSet = human.getArmorEquipped();
                expect(human.switchArmorEquipped()).toBe(oldSet);
            });
            it("Should switch the ArmorEquipped if the new array has only Armor objects", function() {
                let oldSet = human.getArmorEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(human.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(human.getArmorEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the ArmorEquipped if the new array hasn't only Armor objects", function() {
                let oldSet = human.getArmorEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(human.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(human.getArmorEquipped()).toEqual(oldSet);
            });
        });
        describe("getCurrentMP method", function() {
            it("Should be defined", function() {
                expect(human.getCurrentMP).toBeDefined();
                expect(typeof human.getCurrentMP === "function").toBe(true);
            });
            it("Should return the MP of the instance", function() {
                expect(human.getCurrentMP()).toBe(800);
            });
        });
        describe("setCurrentMP method", function() {
            it("Should be defined", function() {
                expect(human.setCurrentMP).toBeDefined();
                expect(typeof human.setCurrentMP === "function").toBe(true);
            });
            it("Should set a new MP to the currentMP of the instance", function() {
                expect(human.getCurrentMP()).toBe(800);
                human.setCurrentMP(900);
                expect(human.getCurrentMP()).toBe(900);
            });
            it("Shouldn't change the MP if the new MP isn't a number", function() {
                expect(human.getCurrentMP()).toBe(900);
                human.setCurrentMP("pato");
                expect(human.getCurrentMP()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(human.setCurrentMP() instanceof Human).toBe(true);
            });
        });
        describe("getFaction method", function() {
            it("Should be defined", function() {
                expect(human.getFaction).toBeDefined();
                expect(typeof human.getFaction === "function").toBe(true);
            });
            it("Should return the faction of the instance", function() {
                expect(human.getFaction()).toBe("Human");
            });
        });
        describe("getGold method", function() {
            it("Should be defined", function() {
                expect(human.getGold).toBeDefined();
                expect(typeof human.getGold === "function").toBe(true);
            });
            it("Should return the gold of the instance", function() {
                expect(human.getGold()).toBe(500);
            });
        });
        describe("setGold method", function() {
            it("Should be defined", function() {
                expect(human.setGold).toBeDefined();
                expect(typeof human.setGold === "function").toBe(true);
            });
            it("Should set a new gold to the gold of the instance", function() {
                expect(human.getGold()).toBe(500);
                human.setGold(900);
                expect(human.getGold()).toBe(900);
            });
            it("Shouldn't change the gold if the new gold isn't a number", function() {
                expect(human.getGold()).toBe(900);
                human.setGold("pato");
                expect(human.getGold()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(human.setGold() instanceof Human).toBe(true);
            });
        });
        describe("getIntellect method", function() {
            it("Should be defined", function() {
                expect(human.getIntellect).toBeDefined();
                expect(typeof human.getIntellect === "function").toBe(true);
            });
            it("Should return the intellect of the instance", function() {
                expect(human.getIntellect()).toBe(200);
            });
        });
        describe("setIntellect method", function() {
            it("Should be defined", function() {
                expect(human.setIntellect).toBeDefined();
                expect(typeof human.setIntellect === "function").toBe(true);
            });
            it("Should set a new intellect to the intellect of the instance", function() {
                expect(human.getIntellect()).toBe(200);
                human.setIntellect(500);
                expect(human.getIntellect()).toBe(500);
            });
            it("Shouldn't change the intellect if the new intellect isn't a number", function() {
                expect(human.getIntellect()).toBe(500);
                human.setIntellect("pato");
                expect(human.getIntellect()).toBe(500);
            });
            it("Should return the instance", function() {
                expect(human.setIntellect() instanceof Human).toBe(true);
            });
        });
        describe("isItMale method", function() {
            it("Should be defined", function() {
                expect(human.isItMale).toBeDefined();
                expect(typeof human.isItMale === "function").toBe(true);
            });
            it("Should return true or false if the human is male or not", function() {
                expect(human.isItMale()).toBe(true);
            });
        });
        describe("getMaxMP method", function() {
            it("Should be defined", function() {
                expect(human.getMaxMP).toBeDefined();
                expect(typeof human.getMaxMP === "function").toBe(true);
            });
            it("Should return the MaxMP of the instance", function() {
                expect(human.getMaxMP()).toBe(2000);
            });
        });
        describe("setMaxMP method", function() {
            it("Should be defined", function() {
                expect(human.setMaxMP).toBeDefined();
                expect(typeof human.setMaxMP === "function").toBe(true);
            });
            it("Should set a new MaxMP to the MaxMP of the instance", function() {
                expect(human.getMaxMP()).toBe(2000);
                human.setMaxMP(5000);
                expect(human.getMaxMP()).toBe(5000);
            });
            it("Shouldn't change the MaxMP if the new MaxMP isn't a number", function() {
                expect(human.getMaxMP()).toBe(5000);
                human.setMaxMP("pato");
                expect(human.getMaxMP()).toBe(5000);
            });
            it("Should return the instance", function() {
                expect(human.setMaxMP() instanceof Human).toBe(true);
            });
        });
        describe("getSpirit method", function() {
            it("Should be defined", function() {
                expect(human.getSpirit).toBeDefined();
                expect(typeof human.getSpirit === "function").toBe(true);
            });
            it("Should return the Spirit of the instance", function() {
                expect(human.getSpirit()).toBe(100);
            });
        });
        describe("setSpirit method", function() {
            it("Should be defined", function() {
                expect(human.setSpirit).toBeDefined();
                expect(typeof human.setSpirit === "function").toBe(true);
            });
            it("Should set a new Spirit to the Spirit of the instance", function() {
                expect(human.getSpirit()).toBe(100);
                human.setSpirit(250);
                expect(human.getSpirit()).toBe(250);
            });
            it("Shouldn't change the Spirit if the new Spirit isn't a number", function() {
                expect(human.getSpirit()).toBe(250);
                human.setSpirit("pato");
                expect(human.getSpirit()).toBe(250);
            });
            it("Should return the instance", function() {
                expect(human.setSpirit() instanceof Human).toBe(true);
            });
        });
        describe("getStamina method", function() {
            it("Should be defined", function() {
                expect(human.getStamina).toBeDefined();
                expect(typeof human.getStamina === "function").toBe(true);
            });
            it("Should return the Stamina of the instance", function() {
                expect(human.getStamina()).toBe(800);
            });
        });
        describe("setStamina method", function() {
            it("Should be defined", function() {
                expect(human.setStamina).toBeDefined();
                expect(typeof human.setStamina === "function").toBe(true);
            });
            it("Should set a new Stamina to the Stamina of the instance", function() {
                expect(human.getStamina()).toBe(800);
                human.setStamina(1000);
                expect(human.getStamina()).toBe(1000);
            });
            it("Shouldn't change the Stamina if the new Stamina isn't a number", function() {
                expect(human.getStamina()).toBe(1000);
                human.setStamina("pato");
                expect(human.getStamina()).toBe(1000);
            });
            it("Should return the instance", function() {
                expect(human.setStamina() instanceof Human).toBe(true);
            });
        });
        describe("getStrength method", function() {
            it("Should be defined", function() {
                expect(human.getStrength).toBeDefined();
                expect(typeof human.getStrength === "function").toBe(true);
            });
            it("Should return the Strength of the instance", function() {
                expect(human.getStrength()).toBe(1000);
            });
        });
        describe("setStrength method", function() {
            it("Should be defined", function() {
                expect(human.setStrength).toBeDefined();
                expect(typeof human.setStrength === "function").toBe(true);
            });
            it("Should set a new Strength to the Strength of the instance", function() {
                expect(human.getStrength()).toBe(1000);
                human.setStrength(2000);
                expect(human.getStrength()).toBe(2000);
            });
            it("Shouldn't change the Strength if the new Strength isn't a number", function() {
                expect(human.getStrength()).toBe(2000);
                human.setStrength("pato");
                expect(human.getStrength()).toBe(2000);
            });
            it("Should return the instance", function() {
                expect(human.setStrength() instanceof Human).toBe(true);
            });
        });
        describe("getWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(human.getWeaponEquipped).toBeDefined();
                expect(typeof human.getWeaponEquipped === "function").toBe(true);
            });
            it("Should return an array of the Weapon equipped of the instance", function() {
                expect(Array.isArray(human.getWeaponEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Weapon", function() {
                let flag = human.getWeaponEquipped().every(function (elem){
                    return elem instanceof Weapon;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(human.addWeaponEquipped).toBeDefined();
                expect(typeof human.addWeaponEquipped === "function").toBe(true);
            });
            it("Should add a new Weapon if it is an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(human.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if already exists", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(human.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if it isn't an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new Weapon", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(human.addWeaponEquipped(newArmor)).toBe(5);
            });
        });
        describe("switchWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(human.switchWeaponEquipped).toBeDefined();
                expect(typeof human.switchWeaponEquipped === "function").toBe(true);
            });
            it("Should return the old Weapon set", function() {
                let oldSet = human.getWeaponEquipped();
                expect(human.switchWeaponEquipped()).toBe(oldSet);
            });
            it("Should switch the WeaponEquipped if the new array has only Weapon objects", function() {
                let oldSet = human.getWeaponEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(human.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(human.getWeaponEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the WeaponEquipped if the new array hasn't only Weapon objects", function() {
                let oldSet = human.getWeaponEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(human.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(human.getWeaponEquipped()).toEqual(oldSet);
            });
        });
    });
});
