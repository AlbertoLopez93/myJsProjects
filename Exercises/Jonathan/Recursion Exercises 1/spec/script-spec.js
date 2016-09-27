"use strict"

//fibonacci
function fibonacci(n){
var m = n, temp=1;
if(typeof n !== 'number'){
    return false;
}else{
  if(n===0){
    return false;
  }
  if(n===1){
    return 1;
  }
  if(n===2){
    return 1;
  }
  if(n>1){
    return fibonacci(n-1) + fibonacci(n-2);
  }
 }
}
//console.log(fibonacci(7));

//sumListSquares

function sumListSquares(ary){
  var sqr=0, cont=0;
if(Array.isArray(ary)!==true){
    return false
}

  if (ary.length<1) {
      return false;
  }
  for(var x = 0; x<ary.length; x++){
      if(Array.isArray(ary[x])){
        sqr += sumListSquares(ary[x]);
      }else {
        sqr += Math.pow(ary[x],2);
      }
  }
  return sqr;
}
