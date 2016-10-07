"use strict";

var MyDate = require("../MyDate");

var Calendar = new MyDate(2016,10,6);

describe("Validating gets and sets. ", function() {
  it("getYear is function", function() {
    expect(typeof Calendar.getYear).toBe('function');
  });
  it("getYear works", function() {
    expect(Calendar.getYear()).toBe(2016);
  });
  it("getMonth is function", function() {
    expect(typeof Calendar.getMonth).toBe('function');
  });
  it("getMonth works", function() {
    expect(Calendar.getMonth()).toBe(10);
  });
  it("getDay is function", function() {
    expect(typeof Calendar.getDay).toBe('function');
  });
  it("getDay works", function() {
    expect(Calendar.getDay()).toBe(6);
  });
  it("setYear works is void", function() {
    expect(Calendar.setYear(2010)).toBeUndefined();
  });
  it("setMonth works is void", function() {
    expect(Calendar.setMonth(1)).toBeUndefined();
  });
  it("setDay works is void", function() {
    expect(Calendar.setDay(31)).toBeUndefined();
  });
  it("sets operates", function() {
    expect(Calendar.toString()).toBe('Sunday 31 Jan 2010');
  });
});

describe("Testing prototype. ", function(){
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2014)).toBe(false);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2004)).toBe(false);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(2000)).toBe(false);
  });
  it('isLeapYear', function() {
    expect(Calendar.isLeapYear(1900)).toBe(true);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2008,4,31)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2009,2,30)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2008,4,25)).toBe(true);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(1900,2,29)).toBe(false);
  });
  it('isValidDate', function() {
    expect(Calendar.isValidDate(2004,2,29)).toBe(true);
  });
});
