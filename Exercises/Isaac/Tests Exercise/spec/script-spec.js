function suma(n1, n2) {
    if((typeof n1 === 'number' || n1 instanceof Number) && (typeof n2 === 'number' || n2 instanceof Number)){
        return Number((n1 + n2).toPrecision(15));
    }
    return NaN;
}

function resta(n1, n2) {
    if((typeof n1 === 'number' || n1 instanceof Number) && (typeof n2 === 'number' || n2 instanceof Number)){
        return Number((n1 - n2).toPrecision(15));
    }
    return NaN;
}

function multiplicacion(n1, n2) {
    if((typeof n1 === 'number' || n1 instanceof Number) && (typeof n2 === 'number' || n2 instanceof Number)){
        return Number((n1 * n2).toPrecision(15));
    }
    return NaN;
}

function division(n1, n2) {
    if((typeof n1 === 'number' || n1 instanceof Number) && (typeof n2 === 'number' || n2 instanceof Number)){
        return Number((n1 / n2).toPrecision(15));
    }
    return NaN;
}

// Suma
describe("Testing suma", function () {
    it("Expect 2 + 2 to be 4", function () {
        expect(suma(2, 2)).toBe(4);
    });

    it("Expect 3 + 3 to be 6", function () {
        expect(suma(3, 3)).toBe(6);
    });

    it("Expect 5 + 'a' to be NaN", function () {
        expect(suma(5, 'a')).toBeNaN();
    });

    it("Expect 'b' + 'a' to be NaN", function () {
        expect(suma('b', 'a')).toBeNaN();
    });

    it("Expect 'b' + 10 to be NaN", function () {
        expect(suma('b', 10)).toBeNaN();
    });

    it("Expect 1.2 + 1.1 to be 2.3", function () {
        expect(suma(1.2, 1.1)).toBe(2.3);
    });
    
    it("Expect 0.1 + 0.2 to be 0.3", function () {
        expect(suma(0.1, 0.2)).toBe(0.3);
    });
    
    it("Expect 0.1 + 10 to be 10.1", function () {
        expect(suma(0.1, 10)).toBe(10.1);
    });
    
    it("Expect '10' + '10' to be NaN", function () {
        expect(suma('10', '10')).toBeNaN();
    });
    
    it("Expect 10 + true to be NaN", function () {
        expect(suma(10, true)).toBeNaN();
    });
    
    it("Expect 10 + null to be NaN", function () {
        expect(suma(10, null)).toBeNaN();
    });
    
    it("Expect 10 + undefined to be NaN", function () {
        expect(suma(10, undefined)).toBeNaN();
    });
    
    it("Expect 10 + [] to be NaN", function () {
        expect(suma(10, [])).toBeNaN();
    });
    
    it("Expect 10 + [1] to be NaN", function () {
        expect(suma(10, [1])).toBeNaN();
    });
    
    it("Expect 10 + {} to be NaN", function () {
        expect(suma(10, {})).toBeNaN();
    });
});

// Resta
describe("Testing resta", function () {
    it("Expect 10 - 5 to be 5", function () {
        expect(resta(10, 5)).toBe(5);
    });
    
    it("Expect 5 - 10 to be 5", function () {
        expect(resta(5, 10)).toBe(-5);
    });
    
    it("Expect 'b' - 10 to be NaN", function () {
        expect(resta('b', 10)).toBeNaN();
    });
    
    it("Expect 10 - 'a' to be NaN", function () {
        expect(resta(10, 'a')).toBeNaN();
    });
    
    it("Expect 'b' - 'a' to be NaN", function () {
        expect(resta('b', 'a')).toBeNaN();
    });
    
    it("Expect 0.1 - 0.2 to be -0.1", function () {
        expect(resta(0.1, 0.2)).toBe(-0.1);
    });
    
    it("Expect 0.2 - 0.1 to be 0.1", function () {
        expect(resta(0.2, 0.1)).toBe(0.1);
    });
    
    it("Expect '10' - '10' to be NaN", function () {
        expect(resta('10', '10')).toBeNaN();
    });
    
    it("Expect 10 - true to be NaN", function () {
        expect(resta(10, true)).toBeNaN();
    });
    
    it("Expect 10 - null to be NaN", function () {
        expect(resta(10, null)).toBeNaN();
    });
    
    it("Expect 10 - undefined to be NaN", function () {
        expect(resta(10, undefined)).toBeNaN();
    });
    
    it("Expect 10 - [] to be NaN", function () {
        expect(resta(10, [])).toBeNaN();
    });
    
    it("Expect 10 - [1] to be NaN", function () {
        expect(resta(10, [1])).toBeNaN();
    });
    
    it("Expect 10 - {} to be NaN", function () {
        expect(resta(10, {})).toBeNaN();
    });
});

// Multiplicación
describe("Testing multiplicacion", function () {
    it("Expect 10 * 5 to be 50", function () {
        expect(multiplicacion(10, 5)).toBe(50);
    });
    
    it("Expect 2 * 10 to be 20", function () {
        expect(multiplicacion(2, 10)).toBe(20);
    });
    
    it("Expect 'b' * 10 to be NaN", function () {
        expect(multiplicacion('b', 10)).toBeNaN();
    });
    
    it("Expect 10 * 'a' to be NaN", function () {
        expect(multiplicacion(10, 'a')).toBeNaN();
    });
    
    it("Expect 'b' * 'a' to be NaN", function () {
        expect(multiplicacion('b', 'a')).toBeNaN();
    });
    
    it("Expect 0.1 * 0.2 to be 0.02", function () {
        expect(multiplicacion(0.1, 0.2)).toBe(0.02);
    });
    
    it("Expect 0.1 * 0.1 to be 0.01", function () {
        expect(multiplicacion(0.1, 0.1)).toBe(0.01);
    });
    
    it("Expect 0.1 * -0.2 to be -0.02", function () {
        expect(multiplicacion(0.1, -0.2)).toBe(-0.02);
    });
    
    it("Expect '10' * '10' to be NaN", function () {
        expect(multiplicacion('10', '10')).toBeNaN();
    });
    
    it("Expect 10 * true to be NaN", function () {
        expect(multiplicacion(10, true)).toBeNaN();
    });
    
    it("Expect 10 * null to be NaN", function () {
        expect(multiplicacion(10, null)).toBeNaN();
    });
    
    it("Expect 10 * undefined to be NaN", function () {
        expect(multiplicacion(10, undefined)).toBeNaN();
    });
    
    it("Expect 10 * [] to be NaN", function () {
        expect(multiplicacion(10, [])).toBeNaN();
    });
    
    it("Expect 10 * [1] to be NaN", function () {
        expect(multiplicacion(10, [1])).toBeNaN();
    });
    
    it("Expect 10 * {} to be NaN", function () {
        expect(multiplicacion(10, {})).toBeNaN();
    });
});

// División
describe("Testing division", function () {
    it("Expect 10 / 5 to be 2", function () {
        expect(division(10, 5)).toBe(2);
    });
    
    it("Expect 2 / 10 to be 0.2", function () {
        expect(division(2, 10)).toBe(0.2);
    });
    
    it("Expect 'b' / 10 to be NaN", function () {
        expect(division('b', 10)).toBeNaN();
    });
    
    it("Expect 10 / 'b' to be NaN", function () {
        expect(division(10, 'b')).toBeNaN();
    });
    
    it("Expect 'a' / 'b' to be NaN", function () {
        expect(division('a', 'b')).toBeNaN();
    });
    
    it("Expect 0 / 10 to be 0", function () {
        expect(division(0, 10)).toBe(0);
    });
    
    it("Expect 10 / 0 to be Infinity", function () {
        expect(division(10, 0)).toBe(Infinity);
    });
    
    it("Expect 0.1 / 0.2 to be 0.5", function () {
        expect(division(0.1, 0.2)).toBe(0.5);
    });
    
    it("Expect 0.1 / -0.2 to be -0.5", function () {
        expect(division(0.1, -0.2)).toBe(-0.5);
    });
    
    it("Expect '10' / '10' to be NaN", function () {
        expect(division('10', '10')).toBeNaN();
    });
    
    it("Expect 10 / true to be NaN", function () {
        expect(division(10, true)).toBeNaN();
    });
    
    it("Expect 10 / null to be NaN", function () {
        expect(division(10, null)).toBeNaN();
    });
    
    it("Expect 10 / undefined to be NaN", function () {
        expect(division(10, undefined)).toBeNaN();
    });
    
    it("Expect 10 / [] to be NaN", function () {
        expect(division(10, [])).toBeNaN();
    });
    
    it("Expect 10 / [1] to be NaN", function () {
        expect(division(10, [1])).toBeNaN();
    });
    
    it("Expect 10 / {} to be NaN", function () {
        expect(division(10, {})).toBeNaN();
    });
});