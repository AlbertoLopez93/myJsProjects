/****

timestamp: 1472846815000

****/

function createCoords(n){
	"use strict";

	var aux = 0;
	var newArr = [];
	for(let i=0; i<n; i++){
		newArr[i] = [];
		for(let j=0; j<2; j++){
			var y = 0;
			aux += Math.random() * 100
			aux = Math.round(aux);
			y = Math.round(Math.random() * 100);
			if(j==0){
				newArr[i][j] = aux;	
			}
			if(j==1){
				newArr[i][j] = y;	
			}
		}
	}
	return newArr;
}

createCoords(4);