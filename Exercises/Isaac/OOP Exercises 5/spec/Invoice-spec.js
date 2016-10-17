(function() {
    'use strict';

    let Invoice = require('../Invoice');
    let Customer = require('../Customer');

    describe('Invoice class', function() {
        let customer1 = new Customer(1, 'Isaac', 0),
            customer2 = new Customer(2, 'Nahum', 10),
            invoice1,
            invoice2,
            data1 = {
                ID: 100,
                customer: customer1,
                amount: 1000.0
            },
            data2 = {
                ID: 101,
                customer: customer2,
                amount: 2000.5
            };

        beforeEach(function() {
            invoice1 = new Invoice(data1.ID, data1.customer, data1.amount);
            invoice2 = new Invoice(data2.ID, data2.customer, data2.amount);
        });

        it('should be defined', function() {
            expect(Invoice).toBeDefined();
        });

        describe('Private properties', function() {
            it('should have a "ID" property as private', function() {
                expect(invoice1.ID).toBeUndefined();
            });
            it('should have a "customer" property as private', function() {
                expect(invoice1.customer).toBeUndefined();
            });
            it('should have a "amount" property as private', function() {
                expect(invoice1.amount).toBeUndefined();
            });
        });

        describe('Methods', function() {
            describe('getID()', function() {
                it('should be defined', function() {
                    expect(invoice1.getID).toBeDefined();
                    expect(typeof invoice1.getID).toBe('function');
                });
                it('should return the id of the instance', function() {
                    expect(invoice1.getID()).toBe(100);
                    expect(invoice2.getID()).toBe(101);
                });
            });

            describe('getCustomer()', function() {
                it('should be defined', function() {
                    expect(invoice1.getCustomer).toBeDefined();
                    expect(typeof invoice1.getCustomer).toBe('function');
                });
                it('should return the customer of the instance', function() {
                    expect(invoice1.getCustomer()).toBe(customer1);
                    expect(invoice2.getCustomer()).toBe(customer2);
                });
            });

            describe('getAmount()', function() {
                it('should be defined', function() {
                    expect(invoice1.getAmount).toBeDefined();
                    expect(typeof invoice1.getAmount).toBe('function');
                });
                it('should return the amount of the instance', function() {
                    expect(invoice1.getAmount()).toBe(1000.0);
                    expect(invoice2.getAmount()).toBe(2000.5);
                });
            });

            describe('setCustomer(customer)', function() {
                it('should be defined', function() {
                    expect(invoice1.setCustomer).toBeDefined();
                    expect(typeof invoice1.setCustomer).toBe('function');
                });
                it('should update the customer of the instance', function() {
                    expect(invoice1.setCustomer(customer2)).toBeUndefined();
                    expect(invoice1.getCustomer()).toBe(customer2);
                    expect(invoice2.setCustomer(customer1)).toBeUndefined();
                    expect(invoice2.getCustomer()).toBe(customer1);
                });
            });

            describe('setAmount(amount)', function() {
                it('should be defined', function() {
                    expect(invoice1.setAmount).toBeDefined();
                    expect(typeof invoice1.setAmount).toBe('function');
                });
                it('should update the amount of the instance', function() {
                    expect(invoice1.setAmount(500)).toBeUndefined();
                    expect(invoice1.getAmount()).toBe(500);
                    expect(invoice2.setAmount(1.99)).toBeUndefined();
                    expect(invoice2.getAmount()).toBe(1.99);
                });
            });

            describe('getCustomerName()', function() {
                it('should be defined', function() {
                    expect(invoice1.getCustomerName).toBeDefined();
                    expect(typeof invoice1.getCustomerName).toBe('function');
                });
                it('should return the name of the customer', function() {
                    expect(invoice1.getCustomerName()).toBe("Isaac");
                    expect(invoice2.getCustomerName()).toBe("Nahum");
                });
            });

            describe('getAmountAfterDiscount()', function() {
                it('should be defined', function() {
                    expect(invoice1.getAmountAfterDiscount).toBeDefined();
                    expect(typeof invoice1.getAmountAfterDiscount).toBe('function');
                });
                it('should return the amount minus the discount', function() {
                    expect(invoice1.getAmountAfterDiscount()).toBe(1000);
                    expect(invoice2.getAmountAfterDiscount()).toBe(1800.45);
                });
            });
        });
    });
}());
