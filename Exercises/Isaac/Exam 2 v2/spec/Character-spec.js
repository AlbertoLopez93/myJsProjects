(function() {
    'use strict';

    const Character = require('../Character');
    const Settings = require('./ClassesCatalog');
    const DATA = require('./DataCatalog');

    let nameClass = 'Character';
    let ThisClass = Character;
    // Settings
    let inheritedProperties = Settings[nameClass].inheritedProperties;
    let properties = Settings[nameClass].properties;
    let inheritedMethods = Settings[nameClass].inheritedMethods;
    let methods = Settings[nameClass].methods;
    let descriptor;
    // Test Data Objects
    let objects;
    let objectsData = DATA[nameClass];
    let newValues = {
        maxHP: [3000, 4000],
        currentHP: [10, 10]
    };
    
    beforeEach(function() {
        objects = objectsData.map(function(obj){
            return new ThisClass(
                obj.id,
                obj.name,
                obj.maxHP,
                obj.currentHP
            );
        });
    });

    describe(nameClass + ' Class', function() {

        it('should be defined', function() {
            expect(ThisClass).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                objects.forEach(function(obj) {
                    expect(obj instanceof ThisClass).toBe(true);
                });
            });
        });

        describe("Inherited Properties", function() {
            inheritedProperties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    objects.forEach(function(obj) {
                        expect(obj[property]).toBeUndefined();
                    });
                });
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    objects.forEach(function(obj) {
                        expect(obj[property]).toBeUndefined();
                    });
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    let name = method.name;
                    describe(name + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(objects[0], name);
                        });
                        it("should be defined", () => {
                            expect(objects[0][name]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof objects[0][name]).toBe("function");
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

        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                methods.forEach(function(method) {
                    let name = method.name;
                    describe(name + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(objects[0], name);
                        });
                        it("should be defined", () => {
                            expect(objects[0][name]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof objects[0][name]).toBe("function");
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

            describe('Automated Tests', function() {

                describe('Getters', function() {
                    methods.filter(function(method) {
                        return method.type === 'getter';
                    }).forEach(function(method) {
                        describe(method.name + '()', function() {
                            it('should return the ' + method.attr + ' of the instance', function() {
                                objects.forEach(function(obj, i) {
                                    expect(obj[method.name]()).toBe(objectsData[i][method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Setters', function() {
                    methods.filter(function(method) {
                        return method.type === 'setter';
                    }).forEach(function(method) {
                        describe(method.name + '()', function() {
                            it('should update the ' + method.attr + ' of the instance', function() {
                                objects.forEach(function(obj, i) {
                                    let newValue = newValues[method.attr][i];
                                    expect(obj[method.name](newValue)[method.get]()).toBe(newValue);
                                });
                            });
                        });
                    });
                });
            });
            describe('Manual Tests', function() {

                describe('setCurrentHP', function() {
                    it('should update the currentHP to the maxHP if is greater than maxHP of the instance', function() {
                        objects.forEach(function(obj, i) {
                            expect(obj.setCurrentHP(objectsData[i].maxHP + 1).getCurrentHP()).toBe(objectsData[i].maxHP);
                        });
                    });
                });

                describe('setMaxHP', function() {
                    it('should NOT update the maxHP of the instance if less or equal to 0', function() {
                        let falsyValues = [0, -50];
                        objects.forEach(function(obj, i) {
                            expect(obj.setMaxHP(falsyValues[i]).getMaxHP()).toBe(objectsData[i].maxHP);
                        });
                    });
                });
            });
        });
    });

}());
