/****

timestamp: 1472807820000
skype

****/

"use strict"
function play(arr1, elemento1, elemento2, arr2){
	var arrRes = arr1.slice();
	arrRes.unshift(elemento1);
	arrRes.push(elemento2);
 	arrRes.splice(arr2[0], 0, arr2[1]);
 	return arrRes;
}
console.log(play([1,2,3], 'al inicio', 'al final', [2,'hola, soy goku']));