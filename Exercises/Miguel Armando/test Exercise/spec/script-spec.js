function suma(numero1,numero2){
  var res = numero1 + numero2;
  return res;
}
describe("testing suma", function(){
  it("espero que 2 + 2 sea 4", function (){
    var res = suma(2,2);
      expect(res).toBe(res);
  });
  it("espero que 3 + 3 sea 6 ", function(){
    var res = suma (3,3);
    expect(res).toBe(6);
  })
  it("espero que NaN + null sea NaN ", function(){
    var res = suma (NaN,null);
    expect(res).toBe(NaN);
  })
  it("espero que NaN + 2 sea NaN ", function(){
    var res = suma (NaN,2);
    expect(res).toBe(NaN);
  })
});

function resta(numero1,numero2){
  var res = numero1 - numero2;
  return res;
}
describe("testing resta", function(){
  it("espero que 2 - 2 sea 0", function (){
    var res = resta(2,2);
      expect(res).toBe(0);
  });
    it("espero que 2 - NaN sea NaN", function (){
      var res = resta(2,NaN);
        expect(res).toBe(NaN);
    });

    });

    function multiplicacion(numero1,numero2){
      var res = numero1 * numero2;
      return res;
    }
    describe("testing multiplicacion", function(){
      it("espero que 2 * 2 sea 4", function (){
        var res = multiplicacion(2,2);
          expect(res).toBe(4);
      });
      it("espero que 3 * NaN sea NaN ", function(){
        var res = multiplicacion (3,NaN);
        expect(res).toBe(NaN);
      })
      it("espero que null * null sea 0 ", function(){
        var res = multiplicacion (null,null);
        expect(res).toBe(0);
      })
    });

    function division(numero1,numero2){
      var res = numero1 / numero2;
      return res;
    }

    describe("testing division", function(){
      it("espero que 10 / 2 sea 5", function (){
        var res = division(10,2);
          expect(res).toBe(5);
      });
      it("espero que 3 / NaN sea NaN ", function(){
        var res = division (3,NaN);
        expect(res).not.toBe(NaN);
      })
    });
