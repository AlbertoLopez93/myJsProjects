/**
 * script-spec.js  demo  how to use jasmine
 * Created by EDDY on 06/09/2016.
 *
 */
function suma (numOne, numTwo) {
	if (isNaN(numOne)||isNaN(numOne) ) {
		return 'la suma no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '
	}

	if (typeof parseFloat (numOne) === 'number' && typeof parseFloat(numTwo) === 'number' ) {
		return numOne + numTwo;
	}

	return 'la suma no se puede efectuar, usa solo numeros ';

}
function resta (numOne, numTwo) {
	if (isNaN(numOne)||isNaN(numOne) ) {
		return 'la resta no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '
	}

	if (typeof parseFloat(numOne) === 'number' && typeof parseFloat(numTwo) === 'number') {
		return numOne - numTwo;
	}

	return 'la resta no se puede efectuar, usa solo numeros ';

}
function multiplicacion (numOne, numTwo) {
	if (isNaN(numOne)||isNaN(numOne) ) {
		return 'la multiplicacion no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '
	}

	if (typeof parseFloat(numOne) === 'number'&& typeof parseFloat(numTwo) === 'number') {
		return numOne * numTwo;
	}

	return 'la multiplicacion no se puede efectuar, usa solo numeros ';

}
function division (numOne, numTwo) {
	if (isNaN(numOne)||isNaN(numOne) ) {
		return 'la division no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '
	}

	if (typeof parseInt (numOne) === 'number'&& typeof parseInt (numTwo) === 'number'&& parseInt (numTwo) !== 0) {
		return numOne / numTwo;
	}

	return 'la division no se puede efectuar, usa solo numeros, el denomidaror debe ser distinto de 0';

}

describe ('testing suma', function () {
																	// suma
	it ("Expect 2+2 = 4", function () {
		var res = suma (2, 2);
		expect (res).toBe (4);
	});
	it ("Expect 0.1+0.2 = 0.3", function () {
		var res = suma (0.1, 0.2);
		expect (res).toBe (0.3);
	});
	it ("Expect 3+3 = 6", function () {
		var res = suma (3, 3);
		expect (res).toBe (6);
	});
	it ("Expect 4+4 = 8", function () {
		var res = suma (4, 4);
		expect (res).toBe (8);
	});
	it ("Expect 12+2 = 14", function () {
		var res = suma (12, 2);
		expect (res).toBe (14);
	});
	it ("Expect Infinity+2 = Infinity", function () {
		var res = suma (Infinity, 2);
		expect (res).toBe (Infinity);
	});
	it ("Expect undefined+2 = 'la suma no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '", function () {
		var res = suma (undefined, 2);
		expect (res).toBe ('la suma no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros ');
	});
																	// resta
	it ("Expect 2-2 = 0", function () {
		var res = resta (2, 2);
		expect (res).toBe (0);
	});
	it ("Expect 3-3 = 0", function () {
		var res = resta (3, 3);
		expect (res).toBe (0);
	});
	it ("Expect 14-4 = 10", function () {
		var res = resta (14, 4);
		expect (res).toBe (10);
	});
	it ("Expect 12-14 = -2", function () {
		var res = resta (12, 14);
		expect (res).toBe (-2);
	});
	it ("Expect Infinity-2 = Infinity", function () {
		var res = resta (Infinity, 2);
		expect (res).toBe (Infinity);
	});
																	// multiplicacion
	it ("Expect 2*2 = 4", function () {
		var res = multiplicacion (2, 2);
		expect (res).toBe (4);
	});
	it ("Expect 3*3 = 9", function () {
		var res = multiplicacion (3, 3);
		expect (res).toBe (9);
	});
	it ("Expect 4*-4 = -16", function () {
		var res = multiplicacion(4, -4);
		expect (res).toBe (-16);
	});
	it ("Expect 12*2 = 24", function () {
		var res = multiplicacion (12, 2);
		expect (res).toBe (24);
	});
	it ("Expect 0*2 = 0", function () {
		var res = multiplicacion (0, 2);
		expect (res).toBe (0);
	});
	it ("Expect 12*Infinity = Infinity", function () {
		var res = multiplicacion (Infinity, 2);
		expect (res).toBe (Infinity);
	});
	it ("Expect NaN*2 = 'la multiplicacion no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros '", function () {
		var res = multiplicacion (NaN, 2);
		expect (res).toBe ('la multiplicacion no se puede efectuar con NaN o undefined en ningun operador, usa solo numeros ');
	});
																	// division
	it ("Expect 2/2 = 1", function () {
		var res = division (2, 2);
		expect (res).toBe (1);
	});
	it ("Expect 3/6 = .5", function () {
		var res = division(3, 6);
		expect (res).toBe (.5);
	});
	it ("Expect 4/0 = 8", function () {
		var res = division (4, 0);
		expect (res).toBe ('la division no se puede efectuar, usa solo numeros, el denomidaror debe ser distinto de 0');
	});
	it ("Expect 0/2 = 0", function () {
		var res = division (0, 2);
		expect (res).toBe (0);
	});
	it ("Expect 0/Infinity = 0", function () {
		var res = division (0, Infinity);
		expect (res).toBe (0);
	});
	it ("Expect Infinity/Infinity = 0", function () {
		var res = division (0, Infinity);
		expect (res).toBe (0);
	});
});
