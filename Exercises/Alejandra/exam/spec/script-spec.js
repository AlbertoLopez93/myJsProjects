"use strict"

function deepReverse(array){
  var res=[];
  var aux=[];
  if(typeof(array)!=="Array"){
    return false;
  }
  for(var i=0; i<array.length; i++){
    res[i]=array[i].reverse(array);
  }
  aux[0]=array.reverse(array);
  console.log(aux);
}

function concat(array,n){
  var arreglo=[];
  var x;


    for(var i=0; i<array.length; i++){
      arreglo[i]=array[i];
      x=arreglo.concat(n);
    }
    console.log(x);
}

function every(array,funct){
  if(typeof(array)!=="Array"){
    console.log(array);
    return false;
  }

  if(typeof(funct)!=="objet"){
    return false;
  }else {
    for(var i=0; i<array.length; i++){
      if(funct(i,i,array)===false){
        return false;
      }else{
        return true;
      }
    }
  }
}
// console.log(every([1,2,3]));

function some(array,funct){
  if(typeof(array)!=="Array"){
    console.log(array);
    return false;
  }

  if(typeof(funct)!=="objet"){
    return false;
  }else {
    for(var i=0; i<array.length; i++){
      if(funct(i,i,array)===true){
        return true;
      }else{
        return false;
      }
    }
  }
}
// console.log(some([6,7,8,9]));


describe("",function(){
  it("function",function(){
    expect(deepReverse()).toBeDefined();
  });
});
describe("concat\n",function(){
  it("mando un arreglo ([1,2,3],[4,5,6,[7]]) y cualquier otro elemento y da como resultado [1,2,3,4,5,6,[7]]",function(){
  //  expect(concat([1,2,3],[4,5,6,[7]])).toBe([1,2,3,4,5,6,[7]]);
  });
});

describe("mando un string y espero un false",function(){
  it("Mando un string y espero un false",function(){
    expect(deepReverse("String")).toBe(false);
  });
});
