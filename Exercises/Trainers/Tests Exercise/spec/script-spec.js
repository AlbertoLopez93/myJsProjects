function suma(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return NaN;
    }
    var res = numero1 + numero2;
    return res;
}

function resta() {}

function multiplication() {}

describe("Testing suma", function () {
    it("Espero que dos cadenas sea NaN", function () {
        var res = suma("hola","mundo");
        var checkForNaN = isNaN(res);
        expect(checkForNaN).toBe(true);
    });
});
