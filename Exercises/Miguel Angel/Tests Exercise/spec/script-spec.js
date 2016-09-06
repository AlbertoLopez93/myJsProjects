function suma(numero1, numero2){
	var res;
	if(isNaN(numero1) || isNaN(numero2)){
		return 'NaN';
	} else if(typeof Number.parseFloat(numero1) === 'number' && typeof Number.parseFloat(numero2) === 'number'){
		return numero1 + numero2;
	}
}

function resta(numero1, numero2){
	if(typeof Number.parseInt(numero1) === 'number' && typeof Number.parseInt(numero2) === 'number'){
		return numero1 - numero2;
	} else {
		return false;
	}
}

function multiplicacion(numero1, numero2){
	if(typeof Number.parseInt(numero1) === 'number' && typeof Number.parseInt(numero2) === 'number'){
		return numero1 * numero2;
	} else {
		return false;
	}
}

function division(numero1, numero2){
	if(typeof Number.parseInt(numero1) === 'number' && typeof Number.parseInt(numero2) === 'number'){
		return numero1 / numero2;
	} else {
		return false;
	}
}

describe ("Testing Suma", function(){
	it ("Espero que 2 + 2 sea 4", function(){
		var res = suma(2,2);
		expect(res).toBe(4);
	});
	it ("Espero que 0.1 + 0.2 sea 7.2", function(){
		var res = suma(0.1,0.2);
		expect(res).toBe(0.3);
	});
	it ("Espero que 2 + -3 sea -1", function(){
		var res = suma(2,-3);
		expect(res).toBe(-1);
	});
	it ("Espero que 2 + Infinity sea Infinity", function(){
		var res = suma(2,Infinity);
		expect(res).toBe(Infinity);
	});
	it ("Espero que 3 + NaN sea NaN", function(){
		var res = suma(3,NaN);
		expect(res).toBe('NaN');
	});
	it ("Espero que 5 + undefined sea NaN", function(){
		var res = suma(5,undefined);
		expect(res).toBe('NaN');
	});
	it ("Espero que 10 + null sea 10", function(){
		var res = suma(10,null);
		expect(res).toBe(10);
	});
	it ("Espero que 21 + 2 sea 23", function(){
		var res = suma('21',2);
		expect(res).toBe('212');
	});
});