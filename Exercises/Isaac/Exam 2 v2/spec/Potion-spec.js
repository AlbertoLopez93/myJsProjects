(function() {
    'use strict';

    const Potion = require('../Potion');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let descriptor;
    let potion;
    let potionData;
    let potion2;
    let potion2Data;

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
        'HPRestore',
        'MPRestore'
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
        'getHPRestore',
        'getMPRestore'
    ];

    potionData = {
        // Item Class
        buyPrice: 400,
        count: 0,
        description: "Super Shield",
        id: 1,
        name: 'Shield',
        sellPrice: 500,
        weight: 25.5,
        // This Class
        HPRestore: 50,
        MPRestore: 100
    };

    potion2Data = {
        // Item Class
        buyPrice: 200,
        count: 10,
        description: "All terrain Boots",
        id: 2,
        name: 'Boots',
        sellPrice: 300,
        weight: 3.1,
        // This Class
        HPRestore: 60,
        MPRestore: 110
    };

    beforeEach(function() {
        potion = new Potion(
            // Item Class
            potionData.buyPrice,
            potionData.count,
            potionData.description,
            potionData.id,
            potionData.name,
            potionData.sellPrice,
            potionData.weight,
            // This Class
            potionData.HPRestore,
            potionData.MPRestore
        );

        potion2 = new Potion(
            // Item Class
            potion2Data.buyPrice,
            potion2Data.count,
            potion2Data.description,
            potion2Data.id,
            potion2Data.name,
            potion2Data.sellPrice,
            potion2Data.weight,
            // This Class
            potion2Data.HPRestore,
            potion2Data.MPRestore
        );
    });

    describe('Potion Class', function() {

        it('should be defined', function() {
            expect(Potion).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(potion instanceof Potion).toBe(true);
                expect(potion2 instanceof Potion).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(potion[property]).toBeUndefined();
                    expect(potion2[property]).toBeUndefined();
                });
            });
        });

        describe("Inherited Methods", function() {

            describe('Definition and Configuration', function() {
                inheritedMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(potion, method);
                        });
                        it("should be defined", () => {
                            expect(potion[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof potion[method]).toBe("function");
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
                                    expect(potion[method.name]()).toBe(potionData[method.attr]);
                                    expect(potion2[method.name]()).toBe(potion2Data[method.attr]);
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
                                    expect(potion[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(potion2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                    expect(potion[method.name](method.invalidValue[0])[method.getter]()).toBe(potionData[method.attr]);
                                    expect(potion2[method.name](method.invalidValue[1])[method.getter]()).toBe(potion2Data[method.attr]);
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
                            descriptor = Object.getOwnPropertyDescriptor(potion, method);
                        });
                        it("should be defined", () => {
                            expect(potion[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof potion[method]).toBe("function");
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
                            name: 'getHPRestore',
                            attr: 'HPRestore'
                        }, {
                            name: 'getMPRestore',
                            attr: 'MPRestore'
                        }];

                        getters.forEach(function(method) {
                            describe(method.name + '()', function() {
                                it('should return the ' + method.attr + ' of the instance', function() {
                                    expect(potion[method.name]()).toBe(potionData[method.attr]);
                                    expect(potion2[method.name]()).toBe(potion2Data[method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Setters', function() {
                    // None
                });
            });

        });
    });

}());
