"use strict";


let MyTime = require("../MyTime");

describe("MyTime class", () => {
  describe("Private properties", () => {
    it("should have a private property called hour", () => {
      expect(new MyTime().hour).toBeUndefined();
    });
    it("should have a private property called minute", () => {
      expect(new MyTime().minute).toBeUndefined();
    });
    it("should have a private property called second", () => {
      expect(new MyTime().second).toBeUndefined();
    });
  });
  describe("Constructors", () => {
    describe("No arguments constructor", () => {
      it("should work with no arguments given", () => {
        expect(new MyTime() instanceof MyTime).toBe(true);
      });
    });
    describe("With given arguments hour, minute, second", () => {
      it("should work with 3 arguments given", () => {
        expect(new MyTime(5, 5, 5) instanceof MyTime).toBe(true);
      });
    });
  });
  describe("Public methods", () => {
    let descriptor;
    let timeZero;
    let midday;
    let almostMidnight;

    beforeEach(() => {
      timeZero = new MyTime();
      midday = new MyTime(12, 0, 0);
      almostMidnight = new MyTime(23, 59, 59);
    });

    describe("getHour method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "getHour");
      });
      it("should be defined", () => {
        expect(new MyTime().getHour).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().getHour).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("getHour")).toBe(true);
      });
      it("should return the hour of the instance", () => {
        expect(timeZero.getHour()).toBe(0);
        expect(midday.getHour()).toBe(12);
        expect(almostMidnight.getHour()).toBe(23);
      });
    });

    describe("getMinute method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "getMinute");
      });
      it("should be defined", () => {
        expect(new MyTime().getMinute).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().getMinute).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("getMinute")).toBe(true);
      });
      it("should return the minute of the instance", () => {
        expect(timeZero.getMinute()).toBe(0);
        expect(midday.getMinute()).toBe(0);
        expect(almostMidnight.getMinute()).toBe(59);
      });
    });

    describe("getSecond method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "getSecond");
      });
      it("should be defined", () => {
        expect(new MyTime().getSecond).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().getSecond).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("getSecond")).toBe(true);
      });
      it("should return the second of the instance", () => {
        expect(timeZero.getSecond()).toBe(0);
        expect(midday.getSecond()).toBe(0);
        expect(almostMidnight.getSecond()).toBe(59);
      });
    });

    describe("setHour method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "setHour");
      });
      it("should be defined", () => {
        expect(new MyTime().setHour).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().setHour).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return undefined", () => {
        expect(new MyTime().setHour(12)).toBeUndefined();
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("setHour")).toBe(true);
      });
      it("should set a new hour if the argument given is within the range 0..23", () => {
        timeZero.setHour(12);
        expect(timeZero.getHour()).toBe(12);
      });
      it("should not set a new hour if the argument given is out of the range 0..23", () => {
        timeZero.setHour(50);
        expect(timeZero.getHour()).toBe(0);
        timeZero.setHour(-50);
        expect(timeZero.getHour()).toBe(0);
      });
      it("should not set a new hour if there is no argument given", () => {
        timeZero.setHour();
        expect(timeZero.getHour()).toBe(0);
      });
    });

    describe("setMinute method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "setMinute");
      });
      it("should be defined", () => {
        expect(new MyTime().setMinute).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().setMinute).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return undefined", () => {
        expect(new MyTime().setMinute(12)).toBeUndefined();
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("setMinute")).toBe(true);
      });
      it("should set a new minute if the argument given is within the range 0..59", () => {
        timeZero.setMinute(12);
        expect(timeZero.getMinute()).toBe(12);
      });
      it("should not set a new minute if the argument given is out of the range 0..59", () => {
        timeZero.setMinute(60);
        expect(timeZero.getMinute()).toBe(0);
        timeZero.setMinute(-60);
        expect(timeZero.getMinute()).toBe(0);
      });
      it("should not set a new minute if there is no argument given", () => {
        timeZero.setMinute();
        expect(timeZero.getMinute()).toBe(0);
      });
    });

    describe("setSecond method", () => {
      beforeEach(() => {
        descriptor = Object.getOwnPropertyDescriptor(new MyTime(), "setSecond");
      });
      it("should be defined", () => {
        expect(new MyTime().setSecond).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().setSecond).toBe("function");
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return undefined", () => {
        expect(new MyTime().setSecond(12)).toBeUndefined();
      });
      it("should be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("setSecond")).toBe(true);
      });
      it("should set a new second if the argument given is within the range 0..59", () => {
        timeZero.setSecond(12);
        expect(timeZero.getSecond()).toBe(12);
      });
      it("should not set a new second if the argument given is out of the range 0..59", () => {
        timeZero.setSecond(60);
        expect(timeZero.getSecond()).toBe(0);
        timeZero.setSecond(-60);
        expect(timeZero.getSecond()).toBe(0);
      });
      it("should not set a new second if there is no argument given", () => {
        timeZero.setSecond();
        expect(timeZero.getSecond()).toBe(0);
      });
    });

    describe("setTime method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "setTime");
      });
      it("should be defined", () => {
        expect(new MyTime().setTime).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().setTime).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("setTime")).toBe(false);
      });
      it("should exist in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("setTime")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return undefined", () => {
        expect(new MyTime().setTime()).toBeUndefined();
      });
      it("should set a new time with 3 arguments that fall within the validation range", () => {
        expect(midday.getHour()).toBe(12);
        expect(midday.getMinute()).toBe(0);
        expect(midday.getSecond()).toBe(0);
        midday.setTime(15, 30, 30);
        expect(midday.getHour()).toBe(15);
        expect(midday.getMinute()).toBe(30);
        expect(midday.getSecond()).toBe(30);
      });
      it("should not set a new time with 3 arguments that doesnt fall within the valid range", () => {
        expect(midday.getHour()).toBe(12);
        expect(midday.getMinute()).toBe(0);
        expect(midday.getSecond()).toBe(0);
        midday.setTime(25, 60, 60);
        expect(midday.getHour()).toBe(12);
        expect(midday.getMinute()).toBe(0);
        expect(midday.getSecond()).toBe(0);
      });
      it("should not set a new time if the are not arguments given", () => {
        expect(midday.getHour()).toBe(12);
        expect(midday.getMinute()).toBe(0);
        expect(midday.getSecond()).toBe(0);
        midday.setTime();
        expect(midday.getHour()).toBe(12);
        expect(midday.getMinute()).toBe(0);
        expect(midday.getSecond()).toBe(0);
      });
    });

    describe("toString method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "toString");
      });
      it("should be defined", () => {
        expect(new MyTime().toString).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().toString).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("toString")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("toString")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return a string", () => {
        expect(typeof new MyTime().toString()).toBe("string");
      });
      it("should follow the pattern HH:MM:SS with leading zeros", () => {
        expect(timeZero.toString()).toBe("00:00:00");
        expect(midday.toString()).toBe("12:00:00");
        expect(almostMidnight.toString()).toBe("23:59:59");
      });
    });

    describe("nextHour method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextHour");
      });
      it("should be defined", () => {
        expect(new MyTime().nextHour).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().nextHour).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("nextHour")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("nextHour")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().nextHour() instanceof MyTime).toBe(true);
      });
      it("should increase the hour of the instance by 1", () => {
        expect(timeZero.getHour()).toBe(0);
        expect(timeZero.nextHour().getHour()).toBe(1);
      });
      it("should set the hour to 0 if the current hour is 23 and the method is called", () => {
        expect(almostMidnight.getHour()).toBe(23);
        expect(almostMidnight.nextHour().getHour()).toBe(0);
      });
    });
    describe("previousHour method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousHour");
      });
      it("should be defined", () => {
        expect(new MyTime().previousHour).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().previousHour).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("previousHour")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("previousHour")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().previousHour() instanceof MyTime).toBe(true);
      });
      it("should decrease the hour of the instance by 1", () => {
        expect(midday.getHour()).toBe(12);
        expect(midday.previousHour().getHour()).toBe(11);
      });
      it("should set the hour to 23 if the current hour is 0 and the method is called", () => {
        expect(timeZero.getHour()).toBe(0);
        expect(timeZero.previousHour().getHour()).toBe(23);
      });
    });
    describe("nextMinute method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextMinute");
      });
      it("should be defined", () => {
        expect(new MyTime().nextMinute).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().nextMinute).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("nextMinute")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("nextMinute")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().nextMinute() instanceof MyTime).toBe(true);
      });
      it("should increase the minute of the instance by 1", () => {
        expect(timeZero.nextMinute().getMinute()).toBe(1);
      });
      it("should set the minute to 0 if the current minute is 59 and the method is called", () => {
        let time = new MyTime(13, 59, 0);
        expect(time.nextMinute().getMinute()).toBe(0);
      });
      it("should increase the hour of the instance by 1 if the current minute is 59 and the method is called", () => {
        let time = new MyTime(13, 59, 0);
        expect(time.nextMinute().getMinute()).toBe(0);
        expect(time.getHour()).toBe(14);
      });
    });
    describe("previousMinute method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousMinute");
      });
      it("should be defined", () => {
        expect(new MyTime().previousMinute).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().previousMinute).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("previousMinute")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("previousMinute")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().previousMinute() instanceof MyTime).toBe(true);
      });
      it("should decrease the current minute of the instance by 1", () => {
        let time = new MyTime(10, 30, 30);
        expect(time.previousMinute().getMinute()).toBe(29);
      });
      it("should set the minute to 59 if the current minute is 0 and the method is called", () => {
        let time = new MyTime(10, 0, 0);
        expect(time.previousMinute().getMinute()).toBe(59);
      });
      it("should decrease the hour of the instance by 1 if the current minute is 0 and the method is called", () => {
        let time = new MyTime(10, 0, 0);
        expect(time.previousMinute().getMinute()).toBe(59);
        expect(time.getHour()).toBe(9);
      });
    });
    describe("nextSecond method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "nextSecond");
      });
      it("should be defined", () => {
        expect(new MyTime().nextSecond).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().nextSecond).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("nextSecond")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("nextSecond")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().nextSecond() instanceof MyTime).toBe(true);
      });
      it("should increase the current second of the instance by 1", () => {
        expect(timeZero.nextSecond().getSecond()).toBe(1);
      });
      it("should set the second to 0 if the current second is 59 and the method is called", () => {
        expect(almostMidnight.nextSecond().getSecond()).toBe(0);
      });
      it("should increase the minute of the instance if the current second is 59 and the method is called", () => {
        expect(almostMidnight.nextSecond().getSecond()).toBe(0);
        expect(almostMidnight.getMinute()).toBe(0);
      });
      it("should increase the hour of the instance if the current minute is 59 and the current second is 59 and the method is called", () => {
        expect(almostMidnight.nextSecond().getSecond()).toBe(0);
        expect(almostMidnight.getMinute()).toBe(0);
        expect(almostMidnight.getHour()).toBe(0);
      });
    });
    describe("previousSecond method", () => {
      let proto;
      let descriptor;
      beforeEach(() => {
        proto = Object.getPrototypeOf(new MyTime());
        descriptor = Object.getOwnPropertyDescriptor(proto, "previousSecond");
      });
      it("should be defined", () => {
        expect(new MyTime().previousSecond).toBeDefined();
      });
      it("should be a function", () => {
        expect(typeof new MyTime().previousSecond).toBe("function");
      });
      it("should not be a direct property of the instance", () => {
        expect(new MyTime().hasOwnProperty("previousSecond")).toBe(false);
      });
      it("should exists in the prototype of the constructor", () => {
        expect(proto.hasOwnProperty("previousSecond")).toBe(true);
      });
      it("should not be configurable", () => {
        expect(descriptor.configurable).toBe(false);
      });
      it("should not be writable", () => {
        expect(descriptor.writable).toBe(false);
      });
      it("should be enumerable", () => {
        expect(descriptor.enumerable).toBe(true);
      });
      it("should return the instance as return value", () => {
        expect(new MyTime().previousSecond() instanceof MyTime).toBe(true);
      });
      it("should decrease the current second of the instance by 1", () => {
        expect(almostMidnight.previousSecond().getSecond()).toBe(58);
      });
      it("should set the second to 59 if the current second is 0 and the method is called", () => {
        expect(timeZero.previousSecond().getSecond()).toBe(59);
      });
      it("should decrease the minute of the instance if the current second is 0 and the method is called", () => {
        expect(timeZero.previousSecond().getSecond()).toBe(59);
        expect(timeZero.getMinute()).toBe(59);
      });
      it("should increase the hour of the instance if the current minute is 0 and the current second is 0 and the method is called", () => {
        expect(timeZero.previousSecond().getSecond()).toBe(59);
        expect(timeZero.getMinute()).toBe(59);
        expect(timeZero.getHour()).toBe(23);
      });
    });
  });
});
