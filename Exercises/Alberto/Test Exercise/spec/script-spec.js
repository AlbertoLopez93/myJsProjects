function suma(num1,num2) {
  num1=parseFloat(num1);
  num2=parseFloat(num2);
  var res=num1+num2;
  return res;
}

function resta(num1,num2) {
  var res=num1-num2;
  return res;
}

function multiplicacion(num1,num2) {
  var res=num1*num2;
  return res;
}

function division(num1,num2) {
  var res=num1/num2;
  return res;
}

describe("Testing suma", function() {
  it("I wait 2+(-2) not equal 4", function(){
    var res = suma(2,-2);
    expect(res).not.toBe(4);
  });
  it("I wait -3+(-3) equal -6", function(){
    var res= suma(-3,-3);
    expect(res).toBe(-6);
  });
  it("I wait 5+7 equal 12", function(){
    var res= suma(5,7);
    expect(res).toBe(12);
  });
  it("I wait 1.2+'1.1' equal 2.3", function(){
    var res= suma(1.2,'1.1');
    expect(res).toBe(2.3);
  });
});

describe("Testing resta", function() {
  it("I wait 2-(-2) equal 4", function(){
    var res = resta(2,-2);
    expect(res).toBe(4);
  });
  it("I wait '-3'-6 equal -9", function(){
    var res= resta('-3',6);
    expect(res).toBe(-9);
  });
  it("I wait 5-7 not equal 2", function(){
    var res= resta(5,7);
    expect(res).not.toBe(2);
  });
});

describe("Testing multiplicacion", function() {
  it("I wait 2*0 equal 0", function(){
    var res = multiplicacion(2,0);
    expect(res).toBe(0);
  });
  it("I wait 8*(-1) less than zero", function(){
    var res= multiplicacion(8,-1);
    expect(res).toBeLessThan(0);
  });
  it("I wait 0.5*2 equal 1", function(){
    var res= multiplicacion(0.5,2);
    expect(res).toBe(1);
  });
});

describe("Testing division", function() {
  it("I wait 0/9 equal 0", function(){
    var res = division(0,9);
    expect(res).toBe(0);
  });
  it("I wait 6/(-4) equal -1.5", function(){
    var res= division(6,-4);
    expect(res).toBe(-1.5);
  });
  it("I wait 4/0 equal Infinity", function(){
    var res= division(4,0);
    expect(res).toBe(Infinity);
  });
});
