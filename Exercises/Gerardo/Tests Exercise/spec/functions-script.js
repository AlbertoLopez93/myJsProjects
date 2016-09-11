function isAnagram (str1, str2) {
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
    console.log(strA, strB);
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

function rounded (num) {
  var res = '' + parseInt (num * 1000);
  if (res[res.length - 1] >= 5) {
    var aux = '' + parseInt (parseInt (res) / 10);
    res = '' + parseInt (parseInt(aux)/100) + '.' + aux[aux.length - 2] + (parseInt(aux[aux.length - 1]) + 1);
  } else {
    var aux = '' + parseInt(parseInt (res) / 10);
    res = '' + parseInt (parseInt(aux)/100) + '.' + aux[aux.length - 2] + aux[aux.length - 1];
  }
  console.log(aux);
  return res;
}

function getTotal (days) {
  var res = 0;
  res = days * 40;
  if (days >= 7){
    res -= 50;
  } else if (days >= 3){
    res -= 20;
  }
  return res;
}

function squareSum (arry) {
  var res = 0;
  for (var i = 0; i < arry.length; i++){
    res += arry[i]*arry[i];
  }
  return res;
}
