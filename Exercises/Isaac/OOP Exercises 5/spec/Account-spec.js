(function() {
    'use strict';

    let NewCustomer = require('../NewCustomer'),
        Account = require('../Account');

    describe('Account class', function() {
        let customer1 = new NewCustomer(1, 'Juan', 'm'),
            customer2 = new NewCustomer(2, 'Maria', 'f'),
            account1,
            account2,
            data1 = {
                id: 200,
                customer: customer1
            },
            data2 = {
                id: 201,
                customer: customer2,
                balance: 3000.99
            };

        beforeEach(function() {
            account1 = new Account(data1.id, data1.customer);
            account2 = new Account(data2.id, data2.customer, data2.balance);
        });

        it('should be defined', function() {
            expect(Account).toBeDefined();
        });

        describe('Private properties', function() {
            it('should have a "id" property as private', function() {
                expect(account1.id).toBeUndefined();
            });
            it('should have a "customer" property as private', function() {
                expect(account1.customer).toBeUndefined();
            });
            it('should have a "balance" property as private', function() {
                expect(account1.balance).toBeUndefined();
            });
        });

        describe('Methods', function() {
            describe('getID()', function() {
                it('should be defined', function() {
                    expect(account1.getID).toBeDefined();
                    expect(typeof account1.getID).toBe('function');
                });
                it('should return the id of the instance', function() {
                    expect(account1.getID()).toBe(200);
                    expect(account2.getID()).toBe(201);
                });
            });

            describe('getCustomer()', function() {
                it('should be defined', function() {
                    expect(account1.getCustomer).toBeDefined();
                    expect(typeof account1.getCustomer).toBe('function');
                });
                it('should return the customer of the instance', function() {
                    expect(account1.getCustomer()).toBe(customer1);
                    expect(account2.getCustomer()).toBe(customer2);
                });
            });

            describe('getBalance()', function() {
                it('should be defined', function() {
                    expect(account1.getBalance).toBeDefined();
                    expect(typeof account1.getBalance).toBe('function');
                });
                it('should return the balance of the instance', function() {
                    expect(account1.getBalance()).toBe(0);
                    expect(account2.getBalance()).toBe(3000.99);
                });
            });

            describe('setBalance(balance)', function() {
                it('should be defined', function() {
                    expect(account1.setBalance).toBeDefined();
                    expect(typeof account1.setBalance).toBe('function');
                });
                it('should update the balance of the instance', function() {
                    expect(account1.setBalance(1.555)).toBeUndefined();
                    expect(account1.getBalance()).toBe(1.555);
                    expect(account2.setBalance(10)).toBeUndefined();
                    expect(account2.getBalance()).toBe(10);
                });
            });

            describe('toString()', function() {
                it('should be defined', function() {
                    expect(account1.toString).toBeDefined();
                    expect(typeof account1.toString).toBe('function');
                });
                it('should return the instance as a string', function() {
                    expect(account1.toString()).toBe('Juan(1) balance=$0.00');
                    expect(account2.toString()).toBe('Maria(2) balance=$3000.99');
                });
            });

            describe('getCustomerName()', function() {
                it('should be defined', function() {
                    expect(account1.getCustomerName).toBeDefined();
                    expect(typeof account1.getCustomerName).toBe('function');
                });
                it('should return the name of the customer of the instance', function() {
                    expect(account1.getCustomerName()).toBe('Juan');
                    expect(account2.getCustomerName()).toBe('Maria');
                });
            });

            describe('deposit()', function() {
                it('should be defined', function() {
                    expect(account1.deposit).toBeDefined();
                    expect(typeof account1.deposit).toBe('function');
                });
                it('should increment de balance of the instance', function() {
                    expect(account1.deposit(1000)).toBe(account1);
                    expect(account1.getBalance()).toBe(1000);
                    expect(account2.deposit(0.01)).toBe(account2);
                    expect(account2.getBalance()).toBe(3001);
                });
            });

            describe('withdraw()', function() {
                it('should be defined', function() {
                    expect(account1.withdraw).toBeDefined();
                    expect(typeof account1.withdraw).toBe('function');
                });
                it('should decrement de balance of the instance', function() {
                    expect(account1.withdraw(500)).toBe(account1);
                    expect(account1.getBalance()).toBe(0);
                    expect(account2.withdraw(4000)).toBe(account2);
                    expect(account2.getBalance()).toBe(3000.99);
                    expect(account2.withdraw(3000)).toBe(account2);
                    expect(account2.getBalance()).toBe(0.9899999999997817);
                });
            });
        });
    });
}());
