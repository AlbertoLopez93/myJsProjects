"use strict"
function sumListSquares(ary){
  var res = 0,arry = [];
  var suma=0;
  if(Array.isArray(ary)!==true){
    return false;
  }
  if(ary.length <1){
    return res;
  }
  else{
    for(var i=0;i<ary.length;i++){
      if(typeof(ary[i])==="number"){
        if(Array.isArray(ary[i])){
        res += (sumListSquares(ary[i]),2)
      }
      else{
        res += Math.pow(ary[i],2)
      }
    }
    else{
      return false
    }
  }
}
return res
}


function fibonacci(n) {

  if(typeof(n)!=="Number"){
    return false;
  }
  if(typeof(n)==="infinity"){
    return false;
  }

   if (n <= 2){
     return 1;
   }
   else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
describe("fibonacci",function(){
  it("prueba",function(){
    expect(fibonacci).toBeDefined();
  });
});

describe("valor",function(){
    it("de [1,2,3], espero 14",function(){
    //expect(fibonacci([1,2,3])).toBe(14);
    expect(fibonacci(["hola",2,3])).toBe(false);
    expect(fibonacci(2,3)).toBe(false);
    expect(fibonacci({})).toBe(false);
    expect(fibonacci(function(){})).toBe(false);
  });
});



describe("sumListSquares",function(){
  it("prueba",function(){
    expect(sumListSquares).toBeDefined();
  });
});

describe("valor",function(){
  it("arreglo [1,2,3],espero 14",function(){
    expect(sumListSquares([1,2,3])).toBe(14);
    expect(sumListSquares(["hola",2,3])).toBe(false);
    expect(sumListSquares(2,3)).toBe(false);
    expect(sumListSquares({})).toBe(false);
    expect(sumListSquares(function(){})).toBe(false);
    expect(sumListSquares(NaN)).toBe(false);
  });
});
