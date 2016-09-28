"use strict"
function greatestCommonDivisor (n1, n2) {
  let aux = 0;
  let cont = 0;
  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    return false;
  } else {
    if (n1 === n2) {
      return n1;
    }
    if (n1 > n2){
      aux = n1 % n2;
      if (n1 % aux === 0 && n2 % aux === 0) {
        return aux;
      } else {
        cont = n2;
        return REC (n1, n2, cont);
      }
      if (n1 < n2) {
        aux = n2 % n1;
        if (n1 % aux === 0 && n2 % aux === 0) {
          return aux;
        } else {
          cont = n1;
          return REC (n2, n1, cont);
        }
      }
    }
    function REC (n3, n4, n5) {
      if (n3 % n5 === 0 && n4 % n5 === 0){
        return n5;
      } else {
        return REC (n3, n4, n5-1);
      }
    }
  }
}
console.log(greatestCommonDivisor(25, 25));
