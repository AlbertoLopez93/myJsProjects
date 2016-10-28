"use strict";

let Item = require("../Item");

describe("Testing Item class", function() {
    it("Should be defined", function() {
        expect(Item).toBeDefined();
    });
    it("Should be a function", function() {
        expect(typeof Item === "function").toBe(true);
    });
    let item = new Item(100, 2, "I'm an item", 0, "Item", 80, 50);
    describe("Private properties", function() {
        it("Should have a private property called BuyPrice", function() {
            expect(item.BuyPrice).toBeUndefined();
        });
        it("Should have a private property called Count", function() {
            expect(item.Count).toBeUndefined();
        });
        it("Should have a private property called Description", function() {
            expect(item.Description).toBeUndefined();
        });
        it("Should have a private property called ID", function() {
            expect(item.ID).toBeUndefined();
        });
        it("Should have a private property called Name", function() {
            expect(item.Name).toBeUndefined();
        });
        it("Should have a private property called SellPrice", function() {
            expect(item.SellPrice).toBeUndefined();
        });
        it("Should have a private property called Weight", function() {
            expect(item.Weight).toBeUndefined();
        });
    });
    describe("Methods", function() {
        describe("getBuyPrice method", function() {
            it("Should be defined", function() {
                expect(item.getBuyPrice).toBeDefined();
                expect(typeof item.getBuyPrice === "function").toBe(true);
            });
            it("Should return the BuyPrice of the instance", function() {
                expect(item.getBuyPrice()).toBe(100);
            });
        });
        describe("getCount method", function() {
            it("Should be defined", function() {
                expect(item.getCount).toBeDefined();
                expect(typeof item.getCount === "function").toBe(true);
            });
            it("Should return the Count of the instance", function() {
                expect(item.getCount()).toBe(2);
            });
        });
        describe("setCount method", function() {
            it("Should be defined", function() {
                expect(item.setCount).toBeDefined();
                expect(typeof item.setCount === "function").toBe(true);
            });
            it("Should set a new Count to the Count of the instance", function() {
                expect(item.getCount()).toBe(2);
                item.setCount(2000);
                expect(item.getCount()).toBe(2000);
            });
            it("Shouldn't change the Count if the new Count isn't a number", function() {
                expect(item.getCount()).toBe(2000);
                item.setCount("pato");
                expect(item.getCount()).toBe(2000);
            });
            it("Should return the instance", function() {
                expect(item.setCount() instanceof Item).toBe(true);
            });
        });
        describe("getDescription method", function() {
            it("Should be defined", function() {
                expect(item.getDescription).toBeDefined();
                expect(typeof item.getDescription === "function").toBe(true);
            });
            it("Should return the Description of the instance", function() {
                expect(item.getDescription()).toBe("I'm an item");
            });
        });
        describe("getID method", function() {
            it("Should be defined", function() {
                expect(item.getID).toBeDefined();
                expect(typeof item.getID === "function").toBe(true);
            });
            it("Should return the ID of the instance", function() {
                expect(item.getID()).toBe(0);
            });
        });
        describe("getName method", function() {
            it("Should be defined", function() {
                expect(item.getName).toBeDefined();
                expect(typeof item.getName === "function").toBe(true);
            });
            it("Should return the Name of the instance", function() {
                expect(item.getName()).toBe("Item");
            });
        });
    });
});
