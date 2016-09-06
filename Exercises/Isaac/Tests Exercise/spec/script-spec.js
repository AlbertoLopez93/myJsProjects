function suma(n1, n2) {
    return (+n1) + (+n2);
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

//describe
describe("Testing suma", function () {
    //it
    it("Expect 2 + 2 to be 4", function () {
        //expect
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

describe("Testing resta", function () {
    it("Expect 10 - 5 to be 5", function () {
        expect(resta(10, 5)).toBe(5);
    });
    
    it("Expect 5 - 10 to be 5", function () {
        expect(resta(10, 5)).toBe(5);
    });
});