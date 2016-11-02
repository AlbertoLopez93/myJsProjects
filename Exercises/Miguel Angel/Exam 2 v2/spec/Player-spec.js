"use strict";

let Player = require("../Player");
let Armor = require("../Armor");
let Weapon = require("../Weapon");

describe("Testing Player class", function() {
    it("It should be defined", function() {
        expect(Player).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof Player === "function").toBe(true);
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
    let player = new Player (0, "Migue", 2000, 1500,
                           11, [armor1, armor2, armor3, armor4], 800, "Player",
                           500, 200, true, 2000,
                           100, 800, 1000, [weapon1, weapon2, weapon3, weapon4]);
    describe("Private properties", function() {
        it("Should have a private property called ID", function() {
            expect(player.ID).toBeUndefined();
        });
        it("Should have a private property called name", function() {
            expect(player.name).toBeUndefined();
        });
        it("Should have a private property called maxHP", function() {
            expect(player.maxHP).toBeUndefined();
        });
        it("Should have a private property called currentHP", function() {
            expect(player.currentHP).toBeUndefined();
        });
        it("Should have a private property called Agility", function() {
            expect(player.Agility).toBeUndefined();
        });
        it("Should have a private property called ArmorEquipped", function() {
            expect(player.ArmorEquipped).toBeUndefined();
        });
        it("Should have a private property called CurrentMP", function() {
            expect(player.CurrentMP).toBeUndefined();
        });
        it("Should have a private property called Faction", function() {
            expect(player.Faction).toBeUndefined();
        });
        it("Should have a private property called Gold", function() {
            expect(player.Gold).toBeUndefined();
        });
        it("Should have a private property called Intellect", function() {
            expect(player.Intellect).toBeUndefined();
        });
        it("Should have a private property called IsMale", function() {
            expect(player.IsMale).toBeUndefined();
        });
        it("Should have a private property called MaxMP", function() {
            expect(player.MaxMP).toBeUndefined();
        });
        it("Should have a private property called Spirit", function() {
            expect(player.Spirit).toBeUndefined();
        });
        it("Should have a private property called Stamina", function() {
            expect(player.Stamina).toBeUndefined();
        });
        it("Should have a private property called Strength", function() {
            expect(player.Strength).toBeUndefined();
        });
        it("Should have a private property called WeaponEquipped", function() {
            expect(player.WeaponEquipped).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(player.getID).toBeDefined();
                expect(typeof player.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(player.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(player.getName).toBeDefined();
                expect(typeof player.getName === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(player.getName()).toBe("Migue");
            });
        });
        describe("getCurrentHP method", function() {
            it("Should be defined", function() {
                expect(player.getCurrentHP).toBeDefined();
                expect(typeof player.getCurrentHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(player.getCurrentHP()).toBe(1500);
            });
        });
        describe("getMaxHP method", function() {
            it("Should be defined", function() {
                expect(player.getMaxHP).toBeDefined();
                expect(typeof player.getMaxHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(player.getMaxHP()).toBe(2000);
            });
        });
        describe("setCurrentHP method", function() {
            it("Should be defined", function() {
                expect(player.setCurrentHP).toBeDefined();
                expect(typeof player.setCurrentHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(player.getCurrentHP()).toBe(1500);
                player.setCurrentHP(1800);
                expect(player.getCurrentHP()).toBe(1800);
            });
            it("Shouldn't change the currentHP if the new HP isn't a number", function() {
                expect(player.getCurrentHP()).toBe(1800);
                player.setCurrentHP("pato");
                expect(player.getCurrentHP()).toBe(1800);
            });
            it("If the newHP it's bigger than the maxHP it will set the maxHP to the instance as the currentHP", function() {
                expect(player.getCurrentHP()).toBe(1800);
                player.setCurrentHP(player.getMaxHP() + 10);
                expect(player.getCurrentHP()).toBe(player.getMaxHP());
            });
            it("Should return the instance", function() {
                expect(player.setCurrentHP() instanceof Player).toBe(true);
            });
        });
        describe("setMaxHP method", function() {
            it("Should be defined", function() {
                expect(player.setMaxHP).toBeDefined();
                expect(typeof player.setMaxHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(player.getMaxHP()).toBe(2000);
                player.setMaxHP(1800);
                expect(player.getMaxHP()).toBe(1800);
            });
            it("Shouldn't change the maxHP if the new HP isn't a number", function() {
                expect(player.getMaxHP()).toBe(1800);
                player.setMaxHP("pato");
                expect(player.getMaxHP()).toBe(1800);
            });
            it("Should return the instance", function() {
                expect(player.setMaxHP() instanceof Player).toBe(true);
            });
        });
        describe("getAgility method", function() {
            it("Should be defined", function() {
                expect(player.getAgility).toBeDefined();
                expect(typeof player.getAgility === "function").toBe(true);
            });
            it("Should return the agility of the instance", function() {
                expect(player.getAgility()).toBe(11);
            });
        });
        describe("setAgility method", function() {
            it("Should be defined", function() {
                expect(player.setAgility).toBeDefined();
                expect(typeof player.setAgility === "function").toBe(true);
            });
            it("Should set a new agility to the agility of the instance", function() {
                expect(player.getAgility()).toBe(11);
                player.setAgility(25);
                expect(player.getAgility()).toBe(25);
            });
            it("Shouldn't change the agility if the new agility isn't a number", function() {
                expect(player.getAgility()).toBe(25);
                player.setAgility("pato");
                expect(player.getAgility()).toBe(25);
            });
            it("Should return the instance", function() {
                expect(player.setAgility() instanceof Player).toBe(true);
            });
        });
        describe("getArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(player.getArmorEquipped).toBeDefined();
                expect(typeof player.getArmorEquipped === "function").toBe(true);
            });
            it("Should return an array of the armor equipped of the instance", function() {
                expect(Array.isArray(player.getArmorEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Armor", function() {
                let flag = player.getArmorEquipped().every(function (elem){
                    return elem instanceof Armor;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(player.addArmorEquipped).toBeDefined();
                expect(typeof player.addArmorEquipped === "function").toBe(true);
            });
            it("Should add a new armor if it is an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(player.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if already exists", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(player.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if it isn't an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(player.addArmorEquipped(newWeapon)).toBe(5);
            });
        });
        describe("switchArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(player.switchArmorEquipped).toBeDefined();
                expect(typeof player.switchArmorEquipped === "function").toBe(true);
            });
            it("Should return the old armor set", function() {
                let oldSet = player.getArmorEquipped();
                expect(player.switchArmorEquipped()).toBe(oldSet);
            });
            it("Should switch the ArmorEquipped if the new array has only Armor objects", function() {
                let oldSet = player.getArmorEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(player.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(player.getArmorEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the ArmorEquipped if the new array hasn't only Armor objects", function() {
                let oldSet = player.getArmorEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(player.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(player.getArmorEquipped()).toEqual(oldSet);
            });
        });
        describe("getCurrentMP method", function() {
            it("Should be defined", function() {
                expect(player.getCurrentMP).toBeDefined();
                expect(typeof player.getCurrentMP === "function").toBe(true);
            });
            it("Should return the MP of the instance", function() {
                expect(player.getCurrentMP()).toBe(800);
            });
        });
        describe("setCurrentMP method", function() {
            it("Should be defined", function() {
                expect(player.setCurrentMP).toBeDefined();
                expect(typeof player.setCurrentMP === "function").toBe(true);
            });
            it("Should set a new MP to the currentMP of the instance", function() {
                expect(player.getCurrentMP()).toBe(800);
                player.setCurrentMP(900);
                expect(player.getCurrentMP()).toBe(900);
            });
            it("Shouldn't change the MP if the new MP isn't a number", function() {
                expect(player.getCurrentMP()).toBe(900);
                player.setCurrentMP("pato");
                expect(player.getCurrentMP()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(player.setCurrentMP() instanceof Player).toBe(true);
            });
        });
        describe("getFaction method", function() {
            it("Should be defined", function() {
                expect(player.getFaction).toBeDefined();
                expect(typeof player.getFaction === "function").toBe(true);
            });
            it("Should return the faction of the instance", function() {
                expect(player.getFaction()).toBe("Player");
            });
        });
        describe("getGold method", function() {
            it("Should be defined", function() {
                expect(player.getGold).toBeDefined();
                expect(typeof player.getGold === "function").toBe(true);
            });
            it("Should return the gold of the instance", function() {
                expect(player.getGold()).toBe(500);
            });
        });
        describe("setGold method", function() {
            it("Should be defined", function() {
                expect(player.setGold).toBeDefined();
                expect(typeof player.setGold === "function").toBe(true);
            });
            it("Should set a new gold to the gold of the instance", function() {
                expect(player.getGold()).toBe(500);
                player.setGold(900);
                expect(player.getGold()).toBe(900);
            });
            it("Shouldn't change the gold if the new gold isn't a number", function() {
                expect(player.getGold()).toBe(900);
                player.setGold("pato");
                expect(player.getGold()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(player.setGold() instanceof Player).toBe(true);
            });
        });
        describe("getIntellect method", function() {
            it("Should be defined", function() {
                expect(player.getIntellect).toBeDefined();
                expect(typeof player.getIntellect === "function").toBe(true);
            });
            it("Should return the intellect of the instance", function() {
                expect(player.getIntellect()).toBe(200);
            });
        });
        describe("setIntellect method", function() {
            it("Should be defined", function() {
                expect(player.setIntellect).toBeDefined();
                expect(typeof player.setIntellect === "function").toBe(true);
            });
            it("Should set a new intellect to the intellect of the instance", function() {
                expect(player.getIntellect()).toBe(200);
                player.setIntellect(500);
                expect(player.getIntellect()).toBe(500);
            });
            it("Shouldn't change the intellect if the new intellect isn't a number", function() {
                expect(player.getIntellect()).toBe(500);
                player.setIntellect("pato");
                expect(player.getIntellect()).toBe(500);
            });
            it("Should return the instance", function() {
                expect(player.setIntellect() instanceof Player).toBe(true);
            });
        });
        describe("isItMale method", function() {
            it("Should be defined", function() {
                expect(player.isItMale).toBeDefined();
                expect(typeof player.isItMale === "function").toBe(true);
            });
            it("Should return true or false if the player is male or not", function() {
                expect(player.isItMale()).toBe(true);
            });
        });
        describe("getMaxMP method", function() {
            it("Should be defined", function() {
                expect(player.getMaxMP).toBeDefined();
                expect(typeof player.getMaxMP === "function").toBe(true);
            });
            it("Should return the MaxMP of the instance", function() {
                expect(player.getMaxMP()).toBe(2000);
            });
        });
        describe("setMaxMP method", function() {
            it("Should be defined", function() {
                expect(player.setMaxMP).toBeDefined();
                expect(typeof player.setMaxMP === "function").toBe(true);
            });
            it("Should set a new MaxMP to the MaxMP of the instance", function() {
                expect(player.getMaxMP()).toBe(2000);
                player.setMaxMP(5000);
                expect(player.getMaxMP()).toBe(5000);
            });
            it("Shouldn't change the MaxMP if the new MaxMP isn't a number", function() {
                expect(player.getMaxMP()).toBe(5000);
                player.setMaxMP("pato");
                expect(player.getMaxMP()).toBe(5000);
            });
            it("Should return the instance", function() {
                expect(player.setMaxMP() instanceof Player).toBe(true);
            });
        });
        describe("getSpirit method", function() {
            it("Should be defined", function() {
                expect(player.getSpirit).toBeDefined();
                expect(typeof player.getSpirit === "function").toBe(true);
            });
            it("Should return the Spirit of the instance", function() {
                expect(player.getSpirit()).toBe(100);
            });
        });
        describe("setSpirit method", function() {
            it("Should be defined", function() {
                expect(player.setSpirit).toBeDefined();
                expect(typeof player.setSpirit === "function").toBe(true);
            });
            it("Should set a new Spirit to the Spirit of the instance", function() {
                expect(player.getSpirit()).toBe(100);
                player.setSpirit(250);
                expect(player.getSpirit()).toBe(250);
            });
            it("Shouldn't change the Spirit if the new Spirit isn't a number", function() {
                expect(player.getSpirit()).toBe(250);
                player.setSpirit("pato");
                expect(player.getSpirit()).toBe(250);
            });
            it("Should return the instance", function() {
                expect(player.setSpirit() instanceof Player).toBe(true);
            });
        });
        describe("getStamina method", function() {
            it("Should be defined", function() {
                expect(player.getStamina).toBeDefined();
                expect(typeof player.getStamina === "function").toBe(true);
            });
            it("Should return the Stamina of the instance", function() {
                expect(player.getStamina()).toBe(800);
            });
        });
        describe("setStamina method", function() {
            it("Should be defined", function() {
                expect(player.setStamina).toBeDefined();
                expect(typeof player.setStamina === "function").toBe(true);
            });
            it("Should set a new Stamina to the Stamina of the instance", function() {
                expect(player.getStamina()).toBe(800);
                player.setStamina(1000);
                expect(player.getStamina()).toBe(1000);
            });
            it("Shouldn't change the Stamina if the new Stamina isn't a number", function() {
                expect(player.getStamina()).toBe(1000);
                player.setStamina("pato");
                expect(player.getStamina()).toBe(1000);
            });
            it("Should return the instance", function() {
                expect(player.setStamina() instanceof Player).toBe(true);
            });
        });
        describe("getStrength method", function() {
            it("Should be defined", function() {
                expect(player.getStrength).toBeDefined();
                expect(typeof player.getStrength === "function").toBe(true);
            });
            it("Should return the Strength of the instance", function() {
                expect(player.getStrength()).toBe(1000);
            });
        });
        describe("setStrength method", function() {
            it("Should be defined", function() {
                expect(player.setStrength).toBeDefined();
                expect(typeof player.setStrength === "function").toBe(true);
            });
            it("Should set a new Strength to the Strength of the instance", function() {
                expect(player.getStrength()).toBe(1000);
                player.setStrength(2000);
                expect(player.getStrength()).toBe(2000);
            });
            it("Shouldn't change the Strength if the new Strength isn't a number", function() {
                expect(player.getStrength()).toBe(2000);
                player.setStrength("pato");
                expect(player.getStrength()).toBe(2000);
            });
            it("Should return the instance", function() {
                expect(player.setStrength() instanceof Player).toBe(true);
            });
        });
        describe("getWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(player.getWeaponEquipped).toBeDefined();
                expect(typeof player.getWeaponEquipped === "function").toBe(true);
            });
            it("Should return an array of the Weapon equipped of the instance", function() {
                expect(Array.isArray(player.getWeaponEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Weapon", function() {
                let flag = player.getWeaponEquipped().every(function (elem){
                    return elem instanceof Weapon;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(player.addWeaponEquipped).toBeDefined();
                expect(typeof player.addWeaponEquipped === "function").toBe(true);
            });
            it("Should add a new Weapon if it is an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(player.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if already exists", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(player.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if it isn't an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new Weapon", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(player.addWeaponEquipped(newArmor)).toBe(5);
            });
        });
        describe("switchWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(player.switchWeaponEquipped).toBeDefined();
                expect(typeof player.switchWeaponEquipped === "function").toBe(true);
            });
            it("Should return the old Weapon set", function() {
                let oldSet = player.getWeaponEquipped();
                expect(player.switchWeaponEquipped()).toBe(oldSet);
            });
            it("Should switch the WeaponEquipped if the new array has only Weapon objects", function() {
                let oldSet = player.getWeaponEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(player.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(player.getWeaponEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the WeaponEquipped if the new array hasn't only Weapon objects", function() {
                let oldSet = player.getWeaponEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(player.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(player.getWeaponEquipped()).toEqual(oldSet);
            });
        });
        describe("getExperience method", function() {
            it("Should be defined", function() {
                expect(player.getExperience).toBeDefined();
                expect(typeof player.getExperience === "function").toBe(true);
            });
            it("Should return the Experience of the instance", function() {
                expect(player.getExperience()).toBe(0);
            });
        });
        describe("setExperience method", function() {
            it("Should be defined", function() {
                expect(player.setExperience).toBeDefined();
                expect(typeof player.setExperience === "function").toBe(true);
            });
            it("Should set a new Experience to the Experience of the instance", function() {
                expect(player.getExperience()).toBe(0);
                player.setExperience(150);
                expect(player.getExperience()).toBe(150);
            });
            it("Shouldn't change the Experience if the new Experience isn't a number", function() {
                expect(player.getExperience()).toBe(150);
                player.setExperience("pato");
                expect(player.getExperience()).toBe(150);
            });
            it("Should return the instance", function() {
                expect(player.setExperience() instanceof Player).toBe(true);
            });
        });
        describe("getLevel method", function() {
            it("Should be defined", function() {
                expect(player.getLevel).toBeDefined();
                expect(typeof player.getLevel === "function").toBe(true);
            });
            it("Should return the Level of the instance", function() {
                expect(player.getLevel()).toBe(1);
            });
        });
        describe("setLevel method", function() {
            it("Should be defined", function() {
                expect(player.setLevel).toBeDefined();
                expect(typeof player.setLevel === "function").toBe(true);
            });
            it("Should set a new Level to the Level of the instance", function() {
                expect(player.getLevel()).toBe(1);
                player.setLevel(2);
                expect(player.getLevel()).toBe(2);
            });
            it("Shouldn't change the Level if the new Level isn't a number", function() {
                expect(player.getLevel()).toBe(2);
                player.setLevel("pato");
                expect(player.getLevel()).toBe(2);
            });
            it("Should return the instance", function() {
                expect(player.setLevel() instanceof Player).toBe(true);
            });
        });
        describe("getSP method", function() {
            it("Should be defined", function() {
                expect(player.getSP).toBeDefined();
                expect(typeof player.getSP === "function").toBe(true);
            });
            it("Should return the SP of the instance", function() {
                expect(player.getSP()).toBe(0);
            });
        });
        describe("setSP method", function() {
            it("Should be defined", function() {
                expect(player.setSP).toBeDefined();
                expect(typeof player.setSP === "function").toBe(true);
            });
            it("Should set a new SP to the SP of the instance", function() {
                expect(player.getSP()).toBe(0);
                player.setSP(150);
                expect(player.getSP()).toBe(150);
            });
            it("Shouldn't change the SP if the new SP isn't a number", function() {
                expect(player.getSP()).toBe(150);
                player.setSP("pato");
                expect(player.getSP()).toBe(150);
            });
            it("Should return the instance", function() {
                expect(player.setSP() instanceof Player).toBe(true);
            });
        });
    });
});
