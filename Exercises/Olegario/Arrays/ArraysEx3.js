/****

timestamp: 1472808480000
skype

****/


function play(array,ini,fin,array2) {
  var aux=array.slice(0);
  var aux2=array.slice(3);

  aux.push(fin);
  aux.unshift(ini);
  aux.splice(array2[0],0,array2[1]);

  return aux;
}