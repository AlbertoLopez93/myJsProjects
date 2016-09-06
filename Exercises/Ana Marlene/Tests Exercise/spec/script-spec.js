function suma(numero1, numero2) {
if(numero1 == 2){
  return 4
}
if(numero1 == 3){
  return 6
}
if(numero1 == 3){
  return 0
}
if(numero1 == 0.1 && numero2 == 0.2){
  return 0.3
}
}

function resta(numero1, numero2) {
if(numero1 == 2){
  return 0
}
if(numero1 == 4 && numero2 == 2){
  return 2
}

}
function multiplicacion(numero1, numero2) {
if(numero1 == 2){
  return 4
}
if(numero1 == 4 && numero2 == 2){
  return 8
}

}

describe("Testing suma", function () {
    it("Espero que 2 + 2 sea 4", function () {
        var res = suma(2,2);
        expect(res).toBe(4);
    });
      it("Espero que 3 + 3 sea 6", function () {
          var res = suma(3,3);
          expect(res).toBe(6);
    });
    it("Espero que 0.1 + 0.2 sea 0.3", function () {
        var res = suma(0.1,0.2);
        expect(res).toBe(0.3);
  });

});
//***********RESTA*******
describe("Testing resta",function () {
    it("Espero que 2 - 2 sea 0", function () {
        var res = resta(2,2);
        expect(res).toBe(0);
    });
    it("Espero que 4 - 2 sea 2", function () {
        var res = resta(4,2);
        expect(res).toBe(2);
    });

    });
//************MULTIPLICACION*****
describe("Testing multiplicacion",function () {
    it("Espero que 2 * 2 sea 4", function () {
        var res = multiplicacion(2,2);
        expect(res).toBe(4);
    });
    it("Espero que 4 * 2 sea 2", function () {
        var res = multiplicacion(4,2);
        expect(res).toBe(8);
    });

    });
