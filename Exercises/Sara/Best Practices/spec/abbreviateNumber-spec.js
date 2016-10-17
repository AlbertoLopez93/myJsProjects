
"use strict";
describe("Testing Large numbers exercise", function(){
  const abbreviateNumber=require("../abbreviateNumber");
  const array=[[101e7,"1010M"],[101e4,"1.01M"],[1001e3,"1.00M"],[1000500,"1.00M"],
  [1e6,"1.00M"],[999999,"1.00M"],[999500,"1.00M"],[999499,"999K"],[999001,"999K"],
  [1e4,"10.0K"],[9999,"9,999"],[888,"888"]];
  array.forEach(function(number){
    it("The number is "+number[0],function(){
      expect(abbreviateNumber(number[0])).toBe(number[1]);
    });
  });
});
