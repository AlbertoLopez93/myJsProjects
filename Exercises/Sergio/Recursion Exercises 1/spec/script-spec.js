/*
NUMERO 1
Fibonaci Number
dado n>=1
f(n) = f(n-1)+f(n-2)
f(1)
////////////////////////////////////BANCH name_recursion_test_1 ////////
function flatten(ary) {
    var res = [];
    if (ary.length < 1) {
        return res;
    }
    for(var i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
            res = res.concat(flatten(ary[i]));
        } else {
            res = res.concat(ary[i]);
        }
    }
    return res;
}
NUMERO 2
write a function that sums squares of numbers in a list
that may contain more list
ejem
[1,2,3] => 14
[1[2,3]] => 14
[1,[2[3]]] => 14
[10,[10],[[10],[10]]] => 400
*/


/////////////EJERCICIO 1 /////////
function fibonacci(n){
  if(typeof n!=="number"){return false}
  if(n>Number.MAX_VALUE){return false;}
  if(n<Number.MIN_VALUE){return false;}
  if(n instanceof Number){return false;}
  let r = 0;
  let uno = function(n){
    return n = 1;
  }
  let dos = function (n){
    return n = 1;
  }
  if(n===1){
    return uno();
  }
  if(n===2){
    return dos();
  }
  if(n>2){
    function suma(n){
      r += fibonacci(n-1)+fibonacci(n-2);
      if(typeof r!=="number"){return false}
      if(r===0){return false;}
      if(r>Number.MAX_VALUE){return Infinity;}
      if(r<Number.MIN_VALUE){return -Infinity;}
      if(r===NaN){return false;}
      return r;
    }
    return suma(n);
  }
}

console.log(fibonacci(12));
/////////// EJERCICIO 2 //////////
"use strict"

function sumListSquares(ary) {
  var r = 0;
  if (ary.length < 1) {
    return [];
  }
  for(var i = 0; i < ary.length; i++) {
    if(typeof ary[i]!=="number"&&!Array.isArray(ary[i])){return false}
    if(ary[i]>Number.MAX_VALUE){return Infinity;}
    if(ary[i]<Number.MIN_VALUE){return -Infinity;}
    if(ary[i]===Infinity){return Infinity;}
    if(ary[i]===NaN){return false;}
    if (Array.isArray(ary[i])) {
      r+=(sumListSquares(ary[i]));
    } else {
      r +=(ary[i]*ary[i]);
    }
  }
  if(typeof r!=="number"){return false}
  if(r===0){return false;}
  if(r[i]>Number.MAX_VALUE){return Infinity;}
  if(r<Number.MIN_VALUE){return -Infinity;}
  if(r===false){return false}
  return r;
}
console.log(sumListSquares([10,[10],[[10],[10]]]));


// describe("Testing tribonacci function", function () {
//
//   it("Espero que funcione con 10",function(){
//     var res=sumListSquare([1,2,[3,4],5,6,7,8,9])
//     expect(res).toBe(285)
//   });
//   it("Espero que funcione con 1,2,3",function(){
//     var res=sumListSquare([1,2,3])
//     expect(res).toBe(14)
//   });
//   it("Espero que funcione con 1,2,3",function(){
//     var res=sumListSquare([1,[2],[3]])
//     expect(res).toBe(14)
//   });
//   it("Espero que funcione con 1,2,3",function(){
//     var res=sumListSquare([1,[2],[]])
//     expect(res).toBe(false)
//   });
//   it("Espero que funcione con 1,2,3",function(){
//     var res=sumListSquare("hola amigos")
//     expect(res).toBe(false)
//   });
//   it("Espero que funcione con Infinity",function(){
//     var res=sumListSquare(Infinity)
//     expect(res).toBe(false)
//   });
//   it("Espero que funcione con [1,,2,3]",function(){
//     var res=sumListSquare([1,,2,3])
//     expect(res).toBe(false)
//   });
//   it("Espero que funcione con Infinity",function(){
//     var res=fibonacci(Infinity)
//     expect(res).toBe(false)
//   });
//   it("Espero que funcione con 12 y espero 144",function(){
//     var res=fibonacci(12)
//     expect(res).toBe(144)
//   });
//   it("Espero que funcione con 1 y espero 1",function(){
//     var res=fibonacci(1)
//     expect(res).toBe(1)
//   });
//   it("Espero que  [] de false",function(){
//     var res=fibonacci([])
//     expect(res).toBe(false)
//   });
// });

describe("Testing Fibonacci",function(){//Conjunto de funciones de prueba
  it("Espero que 2 y 2 sea = 1", function() {//Cada una de las pruebas
    var res=fibonacci(2,2);
    expect(res).toBe(1);
  });

  it("Espero que 3  sea = 2", function() {//Cada una de las pruebas
    var res=fibonacci(3);
    expect(res).toBe(2);
  });

  it("Espero que 15  sea = 610", function() {//Cada una de las pruebas
    var res=fibonacci(15);
    expect(res).toBe(610);
  });

  it("Espero que 5  sea = 5", function() {//Cada una de las pruebas
    var res=fibonacci(5);
    expect(res).toBe(5);
  });

  it("Espero que 0  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(0);
    expect(res).toBe(false);
  });

  it("Espero que -100  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(-100);
    expect(res).toBe(false);
  });

  it("Espero que [1,2] y 5 sea = false", function() {//Cada una de las pruebas
    var res=fibonacci([1,2],5);
    expect(res).toBe(false);
  });

  it("Espero que 1 y {} sea = 1", function() {//Cada una de las pruebas
    var res=fibonacci(1,{});
    expect(res).toBe(1);
  });

  it("Espero que NaN  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(NaN);
    expect(res).toBe(false);
  });

  it("Espero que undefined  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(undefined);
    expect(res).toBe(false);
  });

  it("Espero que null  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(null);
    expect(res).toBe(false);
  });

  it("Espero que Array  sea = false", function() {//Cada una de las pruebas
    var res=fibonacci(Array);
    expect(res).toBe(false);
  });

  it("Espero que Infinity sea = Infinity", function() {//Cada una de las pruebas
    var res=fibonacci(Infinity);
    expect(res).toBe(Infinity);
  });

  it("Espero que 0.1  = false", function() {//Cada una de las pruebas
    var res=fibonacci(0.1);
    expect(res).toBe(false);
  });
});


describe("Testing For Sum List Squares",function(){//Conjunto de funciones de prueba
  it("Espero que [] sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares([]);
    expect(res).toBe(false);
  });

 it("Espero que 1 sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares(1);
    expect(res).toBe(false);
 });

  it("Espero que [1,2] y sea = 5", function() {//Cada una de las pruebas
    var res=sumListSquares([1,2]);
    expect(res).toBe(5);
  });

  it("Espero que 192.168 sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares("192.168");
    expect(res).toBe(false);
  });

  it("Espero que undefined sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares(undefined);
    expect(res).toBe(false);
  });

  it("Espero que {} sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares({});
    expect(res).toBe(false);
  });

  it("Espero que Infinity  = false", function() {//Cada una de las pruebas
    var res=sumListSquares(Infinity);
    expect(res).toBe(false);
  });

  it("Espero que false = false", function() {//Cada una de las pruebas
    var res=sumListSquares(false);
    expect(res).toBe(false);
  });

  it("Espero que NaN = false", function() {//Cada una de las pruebas
    var res=sumListSquares(NaN);
    expect(res).toBe(false);
  });

  it("Espero que function sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares(function(){});
    expect(res).toBe(false);
  });

  it("Espero que 0.2 sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares(0.2);
    expect(res).toBe(false);
  });

  it("Espero que [[1,2,3],[1,2,3]] sea = 28", function() {//Cada una de las pruebas
    var res=sumListSquares([[1,2,3],[1,2,3]]);
    expect(res).toBe(28);
  });

  it("Espero que [[x,b,x],[x,x,x],[x,x,x]] sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares([["x","b","x"],["x","x","x"],["x","x","x"]]);
    expect(res).toBe(false);
  });

  it("Espero que [[1,2,3],[1,x,3]]   sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares([[1,2,3],[1,"x",3]] );
    expect(res).toBe(false);
  });

  it("Espero que [[1,NaN,3],[1,2,3]]  sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares([[1,NaN,3],[1,2,3]] );
    expect(res).toBe(false);
  });

  it("Espero que [[1,2,3],[1,2,Infinity]]  sea = false", function() {//Cada una de las pruebas
    var res=sumListSquares([[1,2,3],[1,2,Infinity]] );
    expect(res).toBe(Infinity);
  });

  it("Espero que [10,[10],[[10],[10]]] = 400", function() {//Cada una de las pruebas
    var res=sumListSquares([10,[10],[[10],[10]]]);
    expect(res).toBe(400);
  });

});
