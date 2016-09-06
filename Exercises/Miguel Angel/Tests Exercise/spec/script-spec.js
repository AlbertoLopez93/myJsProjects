function suma(numero1, numero2){
	var res = numero1 + numero2;
	if(typeof numero1 === 'boolean' || typeof numero2 === 'boolean' || numero1 === null || numero2 === null){
		return NaN;
	}
	if(isNaN(res)){
		return NaN;
	} else if(typeof res === 'string') {
		return NaN;
	}
	res = res.toPrecision(5);
	res = Number.parseFloat(res);
	return res;
}

function resta(numero1, numero2){
	var res = numero1 - numero2;
	if(typeof numero1 === 'string' || typeof numero2 === 'string' || typeof numero1 === 'boolean' || typeof numero2 === 'boolean' || numero1 === null || numero2 === null){
		return NaN;
	}
	if(isNaN(res)){
		return NaN;
	} else if(typeof res === 'string') {
		return NaN;
	}
	res = res.toPrecision(5);
	res = Number.parseFloat(res);
	return res;
}

function multiplicacion(numero1, numero2){
	var res = numero1 * numero2;
	if(typeof numero1 === 'string' || typeof numero2 === 'string' || typeof numero1 === 'boolean' || typeof numero2 === 'boolean' || numero1 === null || numero2 === null){
		return NaN;
	}
	if(isNaN(res)){
		return NaN;
	} else if(typeof res === 'string') {
		return NaN;
	}
	res = res.toPrecision(5);
	res = Number.parseFloat(res);
	return res;
}

function division(numero1, numero2){
	var res = numero1 / numero2;
	if(typeof numero1 === 'string' || typeof numero2 === 'string' || typeof numero1 === 'boolean' || typeof numero2 === 'boolean' || numero1 === null || numero2 === null){
		return NaN;
	}
	if(isNaN(res)){
		return NaN;
	} else if(typeof res === 'string') {
		return NaN;
	}
	res = res.toPrecision(5);
	res = Number.parseFloat(res);
	return res;
}

describe ("Testing Suma", function(){
	it ("Espero que 2 + 2 sea 4", function(){
		var res = suma(2,2);
		expect(res).toBe(4);
	});
	it ("Espero que 0.12 + 0.21 sea 0.33", function(){
		var res = suma(0.12,0.21);
		expect(res).toBe(0.33);
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
		expect(res).toBeNaN();
	});
	it ("Espero que 5 + undefined sea NaN", function(){
		var res = suma(5,undefined);
		expect(res).toBeNaN();
	});
	it ("Espero que 10 + null sea NaN", function(){
		var res = suma(10,null);
		expect(res).toBeNaN();
	});
	it ("Espero que 21 + 2 sea NaN", function(){
		var res = suma('21',2);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 + [1,2,3] sea NaN", function(){
		var res = suma(2,[1,2,3]);
		expect(res).toBeNaN();
	});
	it ("Espero que true + true sea NaN", function(){
		var res = suma(true,true);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 + false sea NaN", function(){
		var res = suma(2,false);
		expect(res).toBeNaN();
	});
	it ("Espero que Number(2) + Number(3) sea 5", function(){
		var res = suma(Number(2),Number(3));
		expect(res).toBe(5);
	});
	it ("Espero que Number(2) + Number(3) sea 5", function(){
		var res = suma(Number(2),5);
		expect(res).toBe(7);
	});
	it ("Espero que 0 + 10 sea 10", function(){
		var res = suma(0,10);
		expect(res).toBe(10);
	});
	it ("Espero que Infinity + Infinity sea Infinity", function(){
		var res = suma(Infinity,Infinity);
		expect(res).toBe(Infinity);
	});
});

describe ("Testing Resta", function(){
	it ("Espero que 2 - 2 sea 0", function(){
		var res = resta(2,2);
		expect(res).toBe(0);
	});
	it ("Espero que 0.12 - 0.21 sea 0.33", function(){
		var res = resta(0.12,0.21);
		expect(res).toBe(-0.09);
	});
	it ("Espero que 2 - -3 sea -1", function(){
		var res = resta(2,-3);
		expect(res).toBe(5);
	});
	it ("Espero que Infinity - Infinity sea NaN", function(){
		var res = resta(Infinity,Infinity);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 - Infinity sea -Infinity", function(){
		var res = resta(2,Infinity);
		expect(res).toBe(-Infinity);
	});
	it ("Espero que 3 - NaN sea NaN", function(){
		var res = resta(3,NaN);
		expect(res).toBeNaN();
	});
	it ("Espero que 5 - undefined sea NaN", function(){
		var res = resta(5,undefined);
		expect(res).toBeNaN();
	});
	it ("Espero que 10 - null sea NaN", function(){
		var res = resta(10,null);
		expect(res).toBeNaN();
	});
	it ("Espero que 21 - 2 sea NaN", function(){
		var res = resta('21',2);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 - [1,2,3] sea NaN", function(){
		var res = resta(2,[1,2,3]);
		expect(res).toBeNaN();
	});
	it ("Espero que true - true sea NaN", function(){
		var res = resta(true,true);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 - false sea NaN", function(){
		var res = resta(2,false);
		expect(res).toBeNaN();
	});
	it ("Espero que Number(2) - Number(3) sea 5", function(){
		var res = resta(Number(2),Number(3));
		expect(res).toBe(-1);
	});
	it ("Espero que Number(2) - 5 sea -3", function(){
		var res = resta(Number(2),5);
		expect(res).toBe(-3);
	});
	it ("Espero que 0 - 10 sea 10", function(){
		var res = resta(0,10);
		expect(res).toBe(-10);
	});
});

describe ("Testing Multiplicacion", function(){
	it ("Espero que 2 * 2 sea 4", function(){
		var res = multiplicacion(2,2);
		expect(res).toBe(4);
	});
	it ("Espero que 0.12 * 0.21 sea 0.33", function(){
		var res = multiplicacion(0.12,0.21);
		expect(res).toBe(0.0252);
	});
	it ("Espero que 2 * -3 sea -1", function(){
		var res = multiplicacion(2,-3);
		expect(res).toBe(-6);
	});
	it ("Espero que 2 * Infinity sea Infinity", function(){
		var res = multiplicacion(2,Infinity);
		expect(res).toBe(Infinity);
	});
	it ("Espero que 3 * NaN sea NaN", function(){
		var res = multiplicacion(3,NaN);
		expect(res).toBeNaN();
	});
	it ("Espero que 5 * undefined sea NaN", function(){
		var res = multiplicacion(5,undefined);
		expect(res).toBeNaN();
	});
	it ("Espero que 10 * null sea NaN", function(){
		var res = multiplicacion(10,null);
		expect(res).toBeNaN();
	});
	it ("Espero que 21 * 2 sea NaN", function(){
		var res = multiplicacion('21',2);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 * [1,2,3] sea NaN", function(){
		var res = multiplicacion(2,[1,2,3]);
		expect(res).toBeNaN();
	});
	it ("Espero que true * true sea NaN", function(){
		var res = multiplicacion(true,true);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 * false sea NaN", function(){
		var res = multiplicacion(2,false);
		expect(res).toBeNaN();
	});
	it ("Espero que Number(2) * Number(3) sea 5", function(){
		var res = multiplicacion(Number(2),Number(3));
		expect(res).toBe(6);
	});
	it ("Espero que Number(2) * 5 sea ", function(){
		var res = multiplicacion(Number(2),5);
		expect(res).toBe(10);
	});
	it ("Espero que 0 * 10 sea 0", function(){
		var res = multiplicacion(0,10);
		expect(res).toBe(0);
	});it ("Espero que Infinity * Infinity sea Infinity", function(){
		var res = multiplicacion(Infinity,Infinity);
		expect(res).toBe(Infinity);
	});
});

describe ("Testing Division", function(){
	it ("Espero que 2 / 2 sea 4", function(){
		var res = division(2,2);
		expect(res).toBe(1);
	});
	it ("Espero que 0.12 / 0.21 sea 0.33", function(){
		var res = division(0.12,0.21);
		expect(res).toBe(0.57143);
	});
	it ("Espero que 2 / -3 sea -1", function(){
		var res = division(2,-3);
		expect(res).toBe(-0.66667);
	});
	it ("Espero que 2 / Infinity sea Infinity", function(){
		var res = division(2,Infinity);
		expect(res).toBe(0);
	});
	it ("Espero que 3 / NaN sea NaN", function(){
		var res = division(3,NaN);
		expect(res).toBeNaN();
	});
	it ("Espero que 5 / undefined sea NaN", function(){
		var res = division(5,undefined);
		expect(res).toBeNaN();
	});
	it ("Espero que 10 / null sea NaN", function(){
		var res = division(10,null);
		expect(res).toBeNaN();
	});
	it ("Espero que 21 / 2 sea NaN", function(){
		var res = division('21',2);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 / [1,2,3] sea NaN", function(){
		var res = division(2,[1,2,3]);
		expect(res).toBeNaN();
	});
	it ("Espero que true / true sea NaN", function(){
		var res = division(true,true);
		expect(res).toBeNaN();
	});
	it ("Espero que 2 / false sea NaN", function(){
		var res = division(2,false);
		expect(res).toBeNaN();
	});
	it ("Espero que Number(2) / Number(3) sea 5", function(){
		var res = division(Number(2),Number(3));
		expect(res).toBe(0.66667);
	});
	it ("Espero que Number(2) / 5 sea ", function(){
		var res = division(Number(2),5);
		expect(res).toBe(0.4);
	});
	it ("Espero que 0 / 10 sea 0", function(){
		var res = division(0,10);
		expect(res).toBe(0);
	});
	it ("Espero que Infinity / Infinity sea NaN", function(){
		var res = division(Infinity,Infinity);
		expect(res).toBeNaN();
	});
});