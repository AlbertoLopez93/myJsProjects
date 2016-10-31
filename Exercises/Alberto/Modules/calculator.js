"use strict"

var suma= function(x,n) {
  if(typeof(x)!='number' || typeof(n)!='number') {
    return NaN; //operate only with number
  }
  return x+n;
}
var resta= function(x,n) {
  if(typeof(x)!='number' || typeof(n)!='number') {
    return NaN; //operate only with number
  }
  return x-n;
}
var multiplica= function(x,n) {
  if(typeof(x)!='number' || typeof(n)!='number') {
    return NaN; //operate only with number
  }
  return x*n;
}
var division= function(x,n) {
  if(typeof(x)!='number' || typeof(n)!='number') {
    return NaN; //operate only with number
  }
  return x/n;
}

module.exports={suma:suma, resta:resta,
  multiplicacion:multiplica, division:division};
