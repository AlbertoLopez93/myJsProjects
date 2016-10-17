/*Create a new class called NewCustomer. It will contain 3 private properties:
ID:int
name:string
gender:string (‘m’ or ‘f’)
The constructor class will receive these 3 properties as arguments.
You will end up with a signature like:
newCustomer(ID:int, name:string, gender:string).
It will also have the following methods:
getID():int returns the ID of the instance.
getName():string returns the name of the instance.
getGender():string returns the gender of the instance.
toString():string returns a string following the pattern “name(ID)”.*/
var NewCustomer = require("../NewCustomer");
"use strict";

describe("NewCustomer Class", function () {
    let newCustomer1;

    beforeEach(function () {
        newCustomer1 = new NewCustomer(1, "John", "m");
    });

    it("newCustomer class should be defined", function () {
        expect(NewCustomer).toBeDefined();
    });

    describe("Private properties", function () {
        it("should have an id property as private", function () {
            expect(newCustomer1.ID).toBe(undefined);
        });
        it("should have a  name property as private", function () {
            expect(newCustomer1.name).toBe(undefined);
        });
        it("should have a gender property as private", function () {
            expect(newCustomer1.gender).toBe(undefined);
        });
    });

    describe("Methods", function () {
        describe("getID method", function () {
            it("should have a method called getID", function () {
                expect(newCustomer1.getID).toBeDefined();
                expect(typeof newCustomer1.getID).toBe('function');
            });
            it("should return the ID of the instance", function () {
                expect(newCustomer1.getID()).toBe(1);
            });
        });
        describe("getName method", function () {
            it("should have a method called getName", function () {
                expect(newCustomer1.getName).toBeDefined();
                expect(typeof newCustomer1.getName).toBe('function');
            });
            it("should return the name of the instance", function () {
                expect(newCustomer1.getName()).toBe("John");
            });
        });
        describe("getGender method", function () {
            it("should have a method called getGender", function () {
                expect(newCustomer1.getGender).toBeDefined();
                expect(typeof newCustomer1.getGender).toBe('function');
            });
            it("should return the gender of the instance", function () {
                expect(newCustomer1.getGender()).toBe("m");
            });
        });

    });
});
