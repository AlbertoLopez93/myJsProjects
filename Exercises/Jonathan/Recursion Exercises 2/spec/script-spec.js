//common divisor

function greatestCommonDivisor (n1, n2) {
  var aux = 0, cont = 0;

  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
      return false;
  } else {
    if (n1 === Infinity){
        return n2;
    }
    if (n2 === Infinity){
        return n1;
    }
      if (!Number.isInteger(n1)||!Number.isInteger(n2)) {
          return false;
      }

      if (n1 > n2){
          aux = n1 % n2;
          if (n1 % aux === 0 && n2 % aux === 0) {
              return aux;
          } else {
              cont = n2;
              return recur (n1, n2, cont);
          }
      }else if (n1 < n2) {
        aux = n2 % n1;
        if (n1 % aux === 0 && n2 % aux === 0) {
            return aux;
        } else {
            cont = n1;
            return recur (n2, n1, cont);
        }
      } else if (n1 === n2) {
            return n1;
      }
  }
}
console.log(greatestCommonDivisor(900, Infinity));

function recur (n3, n4, n5) {
  if (n3 % n5 === 0 && n4 % n5 === 0){
      return n5;
  } else {
      return recur (n3, n4, n5-1);
  }
}


//consecutive


function countSubArrays (ary) {
  var cont=0, y = 0;

  if (Array.isArray(ary) !== true){
      return false;
  }else{
    if (ary.length < 2) {
        return false;
    }
    for (var x = ary.length-1; x >=0; x--){
          cont += recur(x);
    }
    return cont;
  }
}

console.log(countSubArrays ([1,2,3]));

function recur (lngtR1) {
  var cont2=0;
    if (lngtR1===0){
        return cont2;
    }else{
      cont2+= lngtR1;
      recur (lngtR1-1);
      return cont2;
    }
}


//replicate

function replicate (a, b) {
 var ary = [], aux = 0;
    if (typeof a !== 'number') {
       return false;
    }
    if (a === Infinity) {
        return Infinity;
    }
    if (isNaN(a)) {
        return false;
    } else {
        if (a <= 0) {
            return [];
        }
        if (a === 1) {
            return [b];
        }
    }   if( a > 1) {
            ary = replicate (a-1, b);
            aux = ary[ary.length-1] = b;
            return ary = ary.concat(aux);
    }
}
console.log(replicate (7, false));
