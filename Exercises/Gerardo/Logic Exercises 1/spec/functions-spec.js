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

describe("Testing Logic Exercises 1 Easy way", function () {
    describe("isAnagram function", function () {
        it("should return false for 2 strings that are not anagrams", function () {
            expect(isAnagram("abcd", "efgh")).toBe(false);
        });
        it("should return true for 2 strings that are anagrams", function () {
            expect(isAnagram("roma", "amor")).toBe(true);
        });
        it("should return true for 2 strings that are the same", function () {
            expect(isAnagram("roma", "roma")).toBe(true);
        });
    });

    describe("convertSpaces function", function () {
        it("should convert many spaces to %20", function () {
            expect(convertSpaces("    ")).toBe("%20%20%20%20");
        });
        it("should convert one space to %20", function () {
            expect(convertSpaces("hola mundo")).toBe("hola%20mundo");
        });
    });

    describe("rounded function", function () {
        it("should round up with 2 decimals positive numbers", function () {
            expect(rounded(5.5589)).toBe(5.56);
            expect(rounded(69.996)).toBe(70);
            expect(rounded(5.5550)).toBe(5.56);
        });
        it("should round down with 2 decimals positive numbers", function () {
            expect(rounded(3.3424)).toBe(3.34);
            expect(rounded(69.4924)).toBe(69.49);
            expect(rounded(5.5549)).toBe(5.55);
        });
        it("should round up with 2 decimals negative numbers", function () {
            expect(rounded(-5.5589)).toBe(-5.56);
            expect(rounded(-69.996)).toBe(-70);
            expect(rounded(-5.5550)).toBe(-5.56);
        });
        it("should round down with 2 decimals negative numbers", function () {
            expect(rounded(-3.3424)).toBe(-3.34);
            expect(rounded(-69.4924)).toBe(-69.49);
            expect(rounded(-5.5549)).toBe(-5.55);
        });
    });

    describe("getTotal function", function () {
        it("should return 0 for 0 days", function () {
            expect(getTotal(0)).toBe(0);
        });
        it("should work against positive integer numbers", function () {
            expect(getTotal(1)).toBe(40);
            expect(getTotal(2)).toBe(80);
            expect(getTotal(3)).toBe(100);
            expect(getTotal(5)).toBe(180);
            expect(getTotal(7)).toBe(230);
        });
    });

    describe("squareSum function", function () {
        it("should return 0 for 0", function () {
            expect(squareSum([0])).toBe(0);
        });
        it("should return 0 for 0", function () {
            expect(squareSum([1])).toBe(1);
        });
        it("should return 5", function () {
            expect(squareSum([1, 2])).toBe(5);
        });
        it("should return 14 for [1, 2, 3]", function () {
            expect(squareSum([1, 2, 3])).toBe(14);
        });
    });

    describe("isRotation function", function () {
        it("should return true with strings that are rotation of each other", function () {
            expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
        });
        it("should return false with strings that are not rotation of each other", function () {
            expect(isRotation("watermelon", "waterbottle")).toBe(false);
        });
        it("should return true with strings that are the same word", function () {
            expect(isRotation("watermelon", "watermelon")).toBe(true);
        });
    });

    describe("convertMatrix function", function () {
        it("should get [ [1, 1], [1, 1] ] for [ [1, 1], [1, 1] ]", function () {
            expect(convertMatrix([ [1, 1], [1, 1] ])).toEqual([ [1, 1], [1, 1] ]);
        });
        it("should get [ [1, 0], [0, 0] ] for [ [1, 1], [0, 0] ]", function () {
            expect(convertMatrix([ [1, 1], [1, 0] ])).toEqual([ [1, 0], [0, 0] ]);
        });
    });

    describe("rotate function", function () {
        it("should get [ [1, 1], [1, 1] ] for [ [1, 1], [1, 1] ]", function () {
            expect(rotate( [ [1, 1], [1, 1] ] )).toEqual([ [1, 1], [1, 1] ]);
        });
        it("should return [ [0, 0], [1, 1] ] for [ [0, 1], [0, 1] ]", function () {
            expect(rotate( [ [0, 1], [0, 1] ] )).toEqual([ [0, 0], [1, 1] ]);
        });
    });
});
