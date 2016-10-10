"use strict";

const howManyTimes = require("../howmanytimes.js");


describe("Testing howManyTimes()", function (){
  it("should return", function () {
    expect(howManyTimes(100,5)).toBe(21);
  });
  it("should return", function () {
    expect(howManyTimes(3640,10)).toBe(0);
  });
  it("should return", function () {
    expect(howManyTimes(3650,10)).toBe(0);
  });
  it("should return", function () {
    expect(howManyTimes(300,40)).toBe(8);
  });
  it("should return", function () {
    expect(howManyTimes(300,42)).toBe(8);
  });
  it("should return", function () {
    expect(howManyTimes(300,41)).toBe(8);
  });
  it("should return", function () {
    expect(howManyTimes(300,43)).toBe(7);
  });
  it("should return", function () {
    expect(howManyTimes(300,38)).toBe(8);
  });
  it("should return", function () {
    expect(howManyTimes(308.1,39)).toBe(8);
  });
  it("should return", function () {
    expect(howManyTimes(0,0)).toBe(0);
  });
});
