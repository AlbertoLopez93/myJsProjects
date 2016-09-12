/****************************************************************************

Name: ArraysEx3.js
-Search: From skype
Target: Exercises/$1/Arrays
Function: play

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

describe("Testing Arrays exercise 3", function() {
  var fs = require('fs');
  var script = fs.readFileSync('./ArraysEx3.js')+'';
  var metadata = getScriptMetadata(script);
  var req = new Function(script + " return play; ");
  var play = req();

  var optionalTest, initialArray, res;


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
  
  describe("Easy tests", function(){

    initialArray = [0,1,2,3,4];
    res = play( initialArray, "atStart", "atEnd", [2, "at2"] );

    it("Return an array ", function() {
      expect(Array.isArray(res)).toBe(true);
    });

    describe("Return the proper values", function() {
      it('insert at start', function(){
        expect(res[0]).toBe("atStart");
      });

      it('insert at end', function(){
        expect(res[res.length-1]).toBe("atEnd");
      });

      it('insert at N', function(){
        expect(res[2]).toBe("at2");
      });

      it('full compare', function(){
        expect(res).toEqual(["atStart", 0, "at2", 1, 2, 3, 4, "atEnd"]);
      });
    });

    it("The initial array was not changed", function() {
      expect(initialArray).toEqual([0, 1, 2, 3, 4]);
    });

  });

  describe("Mixed data", function(){

    it("Numeric values", function(){
      expect(play( [1,2,3,4], -1, 100, [3, 5.0] )).toEqual([-1, 1, 2, 5.0, 3, 4, 100]);
    });

    it("Objects values", function(){
      let obj = {asd: 12},
          obj2 = {asdda:23},
          obj3 = {asd: 09},
          arr = [83,4,5,3],
          arr2 = [2,6,7,8];

      expect(play( [obj, obj2], arr, obj3, [10, arr2] )).toEqual([arr, obj, obj2, obj3, arr2]);
    });

  })

});