"use strict";

let Human = require("../Human");
let axel = new Human(1234, "axel", 100, 0, 20, [], 8, "Tepa", 0, 10, true, 200, 3, 50, 30, []);

describe("Human class", () => {
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
        it("should have a private property called Agility", () => {
            expect(axel.Agility).toBeUndefined();
        });
        it("should have a private property called ArmorEquipped", () => {
            expect(axel.ArmorEquipped).toBeUndefined();
        });
        it("should have a private property called CurrentMP", () => {
            expect(axel.CurrentMP).toBeUndefined();
        });
        it("should have a private property called Faction", () => {
            expect(axel.Faction).toBeUndefined();
        });
        it("should have a private property called Gold", () => {
            expect(axel.Gold).toBeUndefined();
        });
        it("should have a private property called Intellect", () => {
            expect(axel.Intellect).toBeUndefined();
        });
        it("should have a private property called IsMale", () => {
            expect(axel.IsMale).toBeUndefined();
        });
        it("should have a private property called MaxMP", () => {
            expect(axel.MaxMP).toBeUndefined();
        });
        it("should have a private property called Spirit", () => {
            expect(axel.Spirit).toBeUndefined();
        });
        it("should have a private property called Stamina", () => {
            expect(axel.Stamina).toBeUndefined();
        });
        it("should have a private property called Strength", () => {
            expect(axel.Strength).toBeUndefined();
        });
        it("should have a private property called WeaponEquipped", () => {
            expect(axel.WeaponEquipped).toBeUndefined();
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
        it("should have a method called getAgility", () => {
            expect(axel.getAgility).toBeDefined();
        });
        it("should have a method called setAgility", () => {
            expect(axel.setAgility).toBeDefined();
        });
        it("should have a method called getArmorEquipped", () => {
            expect(axel.getArmorEquipped).toBeDefined();
        });
        it("should have a method called addArmorEquipped", () => {
            expect(axel.addArmorEquipped).toBeDefined();
        });
        it("should have a method called removeArmorEquipped", () => {
            expect(axel.removeArmorEquipped).toBeDefined();
        });
        it("should have a method called switchArmorEquipped", () => {
            expect(axel.switchArmorEquipped).toBeDefined();
        });
        it("should have a method called getCurrentMP", () => {
            expect(axel.getCurrentMP).toBeDefined();
        });
        it("should have a method called setCurrentMP", () => {
            expect(axel.setCurrentMP).toBeDefined();
        });
        it("should have a method called getFaction", () => {
            expect(axel.getFaction).toBeDefined();
        });
        it("should have a method called getGold", () => {
            expect(axel.getGold).toBeDefined();
        });
        it("should have a method called setGold", () => {
            expect(axel.setGold).toBeDefined();
        });
        it("should have a method called getIntellect", () => {
            expect(axel.getIntellect).toBeDefined();
        });
        it("should have a method called setIntellect", () => {
            expect(axel.setIntellect).toBeDefined();
        });
        it("should have a method called isItMale", () => {
            expect(axel.isItMale).toBeDefined();
        });
        it("should have a method called getMaxMP", () => {
            expect(axel.getMaxMP).toBeDefined();
        });
        it("should have a method called setMaxMP", () => {
            expect(axel.setMaxMP).toBeDefined();
        });
        it("should have a method called getSpirit", () => {
            expect(axel.getSpirit).toBeDefined();
        });
        it("should have a method called setSpirit", () => {
            expect(axel.setSpirit).toBeDefined();
        });
        it("should have a method called getStamina", () => {
            expect(axel.getStamina).toBeDefined();
        });
        it("should have a method called setStamina", () => {
            expect(axel.setStamina).toBeDefined();
        });
        it("should have a method called getStrength", () => {
            expect(axel.getStrength).toBeDefined();
        });
        it("should have a method called getWeaponEquipped", () => {
            expect(axel.getWeaponEquipped).toBeDefined();
        });
        it("should have a method called addWeaponEquipped", () => {
            expect(axel.addWeaponEquipped).toBeDefined();
        });
        it("should have a method called removeWeaponEquipped", () => {
            expect(axel.removeWeaponEquipped).toBeDefined();
        });
        it("should have a method called switchWeaponEquipped", () => {
            expect(axel.switchWeaponEquipped).toBeDefined();
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


    });
});
