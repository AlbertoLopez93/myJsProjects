"use strict"
function replicate(acu,num) {
  var res;
  if(typeof(num)==="function"){
    return false;
  }
  if(acu===0){
    return [];
  }
  return res=[num].concat(replicate(acu-1,num))
}


function greatestCommonDivisor(x,y) {
  if(y===null){
    return false;
  }

  if(typeof(x)==="Infinity"&&typeof(y)==="Infinity"){
    return "Infinity";
  }
  if(x===y){
    return x;
  }
  if(x>y){
    var mcd=x%y;
    if(x%mcd===0 && y%mcd===0){
      return mcd;
    }
    if(y>x){
      var mcd=y%x;
      if(x%mcd===0 && y%mcd===0){
        return x;
      }
    }
  }else{
    var z=y;
    return repetir(x,y,z);
  }
}
console.log(greatestCommonDivisor(40,65))
function repetir(x, y, z) {

  if (x%z === 0 && y%z === 0){
      return z;
  } else {
      return repetir (x, y, z-1);
  }
}

describe("replicate",function(){
  it("valor",function(){
    expect(replicate).toBeDefined();
  });
});
describe("replicate\n",function(){
  it("mandare un {objeto} y regresarà iteracion de ese objeto",function(){
    expect(replicate(2,{nombre:"ale",apei:"martin"})).toEqual([{nombre:"ale",apei:"martin"},{nombre:"ale",apei:"martin"}]);
  });
  it("mandare numero 3 y se acumulara 4 veces en un arreglo",function(){
    expect(replicate(4,3)).toEqual([3,3,3,3]);
  });
  it("mando una funcion y devuelve la iteraciòn de la funcion",function(){
    expect(replicate(2,function(){})).toEqual(false);
  });

});

describe("MCD",function(){
  it("valor", function(){
    expect(greatestCommonDivisor).toBeDefined();
  });
});

describe("validacion",function(){
  it("recibo numero ",function(){
    expect(greatestCommonDivisor(40,40)).toBe(40);
    expect(greatestCommonDivisor(40,null)).toBe(false);
    expect(greatestCommonDivisor("Infinity", "Infinity")).toBe("Infinity");
  

  });
});
