function suma(numero1, numero2){
  if(typeof numero1==='number'&& typeof numero2==='number'){
    return numero1+numero2;
  }
  else{
    return NaN;
  }
}

function resta(numero1, numero2){
  if(typeof numero1==='number'&& typeof numero2==='number'){
    return numero1-numero2;
  }
  else{
    return NaN;
  }
}

function multiplicacion(numero1, numero2){
  if(typeof numero1==='number'&& typeof numero2==='number'){
    return numero1*numero2;
  }
  else{
    return NaN;
  }
}

function division(numero1, numero2){
  if(typeof numero1==='number'&& typeof numero2==='number'){
    return numero1/numero2;
  }
  else{
    return NaN;
  }
}

describe("",function(){

  //sección de suma
  it("espero que 2 + 2 sea 4", function(){
    var res = suma(2,2);
    expect(res).toBe(4);
  });
  it("espero que 2 + '2' sea NaN", function(){
    var res = suma(2,'2');
    expect(res).toBeNaN();
  });
  it("espero que '2' + 2 sea NaN", function(){
    var res = suma('2',2);
    expect(res).toBeNaN();
  });
  it("espero que Infinity + Infinity sea Infinity", function(){
    var res = suma(Infinity,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity + Undefined sea NaN", function(){
    var res = suma(Infinity,undefined);
    expect(res).toBeNaN();
  });
  it("espero que Infinity + {numero:3} sea NaN", function(){
    var res = suma(Infinity,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 + {numero:3} sea NaN", function(){
    var res = suma(2,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 + false sea NaN", function(){
    var res = suma(2,false);
    expect(res).toBeNaN();
  });
  it("espero que Infinity + Infinity sea Infinity", function(){
    var res = suma(Infinity,Infinity);
    expect(res).toBeGreaterThan(4);
  });
  it("espero que 3 + 4 sea mas grande que 4", function(){
    var res = suma(3,4);
    expect(res).toBeGreaterThan(4);
  });
  it("espero que 3 + 4 sea mas pequeño que 12", function(){
    var res = suma(3,4);
    expect(res).toBeLessThan(12);
  });
  it("espero que 3 + 4 sea mas pequeño que 12", function(){
    var res = suma(3,4);
    expect(res).toEqual(7);
  });
  it("espero que 0 + 0 sea null", function(){
    var res = suma(0,0);
    expect(res).toBe(0);
  });

  //sección de resta
  it("espero que 2 - 2 sea 4", function(){
    var res = resta(2,2);
    expect(res).toBe(0);
  });
  it("espero que 2 - '2' sea NaN", function(){
    var res = resta(2,'2');
    expect(res).toBeNaN();
  });
  it("espero que '2' - 2 sea NaN", function(){
    var res = resta('2',2);
    expect(res).toBeNaN();
  });
  it("espero que Infinity - Infinity sea Infinity", function(){
    var res = resta(Infinity,Infinity);
    expect(res).toBeNaN();
  });
  it("espero que Infinity - Undefined sea NaN", function(){
    var res = resta(Infinity,undefined);
    expect(res).toBeNaN();
  });
  it("espero que Infinity - {numero:3} sea NaN", function(){
    var res = resta(Infinity,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 - {numero:3} sea NaN", function(){
    var res = resta(2,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 - false sea NaN", function(){
    var res = resta(2,false);
    expect(res).toBeNaN();
  });
  it("espero que 3 - 4 sea mas grande que 4", function(){
    var res = resta(3,4);
    expect(res).toBeGreaterThan(-4);
  });
  it("espero que 3 - 4 sea mas pequeño que 12", function(){
    var res = resta(3,4);
    expect(res).toBeLessThan(12);
  });
  it("espero que 3 - 4 sea mas pequeño que 12", function(){
    var res = resta(3,4);
    expect(res).toEqual(-1);
  });
  it("espero que 0 - 0 sea null", function(){
    var res = resta(0,0);
    expect(res).toBe(0);
  });

  //sección multiplicacion
  it("espero que 2 * 2 sea 4", function(){
    var res = multiplicacion(2,2);
    expect(res).toBe(4);
  });
  it("espero que 2 * '2' sea NaN", function(){
    var res = multiplicacion(2,'2');
    expect(res).toBeNaN();
  });
  it("espero que '2' * 2 sea NaN", function(){
    var res = multiplicacion('2',2);
    expect(res).toBeNaN();
  });
  it("espero que Infinity * Infinity sea Infinity", function(){
    var res = multiplicacion(Infinity,Infinity);
    expect(res).toBe(Infinity);
  });
  it("espero que Infinity * Undefined sea NaN", function(){
    var res = multiplicacion(Infinity,undefined);
    expect(res).toBeNaN();
  });
  it("espero que Infinity * {numero:3} sea NaN", function(){
    var res = multiplicacion(Infinity,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 * {numero:3} sea NaN", function(){
    var res = multiplicacion(2,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 * false sea NaN", function(){
    var res = multiplicacion(2,false);
    expect(res).toBeNaN();
  });
  it("espero que Infinity * Infinity sea Infinity", function(){
    var res = multiplicacion(Infinity,Infinity);
    expect(res).toBeGreaterThan(4);
  });
  it("espero que 3 * 4 sea mas grande que 4", function(){
    var res = multiplicacion(3,4);
    expect(res).toBeGreaterThan(4);
  });
  it("espero que 3 * 4 sea mas pequeño que 13", function(){
    var res = multiplicacion(3,4);
    expect(res).toBeLessThan(13);
  });
  it("espero que 3 * 4 sea igual que 12", function(){
    var res = multiplicacion(3,4);
    expect(res).toEqual(12);
  });
  it("espero que 0 * 0 sea 0", function(){
    var res = suma(0,0);
    expect(res).toBe(0);
  });

  //sección división
  it("espero que 2 / 2 sea 1", function(){
    var res = division(2,2);
    expect(res).toBe(1);
  });
  it("espero que 2 / '2' sea NaN", function(){
    var res = division(2,'2');
    expect(res).toBeNaN();
  });
  it("espero que '2' / 2 sea NaN", function(){
    var res = division('2',2);
    expect(res).toBeNaN();
  });
  it("espero que Infinity / Infinity sea Infinity", function(){
    var res = division(Infinity,Infinity);
    expect(res).toBeNaN();
  });
  it("espero que Infinity / Undefined sea NaN", function(){
    var res = division(Infinity,undefined);
    expect(res).toBeNaN();
  });
  it("espero que Infinity / {numero:3} sea NaN", function(){
    var res = division(Infinity,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 / {numero:3} sea NaN", function(){
    var res = division(2,{numero:3});
    expect(res).toBeNaN();
  });
  it("espero que 2 / false sea NaN", function(){
    var res = division(2,false);
    expect(res).toBeNaN();
  });
  it("espero que Infinity / 4 sea Infinity", function(){
    var res = division(Infinity,Infinity);
    expect(res).toBeNaN();
  });
  it("espero que 3 / 4 sea mas grande que 0", function(){
    var res = division(3,4);
    expect(res).toBeGreaterThan(0);
  });
  it("espero que 3 / 4 sea mas pequeño que 1", function(){
    var res = division(3,4);
    expect(res).toBeLessThan(1);
  });
  it("espero que Infinity / 4 sea igual que 0", function(){
    var res = division(Infinity,4);
    expect(res).toEqual(Infinity);
  });
  it("espero que 0 / 0 sea 0", function(){
    var res = division(0,0);
    var x=isNaN(res);
    expect(x).toBe(true);
  });

});
