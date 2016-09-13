/****

timestamp: 1473109062000

****/

function decrypting (char) {
  if ( char === '') {
    return ' ';
  }
  res = MORSE.find(function (element) {
    return char.toUpperCase() === element['morse'];
  });
  if (res) {
    return res['char'];
  }
  return '';
}

function morseDec (str) {
  var msg = [];
  msg = str.split(' ');
  msg = msg.map(decrypting);
  msg = msg.join('');
  return msg;
}