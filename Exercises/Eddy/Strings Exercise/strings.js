"use strict";

function transformToUnicode (param){
 var potato =[];
 var word = param;
 word = word.split('');
   for (var i = 0;i<word.length ;i++){
    potato[i]= word[i].codePointAt()
   }
 return potato;
}

function returnallIndex (str1, str2) {

 var matches=[];
 var unMatch=[];
 var copyStr1 = str1;

 for (var i = 0; i < copyStr1.length; i++) {
  if (copyStr1.indexOf (str2, i) !== -1) {
   matches[matches.length] = copyStr1.indexOf (str2, i);
   i = copyStr1.indexOf (str2, i);
  }
 }
 if(matches.length===0){
  return -1;
 }
 return matches;
}




function capitalize(str) {
    var potato='';
    var copyStr = str;
    var potato1 = copyStr.slice(0, 1).toUpperCase();
    var potato2 = copyStr.slice(1).toLowerCase();
    potato = potato.concat(potato1,potato2);
    return [potato];

}

function closerIndex (str1, str2) {

 var copyStr1 = str1;
 var copyStr2 = str2;
 var inicioDos = '';
 var finalDos = '';

 if (copyStr2.length > 1) {
  inicioDos = copyStr2[0];//i
  finalDos = copyStr2[copyStr2.length - 1]; //ñ
 }
 if (copyStr2.length === 1) {
  inicioDos = copyStr2[0];
  finalDos = copyStr2[0];
 }

 if (copyStr1.includes (copyStr2)) {
  if (copyStr1.indexOf (inicioDos) == (copyStr1.length - (copyStr1.lastIndexOf (finalDos) + copyStr2.length)) && copyStr2.length <= 1) {
   return 0;
  }
  if (copyStr1.indexOf (inicioDos) < copyStr1.length - (copyStr1.indexOf (copyStr2) + copyStr2.length)) {
   return 1;
  }
  if (copyStr1.indexOf (inicioDos) > copyStr1.length - (copyStr1.indexOf (copyStr2) + copyStr2.length)) {
   return -1;
  }


  if (copyStr1.indexOf (inicioDos) === copyStr1.length - (copyStr1.indexOf (copyStr2) + copyStr2.length) && copyStr2.length > 1) {
   return 0;
  }

  if (!copyStr1.includes (copyStr2)) {
   console.log ('uno no contiene a dos')
  }
 }
}


function reverseWords (str1) {

 var copyStr1 = str1;
 var newcopy = '';
 var con = '';
 for (var i = 0; i < copyStr1.length; i++) {
  if (copyStr1[i] === ' ') {
   con += ',' + copyStr1[i] + ','
  }
  con += copyStr1[i];
 }
 copyStr1 = con.split (',')
 for (var i = 0; i < copyStr1.length; i++) {
  for (var j = copyStr1[i].length - 1; j >= 0; j--) {
   newcopy += copyStr1[i][j];
  }
 }
 newcopy = newcopy.replace ('1', "ONE");
 newcopy = newcopy.replace ('2', "TWO");
 newcopy = newcopy.replace ('3', "THREE");
 newcopy = newcopy.replace ('4', "FOUR");
 newcopy = newcopy.replace ('5', "FIVE");
 newcopy = newcopy.replace ('6', "SIX");
 newcopy = newcopy.replace ('7', "SEVEN");
 newcopy = newcopy.replace ('8', 'EIGTH');
 newcopy = newcopy.replace ('9', "NINE");
 newcopy = newcopy.replace ('0', "ZERO");

 return newcopy;

}


module.exports = {
    transformToUnicode: transformToUnicode,
    returnAllIndex: returnAllIndex,
    capitalize: capitalize,
    closerIndex: closerIndex,
    reverseWords: reverseWords
}
