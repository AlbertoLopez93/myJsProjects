"use strict"

let functions = require("../calculator");

let suma = functions.suma;
let resta = functions.resta;
let multiplicacion = functions.multiplicacion;
let division = functions.division;

describe ("Testing Suma", function(){
	it ("Espero que 2 + 2 sea 4", function(){
		var res = suma(2,2);
		expect(res).toBe(4);
	});
	it ("Espero que 0.12 + 0.21 sea 0.33", function(){
		var res = suma(0.12,0.21);
		expect(res).toBe(0.32999999999999996);
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
		var res = resta([],{});
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
		expect(res).toBe(0.0251999999999999970);
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
		expect(res).toBe(0.5714285714285714);
	});
	it ("Espero que 2 / -3 sea -1", function(){
		var res = division(2,-3);
		expect(res).toBe(-0.6666666666666666);
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
		expect(res).toBe(0.6666666666666666);
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

describe("Testing basic functions", function () {

    describe("Testing suma function", function () {
        it("should exists", function () {
            expect(suma).toBeDefined();
        });
        describe("Tests against values that are not numbers", function () {
            it("Should not work with strings", function () {
                expect(isNaN(suma("hola", "mundo"))).toBe(true);
            });
            it("Should not work with booleans", function () {
                expect(isNaN(suma(false, false))).toBe(true);
                expect(isNaN(suma(true, true))).toBe(true);
                expect(isNaN(suma(false, true))).toBe(true);
                expect(isNaN(suma(true, false))).toBe(true);
                expect(isNaN(suma(true, 1))).toBe(true);
                expect(isNaN(suma(false, 1))).toBe(true);
            });
            it("should not work with arrays", function () {
                expect(isNaN(suma([1,2,3], [1,2,3]))).toBe(true);
                expect(isNaN(suma([1,2,3], 1))).toBe(true);
                expect(isNaN(suma(1, [1,2,3]))).toBe(true);
                expect(suma([1,2,3], [1,2,3]) + "").toBe("NaN");
            });
            it("should not work with nulls", function () {
                expect(isNaN(suma(null, null))).toBe(true);
                expect(isNaN(suma(null, 0))).toBe(true);
                expect(isNaN(suma(1, null))).toBe(true);
            });
            it("should not work with undefineds", function () {
                expect(isNaN(suma(undefined, undefined))).toBe(true);
                expect(isNaN(suma(undefined, 1))).toBe(true);
                expect(isNaN(suma(0, undefined))).toBe(true);
            });
            it("should not work with objects", function () {
                expect(isNaN(suma({}, {}))).toBe(true);
                expect(isNaN(suma(0, {}))).toBe(true);
                expect(isNaN(suma({}, 1))).toBe(true);
                expect(suma({}, {}) + "").toBe("NaN");
            });
            it("should not work with functions", function () {
                expect(isNaN(suma(function(){}, function(){}))).toBe(true);
                expect(isNaN(suma(function(){}, 1))).toBe(true);
                expect(isNaN(suma(0, function(){}))).toBe(true);
                expect(suma(function(){}, function(){}) + "").toBe("NaN");
            });
        });
        it("should work with 2 positive integers", function () {
            expect(suma(1,1)).toBe(2);
        });
        it("should work with 2 negative integers", function () {
            expect(suma(-1,-1)).toBe(-2);
        });
        it("should work with a positive integer and a negative integer", function () {
            expect(suma(-1,2)).toBe(1);
            expect(suma(-2,1)).toBe(-1);
        });
        it("should work with 0 zeros", function () {
            expect(suma(0,0)).toBe(0);
        });
        it("should work with positive integers and zeros", function () {
            expect(suma(0, 1)).toBe(1);
            expect(suma(1,0)).toBe(1);
        });
        it("should work with negative integers and zeros", function () {
            expect(suma(0, -1)).toBe(-1);
            expect(suma(-1, 0)).toBe(-1);
        });
        it("should work with 2 floating positive numbers", function () {
            expect(suma(1.1, 1.2)).toBe(2.3);
            expect(suma(2.5, 2.5)).toBe(5);
        });
        it("should work with 2 floating negative numbers", function () {
            expect(suma(-1.1, -1.2)).toBe(-2.3);
            expect(suma(-2.5, -2.5)).toBe(-5);
        });
        it("should work with a positive floating and a negative floating", function () {
            expect(suma(5.5, -1.2)).toBe(4.3);
            expect(suma(-5.5, 1.2)).toBe(-4.3);
        });
        it("shold work with Infinity", function () {
            expect(suma(Infinity, Infinity)).toBe(Infinity);
            expect(suma(-Infinity, -Infinity)).toBe(-Infinity);
            expect(isNaN(suma(Infinity, -Infinity))).toBe(true);
            expect(suma(Infinity, -Infinity) + "").toBe("NaN");
            expect(suma(Infinity, -1)).toBe(Infinity);
            expect(suma(-Infinity, 1)).toBe(-Infinity);
        });
    });

    describe("Testing resta function", function () {
        it("should exists", function () {
            expect(resta).toBeDefined();
        });
        describe("Tests against values that are not numbers", function () {
            it("Should not work with strings", function () {
                expect(isNaN(resta("hola", "mundo"))).toBe(true);
            });
            it("Should not work with booleans", function () {
                expect(isNaN(resta(false, false))).toBe(true);
                expect(isNaN(resta(true, true))).toBe(true);
                expect(isNaN(resta(false, true))).toBe(true);
                expect(isNaN(resta(true, false))).toBe(true);
                expect(isNaN(resta(true, 1))).toBe(true);
                expect(isNaN(resta(false, 1))).toBe(true);
            });
            it("should not work with arrays", function () {
                expect(isNaN(resta([1,2,3], [1,2,3]))).toBe(true);
                expect(isNaN(resta([1,2,3], 1))).toBe(true);
                expect(isNaN(resta(1, [1,2,3]))).toBe(true);
                expect(resta([1,2,3], [1,2,3]) + "").toBe("NaN");
            });
            it("should not work with nulls", function () {
                expect(isNaN(resta(null, null))).toBe(true);
                expect(isNaN(resta(null, 0))).toBe(true);
                expect(isNaN(resta(1, null))).toBe(true);
            });
            it("should not work with undefineds", function () {
                expect(isNaN(resta(undefined, undefined))).toBe(true);
                expect(isNaN(resta(undefined, 1))).toBe(true);
                expect(isNaN(resta(0, undefined))).toBe(true);
            });
            it("should not work with objects", function () {
                expect(isNaN(resta({}, {}))).toBe(true);
                expect(isNaN(resta(0, {}))).toBe(true);
                expect(isNaN(resta({}, 1))).toBe(true);
                expect(resta({}, {}) + "").toBe("NaN");
            });
            it("should not work with functions", function () {
                expect(isNaN(resta(function(){}, function(){}))).toBe(true);
                expect(isNaN(resta(function(){}, 1))).toBe(true);
                expect(isNaN(resta(0, function(){}))).toBe(true);
                expect(resta(function(){}, function(){}) + "").toBe("NaN");
            });
        });
        it("should work with 2 positive integers", function () {
            expect(resta(1,1)).toBe(0);
        });
        it("should work with 2 negative integers", function () {
            expect(resta(-1,-1)).toBe(0);
        });
        it("should work with a positive integer and a negative integer", function () {
            expect(resta(-1,2)).toBe(-3);
            expect(resta(-2,1)).toBe(-3);
        });
        it("should work with 0 zeros", function () {
            expect(resta(0,0)).toBe(0);
        });
        it("should work with positive integers and zeros", function () {
            expect(resta(0, 1)).toBe(-1);
            expect(resta(1,0)).toBe(1);
        });
        it("should work with negative integers and zeros", function () {
            expect(resta(0, -1)).toBe(1);
            expect(resta(-1, 0)).toBe(-1);
        });
        it("should work with 2 floating positive numbers", function () {
            expect(resta(1.1, 1.2)).toBe(-0.09999999999999987);
            expect(resta(5.5, 4.4)).toBe(1.0999999999999996);
            expect(resta(10.0, 5.0)).toBe(5);
            expect(resta(2.5, 2.5)).toBe(0);
        });
        it("should work with 2 floating negative numbers", function () {
            expect(resta(-1.1, -1.2)).toBe(0.09999999999999987);
            expect(resta(-5.5, -4.4)).toBe(-1.0999999999999996);
            expect(resta(-10.0, -5.0)).toBe(-5);
            expect(resta(-2.5, -2.5)).toBe(0);
        });
        it("should work with a positive floating and a negative floating", function () {
            expect(resta(5.5, -1.2)).toBe(6.7);
            expect(resta(-5.5, 1.2)).toBe(-6.7);
        });
        it("shold work with Infinity", function () {
            expect(isNaN(resta(Infinity, Infinity))).toBe(true);
            expect(resta(Infinity, Infinity) + "").toBe("NaN");
            expect(isNaN(resta(-Infinity, -Infinity))).toBe(true);
            expect(resta(-Infinity, -Infinity) + "").toBe("NaN");
            expect(resta(Infinity, -Infinity)).toBe(Infinity);
            expect(resta(-Infinity, Infinity)).toBe(-Infinity);
        });
    });

    describe("Testing multiplicacion function", function () {
        it("should exists", function () {
            expect(multiplicacion).toBeDefined();
        });
        describe("Tests against values that are not numbers", function () {
            it("Should not work with strings", function () {
                expect(isNaN(multiplicacion("hola", "mundo"))).toBe(true);
            });
            it("Should not work with booleans", function () {
                expect(isNaN(multiplicacion(false, false))).toBe(true);
                expect(isNaN(multiplicacion(true, true))).toBe(true);
                expect(isNaN(multiplicacion(false, true))).toBe(true);
                expect(isNaN(multiplicacion(true, false))).toBe(true);
                expect(isNaN(multiplicacion(true, 1))).toBe(true);
                expect(isNaN(multiplicacion(false, 1))).toBe(true);
            });
            it("should not work with arrays", function () {
                expect(isNaN(multiplicacion([1,2,3], [1,2,3]))).toBe(true);
                expect(isNaN(multiplicacion([1,2,3], 1))).toBe(true);
                expect(isNaN(multiplicacion(1, [1,2,3]))).toBe(true);
                expect(multiplicacion([1,2,3], [1,2,3]) + "").toBe("NaN");
            });
            it("should not work with nulls", function () {
                expect(isNaN(multiplicacion(null, null))).toBe(true);
                expect(isNaN(multiplicacion(null, 0))).toBe(true);
                expect(isNaN(multiplicacion(1, null))).toBe(true);
            });
            it("should not work with undefineds", function () {
                expect(isNaN(multiplicacion(undefined, undefined))).toBe(true);
                expect(isNaN(multiplicacion(undefined, 1))).toBe(true);
                expect(isNaN(multiplicacion(0, undefined))).toBe(true);
            });
            it("should not work with objects", function () {
                expect(isNaN(multiplicacion({}, {}))).toBe(true);
                expect(isNaN(multiplicacion(0, {}))).toBe(true);
                expect(isNaN(multiplicacion({}, 1))).toBe(true);
                expect(multiplicacion({}, {}) + "").toBe("NaN");
            });
            it("should not work with functions", function () {
                expect(isNaN(multiplicacion(function(){}, function(){}))).toBe(true);
                expect(isNaN(multiplicacion(function(){}, 1))).toBe(true);
                expect(isNaN(multiplicacion(0, function(){}))).toBe(true);
                expect(multiplicacion(function(){}, function(){}) + "").toBe("NaN");
            });
        });
        it("should work with 2 positive integers", function () {
            expect(multiplicacion(1,1)).toBe(1);
        });
        it("should work with 2 negative integers", function () {
            expect(multiplicacion(-1,-1)).toBe(1);
        });
        it("should work with a positive integer and a negative integer", function () {
            expect(multiplicacion(-1,2)).toBe(-2);
            expect(multiplicacion(-2,1)).toBe(-2);
        });
        it("should work with 0 zeros", function () {
            expect(multiplicacion(0,0)).toBe(0);
        });
        it("should work with positive integers and zeros", function () {
            expect(multiplicacion(0, 1)).toBe(0);
            expect(multiplicacion(1,0)).toBe(0);
        });
        it("should work with negative integers and zeros", function () {
            expect(multiplicacion(0, -1)).toBe(0);
            expect(multiplicacion(-1, 0)).toBe(0);
        });
        it("should work with 2 floating positive numbers", function () {
            expect(multiplicacion(1.1, 1.2)).toBe(1.32);
            expect(multiplicacion(5.5, 4.4)).toBe(24.200000000000003);
            expect(multiplicacion(10.0, 5.0)).toBe(50);
            expect(multiplicacion(2.5, 2.5)).toBe(6.25);
        });
        it("should work with 2 floating negative numbers", function () {
            expect(multiplicacion(-1.1, -1.2)).toBe(1.32);
            expect(multiplicacion(-5.5, -4.4)).toBe(24.200000000000003);
            expect(multiplicacion(-10.0, -5.0)).toBe(50);
            expect(multiplicacion(-2.5, -2.5)).toBe(6.25);
        });
        it("should work with a positive floating and a negative floating", function () {
            expect(multiplicacion(5.5, -1.2)).toBe(-6.6);
            expect(multiplicacion(-5.5, 1.2)).toBe(-6.6);
        });
        it("shold work with Infinity", function () {
            expect(multiplicacion(Infinity, Infinity)).toBe(Infinity);
            expect(multiplicacion(Infinity, -Infinity)).toBe(-Infinity);
            expect(multiplicacion(-Infinity, Infinity)).toBe(-Infinity);
            expect(multiplicacion(-Infinity, -Infinity)).toBe(Infinity);
            expect(multiplicacion(Infinity, 1)).toBe(Infinity);
            expect(multiplicacion(Infinity, -1)).toBe(-Infinity);
            expect(multiplicacion(-1, Infinity)).toBe(-Infinity);
            expect(multiplicacion(-Infinity, -1)).toBe(Infinity);
            expect(isNaN(multiplicacion(Infinity, 0))).toBe(true);
            expect(multiplicacion(Infinity, 0) + "").toBe("NaN");
            expect(isNaN(multiplicacion(0, Infinity))).toBe(true);
            expect(multiplicacion(0, Infinity) + "").toBe("NaN");
       });
    });

    describe("Testing division function", function () {
        it("should exists", function () {
            expect(division).toBeDefined();
        });
        describe("Tests against values that are not numbers", function () {
            it("Should not work with strings", function () {
                expect(isNaN(division("hola", "mundo"))).toBe(true);
            });
            it("Should not work with booleans", function () {
                expect(isNaN(division(false, false))).toBe(true);
                expect(isNaN(division(true, true))).toBe(true);
                expect(isNaN(division(false, true))).toBe(true);
                expect(isNaN(division(true, false))).toBe(true);
                expect(isNaN(division(true, 1))).toBe(true);
                expect(isNaN(division(false, 1))).toBe(true);
            });
            it("should not work with arrays", function () {
                expect(isNaN(division([1,2,3], [1,2,3]))).toBe(true);
                expect(isNaN(division([1,2,3], 1))).toBe(true);
                expect(isNaN(division(1, [1,2,3]))).toBe(true);
                expect(division([1,2,3], [1,2,3]) + "").toBe("NaN");
            });
            it("should not work with nulls", function () {
                expect(isNaN(division(null, null))).toBe(true);
                expect(isNaN(division(null, 0))).toBe(true);
                expect(isNaN(division(1, null))).toBe(true);
            });
            it("should not work with undefineds", function () {
                expect(isNaN(division(undefined, undefined))).toBe(true);
                expect(isNaN(division(undefined, 1))).toBe(true);
                expect(isNaN(division(0, undefined))).toBe(true);
            });
            it("should not work with objects", function () {
                expect(isNaN(division({}, {}))).toBe(true);
                expect(isNaN(division(0, {}))).toBe(true);
                expect(isNaN(division({}, 1))).toBe(true);
                expect(division({}, {}) + "").toBe("NaN");
            });
            it("should not work with functions", function () {
                expect(isNaN(division(function(){}, function(){}))).toBe(true);
                expect(isNaN(division(function(){}, 1))).toBe(true);
                expect(isNaN(division(0, function(){}))).toBe(true);
                expect(division(function(){}, function(){}) + "").toBe("NaN");
            });
        });
        it("should work with 2 positive integers", function () {
            expect(division(1,1)).toBe(1);
        });
        it("should work with 2 negative integers", function () {
            expect(division(-1,-1)).toBe(1);
        });
        it("should work with a positive integer and a negative integer", function () {
            expect(division(-1,2)).toBe(-0.5);
            expect(division(-2,1)).toBe(-2);
        });
        it("should work with 0 zeros", function () {
            expect(isNaN(division(0,0))).toBe(true);
            expect(division(0,0) + "").toBe("NaN");
        });
        it("should work with positive integers and zeros", function () {
            expect(division(0, 1)).toBe(0);
            expect(division(1,0)).toBe(Infinity);
        });
        it("should work with negative integers and zeros", function () {
            expect(division(0, -1)).toBe(0);
            expect(division(-1, 0)).toBe(-Infinity);
        });
        it("should work with 2 floating positive numbers", function () {
            expect(division(1.1, 1.2)).toBe(0.9166666666666667);
            expect(division(5.5, 4.4)).toBe(1.25);
            expect(division(10.0, 5.0)).toBe(2);
            expect(division(2.5, 2.5)).toBe(1);
        });
        it("should work with 2 floating negative numbers", function () {
            expect(division(-1.1, -1.2)).toBe(0.9166666666666667);
            expect(division(-5.5, -4.4)).toBe(1.25);
            expect(division(-10.0, -5.0)).toBe(2);
            expect(division(-2.5, -2.5)).toBe(1);
        });
        it("should work with a positive floating and a negative floating", function () {
            expect(division(5.5, -1.2)).toBe(-4.583333333333334);
            expect(division(-5.5, 1.2)).toBe(-4.583333333333334);
        });
        it("shold work with Infinity", function () {
            expect(isNaN(division(Infinity, Infinity))).toBe(true);
            expect(division(Infinity, Infinity) + "").toBe("NaN");
            expect(isNaN(division(Infinity, -Infinity))).toBe(true);
            expect(division(Infinity, -Infinity) + "").toBe("NaN");
            expect(isNaN(division(-Infinity, Infinity))).toBe(true);
            expect(division(-Infinity, Infinity) + "").toBe("NaN");
            expect(isNaN(division(-Infinity, -Infinity))).toBe(true);
            expect(division(-Infinity, -Infinity) + "").toBe("NaN");
            expect(division(Infinity, 1)).toBe(Infinity);
            expect(division(Infinity, -1)).toBe(-Infinity);
            expect(division(-1, Infinity)).toBe(-0);
            expect(division(-Infinity, -1)).toBe(Infinity);
            expect(division(Infinity, 0)).toBe(Infinity);
            expect(division(0, Infinity)).toBe(0);
       });
    });
});