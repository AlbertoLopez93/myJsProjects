/****

timestamp: 1472809140000
skype

****/

"use strict"
function play(arr1,first,end,ary2){
  let newArr = arr1;
  let ini = ary2[0];
  let str = ary2[1];
  let word = "";
  let pos =
    newArr = newArr.slice(0);
    console.log(newArr);
    newArr.unshift(first);
    newArr.push(end);
    newArr.splice(ini,0,str.toString());

    return newArr;
}
