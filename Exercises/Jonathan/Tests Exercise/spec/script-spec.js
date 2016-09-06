function suma(numero1, numero2){
  if(numero1!=='number'||numero2!=='number'){
    return NanN
  }else{
    var res=numero1+numero2;
    return res;
  }
}

function resta(numero1, numero2){
  if(numero1!=='number'||numero2!=='number'){
    return NanN
  }else{
    var res=numero1-numero2;
    return res;
  }
}

function mult(numero1, numero2){
  if(numero1!=='number'||numero2!=='number'){
    return NanN
  }else{
    var res=numero1*numero2;
    return res;
  }
}

function div(numero1, numero2){
  if(numero1!=='number'||numero2!=='number'){
    return NanN
  }else{
    var res=numero1/numero2;
    return res;
  }
}

describe("esto es una función", function(){

  //sección de suma
  it("espero que 2 + 2 sea 4", function(){
    var res = suma(2,2);
    expect(res).toBe(4);
  });
  it("espero que 3 + 3 sean 6", function(){
    var res = suma(3,3);
    expect(res).toBe(6);
  });
  it("espero que 2 + 3 sean 5", function(){
    var res = suma(2,3);
    expect(res).toBe(5);
  });
  it("espero que 5 + 5 no sean 15", function(){
    var res = suma(5,5);
    expect(res).not.toBe(5);
  });

  it("espero que 2 + NULL sea NULL", function(){
    var res = suma(2,null);
    expect(res).toBe(NaN);
  });
  it("espero que 2 + undefined sea undefined", function(){
    var res = suma(undefined,2);
    expect(res).toBe(NaN);
  });
  it("espero que 2 + NaN sea NaN", function(){
    var res = suma(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que NaN + 2 sea NaN", function(){
    var res = suma(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que true + 2 sea 3", function(){
    var res = suma(true,2);
    expect(res).toBe(3);
  });
  it("espero que false + 2 sea 2", function(){
    var res = suma(false,2);
    expect(res).toBe(2);
  });
  it("espero que false + 2 sea 2", function(){
    var res = suma(2,false);
    expect(res).toBe(2);
  });
  it("espero que false + true sea 1", function(){
    var res = suma(true,false);
    expect(res).toBe(1);
  });
  it("espero que 2 + '2' sea 22", function(){
    var res = suma(2,'2');
    expect(res).toBe('22');
  });
  it("espero que '2' + 2 sea 4", function(){
    var res = suma('2',2);
    expect(res).toBe('22');
  });

  it("espero que '2' + infinity sea 2Infinity", function(){
    var res = suma('2',Infinity);
    expect(res).toBe('2Infinity');
  });
  it("espero que 2 + infinity sea Infinity", function(){
    var res = suma(2,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity + infinity sea Infinity", function(){
    var res = suma(Infinity,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity + NaN sea NaN", function(){
    var res = suma(Infinity,NaN);
    expect(res).toBe(NaN);
  });
  it("espero que Infinity + -Infinity sea NaN", function(){
    var res = suma(Infinity,-Infinity);
    expect(res).toBe(NaN);
  });

  //sección de resta
  it("espero que 2 - 2 sea 0", function(){
    var res = resta(2,2);
    expect(res).toBe(0);
  });
  it("espero que 3 - 3 sean 0", function(){
    var res = resta(3,3);
    expect(res).toBe(0);
  });
  it("espero que 2 - 3 sean -1", function(){
    var res = resta(2,3);
    expect(res).toBe(-1);
  });
  it("espero que 5 - 5 no sean 1", function(){
    var res = resta(5,5);
    expect(res).not.toBe(1);
  });
  it("espero que 2 - NULL sea 2", function(){
    var res = resta(2,null);
    expect(res).toBe(2);
  });
  it("espero que 2 - undefined sea NaN", function(){
    var res = resta(undefined,2);
    expect(res).toBe(NaN);
  });
  it("espero que NaN - 2 sea NaN", function(){
    var res = resta(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que NaN - 2 sea NaN", function(){
    var res = resta(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que true - 2 sea -1", function(){
    var res = resta(true,2);
    expect(res).toBe(-1);
  });
  it("espero que false - 2 sea -2", function(){
    var res = resta(false,2);
    expect(res).toBe(-2);
  });
  it("espero que 2 - false sea 2", function(){
    var res = resta(2,false);
    expect(res).toBe(2);
  });
  it("espero que true - false sea 1", function(){
    var res = resta(true,false);
    expect(res).toBe(1);
  });
  it("espero que false - true sea 1", function(){
    var res = resta(false,true);
    expect(res).toBe(-1);
  });
  it("espero que 2 - '2' sea 0", function(){
    var res = resta(2,'2');
    expect(res).toBe(0);
  });
  it("espero que '2' - 2 sea 0", function(){
    var res = resta('2',2);
    expect(res).toBe(0);
  });
  it("espero que '2' - infinity sea -Infinity", function(){
    var res = resta('2',Infinity);
    expect(res).toBe(-Infinity);
  });
  it("espero que 2 - infinity sea -Infinity", function(){
    var res = resta(2,Infinity);
    expect(res).toBe(-Infinity);
  });
  it("espero que Infinity - infinity sea Infinity", function(){
    var res = resta(Infinity,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity - NaN sea NaN", function(){
    var res = resta(Infinity,NaN);
    expect(res).toBe(NaN);
  });
  it("espero que Infinity - -Infinity sea NaN", function(){
    var res = resta(Infinity,-Infinity);
    expect(res).toBe(NaN);
  });

  //sección de multiplicación
  it("espero que 2 * 2 sea 4", function(){
    var res = mult(2,2);
    expect(res).toBe(4);
  });
  it("espero que 3 * 3 sean 9", function(){
    var res = mult(3,3);
    expect(res).toBe(9);
  });
  it("espero que 2 * 3 sean 6", function(){
    var res = mult(2,3);
    expect(res).toBe(6);
  });
  it("espero que 5 * 5 no sean 15", function(){
    var res = mult(5,5);
    expect(res).not.toBe(15);
  });
  it("espero que 2 * NULL sea NULL", function(){
    var res = mult(2,null);
    expect(res).toBe(0);
  });
  it("espero que 2 * undefined sea undefined", function(){
    var res = mult(undefined,2);
    expect(res).toBe(NaN);
  });
  it("espero que 2 * NaN sea NaN", function(){
    var res = mult(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que NaN * 2 sea NaN", function(){
    var res = mult(NaN,2);
    expect(res).toBe(NaN);
  });
  it("espero que true * 2 sea 3", function(){
    var res = mult(true,2);
    expect(res).toBe(2);
  });
  it("espero que false * 2 sea 2", function(){
    var res = mult(false,2);
    expect(res).toBe(0);
  });
  it("espero que false + 2 sea 2", function(){
    var res = mult(2,false);
    expect(res).toBe(2);
  });
  it("espero que false + true sea 1", function(){
    var res = suma(true,false);
    expect(res).toBe(1);
  });
  it("espero que 2 + '2' sea 22", function(){
    var res = suma(2,'2');
    expect(res).toBe('22');
  });
  it("espero que '2' + 2 sea 4", function(){
    var res = suma('2',2);
    expect(res).toBe('22');
  });

  it("espero que '2' + infinity sea 2Infinity", function(){
    var res = suma('2',Infinity);
    expect(res).toBe('2Infinity');
  });
  it("espero que 2 + infinity sea Infinity", function(){
    var res = suma(2,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity + infinity sea Infinity", function(){
    var res = suma(Infinity,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity + NaN sea NaN", function(){
    var res = suma(Infinity,NaN);
    expect(res).toBe(NaN);
  });
  it("espero que Infinity + -Infinity sea NaN", function(){
    var res = suma(Infinity,-Infinity);
    expect(res).toBe(NaN);
  });
});
