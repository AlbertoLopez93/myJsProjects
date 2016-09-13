/****************************************************************************

Name: ArraysEx1.js
Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1} 
Target: Exercises/$1/Arrays
Function: createCoords

****************************************************************************/

"use strict";

var getScriptMetadata = require("./../../../../get_script_metadata");


const DeliveryLimit = new Date(2016, 8, 3, 17, 0, 1);


describe("Testing Arrays exercise 1", function() {
  var fs = require('fs');
  var script = fs.readFileSync('./ArraysEx1.js')+'';

  var metadata = getScriptMetadata(script);

  var req = new Function(script + " return createCoords; ");
  var createCoords = req();

  var optionalTest, res, nElements = 13;

  console.log(createCoords(nElements));

  if(metadata.timestamp) {
    optionalTest = describe
  } else {
    optionalTest = xdescribe
  }

  optionalTest("Was delivered on time", function(){
    let delivered = new Date(+metadata.timestamp);
    console.log("delivered", delivered);

    it("Before " + DeliveryLimit, function(){
      expect(delivered).toBeLessThan(DeliveryLimit);
    })
  });
  
  it("return an array of " + nElements + " elements", function() {
    var res = createCoords(nElements);
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(nElements);
  });

  it("is an array of coordinates [X,Y]", function() {
    res = createCoords(nElements);

    for (let i = 0, c; i < nElements; i++) {
      c = res[i];

      expect(Array.isArray(c)).toBe(true);
      expect(c.length).toBe(2);

      for (let i = 0, p; i < c.length; i++) {
        p = c[i];
        expect(p).toBeDefined();
      }

    };


  });

  it("the coordinates are filled with integers", function(){
    res = createCoords(nElements);
    
    for (let i = 0, c; i < nElements; i++) {
      c = res[i];

      for (let i = 0, p; i < c.length; i++) {
        p = c[i];
        expect(Number.isInteger(p)).toBe(true);
      }
    }
  });

  it("the coordinates are assending over X axis, no more than 100 units", function() {
    var x = -1;
    res = createCoords(nElements);

    for (let i = 0, c; i < nElements; i++) {
      c = res[i];

      expect(c[0]).toBeGreaterThan(x);
      expect(c[0]).not.toBeGreaterThan(x+100);
      x = c[0];
    }
  });

  it("the Y values are between 0 - 100 inclusive", function() {
    res = createCoords(nElements);

    for (let i = 0, c; i < nElements; i++) {
      c = res[i];

      expect(c[1]).not.toBeLessThan(0);
      expect(c[1]).not.toBeGreaterThan(100);
    }
  });

});