(function() {
    'use strict';

    const Weapon = require('../Weapon');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let descriptor;
    let weapon;
    let weaponData;
    let weapon2;
    let weapon2Data;

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
        'isEnchanted',
        'isUpgraded',
        'isOneHanded',
        'maxDmg',
        'minDmg',
        'strReq'
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
        'setEnchanted',
        'isItEnchanted',
        'setUpgraded',
        'isItUpgraded',
        'isItOneHanded',
        'setMaxDmg',
        'getMaxDmg',
        'setMinDmg',
        'getMinDmg',
        'getStrReq'
    ];

    weaponData = {
        // Item Class
        buyPrice: 1000,
        count: 2,
        description: "Like the Old West",
        id: 1,
        name: 'Magnum',
        sellPrice: 1100,
        weight: 5.5,
        // This Class
        isEnchanted: false, // For testing purposes
        isUpgraded: false, // For testing purposes
        isOneHanded: true,
        maxDmg: 500,
        minDmg: 300,
        strReq: 50
    };

    weapon2Data = {
        // Item Class
        buyPrice: 20000,
        count: 1,
        description: "Let's kill them all!",
        id: 2,
        name: 'Machinegun',
        sellPrice: 25000,
        weight: 15.9,
        // This Class
        isEnchanted: false, // For testing purposes
        isUpgraded: false, // For testing purposes
        isOneHanded: false,
        maxDmg: 5000,
        minDmg: 1000,
        strReq: 600
    };

    beforeEach(function() {
        weapon = new Weapon(
            // Item Class
            weaponData.buyPrice,
            weaponData.count,
            weaponData.description,
            weaponData.id,
            weaponData.name,
            weaponData.sellPrice,
            weaponData.weight,
            // This Class
            weaponData.isOneHanded,
            weaponData.maxDmg,
            weaponData.minDmg,
            weaponData.strReq
        );

        weapon2 = new Weapon(
            // Item Class
            weapon2Data.buyPrice,
            weapon2Data.count,
            weapon2Data.description,
            weapon2Data.id,
            weapon2Data.name,
            weapon2Data.sellPrice,
            weapon2Data.weight,
            // This Class
            weapon2Data.isOneHanded,
            weapon2Data.maxDmg,
            weapon2Data.minDmg,
            weapon2Data.strReq
        );
    });

    describe('Weapon Class', function() {

        it('should be defined', function() {
            expect(Weapon).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(weapon instanceof Weapon).toBe(true);
                expect(weapon2 instanceof Weapon).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(weapon[property]).toBeUndefined();
                    expect(weapon2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(weapon, method);
                        });
                        it("should be defined", () => {
                            expect(weapon[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof weapon[method]).toBe("function");
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
                                    expect(weapon[method.name]()).toBe(weaponData[method.attr]);
                                    expect(weapon2[method.name]()).toBe(weapon2Data[method.attr]);
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
                                    expect(weapon[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(weapon2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                    expect(weapon[method.name](method.invalidValue[0])[method.getter]()).toBe(weaponData[method.attr]);
                                    expect(weapon2[method.name](method.invalidValue[1])[method.getter]()).toBe(weapon2Data[method.attr]);
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
                            descriptor = Object.getOwnPropertyDescriptor(weapon, method);
                        });
                        it("should be defined", () => {
                            expect(weapon[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof weapon[method]).toBe("function");
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
                            name: 'isItEnchanted',
                            attr: 'isEnchanted'
                        }, {
                            name: 'isItUpgraded',
                            attr: 'isUpgraded'
                        }, {
                            name: 'isItOneHanded',
                            attr: 'isOneHanded'
                        }, {
                            name: 'getMaxDmg',
                            attr: 'maxDmg'
                        }, {
                            name: 'getMinDmg',
                            attr: 'minDmg'
                        }, {
                            name: 'getStrReq',
                            attr: 'strReq'
                        }];

                        getters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should return the ' + method.attr + ' of the instance', function() {
                                    expect(weapon[method.name]()).toBe(weaponData[method.attr]);
                                    expect(weapon2[method.name]()).toBe(weapon2Data[method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Setters', function() {
                    describe('Automated Tests', function() {
                        let setters = [{
                            name: 'setEnchanted',
                            getter: 'isItEnchanted',
                            attr: 'isEnchanted',
                            newValue: [true, false],
                            invalidValue: []
                        }, {
                            name: 'setUpgraded',
                            getter: 'isItUpgraded',
                            attr: 'isUpgraded',
                            newValue: [true, false],
                            invalidValue: []
                        }, {
                            name: 'setMaxDmg',
                            getter: 'getMaxDmg',
                            attr: 'maxDmg',
                            newValue: [3000, 1],
                            invalidValue: [-1, -50]
                        }, {
                            name: 'setMinDmg',
                            getter: 'getMinDmg',
                            attr: 'minDmg',
                            newValue: [100, 0],
                            invalidValue: [-1, -50]
                        }];

                        setters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should update the ' + method.attr + ' of the instance', function() {
                                    expect(weapon[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(weapon2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                if (method.invalidValue.length > 0) {
                                    it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                        expect(weapon[method.name](method.invalidValue[0])[method.getter]()).toBe(weaponData[method.attr]);
                                        expect(weapon2[method.name](method.invalidValue[1])[method.getter]()).toBe(weapon2Data[method.attr]);
                                    });
                                }
                            });
                        });
                    });
                });
            });

        });
    });

}());
