(function() {
    'use strict';

    let NewCustomer = require('../NewCustomer');

    describe('NewCustomer class', function() {
        let customer1,
            customer2,
            data1 = {
                ID: 1,
                name: "Karla",
                gender: "f"
            },
            data2 = {
                ID: 2,
                name: "Joaquin",
                gender: "m"
            };

        beforeEach(function() {
            customer1 = new NewCustomer(data1.ID, data1.name, data1.gender);
            customer2 = new NewCustomer(data2.ID, data2.name, data2.gender);
        });

        it('should be defined', function() {
            expect(NewCustomer).toBeDefined();
        });

        describe('Private properties', function() {
            it('should have a "ID" property as private', function() {
                expect(customer1.ID).toBeUndefined();
            });
            it('should have a "name" property as private', function() {
                expect(customer1.name).toBeUndefined();
            });
            it('should have a "gender" property as private', function() {
                expect(customer1.gender).toBeUndefined();
            });
        });

        describe('Methods', function() {
            describe('getID()', function() {
                it('should be defined', function() {
                    expect(customer1.getID).toBeDefined();
                    expect(typeof customer1.getID).toBe('function');
                });
                it('should return the id of the instance', function() {
                    expect(customer1.getID()).toBe(1);
                    expect(customer2.getID()).toBe(2);
                });
            });

            describe('getName()', function() {
                it('should be defined', function() {
                    expect(customer1.getName).toBeDefined();
                    expect(typeof customer1.getName).toBe('function');
                });
                it('should return the name of the instance', function() {
                    expect(customer1.getName()).toBe('Karla');
                    expect(customer2.getName()).toBe('Joaquin');
                });
            });

            describe('getGender()', function() {
                it('should be defined', function() {
                    expect(customer1.getGender).toBeDefined();
                    expect(typeof customer1.getGender).toBe('function');
                });
                it('should return the gender of the instance', function() {
                    expect(customer1.getGender()).toBe('f');
                    expect(customer2.getGender()).toBe('m');
                });
            });

            describe('toString()', function() {
                it('should be defined', function() {
                    expect(customer1.toString).toBeDefined();
                    expect(typeof customer1.toString).toBe('function');
                });
                it('should return the _ of the instance', function() {
                    expect(customer1.toString()).toBe('Karla(1)');
                    expect(customer2.toString()).toBe('Joaquin(2)');
                });
            });
        });
    });
}());
