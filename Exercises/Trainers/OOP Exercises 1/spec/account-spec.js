"use strict";

let Account = require("../Account");

describe("Account Class", function () {
    let data1 = {id: 1, name: "John", balance: 100};
    let data2 = {id: 2, name: "Doe", balance: 50};
    let account1;
    let account2;

    beforeEach(function () {
        account1 = new Account(data1);
        account2 = new Account(data2);
    });

    it("should be defined", function () {
        expect(Account).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(account1.id).toBe(undefined);
        });
        it("should have a john property as private", function () {
            expect(account1.john).toBe(undefined);
        });
        it("should have a balance property as private", function () {
            expect(account1.balance).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(account1.getID).toBeDefined();
                expect(typeof account1.getID).toBe('function');
            });
            it("should return the ID of the instance", function () {
                expect(account1.getID()).toBe(1);
            });
        });
        describe("getName method", function () {
            it("should have a method called getName", function () {
                expect(account1.getName).toBeDefined();
                expect(typeof account1.getName).toBe('function');
            });
            it("should return the name of the instance", function () {
                expect(account1.getName()).toBe("John");
            });
        });
        describe("getBalance method", function () {
            it("should have a method called getBalance", function () {
                expect(account1.getBalance).toBeDefined();
                expect(typeof account1.getBalance).toBe('function');
            });
            it("should return the balance of the instance", function () {
                expect(account1.getBalance()).toBe(100);
            });
        });
        describe("credit method", function () {
            it("should have a method called credit", function () {
                expect(account1.credit).toBeDefined();
                expect(typeof account1.credit).toBe('function');
            });
            it("should add the given amount to the balance of the instance", function () {
                expect(account1.credit(10)).toBe(110);
            });
        });
        describe("debit method", function () {
            it("should have a method called debit", function () {
                expect(account1.debit).toBeDefined();
                expect(typeof account1.debit).toBe('function');
            });
            it("should subtract the amount to the balance's instance if the given amount is less or equal than the current balance", function () {
                expect(account1.debit(10)).toBe(90);
                expect(account1.debit(90)).toBe(0);
            });
            it("should not subtract the amount to the balance's instance if the give amount is more than the current balance", function () {
                expect(account1.debit(150)).toBe(100);
            });
        });
        describe("transferTo method", function () {
            it("should have a method called transferTo", function () {
                expect(account1.transferTo).toBeDefined();
                expect(typeof account1.transferTo).toBe('function');
            });
            it("should transfer the amount given to the target account, if the source account balance is greater or equal to the amount you wanna transfer", function () {
                expect(account1.transferTo(account2, 50)).toBe(50);
            });
            it("shouldn't transfer the amount given to the target account, if the source account balance is less than the amount that wants to be transferred", function () {
                expect(account1.transferTo(account2, 150)).toBe(100);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(account1.toString).toBeDefined();
                expect(typeof account1.toString).toBe('function');
            });
            it("should return a string following the pattern: Account[id=?, name=?, balance=?]", function () {
                expect(account1.toString()).toBe("Account[id=1, name=John, balance=100]");
            });
        });
    });
});
