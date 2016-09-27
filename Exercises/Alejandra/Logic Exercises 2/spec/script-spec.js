"use strict"
function tribonacci(ar,n){//funciòn recibe dos argumentos
  var ar, arreglo=[],arreglo2=[];
  if(Array.isArray(ar)){
    if (ar.length<3) {//condiciones para validar si arreglo es menor a 3 y a su limite
      return ar;////
    }
    if (n===0) {//si limite es igual a 0
      arreglo=[];//arreglo serà igual a vacio
      return arreglo;//y retornara vacio
    }
    if (n>0) {//si limite es mayor a 0
      for (var i = 0; i <n; i++) {//recorro hasta que i sea menor a n
        if (i>2) {//si i o limite es mayor a 2
          arreglo[i]=arreglo[i-1]+arreglo[i-2]+arreglo[i-3];//a mi arreglo actual sumale el ultimo de mi arreglo, penultimo y antepenultimo
        }
        else{
          arreglo[i]=ar[i];
        }
        return arreglo;
      }
    }
  }
  else{
    return false;
}
}

"use strict"

function countTwos(n){
  var con=0;//contador
  var lista="";//variable lista que guarda un string
  if(typeof(n)!=="integer"){
    return false;
  }
  if(typeof(n)==="object"){
    return false;
  }
  for (var i = 0; i <= n; i++) {//for que recorrera mi lista hasta n
    lista=lista +i;//lista serà igual a la colecciòn de todos los nùmeros qque recorre mi for hasta n elementos
  }
  for (var i = 0; i <lista.length; i++) {//recorrera la lista hasta que llegue al final de mi lista
    if (lista[i]=="2") {//y si algùn elemento de mi ista es igual a dos.
      con++;//que no lo vaya acumulando en nusestro contador
    }
  }
  return con;//con es la que nos guarda la cantidad de dos, por lo tanto es la que retornaremos
}

function didSomeoneWon(matrix){
  var matrix;
  if(typeof(matrix)!=="Array"){
    return false;
  }
  if(typeof(matrix)==="object"){
    return false;
  }
  if(matrix.length === 3 && matrix[0].length === 3){//valida si existe una posible combinaciòn con"x"
  if(matrix[0][0] === "x" && matrix[1][0] === "x" && matrix[2][0] === "x"){
    return true;
  }
  else if(matrix[0][1] === "x" && matrix[1][1] === "x" && matrix[2][1] === "x"){
    return true;
  }
  else if(matrix[0][2] === "x" && matrix[1][2] === "x" && matrix[2][2] === "x"){
    return true;
  }
  else if(matrix[0][0] ==="x" && matrix[1][1] ==="x" && matrix[2][2] ==="x"){
    return true;
  }
  else if(matrix[0][0] ==="x" && matrix[0][1] ==="x" && matrix[0][2] ==="x"){
    return true;
  }
  else if(matrix[1][0] === "x" && matrix[1][1] === "x" && matrix[1][2] === "x"){
    return true;
  }
  else if(matrix[2][0] === "x" && matrix[2][1] === "x" && matrix[2][2] === "x"){
    return true;
  }
  else if(matrix[0][2] === "x" && matrix[1][1] === "x" && matrix[2][0] === "x"){
    return true;
  }           //valida con o si existe alguna posible combinaciòn
  else if(matrix[0][0] === "o" && matrix[1][0] === "o" && matrix[2][0] === "o"){
    return true;
  }
  else if(matrix[0][1] === "o" && matrix[1][1] === "o" && matrix[2][1] === "o"){
    return true;
  }
  else if(matrix[0][2] === "o" && matrix[1][2] === "o" && matrix[2][2] === "o"){
    return true;
  }
  else if(matrix[0][0] === "o" && matrix[1][1] === "o" && matrix[2][2] === "o"){
    return true;
  }
  else if(matrix[0][0] === "o" && matrix[0][1] === "o" && matrix[0][2] === "o"){
    return true;
  }
  else if(matrix[1][0] === "o" && matrix[1][1] === "o" && matrix[1][2] === "o"){
    return true;
  }
  else if(matrix[2][0] === "o" && matrix[2][1] === "O" && matrix[2][2] === "O"){
    return true;
  }
  else if(matrix[0][2] === "o" && matrix[1][1] === "o" && matrix[2][0] === "o"){
    return true;
  }
  else{//Si nadie logra entrar a estas condiciones , pierde, igual a falso
    return false;
  }
}
}


describe("didSomeoneWon",function(){
  it("",function(){
    expect(didSomeoneWon).toBeDefined();
  });
});
describe("didSomeoneWon",function(){
  expect(didSomeoneWon(1)).toBe(false);
  expect(didSomeoneWon("hola")).toBe(false);
  expect(didSomeoneWon(4.5)).toBe(false);
  expect(didSomeoneWon(-5)).toBe(false);
});

describe("countTwos",function(){
  it("valor",function(){
    expect(countTwos).toBeDefined();
  });
});
describe("",function(){
  it("contar dos",function(){
    expect(countTwos("hola")).toBe(false);
    expect(countTwos([1,2,3])).toBe(false);
    expect(countTwos(-2)).toBe(false);
    expect(countTwos({})).toBe(false);
    expect(countTwos(1.2)).toBe(false);

  });
});
describe("tribonacci",function(){
  it("",function(){
    expect(tribonacci).toBeDefined();
  });
});
describe("valor",function(){
  it("valor",function(){
    //expect(tribonacci([1,2,3],5)).toBe([1,2,3,6,11]);
    expect(tribonacci({},2)).toBe(false);
    expect(tribonacci(-3,-3)).toBe(false);
    expect(tribonacci("hola",3)).toBe(false);
    //expect(tribonacci([2,3,4],[3,4,5],3)).toBe(false);
  });
});
