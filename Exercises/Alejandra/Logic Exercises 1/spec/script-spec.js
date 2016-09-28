//ejercicio 1
function isAnagram(str1,str2){
  var arreglo=str1.split("");
  var arreglo2=str2.split("");
  var a=[];
  var con=0;
  if(str1.length=== str2.length){
    var abc= {"a":"A","b":"B","c":"C","d":"D","e":"E","f":"F","g":"G","h":"H","i":"I","j":"J","k":"K","l":"L","m":"M","n":"N","o":"O","p":"P","q":"Q","r":"R","s":"S","t":"T","u":"U","v":"V","w":"W","x":"X","y":"Y","z":"Z"}
    for(var i=0; i<str1.length; i++){
      for (var aux in abc) {
        if(arreglo[i]===aux){
          arreglo[i]=abc[aux];
          break;
        }
      }
    }
    for(var i=0; i<str2.length; i++){
      for (var aux in abc) {
        if(arreglo2[i]===aux){
          arreglo2[i]=abc[aux];
          break;
        }
      }
    }
    for(var i=0; i<str1.length; i++){
      for(var j=0; j<str2.length; j++){
        if(arreglo[i]===arreglo2[j]){
          con++;
        }
      }
    }
  }
  if(con===str1.length){
    return true;
  }
  else{
    return false;
  }
}
//ejercicio 2
function convertSpaces(str1){
  var stri= str1.split("");
  var string="";
  for (var i = 0; i < stri.length; i++) {//for que recorrera tod mi arreglo
    if(stri[i]===" "){//si en toda mi cadena de stri existe un espacio basio
      stri[i]="%20";//coloca %20 en ese espacio
    }
    string=string+stri[i];//guardalo en variable string
  }
  return string;
}
//renta de carro
function Total(dias){
  var total=0;
  total = dias * 40
  if(dias % 1 !== 0){
    return false;
  }
  if(dias<=0){
  return false;
}
  if(dias>=3 && dias <= 6 ){
    total-= 20;
  }
  if(dias >= 7 ){
    total -= 50;
  }
  return total;
}
//SquarSum
function squareSum(arg){
  var arry=arg, suma = 0, potencia = 0,z=0;

  if(Array.isArray(arg)){
    for(var x=0; x<arry.length; x++){
      potencia = arry[x] * arry[x]
      suma += potencia
    }
    return suma;
  }
  else {
    return false;
  }
}

describe("squareSum",function(){
  it("",function(){
    expect(squareSum).toBeDefined();
  });
});
describe("",function(){
  it("",function(){
    expect(squareSum([1,2,3])).toBe(14);
    expect(squareSum(1)).toBe(false);
    expect(squareSum(2.6)).toBe(false);
    expect(squareSum(-3)).toBe(false);
    expect(squareSum("hola")).toBe(false);
  });
});

describe("renta total",function(){
  it("",function(){
    expect(Total).toBeDefined();
  });
});
describe("evalua",function(){
  it("",function(){
    expect(Total(3)).toBe(100);
    expect(Total("hola")).toBe(false);
    expect(Total([1,2])).toBe(false);
    expect(Total({})).toBe(false);
    expect(Total(-7)).toBe(false);
    expect(Total(0.2)).toBe(false);
    expect(Total(-0.2)).toBe(false);
  });
});
describe("convertSpaces",function(){
  describe("funcion de convertir espacios en blanco",function(){
    it("",function(){
      expect(convertSpaces).toBeDefined();
    });
  });
});
describe("evalua espacios en blanco",function(){
  it("",function(){
    expect(convertSpaces("anterior")).toBe("anterior");
    expect(convertSpaces("hola mundo")).toBe("hola%20mundo");
    expect(convertSpaces("hola soy ale")).toBe("hola%20soy%20ale");
  });
});

describe("Funcion de Anagram", function () {
  describe("function de Anagram", function () {
    it("si existe funcion", function () {
      expect(isAnagram).toBeDefined();
    });
    describe("Evalua string de anagram", function () {
      it("", function () {
        expect(isAnagram("amor","ramo")).toBe(true);
        expect(isAnagram("amor","romo")).toBe(true);
        expect(isAnagram("amor","raamo")).toBe(false);
      });
    });
  });
});
