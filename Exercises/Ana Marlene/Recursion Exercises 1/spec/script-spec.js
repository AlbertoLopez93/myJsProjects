"use strict"
function sumListSquares(ary){
  var res = 0,arry = [];
  var suma=0;
  if(ary.length <1){
    return res;
  }
  else{
    for(var i=0;i<ary.length;i++){
        if(Array.isArray(ary[i])){
        res += (sumListSquares(ary[i]),2)
      }
      else{
        res += Math.pow(ary[i],2)
      }
    }
  }
  return res
}

function fibonacci(n) {
  if(n ===0 ||typeof(n)!=="number"){
    return false;
  }
   if (n <= 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

describe("Recursive Functions", function () {
  describe("Function Sum Squares", function () {
    it("Sum Squares", function () {
      expect(sumListSquares).toBeDefined();
    });
    it("Count last three numbers", function () {
      expect(sumListSquares([1,2,3])).toBe(14);
    });
  });
  describe("Function fibonacci", function () {
    it("Fibonacci", function () {
      expect(fibonacci).toBeDefined();
    });
    it("Count last three numbers", function () {
      expect(fibonacci(4)).toBe(3);
    });
  });
});
