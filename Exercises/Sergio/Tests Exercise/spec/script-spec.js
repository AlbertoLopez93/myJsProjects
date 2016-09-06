function suma(numero1,numero2){

    if(typeof(numero1)==="number"&&typeof(numero2)==="number"){
              var res = numero1+numero2;
    }
    if(isNaN(res)){
        res=numero1+numero2;
    }
    if(numero1===Infinity||numero2===Infinity){
      res =numero1+numero2;
    }
    if(numero1===null&&numero2===null){
      res = numero1+numero2;
    }
    if(numero1===NaN||numero2===NaN){
      res = numero1+numero2;
    }

  return res;
}
describe("testing suma", function(){
  it("espero que 2 + 2 sea 4", function (){
    var res = suma(2,2);
      expect(res).toBe(4);
  });

  it("espero que 3 + 3 sea 6 ", function(){
    var res = suma (false,2);
    expect(res).toBe(2);
  })

  it("espero que NaN + null sea NaN ", function(){
    var res = suma (null,null);
    expect(res).toBe(0);
  })
  it("espero que NaN + null sea NaN ", function(){
    var res = suma (NaN,null);
    expect(res).toBeNaN();
  })
  it("espero que Infinity + 2 sea NaN ", function(){
    var res = suma (Infinity,2);
    expect(res).toBe(Infinity);
  })
  it("espero que Infinity + Infinity sea Infinity ", function(){
    var res = suma (Infinity,Infinity);
    expect(res).toBe(Infinity);
  })
  it("espero que Infinity - Infinity sea Infinity ", function(){
    var res = resta (Infinity,Infinity);
    expect(res).toBeNaN();
  })
  it("espero que 2 - 2 sea 0", function (){
    var res = resta(2,2);
      expect(res).toBe(0);
  });

  it("espero que false -3 sea -3 ", function(){
    var res = resta (false,-3);
    expect(res).toBe(3);
  })

  it("espero que NaN - null sea NaN ", function(){
    var res = resta (null,null);
    expect(res).toBe(0);
  })
  it("espero que NaN + null sea NaN ", function(){
    var res = suma (NaN,null);
    expect(res).toBeNaN();
  })
  it("espero que Infinity + 2 sea NaN ", function(){
    var res = suma (Infinity,2);
    expect(res).toBe(Infinity);
  })
});

function resta(numero1,numero2){

    if(typeof(numero1)==="number"&&typeof(numero2)==="number"){
              var res = numero1-numero2;
    }
    if(isNaN(res)){
        res=numero1-numero2;
    }
    if(numero1===Infinity||numero2===Infinity){
      res =numero1-numero2;
    }
    if(numero1===null&&numero2===null){
      res = numero1-numero2;
    }
    if(numero1===NaN||numero2===NaN){
      res = numero1-numero2;
    }

  return res;
}
