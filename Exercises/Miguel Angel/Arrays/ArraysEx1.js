/****

timestamp: 1472838856000

****/

"use strict"
function createCoords (n){
	var arr = [];
	var arrCoord = [];
	var arrTemp = [];
	var x = 0;
	var y = 0;
	for(let i = 0; i < n; i++){
		x += Number.parseInt(Math.random() * 100);
		y = Number.parseInt(Math.random() * 100);
		arrCoord[0] = x;
		arrCoord[1] = y;
		arr[arr.length] = arrCoord;
		arrCoord = [];
		y = 0;
	}
	return arr;
}