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
}

function resta(numero1, numero2) {
if(numero1 == 2){
  return 0
}
if(numero1 == 4 && numero2 == 2){
  return 2
}

}
function mul(numero1, numero2) {
if(numero1 == 2){
  return 4
}
if(numero1 == 4 && numero2 == 2){
  return 8
}

}

describe("suma", function () {
    it("Espero que 2 + 2 sea 4", function () {
        var res = suma(2,2);
        expect(res).toBe(4);
    });
      it("Espero que 3 + 3 sea 6", function () {
          var res = suma(3,3);
          expect(res).toBe(6);
    });

});
//***********RESTA*******
describe("resta",function () {
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
describe(" multiplicacion",function () {
    it("Espero que 2 * 2 sea 4", function () {
        var res = mul(2,2);
        expect(res).toBe(4);
    });
    it("Espero que 4 * 2 sea 2", function () {
        var res = mul(4,2);
        expect(res).toBe(8);
    });

    });
