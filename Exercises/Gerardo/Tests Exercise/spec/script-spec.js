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

describe("Function isAnagram", function() {
  it("can't be case sensitive", function() {
    expect(isAnagram('HOLA', 'hola')).toBe(true);
    expect(isAnagram('Hola', 'Lhoa')).toBe(true);
    expect(isAnagram('hola', 'ahlo')).toBe(true);
    expect(isAnagram('HOLA', 'LOHA')).toBe(true);
  });
  it("should not work with numbers", function() {
    expect(isAnagram(1234, 'hola')).toBe(false);
    expect(isAnagram(1234, 4321)).toBe(false);
    expect(isAnagram('hola', 1234)).toBe(false);
    expect(isAnagram('Infinity', Infinity)).toBe(false);
  });
  it("should not work with arrays", function() {
    expect(isAnagram(['a','b','c'],['b','c','a'])).toBe(false);
    expect(isAnagram(['a','b','c'], 'abc')).toBe(false);
  });
  it("should not work with objects", function() {
    expect(isAnagram({name: 'hola'},{name: 'laho'})).toBe(false);
    expect(isAnagram({name: 'hola'}, 'abc')).toBe(false);
    expect(isAnagram(null, 'llun')).toBe(false);
  });
  it("should not work with undefined", function() {
    expect(isAnagram('undefined', undefined)).toBe(false);
  });
});

describe("Fucntion convertSpaces", function() {
  it('should only work with strings', function() {
    expect(convertSpaces("Hola adios")).toBe("Hola%20adios");
    expect(convertSpaces("  ")).toBe("%20%20");
    expect(convertSpaces("")).toBe("");
    expect(convertSpaces(Infinity)).toBe(false);
    expect(convertSpaces(['hola'])).toBe(false);
    expect(convertSpaces(null)).toBe(false);
    expect(convertSpaces(undefined)).toBe(false);
  });
});

describe("Function getTotal", function() {
  it("should only work with positive integer", function() {
    expect(getTotal(2)).toBe(80);
    expect(getTotal(3)).toBe(100);
    expect(getTotal(7)).toBe(230);
    expect(getTotal(-3))
    expect(getTotal(1.3)).toBe(false);
    expect(getTotal(Infinity)).toBe(false);
    expect(getTotal({name: ''})).toBe(false);
    expect(getTotal([1])).toBe(false);
    expect(getTotal(null)).toBe(false);
    expect(getTotal(undefined)).toBe(false);
    expect(getTotal(NaN)).toBe(false);
  });
});

describe("Function rounded", function() {
  it("should only work with defined numbers", function() {
    expect(rounded(-Infinity)).toBe(false);
    expect(rounded(3.405)).toBe(3.41);
    expect(rounded(3.999)).toBe(4);
    expect(rounded(3.111)).toBe(3.11);
    expect(rounded('hola')).toBe(false);
    expect(rounded(null)).toBe(false);
    expect(rounded(-23.456)).toBe(-23.46);
    expect(rounded(undefined)).toBe(false);
    expect(rounded(5)).toBe(5);
  });
});
