"use strict"

let ar = [];
function replicate(a, b){
  if(typeof(a) !== 'number'){
    return false;
  }
  let conta = 0;
if(conta < a){
  ar[ar.length] = b;
  return replicate(a-1, b);
}
return ar;
}
console.log(replicate(6,[false]));
