"use strict";

let NPC = require("../NPC");
let Armor = require("../Armor");
let Weapon = require("../Weapon");

describe("Testing NPC class", function() {
    it("It should be defined", function() {
        expect(NPC).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof NPC === "function").toBe(true);
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
    let npc = new NPC (0, "Migue", 2000, 1500,
                           11, [armor1, armor2, armor3, armor4], 800, "NPC",
                           500, 200, true, 2000,
                           100, 800, 1000, [weapon1, weapon2, weapon3, weapon4],
                           true, 500);
    describe("Private properties", function() {
        it("Should have a private property called ID", function() {
            expect(npc.ID).toBeUndefined();
        });
        it("Should have a private property called name", function() {
            expect(npc.name).toBeUndefined();
        });
        it("Should have a private property called maxHP", function() {
            expect(npc.maxHP).toBeUndefined();
        });
        it("Should have a private property called currentHP", function() {
            expect(npc.currentHP).toBeUndefined();
        });
        it("Should have a private property called Agility", function() {
            expect(npc.Agility).toBeUndefined();
        });
        it("Should have a private property called ArmorEquipped", function() {
            expect(npc.ArmorEquipped).toBeUndefined();
        });
        it("Should have a private property called CurrentMP", function() {
            expect(npc.CurrentMP).toBeUndefined();
        });
        it("Should have a private property called Faction", function() {
            expect(npc.Faction).toBeUndefined();
        });
        it("Should have a private property called Gold", function() {
            expect(npc.Gold).toBeUndefined();
        });
        it("Should have a private property called Intellect", function() {
            expect(npc.Intellect).toBeUndefined();
        });
        it("Should have a private property called IsMale", function() {
            expect(npc.IsMale).toBeUndefined();
        });
        it("Should have a private property called MaxMP", function() {
            expect(npc.MaxMP).toBeUndefined();
        });
        it("Should have a private property called Spirit", function() {
            expect(npc.Spirit).toBeUndefined();
        });
        it("Should have a private property called Stamina", function() {
            expect(npc.Stamina).toBeUndefined();
        });
        it("Should have a private property called Strength", function() {
            expect(npc.Strength).toBeUndefined();
        });
        it("Should have a private property called WeaponEquipped", function() {
            expect(npc.WeaponEquipped).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(npc.getID).toBeDefined();
                expect(typeof npc.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(npc.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(npc.getName).toBeDefined();
                expect(typeof npc.getName === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(npc.getName()).toBe("Migue");
            });
        });
        describe("getCurrentHP method", function() {
            it("Should be defined", function() {
                expect(npc.getCurrentHP).toBeDefined();
                expect(typeof npc.getCurrentHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(npc.getCurrentHP()).toBe(1500);
            });
        });
        describe("getMaxHP method", function() {
            it("Should be defined", function() {
                expect(npc.getMaxHP).toBeDefined();
                expect(typeof npc.getMaxHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(npc.getMaxHP()).toBe(2000);
            });
        });
        describe("setCurrentHP method", function() {
            it("Should be defined", function() {
                expect(npc.setCurrentHP).toBeDefined();
                expect(typeof npc.setCurrentHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(npc.getCurrentHP()).toBe(1500);
                npc.setCurrentHP(1800);
                expect(npc.getCurrentHP()).toBe(1800);
            });
            it("Shouldn't change the currentHP if the new HP isn't a number", function() {
                expect(npc.getCurrentHP()).toBe(1800);
                npc.setCurrentHP("pato");
                expect(npc.getCurrentHP()).toBe(1800);
            });
            it("If the newHP it's bigger than the maxHP it will set the maxHP to the instance as the currentHP", function() {
                expect(npc.getCurrentHP()).toBe(1800);
                npc.setCurrentHP(npc.getMaxHP() + 10);
                expect(npc.getCurrentHP()).toBe(npc.getMaxHP());
            });
            it("Should return the instance", function() {
                expect(npc.setCurrentHP() instanceof NPC).toBe(true);
            });
        });
        describe("setMaxHP method", function() {
            it("Should be defined", function() {
                expect(npc.setMaxHP).toBeDefined();
                expect(typeof npc.setMaxHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(npc.getMaxHP()).toBe(2000);
                npc.setMaxHP(1800);
                expect(npc.getMaxHP()).toBe(1800);
            });
            it("Shouldn't change the maxHP if the new HP isn't a number", function() {
                expect(npc.getMaxHP()).toBe(1800);
                npc.setMaxHP("pato");
                expect(npc.getMaxHP()).toBe(1800);
            });
            it("Should return the instance", function() {
                expect(npc.setMaxHP() instanceof NPC).toBe(true);
            });
        });
        describe("getAgility method", function() {
            it("Should be defined", function() {
                expect(npc.getAgility).toBeDefined();
                expect(typeof npc.getAgility === "function").toBe(true);
            });
            it("Should return the agility of the instance", function() {
                expect(npc.getAgility()).toBe(11);
            });
        });
        describe("setAgility method", function() {
            it("Should be defined", function() {
                expect(npc.setAgility).toBeDefined();
                expect(typeof npc.setAgility === "function").toBe(true);
            });
            it("Should set a new agility to the agility of the instance", function() {
                expect(npc.getAgility()).toBe(11);
                npc.setAgility(25);
                expect(npc.getAgility()).toBe(25);
            });
            it("Shouldn't change the agility if the new agility isn't a number", function() {
                expect(npc.getAgility()).toBe(25);
                npc.setAgility("pato");
                expect(npc.getAgility()).toBe(25);
            });
            it("Should return the instance", function() {
                expect(npc.setAgility() instanceof NPC).toBe(true);
            });
        });
        describe("getArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.getArmorEquipped).toBeDefined();
                expect(typeof npc.getArmorEquipped === "function").toBe(true);
            });
            it("Should return an array of the armor equipped of the instance", function() {
                expect(Array.isArray(npc.getArmorEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Armor", function() {
                let flag = npc.getArmorEquipped().every(function (elem){
                    return elem instanceof Armor;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.addArmorEquipped).toBeDefined();
                expect(typeof npc.addArmorEquipped === "function").toBe(true);
            });
            it("Should add a new armor if it is an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(npc.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if already exists", function() {
                let newArmor = new Armor (800, 1, "Im a new armor", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(npc.addArmorEquipped(newArmor)).toBe(5);
            });
            it("Shouldn't add the new armor if it isn't an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(npc.addArmorEquipped(newWeapon)).toBe(5);
            });
        });
        describe("switchArmorEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.switchArmorEquipped).toBeDefined();
                expect(typeof npc.switchArmorEquipped === "function").toBe(true);
            });
            it("Should return the old armor set", function() {
                let oldSet = npc.getArmorEquipped();
                expect(npc.switchArmorEquipped()).toBe(oldSet);
            });
            it("Should switch the ArmorEquipped if the new array has only Armor objects", function() {
                let oldSet = npc.getArmorEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(npc.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(npc.getArmorEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the ArmorEquipped if the new array hasn't only Armor objects", function() {
                let oldSet = npc.getArmorEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(npc.switchArmorEquipped(newSet)).toBe(oldSet);
                expect(npc.getArmorEquipped()).toEqual(oldSet);
            });
        });
        describe("getCurrentMP method", function() {
            it("Should be defined", function() {
                expect(npc.getCurrentMP).toBeDefined();
                expect(typeof npc.getCurrentMP === "function").toBe(true);
            });
            it("Should return the MP of the instance", function() {
                expect(npc.getCurrentMP()).toBe(800);
            });
        });
        describe("setCurrentMP method", function() {
            it("Should be defined", function() {
                expect(npc.setCurrentMP).toBeDefined();
                expect(typeof npc.setCurrentMP === "function").toBe(true);
            });
            it("Should set a new MP to the currentMP of the instance", function() {
                expect(npc.getCurrentMP()).toBe(800);
                npc.setCurrentMP(900);
                expect(npc.getCurrentMP()).toBe(900);
            });
            it("Shouldn't change the MP if the new MP isn't a number", function() {
                expect(npc.getCurrentMP()).toBe(900);
                npc.setCurrentMP("pato");
                expect(npc.getCurrentMP()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(npc.setCurrentMP() instanceof NPC).toBe(true);
            });
        });
        describe("getFaction method", function() {
            it("Should be defined", function() {
                expect(npc.getFaction).toBeDefined();
                expect(typeof npc.getFaction === "function").toBe(true);
            });
            it("Should return the faction of the instance", function() {
                expect(npc.getFaction()).toBe("NPC");
            });
        });
        describe("getGold method", function() {
            it("Should be defined", function() {
                expect(npc.getGold).toBeDefined();
                expect(typeof npc.getGold === "function").toBe(true);
            });
            it("Should return the gold of the instance", function() {
                expect(npc.getGold()).toBe(500);
            });
        });
        describe("setGold method", function() {
            it("Should be defined", function() {
                expect(npc.setGold).toBeDefined();
                expect(typeof npc.setGold === "function").toBe(true);
            });
            it("Should set a new gold to the gold of the instance", function() {
                expect(npc.getGold()).toBe(500);
                npc.setGold(900);
                expect(npc.getGold()).toBe(900);
            });
            it("Shouldn't change the gold if the new gold isn't a number", function() {
                expect(npc.getGold()).toBe(900);
                npc.setGold("pato");
                expect(npc.getGold()).toBe(900);
            });
            it("Should return the instance", function() {
                expect(npc.setGold() instanceof NPC).toBe(true);
            });
        });
        describe("getIntellect method", function() {
            it("Should be defined", function() {
                expect(npc.getIntellect).toBeDefined();
                expect(typeof npc.getIntellect === "function").toBe(true);
            });
            it("Should return the intellect of the instance", function() {
                expect(npc.getIntellect()).toBe(200);
            });
        });
        describe("setIntellect method", function() {
            it("Should be defined", function() {
                expect(npc.setIntellect).toBeDefined();
                expect(typeof npc.setIntellect === "function").toBe(true);
            });
            it("Should set a new intellect to the intellect of the instance", function() {
                expect(npc.getIntellect()).toBe(200);
                npc.setIntellect(500);
                expect(npc.getIntellect()).toBe(500);
            });
            it("Shouldn't change the intellect if the new intellect isn't a number", function() {
                expect(npc.getIntellect()).toBe(500);
                npc.setIntellect("pato");
                expect(npc.getIntellect()).toBe(500);
            });
            it("Should return the instance", function() {
                expect(npc.setIntellect() instanceof NPC).toBe(true);
            });
        });
        describe("isItMale method", function() {
            it("Should be defined", function() {
                expect(npc.isItMale).toBeDefined();
                expect(typeof npc.isItMale === "function").toBe(true);
            });
            it("Should return true or false if the npc is male or not", function() {
                expect(npc.isItMale()).toBe(true);
            });
        });
        describe("getMaxMP method", function() {
            it("Should be defined", function() {
                expect(npc.getMaxMP).toBeDefined();
                expect(typeof npc.getMaxMP === "function").toBe(true);
            });
            it("Should return the MaxMP of the instance", function() {
                expect(npc.getMaxMP()).toBe(2000);
            });
        });
        describe("setMaxMP method", function() {
            it("Should be defined", function() {
                expect(npc.setMaxMP).toBeDefined();
                expect(typeof npc.setMaxMP === "function").toBe(true);
            });
            it("Should set a new MaxMP to the MaxMP of the instance", function() {
                expect(npc.getMaxMP()).toBe(2000);
                npc.setMaxMP(5000);
                expect(npc.getMaxMP()).toBe(5000);
            });
            it("Shouldn't change the MaxMP if the new MaxMP isn't a number", function() {
                expect(npc.getMaxMP()).toBe(5000);
                npc.setMaxMP("pato");
                expect(npc.getMaxMP()).toBe(5000);
            });
            it("Should return the instance", function() {
                expect(npc.setMaxMP() instanceof NPC).toBe(true);
            });
        });
        describe("getSpirit method", function() {
            it("Should be defined", function() {
                expect(npc.getSpirit).toBeDefined();
                expect(typeof npc.getSpirit === "function").toBe(true);
            });
            it("Should return the Spirit of the instance", function() {
                expect(npc.getSpirit()).toBe(100);
            });
        });
        describe("setSpirit method", function() {
            it("Should be defined", function() {
                expect(npc.setSpirit).toBeDefined();
                expect(typeof npc.setSpirit === "function").toBe(true);
            });
            it("Should set a new Spirit to the Spirit of the instance", function() {
                expect(npc.getSpirit()).toBe(100);
                npc.setSpirit(250);
                expect(npc.getSpirit()).toBe(250);
            });
            it("Shouldn't change the Spirit if the new Spirit isn't a number", function() {
                expect(npc.getSpirit()).toBe(250);
                npc.setSpirit("pato");
                expect(npc.getSpirit()).toBe(250);
            });
            it("Should return the instance", function() {
                expect(npc.setSpirit() instanceof NPC).toBe(true);
            });
        });
        describe("getStamina method", function() {
            it("Should be defined", function() {
                expect(npc.getStamina).toBeDefined();
                expect(typeof npc.getStamina === "function").toBe(true);
            });
            it("Should return the Stamina of the instance", function() {
                expect(npc.getStamina()).toBe(800);
            });
        });
        describe("setStamina method", function() {
            it("Should be defined", function() {
                expect(npc.setStamina).toBeDefined();
                expect(typeof npc.setStamina === "function").toBe(true);
            });
            it("Should set a new Stamina to the Stamina of the instance", function() {
                expect(npc.getStamina()).toBe(800);
                npc.setStamina(1000);
                expect(npc.getStamina()).toBe(1000);
            });
            it("Shouldn't change the Stamina if the new Stamina isn't a number", function() {
                expect(npc.getStamina()).toBe(1000);
                npc.setStamina("pato");
                expect(npc.getStamina()).toBe(1000);
            });
            it("Should return the instance", function() {
                expect(npc.setStamina() instanceof NPC).toBe(true);
            });
        });
        describe("getStrength method", function() {
            it("Should be defined", function() {
                expect(npc.getStrength).toBeDefined();
                expect(typeof npc.getStrength === "function").toBe(true);
            });
            it("Should return the Strength of the instance", function() {
                expect(npc.getStrength()).toBe(1000);
            });
        });
        describe("setStrength method", function() {
            it("Should be defined", function() {
                expect(npc.setStrength).toBeDefined();
                expect(typeof npc.setStrength === "function").toBe(true);
            });
            it("Should set a new Strength to the Strength of the instance", function() {
                expect(npc.getStrength()).toBe(1000);
                npc.setStrength(2000);
                expect(npc.getStrength()).toBe(2000);
            });
            it("Shouldn't change the Strength if the new Strength isn't a number", function() {
                expect(npc.getStrength()).toBe(2000);
                npc.setStrength("pato");
                expect(npc.getStrength()).toBe(2000);
            });
            it("Should return the instance", function() {
                expect(npc.setStrength() instanceof NPC).toBe(true);
            });
        });
        describe("getWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.getWeaponEquipped).toBeDefined();
                expect(typeof npc.getWeaponEquipped === "function").toBe(true);
            });
            it("Should return an array of the Weapon equipped of the instance", function() {
                expect(Array.isArray(npc.getWeaponEquipped())).toBe(true);
            });
            it("The elements of the array should be objects instances of Weapon", function() {
                let flag = npc.getWeaponEquipped().every(function (elem){
                    return elem instanceof Weapon;
                });
                expect(flag).toBe(true);
            });
        });
        describe("addWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.addWeaponEquipped).toBeDefined();
                expect(typeof npc.addWeaponEquipped === "function").toBe(true);
            });
            it("Should add a new Weapon if it is an Armor object", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(npc.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if already exists", function() {
                let newWeapon = new Weapon (1100, 2, "Im a new weapon", 0, "New Weapon", 800, 20,
                                          true, 150, 50, 800);
                expect(npc.addWeaponEquipped(newWeapon)).toBe(5);
            });
            it("Shouldn't add the new Weapon if it isn't an Armor object", function() {
                let newArmor = new Armor (800, 1, "Im a new Weapon", 0, "New Armor", 500, 10,
                                        20, 10, true, 15,
                                        30, 13, 11, 45);
                expect(npc.addWeaponEquipped(newArmor)).toBe(5);
            });
        });
        describe("switchWeaponEquipped method", function() {
            it("Should be defined", function() {
                expect(npc.switchWeaponEquipped).toBeDefined();
                expect(typeof npc.switchWeaponEquipped === "function").toBe(true);
            });
            it("Should return the old Weapon set", function() {
                let oldSet = npc.getWeaponEquipped();
                expect(npc.switchWeaponEquipped()).toBe(oldSet);
            });
            it("Should switch the WeaponEquipped if the new array has only Weapon objects", function() {
                let oldSet = npc.getWeaponEquipped();
                let newSet = [weapon3, weapon4, weapon1, weapon2];
                expect(npc.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(npc.getWeaponEquipped()).toNotEqual(oldSet);
            });
            it("Shouldn't switch the WeaponEquipped if the new array hasn't only Weapon objects", function() {
                let oldSet = npc.getWeaponEquipped();
                let newSet = [armor2, armor1, armor4, armor3];
                expect(npc.switchWeaponEquipped(newSet)).toBe(oldSet);
                expect(npc.getWeaponEquipped()).toEqual(oldSet);
            });
        });
        describe("getLootDropped method", function() {
            it("Should be defined", function() {
                expect(npc.getLootDropped).toBeDefined();
                expect(typeof npc.getLootDropped === "function").toBe(true);
            });
            it("Should return the LootDropped of the instance", function() {
                expect(npc.getLootDropped()).toBe(500);
            });
        });
        describe("isItHostileToPlayer method", function() {
            it("Should be defined", function() {
                expect(npc.isItHostileToPlayer).toBeDefined();
                expect(typeof npc.isItHostileToPlayer === "function").toBe(true);
            });
            it("Should return true or false if the npc is male or not", function() {
                expect(npc.isItHostileToPlayer()).toBe(true);
            });
        });
    });
});
