"use strict";

function isAnagram (str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false;
  }
  var abc = {
    'A': 'a',
    'B': 'b',
    'C': 'c',
    'D': 'd',
    'E': 'e',
    'F': 'f',
    'G': 'g',
    'H': 'h',
    'I': 'i',
    'K': 'k',
    'L': 'l',
    'M': 'm',
    'N': 'n',
    'O': 'o',
    'P': 'p',
    'Q': 'q',
    'R': 'r',
    'S': 's',
    'T': 't',
    'U': 'u',
    'V': 'v',
    'W': 'w',
    'Y': 'y',
    'Z': 'z'
  };
  var strA = '';
  var strB = '';
  const size = str1.length;
  var count = 0;
  if (str1.length != str2.length) {
    return false;
  } else {
    for (var i = 0; i < size; i++){
      var chan = true;
      for (var name in abc) {
        if (str1[i] === name){
          strA += abc[name];
          chan = false;
          break;
        }
      }
      if(chan){
        strA += str1[i];
      }
    }
    for (var i = 0; i < size; i++){
      chan = true;
      for (var name in abc) {
        if (str2[i] === name){
          strB += abc[name];
          chan = false;
          break;
        }
      }
      if(chan){
        strB += str2[i];
      }
    }
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (strA[i] === strB[j]) {
          strB[j] = '';
          count++;
          break;
        }
      }
    }
  }
  if (count === size){
    return true;
  } else {
    return false;
  }
}

function convertSpaces (str1) {
  if(typeof str1 !== 'string') {
    return false;
  }
  var res = '';
  for(var i = 0; i < str1.length; i++) {
    if(str1[i] === ' '){
      res += '%20';
    } else {
      res += str1[i];
    }
  }
  return res;
}

function getTotal (days) {
  if(typeof days !== 'number' || days + '' === 'NaN') {
    return false;
  }
  if(days + '' === 'Infinity' || (days + '' === "-Infinity")) {
    return false;
  }
  if(days < 0) {
    return false;
  }
  if(days % 1 != 0) {
    return false;
  }
  var res = 0;
  res = days * 40;
  if (days >= 7){
    res -= 50;
  } else if (days >= 3){
    res -= 20;
  }
  return res;
}

function rounded (num) {
  if(typeof num !== 'number' || (num + '' === 'NaN')) {
    return false;
  }
  if(num + '' === 'Infinity' || (num + '' === '-Infinity')) {
    return false;
  }
  var res = '' + parseInt(num * 1000);
  if (res[res.length - 1] >= 5) {
    if(num < 0) {
      res = (parseInt(res) / 10) - 1;
    }
    if(num > 0) {
      res = (parseInt(res) / 10) + 1;
    }
    res = parseInt(res)/100;
  } else {
    res = parseInt(res) / 10
    res = parseInt(res) / 100;
  }
  return res;
}

function squareSum() {}

function isRotation() {}

function convertMatrix() {}

function rotate() {}

module.exports = {
    isAnagram: isAnagram,
    convertSpaces: convertSpaces,
    rounded: rounded,
    getTotal: getTotal,
    squareSum: squareSum,
    isRotation: isRotation,
    convertMatrix: convertMatrix,
    rotate: rotate
};
