"use strict"
function transformToUnicode(str){
 var arr = [];
 for(let i = 0; i < str.length; i++){
  arr[arr.length] = str.codePointAt(i);
 }
 return arr;
}


function returnAllIndex(str1,str2){
 var a = [];
 for(let i = 0; i < str1.length; i++){
  if(str1.indexOf(str2[i]) >= 0){
   a[a.length] = str1.indexOf(str2[i]);
  }
 }
 if(a.length < 1){
  a = -1;
 } else if(a.length === 1){
  a = a[0];
 }
 return a;
}

function capitalize (str){
 var arrStr = [];
 var resStr = '';
 var tempStr = '';
 arrStr = str.split(' ');
 for(let i = 0; i < arrStr.length; i++){
  tempStr = arrStr[i].slice(0,1).toUpperCase();
  tempStr += arrStr[i].slice(1).toLowerCase();
  if(i === arrStr.length-1){
   resStr = resStr.concat(tempStr);
  } else {
   resStr = resStr.concat(tempStr, ' ');
  }
 }
 return resStr;
}


function closerIndex (str1, str2){
 var firstIndexStr2 = str1.indexOf(str2);
 var lastIndexStr2 = str1.lastIndexOf(str2);
 var midLength = str1.length / 2;
 if(lastIndexStr2 === ((str1.length-1) - firstIndexStr2)){
  return 0;
 }  
 if((firstIndexStr2 > 0 && firstIndexStr2 < midLength) || (lastIndexStr2 > 0 && lastIndexStr2 < midLength)){
    return 1;
 }
 if((firstIndexStr2 > midLength && firstIndexStr2 < str1.length-1) || (lastIndexStr2 > midLength && lastIndexStr2 < str1.length-1)){
    return -1;
 }
 if(firstIndexStr2 === -1 && lastIndexStr2 === -1){
    return undefined;
 }
}


function reverseWords(str){
 var dicNums = {'0': 'ZERO',
       '1': 'ONE',
       '2': 'TWO', 
       '3': 'THREE', 
       '4': 'FOUR', 
       '5': 'FIVE', 
       '6': 'SIX', 
       '7': 'SEVEN', 
       '8': 'EIGTH', 
       '9': 'NINE'};
 var arrStr = str.split(' ');
 var reversedStr = '';
 var tempStr = '';
 for(let j = 0; j < arrStr.length; j++){
  for(let i = arrStr[j].length-1; i >= 0; i--){
   if(+(arrStr[j][i]) || arrStr[j][i] === '0'){
    tempStr += dicNums[arrStr[j][i]];
   } else {
    tempStr += arrStr[j][i];
   }
  }
  if(j === arrStr.length-1){
   reversedStr = reversedStr.concat(tempStr);
  } else {
   reversedStr = reversedStr.concat(tempStr, ' ');
  }
  tempStr = '';
 }
 
 return reversedStr;
}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
