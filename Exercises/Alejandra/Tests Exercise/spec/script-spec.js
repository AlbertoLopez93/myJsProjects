function suma(numero1, numero2) {
  resul=numero1+numero2;
  return resul;
  if(numero1===null && numero2===null){
    return 0;
  }

  if(numero1==="" && numero2===""){
    return resul;
  }
  if(is_Array(numero1) || is_Array(numero2) ){
    return Array;
  }
  if(numero1===infinity && numero2===infinity){
    return result
  }
}
function resta(numero1, numero2){
  resul=numero1-numero2;
  return resul;
  if(numero1===null && numero2===null){
    return 0;
  }
  if(numero1==="" && numero2===""){
    return NaN;
  }
  if(is_Array(numero1) || is_Array(numero2) ){
    return Array;
  }
  if(numero1===1 && numero2===infinity){
    return -infinity;
  }
  if(numero1===infinity && numero2===infinity){
    return NaN;
  }
  if(numero1===infinity && numero2===1){
    return NaN;
  }
}

function multiplicacion(numero1, numero2){
  resul=numero1*numero2;
  return resul;

  if(numero1===null && numero2===null){
  return 0;
  }
  if(numero1===undefined && numero2===null){
  return NaN;
  }
  if(numero1==="" && numero2===""){
  return NaN;
  }
  if(is_Array(numero1) || is_Array(numero2) ){
  return Array;
  }
}

function division(numero1,numero2){
  resul=numero1/numero2;
  return resul;
}

describe("suma", function () {
    it("Espero el siguiente resultado:", function () {
        var res = suma("","");
        expect(res).toBe(resul);

     });
});


describe("resta",function () {
    it("Espero resultado", function () {
        var res = resta(2,2);
        expect(res).toBe(resul);
    });

  });
describe(" multiplicacion",function () {
    it("Espero resultado", function () {
        var res = multiplicacion(2,2);
        expect(res).toBe(resul);
     });
});


describe(" divisiòn",function () {
    it("Espero resultado", function () {
        var res = division(-4,2);
        expect(res).toBe(resul);
    });

});
