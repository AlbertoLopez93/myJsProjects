"use strict"

function innerSuma (number, n){
	if(!((typeof number === 'number' || number instanceof Number) && (typeof n === 'number' || n instanceof Number))){
		return NaN;
	}
	return number + n;
}
function innerResta (number, n){
	if(!((typeof number === 'number' || number instanceof Number) && (typeof n === 'number' || n instanceof Number))){
		return NaN;
	}
	return number - n;
}
function innerMultiplicacion (number, n){
	if(!((typeof number === 'number' || number instanceof Number) && (typeof n === 'number' || n instanceof Number))){
		return NaN;
	}
	return number * n;
}
function innerDivision (number, n){
	if(!((typeof number === 'number' || number instanceof Number) && (typeof n === 'number' || n instanceof Number))){
		return NaN;
	}
	return number / n;
}

module.exports = {
	suma: innerSuma,
	resta: innerResta,
	multiplicacion: innerMultiplicacion,
	division: innerDivision
};