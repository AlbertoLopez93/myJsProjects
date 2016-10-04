function calc (num, num2, oper) {
  var dots1 = 0;
  var dots2 = 0;
  for (var i = 0; i < num.length; i++) {
    if (!parseInt(num[i]) && (num[i] !== '.') && (num[i] !== '0')) {
      return NaN;
    }
    if (num[i] === '.') {
      dots1++;
    }
  }
  for (var i = 0; i < num2.length -1; i++) {
    if(!parseInt(num2[i]) && (num2[i] !== '.') && (num2[i] !== '0')) {
      return NaN;
    }
    if(num2[i] === '.') {
      dots2++;
    }
  }
  if(dots1 > 1 || dots2 > 1) {
    return NaN;
  }
  var number1 = parseFloat(num);
  var number2 = parseFloat(num2);
  switch (oper) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '/':
      return number1 / number2;
    case '*':
      return number1 * number2;
    default:
      return 'Invalid parameter';
  }
}


function howBigNumbers (num1, num2, num3) {
  if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    return NaN;
  }
  var numbers = [num1, num2, num3];
  var biggest = num1;
  var medium = num1;
  var smallest = num1;
  for (var i = 0; i < 2; i++) {
    if(numbers[i + 1] > biggest) {
      biggest = numbers[i];
    }
    if (numbers[i +1] < smallest) {
      smallest = numbers[i];
    }
  }
  for (var i = 0; i < 3; i++) {
    if (numbers[i] != biggest && numbers[i] != smallest) {
      medium = numbers[i];
    }
  }
  var powered = Math.pow(Math.pow(biggest,smallest),medium);
  if (powered === Infinity) {
    return 'To much';
  }
  if (Number.isSafeInteger(powered)){
    return 'Ok';
  } else {
    return 'Warning';
  }
}

function sumPositivesAndNegatives (array) {
  var res = [0,0];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var j = 0; j < array[i].length; j++) {
        if (parseInt(array[i][j]) > 0 || array[i][j] === Infinity) {
          res[0] += array[i][j];
        }
        if (parseInt(array[i][j]) < 0 || array[i][j] === -Infinity) {
          res[1] += array[i][j];
        }
      }
    } else {
      if (parseInt(array[i]) > 0 || array[i] === Infinity) {
        res[0] += array[i];
      }
      if (parseInt(array[i]) < 0 || array[i] === -Infinity) {
        res[1] += array[i];
      }
    }
  }
  return res;
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
