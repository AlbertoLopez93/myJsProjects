"use strict";

const howManyTimes = require("../howmanytimes.js");

describe("Testing howManyTimes()", function (){
  it("should return 21 when howManyTimes(100,5)", function () {
    expect(howManyTimes(100,5)).toBe(21);
  });
  it("should return 0 when howManyTimes(3640,10)", function () {
    expect(howManyTimes(3640,10)).toBe(0);
  });
  it("should return 0 when howManyTimes(3650,10)", function () {
    expect(howManyTimes(3650,10)).toBe(0);
  });
  it("should return 8 when howManyTimes(300,40)", function () {
    expect(howManyTimes(300,40)).toBe(8);
  });
  it("should return 8 when howManyTimes(300,42)", function () {
    expect(howManyTimes(300,42)).toBe(8);
  });
  it("should return 8 when howManyTimes(300,41)", function () {
    expect(howManyTimes(300,41)).toBe(8);
  });
  it("should return 7 when howManyTimes(300,43)", function () {
    expect(howManyTimes(300,43)).toBe(7);
  });
  it("should return 8 when howManyTimes(300,38)", function () {
    expect(howManyTimes(300,38)).toBe(8);
  });
  it("should return 8 when howManyTimes(308.1,39)", function () {
    expect(howManyTimes(308.1,39)).toBe(8);
  });
  it("should return 0 when howManyTimes(0,0)", function () {
    expect(howManyTimes(0,0)).toBe(0);
  });
});
