/*Create a class called Customer. It will contain 3 private properties:
ID:int
name:string
discount:int
The constructor of the class will receive these 3 properties
as arguments, therefore you will have a signature like:
Customer(ID:int, name:string, discount:int).
It will also have the following methods:
getID():int returns the ID of the instance.
getName():string returns the name of the instance.
getDiscount():int returns the discount of the instance.
setDiscount(discount:int):void sets a new discount to the instance.
toString():string returns a string following the pattern “name(ID)”*/

"use strict";
var Customer = require("../Customer");

describe("Customer Class", function () {
    // let data2 = {id: 2, name: "Doe", balance: 50};
    let customer1;
    // let account2;

    beforeEach(function () {
        customer1 = new Customer(1, "John", 100);
        // account2 = new Account(data2);
    });

    it("Customer class should be defined", function () {
        expect(Customer).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(customer1.ID).toBe(undefined);
        });
        it("should have a  name property as private", function () {
            expect(customer1.name).toBe(undefined);
        });
        it("should have a discount property as private", function () {
            expect(customer1.discount).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(customer1.getID).toBeDefined();
                expect(typeof customer1.getID).toBe('function');
            });
            it("should return the ID of the instance", function () {
                expect(customer1.getID()).toBe(1);
            });
        });
        describe("getName method", function () {
            it("should have a method called getName", function () {
                expect(customer1.getName).toBeDefined();
                expect(typeof customer1.getName).toBe('function');
            });
            it("should return the name of the instance", function () {
                expect(customer1.getName()).toBe("John");
            });
        });
        describe("getDiscount method", function () {
            it("should have a method called getDiscount", function () {
                expect(customer1.getDiscount).toBeDefined();
                expect(typeof customer1.getDiscount).toBe('function');
            });
            it("should return the discount of the instance", function () {
                expect(customer1.getDiscount()).toBe(100);
            });
        });
        describe("setDiscount method", function () {
            it("should have a method called setDiscount", function () {
                expect(customer1.setDiscount).toBeDefined();
                expect(typeof customer1.setDiscount).toBe('function');
            });
            it("should set the given amount to the discount of the instance", function () {
                expect(customer1.setDiscount(10)).toBe(undefined);
            });
        });
        describe("new discount", function () {
            it("discount should be 10 after method setDiscount ", function () {
                customer1.setDiscount(10);
                expect(customer1.getDiscount()).toBe(10);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(customer1.toString).toBeDefined();
                expect(typeof customer1.toString).toBe('function');
            });
            it("should return a string following the pattern: name(ID)", function () {
                expect(customer1.toString()).toBe("John(1)");
            });
        });
    });
});
// describe("debit method", function () {
//             it("should have a method called debit", function () {
//                 expect(account1.debit).toBeDefined();
//                 expect(typeof account1.debit).toBe('function');
//             });
//             it("should subtract the amount to the balance's instance if the given amount is less or equal than the current balance", function () {
//                 expect(account1.debit(10)).toBe(90);
//                 expect(account1.debit(90)).toBe(0);
//             });
//             it("should not subtract the amount to the balance's instance if the give amount is more than the current balance", function () {
//                 expect(account1.debit(150)).toBe(100);
//             });
//         });
//         describe("transferTo method", function () {
//             it("should have a method called transferTo", function () {
//                 expect(account1.transferTo).toBeDefined();
//                 expect(typeof account1.transferTo).toBe('function');
//             });
//             it("should transfer the amount given to the target account, if the source account balance is greater or equal to the amount you wanna transfer", function () {
//                 expect(account1.transferTo(account2, 50)).toBe(50);
//             });
//             it("shouldn't transfer the amount given to the target account, if the source account balance is less than the amount that wants to be transferred", function () {
//                 expect(account1.transferTo(account2, 150)).toBe(100);
//             });
//         });
