"use strict";

let InvoiceItem = require("../InvoiceItem");

describe("InvoiceItem Class", function () {
    let data = {id: 1, desc: "MBP 13", qty: 10, unitPrice: 1234.55};
    let invoiceItem;

    beforeEach(function () {
        invoiceItem = new InvoiceItem(data);
    });

    it("should be defined", function () {
        expect(InvoiceItem).toBeDefined();
    });

    describe("Private propeteries", function () {
        it("should have an id property as private", function () {
            expect(invoiceItem.id).toBe(undefined);
        });
        it("should have a desc property as private", function () {
            expect(invoiceItem.desc).toBe(undefined);
        });
        it("should have an qty property as private", function () {
            expect(invoiceItem.qty).toBe(undefined);
        });
        it("should have an unitPrice property as private", function () {
            expect(invoiceItem.unitPrice).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(invoiceItem.getID).toBeDefined();
                expect(typeof invoiceItem.getID).toBe('function');
            });
            it("should return the ID of the instance" , function () {
                expect(invoiceItem.getID()).toBe(1);
            });
        });
        describe("getDesc method", function () {
            it("should have a method called getDesc", function () {
                expect(invoiceItem.getDesc).toBeDefined();
                expect(typeof invoiceItem.getDesc).toBe('function');
            });
            it("should return the desc of the instance", function () {
                expect(invoiceItem.getDesc()).toBe('MBP 13');
            });
        });
        describe("getQty method", function () {
            it("should have a method called getQty", function () {
                expect(invoiceItem.getQty).toBeDefined();
                expect(typeof invoiceItem.getQty).toBe('function');
            });
            it("should return the qty of the instance", function () {
                expect(invoiceItem.getQty()).toBe(10);
            });
        });
        describe("getUnitPrice method", function () {
            it("should have a method called getUnitPrice", function () {
                expect(invoiceItem.getUnitPrice).toBeDefined();
                expect(typeof invoiceItem.getUnitPrice).toBe('function');
            });
            it("should return the unitPrice of the instance", function () {
                expect(invoiceItem.getUnitPrice()).toBe(1234.55);
            });
        });
        describe("setUnitPrice method", function () {
            it("should have a method called setUnitPrice", function () {
                expect(invoiceItem.setUnitPrice).toBeDefined();
                expect(typeof invoiceItem.setUnitPrice).toBe('function');
            });
            it("should set a new unitPrice to the instance", function () {
                invoiceItem.setUnitPrice(6543.21);
                expect(invoiceItem.getUnitPrice()).toBe(6543.21);
            });
        });
        describe("getTotal method", function () {
            it("should have a method called getTotal", function () {
                expect(invoiceItem.getTotal).toBeDefined();
                expect(typeof invoiceItem.getTotal).toBe('function');
            });
            it("should return the calculation of mutiplying the qty by the unitPrice of the instance", function () {
                expect(invoiceItem.getTotal()).toBe(12345.5);
            });
        });
        describe("toString method", function () {
            it("should have a method called toString", function () {
                expect(invoiceItem.toString).toBeDefined();
                expect(typeof invoiceItem.toString).toBe('function');
            });
            it("should return a string following the pattern: InvoiceItem[id=?, desc=?, qty=?, unitPrice=?]", function () {
                expect(invoiceItem.toString()).toBe("InvoiceItem[id=1, desc=MBP 13, qty=10, unitPrice=1234.55]");
            });
        });
    });
});
