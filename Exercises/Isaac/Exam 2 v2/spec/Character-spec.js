(function() {
    'use strict';

    const Character = require('../Character');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let prototypeMethods;
    let inheritedPrototypeMethods;
    let descriptor;
    //let proto;
    let character;
    let characterData;
    let character2;
    let character2Data;

    properties = ['id', 'name', 'maxHP', 'currentHP'];
    inheritedMethods = [];
    publicMethods = ['getID', 'getName', 'getCurrentHP', 'setCurrentHP', 'getMaxHP', 'setMaxHP'];
    inheritedPrototypeMethods = [];
    prototypeMethods = [];

    characterData = {
        id: 1,
        name: "Lotus",
        maxHP: 1000,
        currentHP: 100
    };

    character2Data = {
        id: 2,
        name: "Jane",
        maxHP: 2000,
        currentHP: 200
    };

    beforeEach(function() {
        character = new Character(
            characterData.id,
            characterData.name,
            characterData.maxHP,
            characterData.currentHP
        );

        character2 = new Character(
            character2Data.id,
            character2Data.name,
            character2Data.maxHP,
            character2Data.currentHP
        );
    });

    describe('Character Class', function() {

        it('should be defined', function() {
            expect(Character).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(character instanceof Character).toBe(true);
                expect(character2 instanceof Character).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(character[property]).toBeUndefined();
                    expect(character2[property]).toBeUndefined();
                });
            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(character, method);
                        });
                        it("should be defined", () => {
                            expect(character[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof character[method]).toBe("function");
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
                        expect(character.getID()).toBe(characterData.id);
                        expect(character2.getID()).toBe(character2Data.id);
                    });
                });

                describe('getName', function() {
                    it('should return the name of the instance', function() {
                        expect(character.getName()).toBe(characterData.name);
                        expect(character2.getName()).toBe(character2Data.name);
                    });
                });

                describe('getCurrentHP', function() {
                    it('should return the currentHP of the instance', function() {
                        expect(character.getCurrentHP()).toBe(characterData.currentHP);
                        expect(character2.getCurrentHP()).toBe(character2Data.currentHP);
                    });
                });

                describe('setCurrentHP', function() {
                    it('should update the currentHP of the instance', function() {
                        expect(character.setCurrentHP(10)).toBe(character);
                        expect(character.getCurrentHP()).toBe(10);

                        expect(character2.setCurrentHP(20)).toBe(character2);
                        expect(character2.getCurrentHP()).toBe(20);
                    });

                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        expect(character.setCurrentHP(characterData.maxHP + 50)).toBe(character);
                        expect(character.getCurrentHP()).toBe(characterData.maxHP);

                        expect(character2.setCurrentHP(character2Data.maxHP + 50)).toBe(character2);
                        expect(character2.getCurrentHP()).toBe(character2Data.maxHP);
                    });
                });

                describe('getMaxHP', function() {
                    it('should return the maxHP of the instance', function() {
                        expect(character.getMaxHP()).toBe(characterData.maxHP);
                        expect(character2.getMaxHP()).toBe(character2Data.maxHP);
                    });
                });

                describe('setMaxHP', function() {
                    it('should update the maxHP of the instance', function() {
                        expect(character.setMaxHP(3000)).toBe(character);
                        expect(character.getMaxHP()).toBe(3000);

                        expect(character2.setMaxHP(4000)).toBe(character2);
                        expect(character2.getMaxHP()).toBe(4000);
                    });

                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        expect(character.setMaxHP(0)).toBe(character);
                        expect(character.getMaxHP()).toBe(characterData.maxHP);

                        expect(character2.setMaxHP(-50)).toBe(character2);
                        expect(character2.getMaxHP()).toBe(character2Data.maxHP);
                    });
                });
            });
        });
    });

}());
