"use strict";

let Character = require("../Character");

describe("Testing Character class", function() {
    it("It should be defined", function() {
        expect(Character).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof Character === "function").toBe(true);
    });
    let character = new Character (0, "Migue", 2000, 1500);
    describe("Private properties", function() {
        it("Should have a private property called ID", function() {
            expect(character.ID).toBeUndefined();
        });
        it("Should have a private property called name", function() {
            expect(character.name).toBeUndefined();
        });
        it("Should have a private property called maxHP", function() {
            expect(character.maxHP).toBeUndefined();
        });
        it("Should have a private property called currentHP", function() {
            expect(character.currentHP).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(character.getID).toBeDefined();
                expect(typeof character.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(character.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(character.getName).toBeDefined();
                expect(typeof character.getName === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(character.getName()).toBe("Migue");
            });
        });
        describe("getCurrentHP method", function() {
            it("Should be defined", function() {
                expect(character.getCurrentHP).toBeDefined();
                expect(typeof character.getCurrentHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(character.getCurrentHP()).toBe(1500);
            });
        });
        describe("getMaxHP method", function() {
            it("Should be defined", function() {
                expect(character.getMaxHP).toBeDefined();
                expect(typeof character.getMaxHP === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(character.getMaxHP()).toBe(2000);
            });
        });
        describe("setCurrentHP method", function() {
            it("Should be defined", function() {
                expect(character.setCurrentHP).toBeDefined();
                expect(typeof character.setCurrentHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(character.getCurrentHP()).toBe(1500);
                character.setCurrentHP(1800);
                expect(character.getCurrentHP()).toBe(1800);
            });
            it("Shouldn't change the currentHP if the new HP isn't a number", function() {
                expect(character.getCurrentHP()).toBe(1800);
                character.setCurrentHP("pato");
                expect(character.getCurrentHP()).toBe(1800);
            });
            it("If the newHP it's bigger than the maxHP it will set the maxHP to the instance as the currentHP", function() {
                expect(character.getCurrentHP()).toBe(1800);
                character.setCurrentHP(character.getMaxHP() + 10);
                expect(character.getCurrentHP()).toBe(character.getMaxHP());
            });
            it("Should return the instance", function() {
                expect(character.setCurrentHP() instanceof Character).toBe(true);
            });
        });
        describe("setMaxHP method", function() {
            it("Should be defined", function() {
                expect(character.setMaxHP).toBeDefined();
                expect(typeof character.setMaxHP === "function").toBe(true);
            });
            it("Should set a new HP to the currentHP of the instance", function() {
                expect(character.getMaxHP()).toBe(2000);
                character.setMaxHP(1800);
                expect(character.getMaxHP()).toBe(1800);
            });
            it("Shouldn't change the maxHP if the new HP isn't a number", function() {
                expect(character.getMaxHP()).toBe(1800);
                character.setMaxHP("pato");
                expect(character.getMaxHP()).toBe(1800);
            });
            it("Should return the instance", function() {
                expect(character.setMaxHP() instanceof Character).toBe(true);
            });
        });
    });
});
