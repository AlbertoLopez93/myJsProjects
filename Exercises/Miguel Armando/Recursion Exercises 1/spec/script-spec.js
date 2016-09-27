"use strict"
function fibonacci(n){
  if(typeof n <= 0 || n !== "number" ||n!==null|| n!==true||n!==false|| isNaN(n) || n + "" === "Infinity" || n + "" === "-Infinity") {
      return false;
    }
  if (n===1) {
    return 1;
  }else if (n===2) {
    return 1;
  }
  return fibonacci(n-1)+fibonacci(n-2);

}

function sumListSquares(ary){
  if(typeof ary !== 'number' || isNaN(ary) ||isNaN(ary)||ary!==true||ary!==false|| !Array.isArray(ary)){
    return false;
  }
  var res=0;
  if (ary.length<1) {
    return res;
  }
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      res+=(sumListSquares(ary[i]));
    }else {
      res+=(ary[i]*ary[i]);

    }
  }
  return res;
}



describe("Testing fibonacci", function () {

  it("No funciona con strings", function () {
      expect(fibonacci('2')).toBe(false);
      expect(fibonacci('s')).toBe(false);
  });
  it("No funciona con NaN", function () {
      expect(fibonacci(NaN)).toBe(false);
      expect(fibonacci(NaN)).toBe(false);
  });
  it("No funciona con Infinity", function () {
      expect(fibonacci(Infinity)).toBe(false);
      expect(fibonacci(-Infinity)).toBe(false);
  });
  it("No funciona con booleans", function () {
      expect(fibonacci(true)).toBe(false);
      expect(fibonacci(false)).toBe(false);
  });
  it("No funciona con null", function () {
      expect(fibonacci(null)).toBe(false);
      expect(fibonacci(null)).toBe(false);
  });
  it("No funciona con functions", function () {
      expect(fibonacci(function () {})).toBe(false);
  });
  it("No funciona con arrays", function () {
      expect(fibonacci([])).toBe(false);
  });

});

describe("Testing sumListSquares", function () {
  it("No funciona con strings", function () {
      expect(sumListSquares('2')).toBe(false);
      expect(sumListSquares('s')).toBe(false);
  });
  it("No funciona con strings", function () {
      expect(sumListSquares('2')).toBe(false);
      expect(sumListSquares('s')).toBe(false);
  });
  it("No funciona con NaN", function () {
      expect(sumListSquares(NaN)).toBe(false);
      expect(sumListSquares(NaN)).toBe(false);
  });
  it("No funciona con Infinity", function () {
      expect(sumListSquares(Infinity)).toBe(false);
      expect(sumListSquares(-Infinity)).toBe(false);
  });
  it("No funciona con booleans", function () {
      expect(sumListSquares(true)).toBe(false);
      expect(sumListSquares(false)).toBe(false);
  });
  it("No funciona con null", function () {
      expect(sumListSquares(null)).toBe(false);
      expect(sumListSquares(null)).toBe(false);
  });
  it("No funciona con functions", function () {
      expect(sumListSquares(function () {})).toBe(false);
  });
  it("No funciona con arrays", function () {
      expect(sumListSquares([])).toBe(false);
  });


});
