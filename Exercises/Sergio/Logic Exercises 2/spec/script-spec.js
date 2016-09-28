"use strict"
function tribonacci(ary, n){
  if (ary instanceof Array && (typeof n === 'number' || n instanceof Number)){
    if(n===Infinity){
      return false;
    }
    let x= [];
    if(n===0){
      return x;
    }else if(ary.length <2) {
      return ary;
    }else{
      if(n<=ary.length){
        let r = [];
        r[0] = ary[0];
        r[n-1] = ary[n-1];
        n--;
        if(n>0){
          r[n-1] = ary[n-1];
        }
        return r;
      }else{
        for(let i=3;i<n;i++){
          ary[ary.length] = ary[i-3]+ary[i-2]+ary[i-1];

        }
      }return ary;
    }
  }return [];
}

function isValidIpAdress(str1){
  if(typeof(str1)==="false"){
    return false;
  }
  if(typeof(str1)==="true"){
    return false;
  }
  if(typeof(str1)===Number){
    return false;
  }
  let t0 = [];
  let t1 = [];
  let t2 = [];
  let t3 = "";
  let total = "";
  if (typeof str1 === 'string' || str1 instanceof String) {
    for (var i = 0; i <= str1.length; i++) {
      if(str1[i]==="."){
        t0[t0.length] = t3;
        t3 = "";
        continue;
      }else if(i===str1.length) {
        t0[t0.length] = t3;
      }else {
        t3 += str1[i];
      }
    }
    for (let k = 0; k < t0.length; k++) {
      t0[k] = parseInt(t0[k]);
    }
    for(let ii = 0; ii < t0.length; ii++){
      if(t0[ii]>255 || t0[ii]==NaN){
        total += t0[ii] +"."+" <--false ";
        return false;
      }else {
        total += t0[ii] +".";
      }
    }
  }return false;
}
/////////Exercises 3 ////////
function countTwos(A) {
  if (typeof A === 'number' || A instanceof Number) {
    let r = 0;
    let str;
    for (let i = 0; i <= A; i++) {
      str = "" + i;
      for (let k = 0, len = str.length; k < len; k++) {
        if (str[k] === '2') {
          r++;
        }
      }
    }
    return r;
  }
  return false;
}

///////////Exercises 4 ////////////////


function didSomeoneWon(m) {
  if (m instanceof Array) {
    let chars = ['x', 'o'];
    for (var i = 0; i < chars.length; i++) {
      let d1 = 0,
      d2 = 0;
      for (let y = 0, len = m.length; y < len; y++) {
        // Diagonal1
        if (m[y][y] === chars[i]) {
          d1++;
        }
        // Diagonal2
        if (m[len - 1 - y][y] === chars[i]) {
          d2++;
        }

        let sumHorizontal = 0,
        sumVertical = 0;
        for (let x = 0; x < m[y].length; x++) {
          if (m[y][x] === chars[i]) {
            sumHorizontal++;
          }
          if (m[x][y] === chars[i]) {
            sumVertical++;
          }
        }
        if (sumHorizontal === 3) {
          console.log('Player: ' + chars[i] + '. Gana ');
          return true;
        }
        if (sumVertical === 3) {
          console.log('Player: ' + chars[i] + '. Gana vertical');
          return true;
        }
      }
      if (d1 === 3) {
        console.log('Player: ' + chars[i] + '. Gana diagona l');
        return true;
      }
      if (d2 === 3) {
        console.log('Player: ' + chars[i] + '. Gana diagonal 2');
        return true;
      }
    }
  }
  return false;
}


/////////////Exercises  5 ////////////
function largestSum(A) {
  if (A instanceof Array) {
    let largo = A.length;
    let max = null;
    let a, b, suma, i, k;
    for (i = 0; i < largo-1; i++) {
      suma = A[i];
      for (k = i + 1; k < largo; k++) {
        suma += A[k];
        if (max === null || suma > max) {
          max = suma;
          a = i;
          b = k;
        }
      }
    }
    return max;
  }
  return false;
}
