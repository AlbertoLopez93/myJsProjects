/****

timestamp: 1473109029000

****/

function encrypt (char) {
  var res = [];
  if (char === ' ') {
    return '   '
  }
  res = MORSE.find(function (element) {
    return char.toUpperCase() === element['char'];
  });
  if (res) {
    return res['morse'];
  }
  return '';
}

function morseEnc (array) {
  var code = [];
  if (!Array.isArray(array)){
    code = array.split('');
  } else {
    code = array.slice();
  }

  code = code.map(encrypt);
  code = code.join(' ');
  return code;
}