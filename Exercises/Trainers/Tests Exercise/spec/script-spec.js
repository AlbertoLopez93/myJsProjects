function suma(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return NaN;
    }

    if (typeof numero1 === 'boolean' || typeof numero2 === 'boolean') {
        return NaN;
    }

    if (typeof numero1 === 'object' || typeof numero2 === 'object') {
        return NaN;
    }

    if (typeof numero1 === 'function' || typeof numero2 === 'function') {
        return NaN;
    }

    return numero1 + numero2;
}

function resta(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return NaN;
    }

    if (typeof numero1 === 'boolean' || typeof numero2 === 'boolean') {
        return NaN;
    }

    if (typeof numero1 === 'object' || typeof numero2 === 'object') {
        return NaN;
    }

    if (typeof numero1 === 'function' || typeof numero2 === 'function') {
        return NaN;
    }

    return numero1 - numero2;
}

function multiplication() {}

function division() {}

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
});
