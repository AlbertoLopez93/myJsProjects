function calc(str1, str2, op){
	var x = Number(str1);
	var y = Number(str2);
	var res = 0;
	if(op != '+' && op !== '/' && op !== '*' && op !== '-'){
		return "invalid parameter"; 	
	}
	if(Number.isNaN(x) || Number.isNaN(y)){
		return NaN;
	}
	if(op === '*'? res = x*y : op === '-'? res = x-y : op === '+'? res = x+y : res= x/y );
	return res;
}

function howBigNumerIs(a, b, c){
	var uno = Number(a);
	var dos = Number(b);
	var tres = Number(c);
	if(Number.isNaN(uno) || Number.isNaN(dos) || Number.isNaN(tres)){
		return NaN;
	}
	var arr = [uno, dos, tres];	
	var inter;
do {
inter = false;
for (var i=0; i < arr.length-1; i++) {
if (arr[i] < arr[i+1]) {
var temp = arr[i];
arr[i] = arr[i+1];
arr[i+1] = temp;
inter = true;
}
}
} while (inter);
var res1 = Math.pow(arr[0], arr[1]);
var res2 = Math.pow(res1, arr[2]);
if(!Number.isFinite(res2)){
	return "Too Much!";
}
if(Number.isSafeInteger(res2)){
	return "OK!";
}
if(!Number.isSafeInteger(res2)){
	return "Warning!";
}
}


function sumPositivesAndNegatives(arr){
	var sumas = [];
	var pos=0, neg=0;
	for(let i=0; i<arr.length; i++){
		var valida;
		valida = arr[i];
		
		if(Array.isArray(valida) ){
			for(let i=0; i<valida.length; i++){
				var valida2;
				valida2 = valida[i];
				if(valida2 = Number(valida2)){
					if(valida2>0){
						//console.log("positivo: " + valida2);
						pos += valida2;
					}
					if(valida2<0){
						//console.log("negativos : " + valida2);
						neg += valida2;
					}
				}	
			}
		}
		if(valida = Number(valida)){
			if(valida>0){
				//console.log("positivo: " + valida);
				pos += valida;
			}
			if(valida<0){
				//console.log("negativos : " + valida);
				neg += valida;
			}
		}			
	}
	sumas[0] = pos;
	sumas[1] = neg;
	return sumas;
}

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
