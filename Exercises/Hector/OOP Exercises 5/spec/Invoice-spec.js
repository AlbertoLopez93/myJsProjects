// Create a class called Invoice. It will contain 3 private properties:
// ID:int
// Invoice:Invoice
// amount:float
// The constructor class will receive these 3 properties as arguments,
//therefore you will have a single signature: Invoice(ID:int, Invoice:Invoice, amount:float).
// It will also have the following methods:
// getID():int returns the ID of the instance.
// getInvoice():Invoice returns the Invoice object of the instance.
// getAmount():float returns the amount of the instance.
// setInvoice(Invoice:Invoice):void sets a new Invoice of type Invoice to the instance.
// setAmount(amount:float):void sets a new amount to the instance.
// getInvoiceName():string returns the name of the Invoice of the instance.
// getAmountAfterDiscount():float returns calculated amount after applying the Invoice’s instance discount to it.
"use strict";
var Invoice = require("../Invoice");
var Customer = require("../Customer");

describe("Invoice Class", function () {
    let customer1 = new Customer(1, "John", 10);
    let invoice1 = new Invoice(1, customer1, 100);

    it("Invoice class should be defined", function () {
        expect(Invoice).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(invoice1.ID).toBe(undefined);
        });
        it("should have a  invoice property as private", function () {
            expect(invoice1.Invoice).toBe(undefined);
        });
        it("should have a discount property as private", function () {
            expect(invoice1.amount).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(invoice1.getID).toBeDefined();
                expect(typeof invoice1.getID).toBe('function');
            });
            it("should return the ID of the instance", function () {
                expect(invoice1.getID()).toBe(1);
            });
        });
        describe("getInvoice method", function () {
            it("should have a method called getInvoice", function () {
                expect(invoice1.getInvoice).toBeDefined();
                expect(typeof invoice1.getInvoice).toBe('function');
            });
            it("should return the name of the instance", function () {
                expect(invoice1.getInvoice() instanceof Customer).toBe(true);
            });
        });
        describe("getAmount method", function () {
            it("should have a method called getAmount", function () {
                expect(invoice1.getAmount).toBeDefined();
                expect(typeof invoice1.getAmount).toBe('function');
            });
            it("should return the amount of the instance", function () {
                expect(invoice1.getAmount()).toBe(100);
            });
        });
        describe("setAmount method", function () {
            it("should have a method called setAmount", function () {
                expect(invoice1.setAmount).toBeDefined();
                expect(typeof invoice1.setAmount).toBe('function');
            });
        })
        describe("getInvoiceName method", function () {
            it("should have a method called getInvoiceName", function () {
                expect(invoice1.getInvoiceName).toBeDefined();
                expect(typeof invoice1.getInvoiceName).toBe('function');
            });
            it("should return the name of the Invoice of the instance", function () {
                expect(invoice1.getInvoiceName()).toBe("John");
            });
        });

        describe("getAmountAfterDiscount method", function () {
            it("should have a method called getAmountAfterDiscount", function () {
                expect(invoice1.getAmountAfterDiscount).toBeDefined();
                expect(typeof invoice1.getAmountAfterDiscount).toBe('function');
            });
            it("should return calculated amount after applying the Invoice’s instance discount to it", function () {
                expect(invoice1.getAmountAfterDiscount()).toBe(90);
            });
        });
    });
});
