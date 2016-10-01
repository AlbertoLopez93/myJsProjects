"use strict";
var NewTime = require("../NewTime");
describe("NewTime Class", function () {
    let data = {hour : 10, minute : 3, second : 3};
    let dataFail = { hour : 24, minute : 60, second : 60 }
    let newTime;
    let fail;


    beforeEach(function () {
        newTime = new NewTime(data);
        fail = new NewTime(dataFail);
    });

    it("should be defined", function () {
        expect(NewTime).toBeDefined();
    });

    it("should have an hour property as private", function () {
        expect(newTime.hour).toBe(undefined);
    });
    it("should have an minute property as private", function () {
        expect(newTime.minute).toBe(undefined);
    });
    it("should have an second property as private", function () {
        expect(newTime.second).toBe(undefined);
    });

    it("should return 10 with the getHour method ", function () {
        expect(newTime.getHour()).toBe(10);
    });
    it("should return 10:03:03 with the toString method ", function () {
        expect(newTime.toString()).toBe("10:03:03");
    });
    it("should return 10:03:03 with the toString method ", function () {
        expect(newTime.toString()).toBe("10:03:03");
    });
    it("should return "undefined:undefined:undefined" with the toString method 24:60:60 ", function () {
        expect(fail.toString()).toBe("undefined:undefined:undefined");
    });




});
