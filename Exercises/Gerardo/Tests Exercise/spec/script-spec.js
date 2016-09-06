function suma(numero1, numero2) {
  if(isNaN(numero1) || isNaN(numero2)) {
    return NaN;
  }
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}

function division(numero1, numero2) {
  return numero1 / numero2;
}

describe ("", function () {
  it("Suma de dos caracteres", function () {
    var res = suma('a', 'b');
    expect(res).toBe(NaN);
  });
});
