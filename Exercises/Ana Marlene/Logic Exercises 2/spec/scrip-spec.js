"use strict"
function tribonacci(arreglo,lim) {
  var arg, arry=[],suma=0;
  if(Array.isArray(arreglo)){
    if(typeof(lim)==="integer"){
      if (arreglo.length<3) {
        return arreglo;
      }
    if (lim===0) {
      arry=[];
      return arry;
    }
    if (lim>0) {
      for (var i = 0; i <lim; i++) {
        if (i>2) {
          arry[i]=arry[i-1]+arry[i-2]+arry[i-3];
        }
        else{
          arry[i]=arreglo[i];
        }
      }
      return arry
    }
  }
  else{
    return false
  }
}
  else{
    return false
  }
}
function countTwos(num){
  var z=0;
  var str="";
  for (var i = 0; i <=num; i++) {
    str+=i;
  }
  for (var j = 0; j <str.length; j++) {
    if (str[j]=="2") {
      z++;
    }
  }
  return z;
}
function didSomeoneWon(matrix){
  if(matrix.length === 3 && matrix[0].length === 3){
    if(matrix[0][0] === "x" && matrix[1][0] === "x" && matrix[2][0] === "x"){
      return true;
    }
    else if(matrix[0][1] === "x" && matrix[1][1] === "x" && matrix[2][1] === "x"){
      return true;
    }
  else if(matrix[0][2] === "x" && matrix[1][2] === "x" && matrix[2][2] === "x"){
      return true;
    }
    else if(matrix[0][0] ==="x" && matrix[1][1] ==="x" && matrix[2][2] ==="x"){
      return true;
    }
    else if(matrix[0][0] ==="x" && matrix[0][1] ==="x" && matrix[0][2] ==="x"){
      return true;
    }
    else if(matrix[1][0] === "x" && matrix[1][1] === "x" && matrix[1][2] === "x"){
      return true;
    }
    else if(matrix[2][0] === "x" && matrix[2][1] === "x" && matrix[2][2] === "x"){
      return true;
    }
    else if(matrix[0][2] === "x" && matrix[1][1] === "x" && matrix[2][0] === "x"){
      return true;
    }
    // OOOOOO
    else if(matrix[0][0] === "o" && matrix[1][0] === "o" && matrix[2][0] === "o"){
      return true;
    }
    else if(matrix[0][1] === "o" && matrix[1][1] === "o" && matrix[2][1] === "o"){
      return true;
    }
    else if(matrix[0][2] === "o" && matrix[1][2] === "o" && matrix[2][2] === "o"){
      return true;
    }
    else if(matrix[0][0] === "o" && matrix[1][1] === "o" && matrix[2][2] === "o"){
      return true;
    }
    //voy a pegar
    else if(matrix[0][0] === "o" && matrix[0][1] === "o" && matrix[0][2] === "o"){
      return true;
    }
    else if(matrix[1][0] === "o" && matrix[1][1] === "o" && matrix[1][2] === "o"){
      return true;
    }
    else if(matrix[2][0] === "o" && matrix[2][1] === "o" && matrix[2][2] === "o"){
      return true;
    }
    else if(matrix[0][2] === "o" && matrix[1][1] === "o" && matrix[2][0] === "o"){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

describe("Tribonacci", function () {
  describe("Function Tribonacci", function () {
    it("should exists", function () {
      expect(tribonacci).toBeDefined();
    });
    it("Count last three numbers", function () {
      expect(tribonacci(4,"1")).toBe(false);
    });
  });
  describe("Function countTwos", function () {
    it("should exists", function () {
      expect(countTwos).toBeDefined();
    });
  });
  it("Count Numbers two's", function () {
    expect(countTwos(100)).toBe(20);

  });
  describe("Function didSomeoneWon", function () {
    it("should exists", function () {
      expect(didSomeoneWon).toBeDefined();
    });
  });
  it("DidSomeoneWon", function () {
    expect(didSomeoneWon([["x","x","o"],["o","o","x"],["x","o","x"]])).toBe(false);

  });
});
