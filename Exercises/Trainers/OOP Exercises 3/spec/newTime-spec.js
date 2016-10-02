"use strict";

let NewTime = require("../NewTime");

describe("NewTime class", function () {
  let midnightData = {hour: 0, minute: 0, second: 0};
  let middayData = {hour:12, minute: 0, second: 0};
  let almostMidnightData = {hour: 23, minute: 59, second: 59};
  let midnight;
  let midday;
  let almostMidnight;

  beforeEach(function () {
    midnight = new NewTime(midnightData);
    midday = new NewTime(middayData);
    almostMidnight = new NewTime(almostMidnightData);
  });

  it("should be defined", function () {
    expect(NewTime).toBeDefined();
  });

  describe("Private properties", function () {
    it("should have a private property called hour", function () {
      expect(midnight.hour).toBe(undefined);
    });
    it("should have a private property called minute", function () {
      expect(midnight.minute).toBe(undefined);
    });
    it("should have a private property called second", function () {
      expect(midnight.second).toBe(undefined);
    });
  });

  describe("Methods", function () {
    describe("getHour method", function () {
      it("should be defined", function () {
        expect(midnight.getHour).toBeDefined();
        expect(typeof midnight.getHour).toBe("function");
      });
      it("should return the hour of the instance", function () {
        expect(midnight.getHour()).toBe(0);
        expect(midday.getHour()).toBe(12);
        expect(almostMidnight.getHour()).toBe(23);
      });
    });
    describe("getMinute method", function () {
      it("should be defined", function () {
        expect(midnight.getMinute).toBeDefined();
        expect(typeof midnight.getMinute).toBe("function");
      });
      it("should return the minutes of the instance", function () {
        expect(midnight.getMinute()).toBe(0);
        expect(midday.getMinute()).toBe(0);
        expect(almostMidnight.getMinute()).toBe(59);
      });
    });
    describe("getSecond method", function () {
      it("should be defined", function () {
        expect(midnight.getSecond).toBeDefined();
        expect(typeof midnight.getSecond).toBe("function");
      });
      it("should return the seconds of the instance", function () {
        expect(midnight.getSecond()).toBe(0);
        expect(midday.getSecond()).toBe(0);
        expect(almostMidnight.getSecond()).toBe(59);
      });
    });
    describe("setHour method", function () {
      it("should be defined", function() {
        expect(midnight.setHour).toBeDefined();
        expect(typeof midnight.setHour).toBe("function");
      });
      it("should set a new hour to the instance", function() {
        midnight.setHour(1);
        expect(midnight.getHour()).toBe(1);
      });
    });
    describe("setMinute method", function() {
      it("should be defined", function() {
        expect(midnight.getMinute).toBeDefined();
        expect(typeof midnight.getMinute).toBe("function");
      });
      it("shuold set a new minute to the instance", function() {
        midnight.setMinute(1);
        expect(midnight.getMinute()).toBe(1);
      });
    });
    describe("setSecond method", function() {
      it("should be defined", function() {
        expect(midnight.getSecond).toBeDefined();
        expect(typeof midnight.getSecond).toBe("function");
      });
      it("should set a new second to the instance", function() {
        midnight.setSecond(1);
        expect(midnight.getSecond()).toBe(1);
      });
    });
    describe("setTime method", function() {
      it("should be defined", function() {
        expect(midnight.setTime).toBeDefined();
        expect(typeof midnight.setTime).toBe("function");
      });
      it("should set a new time to the instance", function() {
        midnight.setTime(1, 1, 1);
        expect(midnight.getHour()).toBe(1);
        expect(midnight.getMinute()).toBe(1);
        expect(midnight.getSecond()).toBe(1);
      });
    });
    describe("toString method", function() {
      it("should be defined", function() {
        expect(midnight.toString).toBeDefined();
        expect(typeof midnight.toString).toBe("function");
      });
      it("should return a string following the pattern hh:mm:ss, with leading zeros", function() {
        expect(midnight.toString()).toBe("00:00:00");
        expect(almostMidnight.toString()).toBe("23:59:59");
      });
    });
    describe("nextSecond method", function() {
      it("should be defined", function() {
        expect(midnight.nextSecond).toBeDefined();
        expect(typeof midnight.nextSecond).toBe("function");
      });
      it("should increase one second the time of the instance", function() {
        midnight.nextSecond();
        expect(midnight.getSecond()).toBe(1);
      });
      it("should increase the minute and hour, if needed when one second is increased", function() {
        almostMidnight.nextSecond();
        expect(almostMidnight.getHour()).toBe(0);
        expect(almostMidnight.getMinute()).toBe(0);
        expect(almostMidnight.getSecond()).toBe(0);
      });
    });
    describe("previousSecond method", function() {
      it("should be defined", function() {
        expect(midnight.previousSecond).toBeDefined();
        expect(typeof midnight.previousSecond).toBe("function");
      });
      it("should decrease the number of seconds of the instance", function() {
        almostMidnight.previousSecond();
        expect(almostMidnight.getSecond()).toBe(58);
      });
      it("should decrease the minute and hour if needed when one second is decreased", function() {
        midnight.previousSecond();
        expect(midnight.getHour()).toBe(23);
        expect(midnight.getMinute()).toBe(59);
        expect(midnight.getSecond()).toBe(59);
      });
    });
  });
});
