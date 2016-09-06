function suma(numero1, numero2) {
  if(typeof numero1 === 'number' && numero2 === 'number') {
    return numero1 + numero2;
  }
  return undefined;
}

describe ("Funcion de suma", function () {
  it("undefined + algo = undefined", function () {
    var res = suma('a', 'b');
    expect(res).toBe(undefined);
  });
  it("array + algo =  undefined", function () {
    var res = suma([], []);
    expect(res).toBe(undefined);
  });
  it("objeto + algo = undefined", function () {
    var res = suma({}, 1);
    expect(res).toBe(undefined);
  });
  it("null + algo = undefined", function () {
    var res = suma(null, 1);
    expect(res).toBe(undefined);
  });
  it("boolean + algo = undefined", function () {
    var res = suma(true, 1);
    expect(res).toBe(undefined);
  });
  it("string + algo = undefined", function () {
    var res = suma('a', 1);
    expect(res).toBe(undefined);
  });
  it("funcion + algo = undefined", function () {
    var res = suma(function() {}, 1);
    expect(res).toBe(undefined);
  });
});
