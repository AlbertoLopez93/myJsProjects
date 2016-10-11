"use strict";

let x = require("../howManyTimes");

describe("Number daays for advantage the anual pass", function(){
  it("Tests that return  a number less to 365" ,function(){// this tests return valid days of advantage
    expect(x(200,1)).toBe(200);
    expect(x(300,1)).toBe(300);
    expect(x(2000,100)).toBe(20);
    expect(x(200,100)).toBe(2);
    expect(x(5000,50)).toBe(100);
  });

  it("Tests that should return 0" ,function(){// this tests resturn 0 becouse there are not days of advantage
    expect(x(400,1)).toBe(0);
    expect(x(2000,1)).toBe(0);
    expect(x(365,1)).toBe(0);
    expect(x(6000,10)).toBe(0);
    expect(x(367,1)).toBe(0);
  });
});
