function suma(numero1,numero2) {
      if( numero1 instanceof Number&&typeof numero2==="number"){
        return res=numero1+numero2;
      }
      if( numero2 instanceof Number&&typeof numero1==="number"){
        return res=numero1+numero2;
      }
      if(typeof numero1!=="number"||typeof numero2!=="number"){
        return res=NaN
      }
      if(typeof numero1==="number"&&typeof numero2==="number"){
        return res=numero1+numero2
      }
      if( numero1 instanceof Number&&numero2 instanceof Number){
        return res=numero1+numero2;
      }
      if(numero1===Infinity&&numero2===Infinity){
        return res=numero1+numero2
      }
      if(numero1===Infinity&&numero2 instanceof Infinity){
        return res=numero1+numero2
      }
      if(numero1 instanceof Number&&numero2===Infinity){
        return res=numero1+numero2
      }
    }
function resta(numero1,numero2) {
  if( numero1 instanceof Number&&typeof numero2==="number"){
    return res=numero1-numero2;
  }
  if( numero2 instanceof Number&&typeof numero1==="number"){
    return res=numero1-numero2;
  }
  if(typeof numero1!=="number"||typeof numero2!=="number"){
    return res=NaN
  }
  if(typeof numero1==="number"&&typeof numero2==="number"){
    return res=numero1-numero2
  }
  if( numero1 instanceof Number&&numero2 instanceof Number){
    return res=numero1-numero2;
  }
  if(numero1===Infinity&&numero2===Infinity){
    return res=NaN
  }
  if(numero1===Infinity&&numero2 instanceof Infinity){
    return res=NaN
  }
  if(numero1 instanceof Number&&numero2===Infinity){
    return res=NaN
  }
}
function multiplicacion(numero1,numero2) {
  if( numero1 instanceof Number&&typeof numero2==="number"){
    return res=numero1*numero2;
  }
  if( numero2 instanceof Number&&typeof numero1==="number"){
    return res=numero1*numero2;
  }
  if(typeof numero1!=="number"||typeof numero2!=="number"){
    return res=NaN
  }
  if(typeof numero1==="number"&&typeof numero2==="number"){
    return res=numero1*numero2
  }
  if( numero1 instanceof Number&&numero2 instanceof Number){
    return res=numero1*numero2;
  }
  if(numero1===Infinity&&numero2===Infinity){
    return res=numero1*numero2
  }
  if(numero1===Infinity&&numero2 instanceof Infinity){
    return res=numero1*numero2
  }
  if(numero1 instanceof Number&&numero2===Infinity){
    return res=numero1*numero2
  }
}
function division(numero1,numero2) {
  if( numero1 instanceof Number&&typeof numero2==="number"){
    return res=numero1/numero2;
  }
  if( numero2 instanceof Number&&typeof numero1==="number"){
    return res=numero1/numero2;
  }
  if(typeof numero1!=="number"||typeof numero2!=="number"){
    return res=NaN
  }
  if(typeof numero1==="number"&&typeof numero2==="number"){
    return res=numero1/numero2
  }
  if( numero1 instanceof Number&&numero2 instanceof Number){
    return res=numero1/numero2;
  }
  if(numero1===Infinity&&numero2===Infinity){
    return res=NaN
  }
  if(numero1===Infinity&&numero2 instanceof Infinity){
    return res=NaN
  }
  if(numero1 instanceof Number&&numero2===Infinity){
    return res=NaN
  }
  if(typeof numero1==="number"&&numero2===0){
    return res=Infinity
  }
  if(typeof numero2==="number"&&numero1===0){
    return res=numero1/numero2
  }
  if(numero2===0&&numero1===0){
    return res=NaN
  }
}
describe("Testing suma",function(){
  it("Espero que letra+numero sea NaN",function(){
    var res=suma(6,Number(Infinity))
      expect(res).toBe(Infinity)
  });
  it("Espero que infinity+infinity sea infinity",function(){
    var res=suma(Infinity,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que infinity+numero sea infinity",function(){
    var res=suma(Infinity,3)
      expect(res).toBe(Infinity)
  });
  it("Espero que Infinity+string sea NaN",function(){
    var res=suma(true,true)
      expect(res).toBeNaN()
  });
  it("Espero que numero*0 sea NaN",function(){
    var res=multiplicacion(0,9)
      expect(res).toBe(0)
  });
  it("Espero que numero*0 sea NaN",function(){
    var res=division(9,0)
      expect(res).toBe(Infinity)
  });
  it("Espero que Infinity-Infinity sea NaN",function(){
    var res=division(Infinity,Infinity)
      expect(res).toBeNaN()
  });
  it("Espero que Infinity*Infinity sea Infinity",function(){
    var res=multiplicacion(Infinity,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que 4*Infinity sea Infinity",function(){
    var res=multiplicacion(4,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que 4-Infinity sea -Infinity",function(){
    var res=resta(4,Infinity)
      expect(res).toBe(-Infinity)
  });
  it("Espero que 4/0 sea Infinity",function(){
    var res=division(4,0)
      expect(res).toBe(Infinity)
  });
  it("Espero que Infinity/Infinity sea NaN",function(){
    var res=division(Infinity,Infinity)
      expect(res).toBeNaN()
  });
  it("Espero que 4/0 sea Infinity",function(){
    var res=division(4,0)
      expect(res).toBe(Infinity)
  });
  it("Espero que 0/4 sea 0",function(){
    var res=division(0,4)
      expect(res).toBe(0)
  });
  it("Espero que 0/0 sea NaN",function(){
    var res=division(0,0)
      expect(res).toBeNaN()
  });
  it("Espero que Infinity/5 sea Infinity",function(){
    var res=division(Infinity,5)
      expect(res).toBe(Infinity)
  });
});
