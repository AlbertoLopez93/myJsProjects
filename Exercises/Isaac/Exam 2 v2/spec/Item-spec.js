(function() {
    'use strict';

    const Item = require('../Item');

    let properties;
    let publicMethods;
    let inheritedMethods;
    let descriptor;
    let item;
    let itemData;
    let item2;
    let item2Data;

    properties = [
        'buyPrice',
        'count',
        'description',
        'id',
        'name',
        'sellPrice',
        'weight'
    ];
    inheritedMethods = [];
    publicMethods = [
        'getBuyPrice',
        'getCount',
        'setCount',
        'getDescription',
        'getID',
        'getName',
        'getSellPrice',
        'getWeight'
    ];

    itemData = {
        buyPrice: 500,
        count: 0,
        description: "Super Mega Computer",
        id: 1,
        name: 'Computer',
        sellPrice: 600,
        weight: 15.5
    };

    item2Data = {
        buyPrice: 300,
        count: 10,
        description: "The Fastest Bicycle",
        id: 2,
        name: 'Bicycle',
        sellPrice: 400,
        weight: 30.9
    };

    beforeEach(function() {
        item = new Item(
            itemData.buyPrice,
            itemData.count,
            itemData.description,
            itemData.id,
            itemData.name,
            itemData.sellPrice,
            itemData.weight
        );

        item2 = new Item(
            item2Data.buyPrice,
            item2Data.count,
            item2Data.description,
            item2Data.id,
            item2Data.name,
            item2Data.sellPrice,
            item2Data.weight
        );
    });

    describe('Item Class', function() {

        it('should be defined', function() {
            expect(Item).toBeDefined();
        });

        describe("Constructor", function() {
            it("should work with all its arguments", function() {
                expect(item instanceof Item).toBe(true);
                expect(item2 instanceof Item).toBe(true);
            });
        });

        describe("Private Properties", function() {
            properties.forEach(function(property) {
                it("should have a private property called: " + property, function() {
                    expect(item[property]).toBeUndefined();
                    expect(item2[property]).toBeUndefined();
                });
            });
        });

        describe("Public Methods", function() {

            describe('Definition and Configuration', function() {
                publicMethods.forEach(function(method) {
                    describe(method + '() method', function() {
                        beforeEach(() => {
                            descriptor = Object.getOwnPropertyDescriptor(item, method);
                        });
                        it("should be defined", () => {
                            expect(item[method]).toBeDefined();
                        });
                        it("should be a function", () => {
                            expect(typeof item[method]).toBe("function");
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
                                    expect(item[method.name]()).toBe(itemData[method.attr]);
                                    expect(item2[method.name]()).toBe(item2Data[method.attr]);
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
                                    expect(item[method.name](method.newValue[0])[method.getter]()).toBe(method.newValue[0]);
                                    expect(item2[method.name](method.newValue[1])[method.getter]()).toBe(method.newValue[1]);
                                });
                                it('should NOT update the ' + method.attr + ' of the instance if is invalid', function() {
                                    expect(item[method.name](method.invalidValue[0])[method.getter]()).toBe(itemData[method.attr]);
                                    expect(item2[method.name](method.invalidValue[1])[method.getter]()).toBe(item2Data[method.attr]);
                                });
                            });
                        });
                    });
                });

                describe('Others', function() {
                    // None
                });

            });

        });
    });

}());
