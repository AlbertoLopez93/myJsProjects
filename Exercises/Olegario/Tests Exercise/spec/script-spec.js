function suma(numero1, numero2) {
  var result=false;
  if ((typeof(numero1)==="number")&&(typeof(numero2)==="number")) {
       result=numero1+numero2;
       result= result.toPrecision(10);
       result= parseFloat(result);
      }
  return result;
}

function resta(numero1, numero2) {
   var result=false;
   if ((typeof(numero1)==="number")&&(typeof(numero2)==="number")) {
        result=numero1-numero2;
        result= result.toPrecision(10);
        result= parseFloat(result);
       }
 return result;
}

function multiplicacion(numero1, numero2) {
   var result=false;
   if ((typeof(numero1)==="number")&&(typeof(numero2)==="number")) {
        result=numero1*numero2;
        result= result.toPrecision(10);
        result= parseFloat(result);
       }
 return result;
}

function divicion(numero1, numero2) {
   var result=false;
   if ((typeof(numero1)==="number")&&(typeof(numero2)==="number")) {
        result=numero1/numero2;
        result= result.toPrecision(10);
        result= parseFloat(result);
       }
 return result;
}

describe("Testing Suma",function(){//Conjunto de funciones de prueba
  it("Espero que 2 + 2 sea = 4", function() {//Cada una de las pruebas
        var res=suma(2,2);
        expect(res).toBe(4);
     });

  it("Espero que 3 + 3 sea = 6", function() {//Cada una de las pruebas
         var res=suma(3,3);
         expect(res).toBe(6);
     });

  it("Espero que 5 + 5 sea = 10", function() {//Cada una de las pruebas
           var res=suma(5,5);
           expect(res).toBe(10);
     });

  it("Espero que [1,2] + 5 sea = false", function() {//Cada una de las pruebas
          var res=suma([1,2],5);
          expect(res).toBe(false);
     });

  it("Espero que 1 + {} sea = false", function() {//Cada una de las pruebas
         var res=suma(1,{});
         expect(res).toBe(false);
     });

  it("Espero que NaN + NaN sea = NaN", function() {//Cada una de las pruebas
          var res=suma(NaN,NaN);
          expect(res).toBeNaN();
     });

  it("Espero que undefined + false sea = false", function() {//Cada una de las pruebas
         var res=suma(undefined,false);
         expect(res).toBe(false);
     });

  it("Espero que null + NaN sea = false", function() {//Cada una de las pruebas
          var res=suma(null,NaN);
          expect(res).toBe(false);
     });

  it("Espero que Array + 5 sea = false", function() {//Cada una de las pruebas
        var res=suma(Array,5);
        expect(res).toBe(false);
     });

  it("Espero que Infinity + Infinity = Infinity", function() {//Cada una de las pruebas
         var res=suma(1,Infinity);
         expect(res).toBe(Infinity);
     });

  it("Espero que 0.1 + 0.2 = 0.3", function() {//Cada una de las pruebas
          var res=suma(0.1,0.2);
          expect(res).toBe(0.3);
     });
});


describe("Testing Par Funcion De Resta",function(){//Conjunto de funciones de prueba para la funcion resta
  it("Espero que 2 - 2 sea = 0", function() {//Cada una de las pruebas
        var res=resta(2,2);
        expect(res).toBe(0);
     });

     it("Espero que -3 - -3 sea = 0", function() {//Cada una de las pruebas
           var res=resta(-3,-3);
           expect(res).toBe(0);
        });

     it("Espero que 0 - 0 sea = 0", function() {//Cada una de las pruebas
           var res=resta(0,0);
           expect(res).toBe(0);
        });

     it("Espero que A - 2 sea = false", function() {//Cada una de las pruebas
           var res=resta("A",2);
           expect(res).toBe(false);
        });

     it("Espero que A - B sea = false", function() {//Cada una de las pruebas
           var res=resta("A","B");
           expect(res).toBe(false);
        });

     it("Espero que 1 - NaN sea = NaN", function() {//Cada una de las pruebas
           var res=resta(1,NaN);
           expect(res).toBeNaN();
        });

     it("Espero que  1 - Infinity sea = -Infinity", function() {//Cada una de las pruebas
          var res=resta(1,Infinity);
          expect(res).toBe(-Infinity);
        });
});


describe("Testing Par Funcion De Multiplicacion",function(){//Conjunto de funciones de prueba para la funcion multiplicacion
  it("Espero que 2 * 2 sea = 4", function() {//Cada una de las pruebas
        var res=multiplicacion(2,2);
        expect(res).toBe(4);
     });

     it("Espero que -3 * -3 sea = 6", function() {//Cada una de las pruebas
           var res=multiplicacion(-3,-3);
           expect(res).toBe(9);
        });

     it("Espero que 0 * 0 sea = 0", function() {//Cada una de las pruebas
           var res=multiplicacion(0,0);
           expect(res).toBe(0);
        });

     it("Espero que A * 2 sea = false", function() {//Cada una de las pruebas
           var res=multiplicacion("A",2);
           expect(res).toBe(false);
        });

     it("Espero que A * B sea = false", function() {//Cada una de las pruebas
           var res=multiplicacion("A","B");
           expect(res).toBe(false);
        });

     it("Espero que 1 * NaN sea = NaN", function() {//Cada una de las pruebas
           var res=multiplicacion(1,NaN);
           expect(res).toBeNaN();
        });
});


describe("Testing Par Funcion De Divicion",function(){//Conjunto de funciones de prueba para la funcion divicion
  it("Espero que 2 / 2 sea = 1", function() {//Cada una de las pruebas
        var res=divicion(2,2);
        expect(res).toBe(1);
     });

     it("Espero que -3 / -3 sea = 1", function() {//Cada una de las pruebas
           var res=divicion(-3,-3);
           expect(res).toBe(1);
        });

     it("Espero que 0 / 0 sea = NaN", function() {//Cada una de las pruebas
           var res=divicion(0,0);
           expect(res).toBeNaN();
        });

     it("Espero que A / 2 sea = false", function() {//Cada una de las pruebas
           var res=divicion("A",2);
           expect(res).toBe(false);
        });

     it("Espero que A / B sea = false", function() {//Cada una de las pruebas
           var res=divicion("A","B");
           expect(res).toBe(false);
        });

     it("Espero que 1 / NaN sea = NaN", function() {//Cada una de las pruebas
           var res=divicion(1,NaN);
           expect(res).toBeNaN();
        });

     it("Espero que 1 / false sea = false", function() {//Cada una de las pruebas
           var res=divicion(1,false);
           expect(res).toBe(false);
        });
});
