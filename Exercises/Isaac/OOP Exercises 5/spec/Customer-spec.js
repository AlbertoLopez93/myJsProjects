(function() {
    'use strict';

    let Customer = require('../Customer');

    describe('Customer class', function() {
        let customer1,
            customer2,
            data1 = {
                ID: 9,
                name: "Isaac Ramirez",
                discount: 5
            },
            data2 = {
                ID: 99,
                name: "Nahum Carbajal",
                discount: 10
            };

        beforeEach(function() {
            customer1 = new Customer(data1.ID, data1.name, data1.discount);
            customer2 = new Customer(data2.ID, data2.name, data2.discount);
        });

        it('should be defined', function() {
            expect(Customer).toBeDefined();
        });

        describe('Private properties', function() {
            it('should have an "ID" property as private', function() {
                expect(customer1.ID).toBeUndefined();
            });
            it('should have a "name" property as private', function() {
                expect(customer1.name).toBeUndefined();
            });
            it('should have a "discount" property as private', function() {
                expect(customer1.discount).toBeUndefined();
            });
        });

        describe('Methods', function() {
            describe('getID()', function() {
                it('should be defined', function() {
                    expect(customer1.getID).toBeDefined();
                    expect(typeof customer1.getID).toBe('function');
                });
                it('should return the id of the instance', function() {
                    expect(customer1.getID()).toBe(9);
                    expect(customer2.getID()).toBe(99);
                });
            });

            describe('getName()', function() {
                it('should be defined', function() {
                    expect(customer1.getName).toBeDefined();
                    expect(typeof customer1.getName).toBe('function');
                });
                it('should return the name of the instance', function() {
                    expect(customer1.getName()).toBe("Isaac Ramirez");
                    expect(customer2.getName()).toBe("Nahum Carbajal");
                });
            });

            describe('getDiscount()', function() {
                it('should be defined', function() {
                    expect(customer1.getDiscount).toBeDefined();
                    expect(typeof customer1.getDiscount).toBe('function');
                });
                it('should return the discount of the instance', function() {
                    expect(customer1.getDiscount()).toBe(5);
                    expect(customer2.getDiscount()).toBe(10);
                });
            });

            describe('setDiscount(discount)', function() {
                it('should be defined', function() {
                    expect(customer1.setDiscount).toBeDefined();
                    expect(typeof customer1.setDiscount).toBe('function');
                });
                it('should update the discount of the instance', function() {
                    expect(customer1.setDiscount(15)).toBeUndefined();
                    expect(customer1.getDiscount()).toBe(15);
                    expect(customer2.setDiscount(5)).toBeUndefined();
                    expect(customer2.getDiscount()).toBe(5);
                });
            });

            describe('toString()', function() {
                it('should be defined', function() {
                    expect(customer1.toString).toBeDefined();
                    expect(typeof customer1.toString).toBe('function');
                });
                it('should return the instance as a string', function() {
                    expect(customer1.toString()).toBe('Isaac Ramirez(9)');
                    expect(customer2.toString()).toBe('Nahum Carbajal(99)');
                });
            });
        });
    });
}());
