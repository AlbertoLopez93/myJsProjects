"use strict";

let Character = require("../Character");
let axel = new Character(1, "axel", 1000, 0);

describe("Character class", () => {
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
    });
    describe("Methods working", () => {
        it("should return the ID of the instance", () => {
            expect(axel.getID()).toBe(1);
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
            expect(axel.getCurrentHP()).toBe(1000);
        });

        it("should return the MaxHP", () => {
            expect(axel.getMaxHP()).toBe(1000);
        });
        it("should set the MaxHP", () => {
            expect(axel.setMaxHP(90)).toBe(axel);
        });
        it("should get the MaxHP after change it", () => {
            expect(axel.getMaxHP()).toBe(90);
        });

    });
});
