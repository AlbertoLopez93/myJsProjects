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
deepReverse([[1,2],[3,4],[6,7]]);

describe("",function(){
  it("function",function(){
    expect(deepReverse()).toBeDefined();
  });
});
describe("mando un string y espero un false",function(){
  it("Mando un string y espero un false",function(){
    expect(deepReverse("String")).toBe(false);
  });
});
