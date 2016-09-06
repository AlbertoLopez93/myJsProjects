function suma(n1, n2) {
    return Number(((+n1) + (+n2)).toPrecision(10));
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
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
        expect(String(suma(5, 'a'))).toBe('NaN');
    });

    it("Expect 'b' + 'a' to be NaN", function () {
        expect(String(suma('b', 'a'))).toBe('NaN');
    });

    it("Expect 'b' + 10 to be NaN", function () {
        expect(String(suma('b', 10))).toBe('NaN');
    });

    it("Expect 1.2 + 1.1 to be 2.3", function () {
        expect(suma(1.2, 1.1)).toBe(2.3);
    });
    
    it("Expect 0.1 + 0.2 to be 0.3", function () {
        expect(suma(0.1, 0.2)).toBe(0.3);
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
        expect(String(resta('b', 10))).toBe('NaN');
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
        expect(String(multiplicacion('b', 10))).toBe('NaN');
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
        expect(String(division('b', 10))).toBe('NaN');
    });
});