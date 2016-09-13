/****

timestamp: 1472846862000

****/


function isInLine(coords){
	"use strict";

	var arrTemp = [];
	var sumas = 0;
	var res1;
	var res2;
	var sumPxP = 0;
	var first = [];
	var last = [];
	var total = 0;

	for(let i=0; i<coords.length-1; i++){
		for(let j=0; j<1; j++){
			arrTemp[j] = coords[i];
			arrTemp[j+1] = coords[i+1];
			//console.log(arrTemp);
		}

		//console.log(arrTemp);
		res1 = arrTemp[1][0] - arrTemp[0][0];
		//console.log(res1); 
		//console.log(res1);
		res2 = arrTemp[1][1] - arrTemp[0][1];
		//console.log(res2);
		//console.log(res2);
		res1 = Math.pow(res1, 2);
		//console.log(res1);
		res2 = Math.pow(res2, 2);
		//console.log(res2);
		sumPxP = res1 + res2;
		//console.log(sumPxP);
		sumPxP = Math.sqrt(sumPxP);
		//console.log(sumPxP);
		total += sumPxP;
		

	}

	
	first = coords[0];
	last = coords[coords.length-1];

	var resT1 = last[0] - first[0];
	var resT2 = last[1] - first[1];
	resT1 = Math.pow(resT1, 2);
	//console.log(resT1);
	resT2 = Math.pow(resT2, 2);
	//console.log(resT2);
	var lastSum = resT1 + resT2;
	lastSum = Math.sqrt(lastSum.toPrecision(10) ,2);
	
	//console.log(lastSum + " " + total);
	if(lastSum === total){
		return true;
	}
	else{
		return false;
	}

	//res1 = arr[1][0] - arr[0][0]; 
	//res2 = arr[0][1] - arr[1][1];	
}

isInLine([[0,0],[1,1],[2,2],[3,3],[4,4]]);