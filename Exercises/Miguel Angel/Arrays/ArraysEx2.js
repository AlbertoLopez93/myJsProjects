/****

timestamp: 1472838907000

****/

"use strict"
function isInLine(arr){
	var resStartEnd = 0;
	var resTotal = 0;
	resStartEnd = distance(arr[0][0], arr[0][1], arr[arr.length-1][0], arr[arr.length-1][1]);
	for(let i = 0; i < arr.length-1; i++){
		resTotal += distance(arr[i][0], arr[i][1], arr[i+1][0], arr[i+1][1]);
	}
	resTotal = resTotal.toPrecision(12);
	resStartEnd = resStartEnd.toPrecision(12);
	console.log(resTotal);
	console.log(resStartEnd);
	if(resTotal === resStartEnd){
		return true;
	} else {
		return false;
	}
}

function distance(x1, y1, x2, y2){
	var d = 0;
	d = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
	return d;
}