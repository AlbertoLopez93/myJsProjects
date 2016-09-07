"use strict"
/**
 * Created by EDDY on 30/08/2016.
 */
//#3WRITE A FUNCTION THAT FORMAT AND ROUND A FLOATING POINT TO ONLY HAVE TWO DECIMALS

function rounded (param) {
	var numberCopy = param.split ('.');
	numberCopy[1] = numberCopy[1].split ('');
	numberCopy[1].length = 3;

	for (var i = numberCopy[1].length - 1; i > 1; i--) {
		if (numberCopy[1][i] >= 5) {
			numberCopy[1][i - 1] = Number (numberCopy[1][i - 1]) + Number (1);
			numberCopy[1].length = numberCopy[1].length - 1;
		}
		if (numberCopy[1][i] < 5) {
			numberCopy[1][i] = Number (0);
			numberCopy[1].length = numberCopy[1].length - 1;
		}
		var numberString = numberCopy[0].toString()+'.';
			for (var j = 0; j < numberCopy[1].length; j++) {
				numberString += numberCopy[1][j];
			}
	}
	return numberString;
}
console.log (rounded ('23.984654321')); //23.98
console.log (rounded ('23.986654321')); //23.99

