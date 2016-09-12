/****

timestamp: 1472847100000

****/

// write a function called createCoords which receives an integer >= 0
// and returns an array filled with random between 0 an 100 coordinates [x,y]
// until "n".
"use strict"
function createCoords(n){

  let ary = [];
  let len = n;
  let cord = ["",""];
  let t = 0;
  let t1 = 0;
  let num = 0;

  for (var i = 0; i < len; i++) {

   cord[0] = parseInt(Math.random()*100)+(num+1);
   cord[1] = parseInt(Math.random()*100);

   ary[ary.length] = cord;
   t = cord[0];

   cord=["",""];
t1 = num + 100

  }return ary;

}
console.log(createCoords(5));
