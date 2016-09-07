function isAnagram(one,two) {
  var lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  var capital=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var oneh=[], twoh=[];
  if(one.length!=two.length) { //must not be an anagram
    return false;
  }

  for(var i=0; i<one.length; i++) {
    for(var j=0; j<28; j++) {
      if((one[i]==lower[j])||(one[i]==capital[j]))
        oneh[i]=capital[j]; //convert to capital letter
    }
  }

  for(i=0; i<two.length; i++) {
    for(j=0; j<28; j++) {
      if((two[i]==lower[j])||(two[i]==capital[j]))
        twoh[i]=capital[j]; //convert to capital letter
    }
  }
  //order both with bubble sort
  oneh=bubble(oneh);
  twoh=bubble(twoh);

  for(i=0; i<oneh.length; i++) { //compare arrays char by char
    if(oneh[i]!=twoh[i]) //with only one char different, is false
      return false;
  }
  return true; //there aren't differents chars
} //end function isAnagram

function bubble(ary) { //content in isAnagram()
  for(var i=ary.length-1; i>0; i-=1) {
    for(var j=ary.length-1; j>0; j-=1) {
      if(ary[j]<ary[j-1]) {
        var aux=ary[j-1];
        ary[j-1]=ary[j];
        ary[j]=aux;
      }
    }
  }
  return ary;
}

function convertSpace(str) {
  var out='', k=0;
  while(str[k]) {
    if(str[k]!=' ') {
      out+=str[k];
    }
    else {
      out+='%20';
    }
    k+=1;
  }
  return out;
}

function rounded(num) {
  var number=num+'.000'; //.000 if user enter an integer, '' only for convert to string
  var p=0, result='';
  while(number[p]!='.') {
    result+=number[p];
    p++;
  }
  var fraction=number[p+1]+number[p+2]; //digits after '.'
  if(number[p+3]>=5) {
    if(fraction==99) {
      if(result[0]=='-') {
        result--;
      }
      else {
        result++;
      }
      fraction='00';
    }
    else {
      fraction++;
    }
  }
  result=result+'.'+fraction;
  result=parseFloat(result); //convert string to float
  return result;
}

function getTotal(days) {
  if(Number.isNaN(days)) {
    return false;
  }
  if(days<0) { //not negatives
    return false;
  }
  if(Number.isInteger(days)!=true) {
    return false;
  }
  var prize=40*days;
  if (days>=7) {
    prize-=50;
    return prize;
  }
  if (days>=3) {
    prize-=20;
  }
  return prize;
}

function squareSum(array) {
  var sum=0;
  for (var k=0; k<array.length; k++) {
    var power2=array[k]*array[k];
    sum+=power2;
    if(Number.isNaN(sum)) {
      return false;
    }
  }
  return sum;
}

function isRotation(word1, word2) {
  if(word1.length!=word2.length) {
    return false;
  }

  word1+=word1;
  if(isSubstring(word1,word2)) {
    return true;
  }
  else {
    return false;
  }
}

function isSubstring(str,sub) { //content in isRotation()
  for(var d=0; d<str.length; d+=1) {
    if(str[d]==sub[0]) {//first element in string
      proc: for(var e=0; e<sub.length; e+=1) {
        if(str[d+e]!=sub[e]) {
          break proc;
        }
      }
      if(e==sub.length) {//complete verify substring
        return true;
      }
    }
  }
  return false; //ther isn't match with all substring
}

function convertMatrix(mx) {
  var other=[], row=[];
  for(var i=0; i<mx.length; i+=1) {
    for(var k=0; k<mx[0].length; k++) {
      row[k]=mx[i][k];
    }
    other[i]=row;
    row=[];
  }
  for(var g=0; g<mx.length; g++) {
    for(var h=0; h<mx[0].length; h++) {
      if(mx[g][h]==0) {
        for(var i=0; i<mx.length; i++) {
          other[g][i]=0;
          other[i][h]=0;
        }
      } //end if
    }
  } //I never rewrite mx, I don't understand
  return other;
} //end function

function rotate(matrix) {
  var mat=[], matrow=[];
  for(var i=0; i<matrix.length; i+=1) {
    for(var j=0; j<matrix[0].length; j+=1) {
      matrow[j]=matrix[matrix.length-1-j][i];
    }
    mat[i]=matrow;
    matrow=[];
  }
  return mat;
}

describe("Testing isAnagram", function() {
  it("I wait Amores, Esamor are anagrams", function(){
    var answer = isAnagram('Amores','Esamor');
    expect(answer).toBe(true);
  });
  it("I wait Amor, Roma are anagrams", function(){
    var answer = isAnagram('Amor','Roma');
    expect(answer).toBe(true);
  });
  it("I wait Rama, Roma aren't anagrams", function(){
    var answer = isAnagram('Roma','Rama');
    expect(answer).toBe(false);
  });
  it("I wait before, eforbe are anagrams", function(){
    var answer = isAnagram('before','eforbe');
    expect(answer).toBe(true);
  });
  it("I wait word, word are anagrams", function(){
    var answer = isAnagram('word','word');
    expect(answer).toBe(true);
  });
});

describe("Testing convertSpace", function() {
  it("I wait 'hello friends' will be converted to 'hello%20friends'", function(){
    var answer = convertSpace('hello friends');
    expect(answer).toBe('hello%20friends');
  });
  it("I wait 'Alberto Lopez.com' will be converted to 'Alberto%20Lopez.com'", function(){
    var answer = convertSpace('Alberto Lopez.com');
    expect(answer).toBe('Alberto%20Lopez.com');
  });
  it("I wait 'my_name' won't be converted", function(){
    var answer = convertSpace('my_name');
    expect(answer).toBe('my_name');
  });
  it("I wait 'beto.lv.tepatitlan@hotmail.com' won't be converted", function(){
    var answer = convertSpace('beto.lv.tepatitlan@hotmail.com');
    expect(answer).toBe('beto.lv.tepatitlan@hotmail.com');
  });
  it("I wait 'mySite.com/Main Directory 2' will be converted to 'mySite.com/Main%20Directory%202'", function(){
    var answer = convertSpace('mySite.com/Main Directory 2');
    expect(answer).toBe('mySite.com/Main%20Directory%202');
  });
});

describe("Testing rounded", function() {
  it("I wait 4.042 will be rounded to 4.04", function(){
    var answer = rounded(4.042);
    expect(answer).toBe(4.04);
  });
  it("I wait 0.994 will be rounded to 0.99", function(){
    var answer = rounded(0.994);
    expect(answer).toBe(0.99);
  });
  it("I wait 3 will be rounded to 3", function(){
    var answer = rounded(3);
    expect(answer).toBe(3);
  });
  it("I wait -2.3974 will be rounded to -2.40", function(){
    var answer = rounded(-2.3974);
    expect(answer).toBe(-2.4);
  });
  it("I wait -2.997 will be rounded to -3", function(){
    var answer = rounded(-2.997);
    expect(answer).toBe(-3);
  });
  it("I wait -0.003 will be rounded to 0", function(){
    var answer = rounded(-0.003);
    expect(answer).toBe(0);
  });
});

describe("Testing getTotal", function() {
  it("If I rent 1 day, I have to pay 40", function(){
    var answer = getTotal(1);
    expect(answer).toBe(40);
  });
  it("If I rent 0 days, I have to pay 0", function(){
    var answer = getTotal(0);
    expect(answer).toBe(0);
  });
  it("If I rent 3 days, I have to pay 100", function(){
    var answer = getTotal(3);
    expect(answer).toBe(100);
  });
  it("If I rent 6 days, I have to pay 220", function(){
    var answer = getTotal(6);
    expect(answer).toBe(220);
  });
  it("If I rent 8 days, I have to pay 270", function(){
    var answer = getTotal(8);
    expect(answer).toBe(270);
  });
  it("If I rent 10 days, I have to pay 350", function(){
    var answer = getTotal(10);
    expect(answer).toBe(350);
  });
  it("If I rent -5 days, I have an error", function(){
    var answer = getTotal(-5);
    expect(answer).toBe(false);
  });
  it("If I rent 2.3 days, I have an error", function(){
    var answer = getTotal(2.3);
    expect(answer).toBe(false);
  });
  it("If I rent x days, I have an error", function(){
    var answer = getTotal('x');
    expect(answer).toBe(false);
  });
});

describe("Testing squareSum", function() {
  it("Squares of [1,1] is 1+1 =2", function(){
    var answer = squareSum([1,1]);
    expect(answer).toBe(2);
  });
  it("Squares of [0,4] is 0+16 =16", function(){
    var answer = squareSum([0,4]);
    expect(answer).toBe(16);
  });
  it("Squares of [2,3,3] is 4+9+9 =22", function(){
    var answer = squareSum([2,3,3]);
    expect(answer).toBe(22);
  });
  it("Squares of [12,3,20] is 144+9+400 =553", function(){
    var answer = squareSum([12,3,20]);
    expect(answer).toBe(553);
  });
  it("Squares of [-3,-4] is 9+16 =25", function(){
    var answer = squareSum([-3,-4]);
    expect(answer).toBe(25);
  });
  it("Squares of [0.2,0.5] is 0.04+0.25 =0.29 less than 1", function(){
    var answer = squareSum([0.2,0.5]);
    expect(answer).toBeLessThan(1);
  });
  it("Squares of [3,'2b'] is NaN, so false", function(){
    var answer = squareSum([3,'2b']);
    expect(answer).toBe(false);
  });
});

describe("Testing isRotation", function() {
  it("I wait 'AMORES', 'ESAMOR' are rotations", function(){
    var answer = isRotation('AMORES','ESAMOR');
    expect(answer).toBe(true);
  });
  it("I wait 'teodoro', 'doroteo' are rotations", function(){
    var answer = isRotation('teodoro', 'doroteo');
    expect(answer).toBe(true);
  });
  it("I wait 'rose', 'zero' aren't rotations", function(){
    var answer = isRotation('rose', 'zero');
    expect(answer).toBe(false);
  });
  it("I wait 'wattermelon', 'melonwatter' are rotations", function(){
    var answer = isRotation('wattermelon', 'melonwatter');
    expect(answer).toBe(true);
  });
  it("I wait 'JUANA', 'ANA' aren't rotations", function(){
    var answer = isRotation('JUANA', 'ANA');
    expect(answer).toBe(false);
  });
  it("I wait 'word', 'word' are rotations", function(){
    var answer = isRotation('word', 'word');
    expect(answer).toBe(true);
  });
  it("I wait 'World', 'Rldwo' aren't rotations, capital and lower", function(){
    var answer = isRotation('World', 'Rldwo');
    expect(answer).toBe(false);
  });
});

describe("Testing convertMatrix", function() {
  it("I wait [[4,5,6],[8,3,5]] return equal", function(){
    var answer = convertMatrix([[4,5,6],[8,3,5]]);
    expect(answer).toEqual([[4,5,6],[8,3,5]]);
  });
  it("I wait [[4,5,6],[8,3,5],[0,4,6]] return [[0,5,6],[0,3,5],[0,0,0]]", function(){
    var answer = convertMatrix([[4,5,6],[8,3,5],[0,4,6]]);
    expect(answer).toEqual([[0,5,6],[0,3,5],[0,0,0]]);
  });
  it("I wait [[4,5,6],[0,3,0],[0,4,6]] return [[0,5,0],[0,0,0],[0,0,0]]", function(){
    var answer = convertMatrix([[4,5,6],[0,3,0],[0,4,6]]);
    expect(answer).toEqual([[0,5,0],[0,0,0],[0,0,0]]);
  });
  it("I wait [[4,0,6],[0,3,0],[0,4,6]] return [[0,0,0],[0,0,0],[0,0,0]]", function(){
    var answer = convertMatrix([[4,0,6],[0,3,0],[0,4,6]]);
    expect(answer).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
  });
});

describe("Testing rotate", function() {
  it("I wait [[1,2,3],[4,5,6],[7,8,9]] rotate to [[7,4,1],[8,5,2],[9,6,3]]", function(){
    var answer = rotate([[1,2,3],[4,5,6],[7,8,9]]);
    expect(answer).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  });
  it("I wait [[4,5],[8,9]] rotate to [[8,4],[9,5]]", function(){
    var answer = rotate([[4,5],[8,9]]);
    expect(answer).toEqual([[8,4],[9,5]]);
  });
  it("I wait [[4,5,6],[7,8,9],[0,7,2]] rotate to [[0,7,4],[7,8,5],[2,9,6]]", function(){
    var answer = rotate([[4,5,6],[7,8,9],[0,7,2]]);
    expect(answer).toEqual([[0,7,4],[7,8,5],[2,9,6]]);
  });
  it("I wait [[4,5,6],[7,8,9]] rotate to [[7,4],[8,5],[9,6]]", function(){
    var answer = rotate([[4,5,6],[7,8,9]]);
    expect(answer).toEqual([[7,4],[8,5],[9,6]]);
  });
});
