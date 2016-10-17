/*Create a new class called Account. It will contain 3 private properties:
id:int
customer:NewCustomer
balance:float = 0.0
The constructor will receive 2 or 3 arguments. The id and customer are required,
but the balance is optional. You will have to overload the constructor
to allow these 2 signatures:

Account(id:int, customer:NewCustomer, balance:float).
Account(id:int, customer:NewCustomer).

	If the balance is not given, it will be set to 0.0.

It will also have the following methods:

getID():int returns the id of the instance.
getCustomer():NewCustomer returns the customer object of the instance.
getBalance():float returns the balance of the instance.
setBalance(balance:float):void sets a new balance to the instance.
toString():string returns a string following the pattern
	“name(ID) balance=$xxx.xx” (balance is rounded to 2 decimal places).
getCustomerName():string returns the customer’s name of the instance.
deposit(amount:float):Account adds amount to the balance of
the instance (follow the same logic as the created in previous exercises).
withdraw(amount:float):Account subtract the amount to the balance of the
instance if possible (follow the same logic as the created in previous exercises).
*/
var NewCustomer = require("../NewCustomer");
var Account = require("../Account");

"use strict";
describe("Account Class", function () {
    let newCustomer1 = new NewCustomer(1, "John", "m");
	let account1 = new Account(1, newCustomer1);

    it("Account class should be defined", function () {
        expect(Account).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(account1.ID).toBe(undefined);
        });
        it("should have a  name property as private", function () {
            expect(account1.customer).toBe(undefined);
        });
        it("should have a gender property as private", function () {
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
        describe("getCustomer method", function () {
            it("should have a method called getCustomer", function () {
                expect(account1.getCustomer).toBeDefined();
                expect(typeof account1.getCustomer).toBe('function');
            });
            it("should return true if the instance is instance of Customer", function () {
                expect(account1.getCustomer() instanceof NewCustomer).toBe(true);
            });
        });
        describe("getBalance method", function () {
            it("should have a method called getBalance", function () {
                expect(account1.getBalance).toBeDefined();
                expect(typeof account1.getBalance).toBe('function');
            });
            it("should return the balance of the instance", function () {
                expect(account1.getBalance()).toBe(0);
            });
        });
		describe("setBalance method", function () {
            it("should have a method called setBalance", function () {
                expect(account1.setBalance).toBeDefined();
                expect(typeof account1.setBalance).toBe('function');
            });
            // it("should return the balance of the instance", function () {
            //     expect(account1.getBalance().toBe(0);
            // });
        });

		describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(account1.toString).toBeDefined();
                expect(typeof account1.toString).toBe('function');
            });
            it("should return a string following the pattern name(ID) balance=$xxx.xx", function () {
                expect(account1.toString()).toBe("John(1) balance=$0.00");
            });
        });

		describe("get Customer method", function () {
            it("should have a method called getCustomerName", function () {
                expect(account1.getCustomerName).toBeDefined();
                expect(typeof account1.getCustomerName).toBe('function');
            });
            it("should return the customer’s name of the instance.", function () {
                expect(account1.getCustomerName()).toBe("John");
            });
        });

		describe("deposit method", function () {
            it("should have a method called deposit", function () {
                expect(account1.deposit).toBeDefined();
                expect(typeof account1.deposit).toBe('function');
            });
            // it("should return the customer’s name of the instance.", function () {
            //     expect(account1.getCustomerName().toBe("John");
            // });
        });

		describe("withdraw method", function () {
            it("should have a method called withdraw", function () {
                expect(account1.withdraw).toBeDefined();
                expect(typeof account1.withdraw).toBe('function');
            });
            // it("should return the customer’s name of the instance.", function () {
            //     expect(account1.getCustomerName().toBe("John");
            // });
        });
    });
});
