/****************************************************************************

Name: abbreviateNumber.js
Search: label:interns {subject:"arrays ex 1" subject:"arrays ex1" subject:arraysex1} 
Target: Exercises/$1/Arrays
Function: abbreviateNumber

****************************************************************************/

describe("Testing Large numbers exercise",function(){var a=require("../abbreviateNumber"),b=[[101e7,"1010M"],[101e4,"1.01M"],[1001e3,"1.00M"],[1000500,"1.00M"],[1e6,"1.00M"],[999999,"1.00M"],[999500,"1.00M"],[999499,"999K"],[999001,"999K"],[1e4,"10.0K"],[9999,"9,999"],[888,"888"]];b.forEach(function(b){it("The number is "+b[0],function(){expect(a(b[0])).toBe(b[1])})})});