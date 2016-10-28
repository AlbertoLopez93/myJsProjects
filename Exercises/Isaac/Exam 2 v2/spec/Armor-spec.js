(function() {
    'use strict';

    const Armor = require('../Armor');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let descriptor;
    let armor;
    let armorData;
    let armor2;
    let armor2Data;

    properties = [
        // Item Class
        'buyPrice',
        'count',
        'description',
        'id',
        'name',
        'sellPrice',
        'weight',
        // This Class
        'agiBonus',
        'intBonus',
        'isHeavy',
        'physDR',
        'spellDR',
        'spiBonus',
        'staBonus',
        'strBouns'
    ];
    inheritedMethods = [
        // Item Class
        'getBuyPrice',
        'getCount',
        'setCount',
        'getDescription',
        'getID',
        'getName',
        'getSellPrice',
        'getWeight'
    ];
    publicMethods = [
        'getAgiBonus',
        'getIntBonus',
        'isItHeavy',
        'getPhysDR',
        'getSpellDR',
        'getSpiBonus',
        'getStaBonus',
        'getStrBonus'
    ];

    armorData = {
        // Item Class
        buyPrice: 400,
        count: 0,
        description: "Super Shield",
        id: 1,
        name: 'Shield',
        sellPrice: 500,
        weight: 25.5,
        // This Class
        agiBonus: 10,
        intBonus: 20,
        isHeavy: true,
        physDR: 30,
        spellDR: 40,
        spiBonus: 50,
        staBonus: 60,
        strBouns: 70
    };

    armor2Data = {
        // Item Class
        buyPrice: 200,
        count: 10,
        description: "All terrain Boots",
        id: 2,
        name: 'Boots',
        sellPrice: 300,
        weight: 3.1,
        // This Class
        agiBonus: 5,
        intBonus: 10,
        isHeavy: false,
        physDR: 15,
        spellDR: 20,
        spiBonus: 25,
        staBonus: 30,
        strBouns: 35
    };

    beforeEach(function() {
        armor = new Armor(
            // Item Class
            armorData.buyPrice,
            armorData.count,
            armorData.description,
            armorData.id,
            armorData.name,
            armorData.sellPrice,
            armorData.weight,
            // This Class
            armorData.agiBonus,
            armorData.intBonus,
            armorData.isHeavy,
            armorData.physDR,
            armorData.spellDR,
            armorData.spiBonus,
            armorData.staBonus,
            armorData.strBouns
        );

        armor2 = new Armor(
            // Item Class
            armor2Data.buyPrice,
            armor2Data.count,
            armor2Data.description,
            armor2Data.id,
            armor2Data.name,
            armor2Data.sellPrice,
            armor2Data.weight,
            // This Class
            armor2Data.agiBonus,
            armor2Data.intBonus,
            armor2Data.isHeavy,
            armor2Data.physDR,
            armor2Data.spellDR,
            armor2Data.spiBonus,
            armor2Data.staBonus,
            armor2Data.strBouns
        );
    });

    describe('Armor Class', function() {

        it('should be defined', function() {
            expect(Armor).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(armor instanceof Armor).toBe(true);
                expect(armor2 instanceof Armor).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(armor[property]).toBeUndefined();
                    expect(armor2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(armor, method);
                        });
                        it("should be defined", () => {
                            expect(armor[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof armor[method]).toBe("function");
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

                describe('Getters', function() {
                    describe('Automated Tests', function() {
                        let getters = [{
                            name: 'getBuyPrice',
                            attr: 'buyPrice'
                        }, {
                            name: 'getCount',
                            attr: 'count'
                        }, {
                            name: 'getDescription',
                            attr: 'description'
                        }, {
                            name: 'getID',
                            attr: 'id'
                        }, {
                            name: 'getName',
                            attr: 'name'
                        }, {
                            name: 'getSellPrice',
                            attr: 'sellPrice'
                        }, {
                            name: 'getWeight',
                            attr: 'weight'
                        }];

                        getters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should return the ' + method.attr + ' of the instance', function() {
                                    expect(armor[method.name]()).toBe(armorData[method.attr]);
                                    expect(armor2[method.name]()).toBe(armor2Data[method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Setters', function() {
                    describe('Automated Tests', function() {
                        let setters = [{
                            name: 'setCount',
                            getter: 'getCount',
                            attr: 'count',
                            newValue: [0, 200],
                            invalidValue: [-1, -50]
                        }];

                        setters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should update the ' + method.attr + ' of the instance', function() {
                                    expect(armor[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(armor2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                    expect(armor[method.name](method.invalidValue[0])[method.getter]()).toBe(armorData[method.attr]);
                                    expect(armor2[method.name](method.invalidValue[1])[method.getter]()).toBe(armor2Data[method.attr]);
                                });
                            });
                        });
                    });
                });
            });

        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(armor, method);
                        });
                        it("should be defined", () => {
                            expect(armor[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof armor[method]).toBe("function");
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

                describe('Getters', function() {
                    describe('Automated Tests', function() {
                        let getters = [{
                            name: 'getAgiBonus',
                            attr: 'agiBonus'
                        }, {
                            name: 'getIntBonus',
                            attr: 'intBonus'
                        }, {
                            name: 'isItHeavy',
                            attr: 'isHeavy'
                        }, {
                            name: 'getPhysDR',
                            attr: 'physDR'
                        }, {
                            name: 'getSpellDR',
                            attr: 'spellDR'
                        }, {
                            name: 'getSpiBonus',
                            attr: 'spiBonus'
                        }, {
                            name: 'getStaBonus',
                            attr: 'staBonus'
                        }, {
                            name: 'getStrBonus',
                            attr: 'strBouns'
                        }];

                        getters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should return the ' + method.attr + ' of the instance', function() {
                                    expect(armor[method.name]()).toBe(armorData[method.attr]);
                                    expect(armor2[method.name]()).toBe(armor2Data[method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Setters', function() {
                    describe('Automated Tests', function() {
                        let setters = [];

                        setters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should update the ' + method.attr + ' of the instance', function() {
                                    expect(armor[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(armor2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                    expect(armor[method.name](method.invalidValue[0])[method.getter]()).toBe(armorData[method.attr]);
                                    expect(armor2[method.name](method.invalidValue[1])[method.getter]()).toBe(armor2Data[method.attr]);
                                });
                            });
                        });
                    });
                });
            });

        });
    });

}());
