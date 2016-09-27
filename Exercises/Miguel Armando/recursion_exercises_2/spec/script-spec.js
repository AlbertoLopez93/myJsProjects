"use strict"

function greatesCommonDivisor(a,b){
 var result;
if (a === 0 || b === 0) {
  return false;
}
  else if (a % b > 0) {
   result = greatesCommonDivisor( b, a % b );
    } else {
      result = b;
    }
 return result;

}


let ary =[];
function replicate(num1,num2){
  if (typeof num1 !== "number") {
    return false;
  }

  let cont = 0;
  if (cont < num1) {
    ary[ary.length] = num2;
      return replicate(num1-1, num2);
  }
  return ary;
}
console.log(replicate(3,2));
