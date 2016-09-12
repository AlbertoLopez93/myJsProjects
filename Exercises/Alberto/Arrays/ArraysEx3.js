/****

timestamp: 1472808480000

from skype

****/

function play(aray,first,last,intermedio)
{
  var n=intermedio.shift();
  var nuevo=aray;
  nuevo.unshift(first);
  nuevo.push(last);
  nuevo.splice(n,1,intermedio); //insert from n, only one element, elements intermedio
  return nuevo;
}