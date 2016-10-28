(function() {
    'use strict';

    const Animal = require('../Animal');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let prototypeMethods;
    let inheritedPrototypeMethods;
    let descriptor;
    //let proto;
    let animal;
    let animalData;
    let animal2;
    let animal2Data;

    properties = ['id', 'name', 'maxHP', 'currentHP', 'hostileToPlayer', 'lootDropped', 'maxDmg', 'minDmg'];
    inheritedMethods = ['getID', 'getName', 'getCurrentHP', 'setCurrentHP', 'getMaxHP', 'setMaxHP'];
    publicMethods = ['isItHostileToPlayer', 'getLootDropped', 'getMaxDmg', 'getMinDmg'];
    inheritedPrototypeMethods = [];
    prototypeMethods = [];

    animalData = {
        id: 1,
        name: "Tiger",
        maxHP: 1000,
        currentHP: 100,
        hostileToPlayer: true,
        lootDropped: 10,
        maxDmg: 500,
        minDmg: 50
    };

    animal2Data = {
        id: 2,
        name: "Pony",
        maxHP: 2000,
        currentHP: 200,
        hostileToPlayer: false,
        lootDropped: 5,
        maxDmg: 100,
        minDmg: 10
    };

    beforeEach(function() {
        animal = new Animal(
            animalData.id,
            animalData.name,
            animalData.maxHP,
            animalData.currentHP,
            animalData.hostileToPlayer,
            animalData.lootDropped,
            animalData.maxDmg,
            animalData.minDmg
        );

        animal2 = new Animal(
            animal2Data.id,
            animal2Data.name,
            animal2Data.maxHP,
            animal2Data.currentHP,
            animal2Data.hostileToPlayer,
            animal2Data.lootDropped,
            animal2Data.maxDmg,
            animal2Data.minDmg
        );
    });

    describe('Animal Class', function() {

        it('should be defined', function() {
            expect(Animal).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(animal instanceof Animal).toBe(true);
                expect(animal2 instanceof Animal).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(animal[property]).toBeUndefined();
                    expect(animal2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(animal, method);
                        });
                        it("should be defined", () => {
                            expect(animal[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof animal[method]).toBe("function");
                        });
                        it("should not be configurable", () => {
                            expect(descriptor.configurable).toBe(false);
                        });
                        it("should not be writable", () => {
                            expect(descriptor.writable).toBe(false);
                        });
                        it("should be enumerable", () => {
                            expect(descriptor.enumerable).toBe(true);
                        });
                    });
                });
            });

            describe('Behavior', function() {

                describe('getID', function() {
                    it('should return the ID of the instance', function() {
                        expect(animal.getID()).toBe(animalData.id);
                        expect(animal2.getID()).toBe(animal2Data.id);
                    });
                });

                describe('getName', function() {
                    it('should return the name of the instance', function() {
                        expect(animal.getName()).toBe(animalData.name);
                        expect(animal2.getName()).toBe(animal2Data.name);
                    });
                });

                describe('getCurrentHP', function() {
                    it('should return the currentHP of the instance', function() {
                        expect(animal.getCurrentHP()).toBe(animalData.currentHP);
                        expect(animal2.getCurrentHP()).toBe(animal2Data.currentHP);
                    });
                });

                describe('setCurrentHP', function() {
                    it('should update the currentHP of the instance', function() {
                        expect(animal.setCurrentHP(10)).toBe(animal);
                        expect(animal.getCurrentHP()).toBe(10);

                        expect(animal2.setCurrentHP(20)).toBe(animal2);
                        expect(animal2.getCurrentHP()).toBe(20);
                    });

                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        expect(animal.setCurrentHP(animalData.maxHP + 50)).toBe(animal);
                        expect(animal.getCurrentHP()).toBe(animalData.maxHP);

                        expect(animal2.setCurrentHP(animal2Data.maxHP + 50)).toBe(animal2);
                        expect(animal2.getCurrentHP()).toBe(animal2Data.maxHP);
                    });
                });

                describe('getMaxHP', function() {
                    it('should return the maxHP of the instance', function() {
                        expect(animal.getMaxHP()).toBe(animalData.maxHP);
                        expect(animal2.getMaxHP()).toBe(animal2Data.maxHP);
                    });
                });

                describe('setMaxHP', function() {
                    it('should update the maxHP of the instance', function() {
                        expect(animal.setMaxHP(3000)).toBe(animal);
                        expect(animal.getMaxHP()).toBe(3000);

                        expect(animal2.setMaxHP(4000)).toBe(animal2);
                        expect(animal2.getMaxHP()).toBe(4000);
                    });

                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        expect(animal.setMaxHP(0)).toBe(animal);
                        expect(animal.getMaxHP()).toBe(animalData.maxHP);

                        expect(animal2.setMaxHP(-50)).toBe(animal2);
                        expect(animal2.getMaxHP()).toBe(animal2Data.maxHP);
                    });
                });

            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(animal, method);
                        });
                        it("should be defined", () => {
                            expect(animal[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof animal[method]).toBe("function");
                        });
                        it("should not be configurable", () => {
                            expect(descriptor.configurable).toBe(false);
                        });
                        it("should not be writable", () => {
                            expect(descriptor.writable).toBe(false);
                        });
                        it("should be enumerable", () => {
                            expect(descriptor.enumerable).toBe(true);
                        });
                    });
                });
            });

            describe('Behavior', function() {
                //publicMethods = ['isItHostileToPlayer', 'getLootDropped', 'getMaxDmg', 'getMinDmg'];

                describe('isItHostileToPlayer', function() {
                    it('should return if the instance is hostileToPlayer', function() {
                        expect(animal.isItHostileToPlayer()).toBe(animalData.hostileToPlayer);
                        expect(animal2.isItHostileToPlayer()).toBe(animal2Data.hostileToPlayer);
                    });
                });

                describe('getLootDropped', function() {
                    it('should return the lootDropped of the instance', function() {
                        expect(animal.getLootDropped()).toBe(animalData.lootDropped);
                        expect(animal2.getLootDropped()).toBe(animal2Data.lootDropped);
                    });
                });

                describe('getMaxDmg', function() {
                    it('should return the maxDmg of the instance', function() {
                        expect(animal.getMaxDmg()).toBe(animalData.maxDmg);
                        expect(animal2.getMaxDmg()).toBe(animal2Data.maxDmg);
                    });
                });

                describe('getMinDmg', function() {
                    it('should return the minDmg of the instance', function() {
                        expect(animal.getMinDmg()).toBe(animalData.minDmg);
                        expect(animal2.getMinDmg()).toBe(animal2Data.minDmg);
                    });
                });
            });
        });
    });

}());
