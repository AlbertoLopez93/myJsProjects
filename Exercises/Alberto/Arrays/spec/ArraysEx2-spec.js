/****************************************************************************

Name: ArraysEx2.js
Search: label:interns {subject:"arrays ex 2" subject:"arrays ex2" subject:arraysex2}
Target: Exercises/$1/Arrays
Function: isInLine

****************************************************************************/

"use strict";

var getScriptMetadata = require("./../../../../get_script_metadata");


const DeliveryLimit = new Date(2016, 8, 3, 17, 0, 1);

const testPoints = [
  {
    points: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6]
    ],
    result: true
  },
  {
    points: [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 3],
      [2, 4],
      [5, 5],
      [6, 6]
    ],
    result: false
  },
  {
    points: [
      [2, 1],
      [4, 3]
    ],
    result: true
  },
  {
    points: [
      [56, 330],
      [56.5, 332.5],
      // [8, 90],
      [70, 400]
    ],
    result: true
  },
  {
    points: [
      [-42, -160],
      [8, 90],
      [58.9, 344.5]
    ],
    result: true
  },
  {
    points: [
      [-42, -160],
      [8, 90.1],
      [70, 400]
    ],
    result: false
  },
  {
    points: [
      [-42, -160],
      [70, 400]
    ],
    result: true
  }
];

describe("Testing Arrays exercise 2", function() {
  var fs = require('fs');
  var script = fs.readFileSync('./ArraysEx2.js')+'';
  var metadata = getScriptMetadata(script);
  var req = new Function(script + " return isInLine; ");
  var isInLine = req();

  var optionalTest, res, nElements = 13;


  if(metadata.timestamp) {
    optionalTest = describe
  } else {
    optionalTest = xdescribe
  }

  optionalTest("Was delivered on time", function(){
    it("Before " + DeliveryLimit, function(){
      expect(new Date(+metadata.timestamp)).toBeLessThan(DeliveryLimit);
    })
  });
  
  it("return a boolean value ", function() {
    res = isInLine( [ [0,0], [1,1] ] );
    expect(typeof res).toBe("boolean");
  });

  describe("points on plane ", function() {
    
    testPoints.forEach(function(tCase) {
      it(tCase.points+"", function() {
        expect(isInLine(tCase.points)).toBe(tCase.result);
      });
    });

  });

});