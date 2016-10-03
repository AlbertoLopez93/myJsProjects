function transformToUnicode (str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    res[i] = str.charCodeAt(i);
  }
  return res;
}

function returnAllIndex (str1, str2) {
  var index = 0;
  var match = 0;
  var res = [];
  while(index < str1.length - 1) {
    if(str1.includes(str2, index)){
      res[res.length] = str1.indexOf(str2, index);
      index += (str2.length + str1.indexOf(str2, index));
      match++;
    } else {
      index++;
    }
  }
  if (match === 1) {
    return str1.indexOf(str2);
  } else if (match > 1) {
    return res;
  }
  return -1;
}

function closerIndex (str1, str2) {
  if (!str1.includes(str2)) {
    return undefined;
  }
  var closerBegin = str1.indexOf(str2)
  var closerEnd = (str1.length - 1) - str1.lastIndexOf(str2)
  if (closerBegin < closerEnd) {
    return 1;
  }
  if (closerBegin > closerEnd) {
    return -1;
  }
  if (closerBegin === closerEnd) {
    return 0;
  }
}

function reverseWords (str) {
  var words = str.split(' ');
  var flag = true;
  var res = '';
  var numbers = {
    '1': 'ONE',
    '2': 'TWO',
    '3': 'THREE',
    '4': 'FOUR',
    '5': 'FIVE',
    '6': 'SIX',
    '7': 'SEVEN',
    '8': 'EIGHT',
    '9': 'NINE',
    '0': 'ZERO'
  };
  for (var i = 0; i < words.length; i++) {
    for (var j = words[i].length - 1; j >= 0; j--) {
      flag = true;
      for (var num in numbers) {
        if (words[i][j] === num) {
          res += numbers[num];
          flag = false;
          console.log(res);
          break;
        }
      }
      if (flag){
        res += words[i][j];
      }
    }
      res += ' ';
  }
  return res;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
