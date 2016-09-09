/**
 * Created by EDDY on 06/09/2016.
 *
 *
 */

function suma (numOne, numTwo) {
	if (typeof parseFloat (numOne) === 'number' && typeof parseFloat(numTwo) === 'number' ) {
		return numOne + numTwo;
	}
	return 'la suma no se puede efectuar, usa solo numeros ';

}
function resta (numOne, numTwo) {
	if (typeof parseFloat(numOne) === 'number' && typeof parseFloat(numTwo) === 'number') {
		return numOne - numTwo;
	}
	return 'la resta no se puede efectuar, usa solo numeros ';

}
function multiplicacion (numOne, numTwo) {
	if (typeof parseFloat(numOne) === 'number'&& typeof parseFloat(numTwo) === 'number') {
		return numOne * numTwo;
	}
	return 'la multiplicacion no se puede efectuar, usa solo numeros ';

}
function division (numOne, numTwo) {
	if (typeof parseInt (numOne) === 'number'&& typeof parseInt (numTwo) === 'number'&& parseInt (numTwo) !== 0) {
		return numOne / numTwo;
	}
	return 'la division no se puede efectuar, usa solo numeros, el denomidaror debe ser distinto de 0';

}


console.log(multiplicacion(NaN,2));
module.exports = suma;