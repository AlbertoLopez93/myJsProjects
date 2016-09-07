//*****SUMA*******
function suma(numero1, numero2) {
  resultado = numero1 + numero2
    return resultado
    if(numero1 === null||0 && numero2 === 0||null ){
      return 0;
    }
    if(Array.isArray(numero1)||null && Array.isArray(numero2)||null ){
      return "";
    }
    if(Array.isArray(numero1)||{} && Array.isArray(numero2)||{} ){
      return 0;
    }
    // if(numero1 === undefined && numero2 === undefined ){
    //   return isNaN(NaN);
    // }

}

//******RESTA******
function resta(numero1, numero2) {
resultado = numero1 - numero2;
return resultado;


}
//*******MULTIPLICACION**********
function mul(numero1, numero2) {
  resultado = numero1 * numero2;
  return resultado;
}
//*******DIVISION**********
function division(numero1, numero2) {
  resultado = numero1 / numero2;
  return resultado;
}


//********DESCRIBE********
//**********SUMA**********
describe("Testing suma", function () {
    it("Espero que numero1 + numero2 sea resultado", function () {
        var res = suma(2,4);
        expect(res).toBe(resultado);

    });
});

//***********RESTA*******
describe("Testing resta",function () {
  it("Espero que numero1 - numero2 sea resultado", function () {
      var res = resta(4,2);
      expect(res).toBe(resultado);

  });
    });

// //************MULTIPLICACION*****
describe("Testing multiplicacion",function () {
  it("Espero que numero1 * numero2 sea resultado", function () {
      var res = mult(2,2);
      expect(res).toBe(resultado);

  });
});
// //********DIVISION************
describe("Testing Division",function () {
  it("Espero que numero1 / numero2 sea resultado", function () {
      var res = division(4,3);
      expect(res).toBe(resultado);

  });
    });
