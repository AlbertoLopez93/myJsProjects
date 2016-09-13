/****

timestamp: 1472809500000
skype

****/

function play(ary,inicio,final,insercion) {
  
  var n_ary=ary
n_ary.unshift(inicio);
n_ary.push(final);
n_ary.splice(insercion[0], 0, insercion[1]);

return n_ary;
}
