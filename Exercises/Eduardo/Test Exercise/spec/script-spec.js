function suma(numero1,numero2) {
      if(numero1===Infinity&&numero2===Infinity){
        return res=numero1+numero2
      }
      if(numero1===Infinity||numero2===Infinity){
        return res=numero1+numero2
      }
      if(typeof numero1===NaN||typeof numero2===NaN){return NaN;}
      if(typeof numero1==="number"&&typeof numero2==="number"){
      return res=numero1+numero2;}
      if(typeof numero1==="string"||typeof numero2==="string"){return res=undefined}

}
function resta(numero1,numero2) {
  if(numero1===Infinity&&numero2===Infinity){
    return res=numero1-numero2
  }
  if(numero1===Infinity||numero2===Infinity){
    return res=numero1-numero2
  }
  if(typeof numero1===NaN||typeof numero2===NaN){return NaN;}
  if(typeof numero1==="number"&&typeof numero2==="number"){
  return res=numero1-numero2;}
  if(typeof numero1==="string"||typeof numero2==="string"){return res=undefined}
}
function multiplicacion(numero1,numero2) {
  if(numero1===Infinity&&numero2===Infinity){
    return res=numero1*numero2
  }
  if(numero1===Infinity||numero2===Infinity){
    return res=numero1*numero2
  }
  if(typeof numero1===NaN||typeof numero2===NaN){return NaN;}
  if(typeof numero1==="number"&&typeof numero2==="number"){
  return res=numero1*numero2;}
  if(typeof numero1==="string"||typeof numero2==="string"){return res=undefined}
}
function division(numero1,numero2) {
  if(numero1===Infinity&&numero2===Infinity){
    return res=numero1*numero2
  }
  if(numero2===0){
    return res=Infinity
  }
  if(typeof numero1===NaN||typeof numero2===NaN){return NaN;}
  if(typeof numero1==="number"&&typeof numero2==="number"){
  return res=numero1*numero2;}
  if(typeof numero1==="string"||typeof numero2==="string"){return res=undefined}
}
describe("Testing suma",function(){
  it("Espero que 2+2 sea 4",function(){
    var res=suma(2,2)
      expect(res).toBe(4)
  });
  it("Espero que 3+3 sea 6",function(){
    var res=suma(3,3)
      expect(res).toBe(6)
  });
  it("Espero que 2+3 sea 5",function(){
    var res=suma(2,3)
      expect(res).toBe(5)
  });
  it("Espero que 5+5 sea 10",function(){
    var res=suma(5,5)
      expect(res).toBe(10)
  });
  it("Espero que 5+5 no sea 10",function(){
    var res=suma(5,5)
      expect(res).not.toBe(15)
  });
  it("Espero que letra+numero sea undefined",function(){
    var res=suma("a",5)
      expect(res).toBe(undefined)
  });
  it("Espero que infinity+infinity sea infinity",function(){
    var res=suma(Infinity,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que infinity+numero sea infinity",function(){
    var res=suma(Infinity,3)
      expect(res).toBe(Infinity)
  });
  it("Espero que NaN+numero sea NaN",function(){
    var res=suma(NaN,5)
      expect(res).not.toBe(NaN)
  });
  it("Espero que numero*0 sea NaN",function(){
    var res=multiplicacion(0,9)
      expect(res).toBe(0)
  });
  it("Espero que numero*0 sea NaN",function(){
    var res=division(9,0)
      expect(res).toBe(Infinity)
  });
});
