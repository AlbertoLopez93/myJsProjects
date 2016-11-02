"use strict";

let Animal = require("../Animal");

describe("Testing Animal class", function() {
    it("It should be defined", function() {
        expect(Animal).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof Animal === "function").toBe(true);
    });
    let animal = new Animal (0, "Migue", 2000, 1500, true, 200, 450, 150);
    describe("Private properties", function() {
        it("Should have a private property called ID", function() {
            expect(animal.ID).toBeUndefined();
        });
        it("Should have a private property called name", function() {
            expect(animal.name).toBeUndefined();
        });
        it("Should have a private property called maxHP", function() {
            expect(animal.maxHP).toBeUndefined();
        });
        it("Should have a private property called currentHP", function() {
            expect(animal.currentHP).toBeUndefined();
        });
        it("Should have a private property called HostileToPlayer", function() {
            expect(animal.HostileToPlayer).toBeUndefined();
        });
        it("Should have a private property called LootDropped", function() {
            expect(animal.LootDropped).toBeUndefined();
        });
        it("Should have a private property called MaxDmg", function() {
            expect(animal.MaxDmg).toBeUndefined();
        });
        it("Should have a private property called MinDmg", function() {
            expect(animal.MinDmg).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(animal.getID).toBeDefined();
                expect(typeof animal.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(animal.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(animal.getName).toBeDefined();
                expect(typeof animal.getName === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(animal.getName()).toBe("Migue");
            });
        });
        describe("getCurrentHP method", function() {
            it("Should be defined", function() {
                expect(animal.getCurrentHP).toBeDefined();
                expect(typeof animal.getCurrentHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(animal.getCurrentHP()).toBe(1500);
            });
        });
        describe("getMaxHP method", function() {
            it("Should be defined", function() {
                expect(animal.getMaxHP).toBeDefined();
                expect(typeof animal.getMaxHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(animal.getMaxHP()).toBe(2000);
            });
        });
        describe("setCurrentHP method", function() {
            it("Should be defined", function() {
                expect(animal.setCurrentHP).toBeDefined();
                expect(typeof animal.setCurrentHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(animal.getCurrentHP()).toBe(1500);
                animal.setCurrentHP(1800);
                expect(animal.getCurrentHP()).toBe(1800);
            });
            it("Shouldn't change the currentHP if the new HP isn't a number", function() {
                expect(animal.getCurrentHP()).toBe(1800);
                animal.setCurrentHP("pato");
                expect(animal.getCurrentHP()).toBe(1800);
            });
            it("If the newHP it's bigger than the maxHP it will set the maxHP to the instance as the currentHP", function() {
                expect(animal.getCurrentHP()).toBe(1800);
                animal.setCurrentHP(animal.getMaxHP() + 10);
                expect(animal.getCurrentHP()).toBe(animal.getMaxHP());
            });
            it("Should return the instance", function() {
                expect(animal.setCurrentHP() instanceof Animal).toBe(true);
            });
        });
        describe("setMaxHP method", function() {
            it("Should be defined", function() {
                expect(animal.setMaxHP).toBeDefined();
                expect(typeof animal.setMaxHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(animal.getMaxHP()).toBe(2000);
                animal.setMaxHP(1800);
                expect(animal.getMaxHP()).toBe(1800);
            });
            it("Shouldn't change the maxHP if the new HP isn't a number", function() {
                expect(animal.getMaxHP()).toBe(1800);
                animal.setMaxHP("pato");
                expect(animal.getMaxHP()).toBe(1800);
            });
            it("Should return the instance", function() {
                expect(animal.setMaxHP() instanceof Animal).toBe(true);
            });
        });
        describe("isItHostileToPlayer method", function() {
            it("Should be defined", function() {
                expect(animal.isItHostileToPlayer).toBeDefined();
                expect(typeof animal.isItHostileToPlayer === "function").toBe(true);
            });
            it("Should return if the instance it's hostile", function() {
                expect(animal.isItHostileToPlayer()).toBe(true);
                expect(typeof animal.isItHostileToPlayer() === "boolean").toBe(true);
            });
        });
        describe("getLootDropped method", function() {
            it("Should be defined", function() {
                expect(animal.getLootDropped).toBeDefined();
                expect(typeof animal.getLootDropped === "function").toBe(true);
            });
            it("Should return the loop dropped of the instance", function() {
                expect(animal.getLootDropped()).toBe(200);
            });
        });
        describe("getMaxDmg method", function() {
            it("Should be defined", function() {
                expect(animal.getMaxDmg).toBeDefined();
                expect(typeof animal.getMaxDmg === "function").toBe(true);
            });
            it("Should return the loop dropped of the instance", function() {
                expect(animal.getMaxDmg()).toBe(450);
            });
        });
        describe("getMinDmg method", function() {
            it("Should be defined", function() {
                expect(animal.getMinDmg).toBeDefined();
                expect(typeof animal.getMinDmg === "function").toBe(true);
            });
            it("Should return the loop dropped of the instance", function() {
                expect(animal.getMinDmg()).toBe(150);
            });
        });
    });
});
