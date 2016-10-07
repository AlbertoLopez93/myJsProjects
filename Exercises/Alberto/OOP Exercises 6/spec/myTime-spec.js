"use strict";

var MyTime = require("../MyTime");

var Clock = new MyTime();
var Night = new MyTime(21,8,4);

describe("Protected properties", function() {
  it("MyTime", function() {
    expect(MyTime).toBeDefined();
  });
  it("MyTime is function", function() {
    expect(typeof MyTime).toBe('function');
  });
  it("hour is protected", function() {
    expect(Clock.hour).toBeUndefined();
  });
  it("minute is protected", function() {
    expect(Clock.minute).toBeUndefined();
  });
  it("second is protected", function() {
    expect(Clock.second).toBeUndefined();
  });
});

describe("Validating gets and sets. ", function() {
  it("getHour is function", function() {
    expect(typeof Clock.getHour).toBe('function');
  });
  it("getHour works", function() {
    expect(Clock.getHour()).toBe(0);
  });
  it("getHour works", function() {
    expect(Night.getHour()).toBe(21);
  });
  it("getMinute is function", function() {
    expect(typeof Clock.getMinute).toBe('function');
  });
  it("getMinute works", function() {
    expect(Clock.getMinute()).toBe(0);
  });
  it("getHour works", function() {
    expect(Night.getMinute()).toBe(8);
  });
  it("getSecond is function", function() {
    expect(typeof Clock.getSecond).toBe('function');
  });
  it("getSecond works", function() {
    expect(Clock.getSecond()).toBe(0);
  });
  it("getHour works", function() {
    expect(Night.getSecond()).toBe(4);
  });
  it("setHour is function", function() {
    expect(typeof Night.setHour).toBe('function');
  });
  it("setHour works is void", function() {
    expect(Night.setHour(6)).toBeUndefined();
  });
  it("setHour works is void", function() {
    expect(Night.setHour(26)).toBeUndefined();
  });
  it("setMinute is function", function() {
    expect(typeof Night.setMinute).toBe('function');
  });
  it("setHour works is void", function() {
    expect(Night.setMinute(14)).toBeUndefined();
  });
  it("setMinute works is void", function() {
    expect(Night.setMinute(-6)).toBeUndefined();
  });
  it("setSecond is function", function() {
    expect(typeof Night.setSecond).toBe('function');
  });
  it("setSecond works is void", function() {
    expect(Night.setSecond(45)).toBeUndefined();
  });
  it("setSecond works is void", function() {
    expect(Night.setSecond(85)).toBeUndefined();
  });
});

describe("Testing to String and sets validation. ", function(){
  it('Sets only changes in first cases, because seconds are invalids. Or toString must add zeros', function() {
    expect(Night.toString()).toBe('06:14:45');
  });
  it('setTime is void function', function() {
    expect(Night.setTime(24,40,54)).toBeUndefined();
  });
  it('SetTime doesnt acept invalids hour.', function() {
    expect(Night.toString()).toBe('06:14:45');
  });
  it('setTime is void function', function() {
    expect(Night.setTime(14,60,54)).toBeUndefined();
  });
  it('SetTime doesnt acept invalids minute.', function() {
    expect(Night.toString()).toBe('06:14:45');
  });
  it('setTime is void function', function() {
    expect(Night.setTime(4,40,60)).toBeUndefined();
  });
  it('SetTime doesnt acept invalids second.', function() {
    expect(Night.toString()).toBe('06:14:45');
  });
});

describe('Testing nexts and prevs', function() {
  it('Testing prevSecond return instance', function() {
    expect(typeof Night.prevSecond()).toBe('object');
  });
  it('Testing prevMinute return instance', function() {
    expect(typeof Night.prevMinute()).toBe('object');
  });
  it('Testing prevHour return instance', function() {
    expect(typeof Night.prevHour()).toBe('object');
  });
  it('Testing prevSecond with 00:00:00, because call others', function() {
    expect(Clock.prevSecond().toString()).toBe('23:59:59');
  });
  it('Testing nextSecond return instance', function() {
    expect(typeof Night.nextSecond()).toBe('object');
  });
  it('Testing nextMinute return instance', function() {
    expect(typeof Night.nextMinute()).toBe('object');
  });
  it('Testing nextHour return instance', function() {
    expect(typeof Night.nextHour()).toBe('object');
  });
  it('Testing nextSecond with 23:59:59, because call others', function() {
    expect(Clock.nextSecond().toString()).toBe('00:00:00');
  });
});
