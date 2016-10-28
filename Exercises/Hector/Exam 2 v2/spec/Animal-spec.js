"use strict";

let Animal = require("../Animal");
let axel = new Animal(1234, "axel", 100, 0, true, 10, 20, 10);

describe("Animal class", () => {
    describe("Private properties", () => {
        it("should have a private property called ID", () => {
            expect(axel.ID).toBeUndefined();
        });
        it("should have a private property called Name", () => {
            expect(axel.Name).toBeUndefined();
        });
        it("should have a private property called MaxHP", () => {
            expect(axel.MaxHP).toBeUndefined();
        });
        it("should have a private property called CurrentHP", () => {
            expect(axel.CurrentHP).toBeUndefined();
        });
        it("should have a private property called HostileToPlayer", () => {
            expect(axel.HostileToPlayer).toBeUndefined();
        });
        it("should have a private property called LootDropped", () => {
            expect(axel.LootDropped).toBeUndefined();
        });
        it("should have a private property called MaxDmg", () => {
            expect(axel.MaxDmg).toBeUndefined();
        });
        it("should have a private property called MinDmg", () => {
            expect(axel.MinDmg).toBeUndefined();
        });
    });
    describe("Methods", () => {
        it("should have a method called getID", () => {
            expect(axel.getID).toBeDefined();
        });
        it("should have a method called getName", () => {
            expect(axel.getName).toBeDefined();
        });
        it("should have a method called getCurrentHP", () => {
            expect(axel.getCurrentHP).toBeDefined();
        });
        it("should have a method called setCurrentHP", () => {
            expect(axel.setCurrentHP).toBeDefined();
        });
        it("should have a method called getMaxHP", () => {
            expect(axel.getMaxHP).toBeDefined();
        });
        it("should have a method called setMaxHP", () => {
            expect(axel.setMaxHP).toBeDefined();
        });
        it("should have a method called isItHostileToPlayer", () => {
            expect(axel.isItHostileToPlayer).toBeDefined();
        });
        it("should have a method called getLootDropped", () => {
            expect(axel.getLootDropped).toBeDefined();
        });
        it("should have a method called getMaxDmg", () => {
            expect(axel.getMaxDmg).toBeDefined();
        });
        it("should have a method called getMinDmg", () => {
            expect(axel.getMinDmg).toBeDefined();
        });
    });
    describe("Methods working", () => {
        it("should return the ID of the instance", () => {
            expect(axel.getID()).toBe(1234);
        });
        it("should return the name of the instance", () => {
            expect(axel.getName()).toBe("axel");
        });
        it("should return the CurrentHP", () => {
            expect(axel.getCurrentHP()).toBe(0);
        });
        it("should set the CurrentHP", () => {
            expect(axel.setCurrentHP(10)).toBe(axel);
        });
        it("should return the CurrentHP after change it", () => {
            expect(axel.getCurrentHP()).toBe(10);
        });

        it("should set the CurrentHP", () => {
            expect(axel.setCurrentHP("axel")).toBeUndefined();
        });
        it("should return the CurrentHP after change it", () => {
            expect(axel.getCurrentHP()).toBe(10);
        });

        it("should set the CurrentHP", () => {
            expect(axel.setCurrentHP(100000)).toBe(axel);
        });
        it("should return the CurrentHP after change it", () => {
            expect(axel.getCurrentHP()).toBe(100);
        });

        it("should return the MaxHP", () => {
            expect(axel.getMaxHP()).toBe(100);
        });
        it("should set the MaxHP", () => {
            expect(axel.setMaxHP(90)).toBe(axel);
        });
        it("should get the MaxHP after change it", () => {
            expect(axel.getMaxHP()).toBe(90);
        });
        it("should return if Its Hostile To Player", () => {
            expect(axel.isItHostileToPlayer()).toBe(true);
        });

    });
});
