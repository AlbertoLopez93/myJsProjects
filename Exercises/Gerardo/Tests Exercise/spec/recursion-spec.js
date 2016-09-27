function fibonacci(num) {
  if(typeof num !== 'number' || num <= 0 || num % 1 != 0) {
    return false;
  }
  if(num + '' === 'Infinity' || num + '' === '-Infinity' || isNaN(num)) {
    return false;
  }
  if(num === 1) {
    return 1;
  }
  if(num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function sumListSquares(array) {
  if(!Array.isArray(array)) {
    return false;
  }
  var flag = array.some(function(a) {
    return (typeof a !== 'number' || isNaN(a)) && !Array.isArray(a) ;
  });
  if (flag) {
    return false;
  }
  var sum = 0;
  array.forEach(function(a) {
    if(Array.isArray(a)) {
      sum += sumListSquares(a);
    } else {
      sum += a * a;
    }
  });
  return sum;
}

describe('Function fibonacci', function() {
  it("should not work with strings", function() {
    expect(fibonacci('234')).toBe(false);
  });
  it("should not work with null", function() {
    expect(fibonacci(null)).toBe(false);
  });
  it("should not work with booleans", function() {
    expect(fibonacci(true)).toBe(false);
  });
  it("should not work with undefined", function() {
    expect(fibonacci(undefined)).toBe(false);
  });
  it("should not work with Infinity", function() {
    expect(fibonacci(Infinity)).toBe(false);
    expect(fibonacci(-Infinity)).toBe(false);
  });
  it("should not work with Functions", function() {
    expect(fibonacci(function() {})).toBe(false);
  });
  it("should not work with negatives", function() {
    expect(fibonacci(-4)).toBe(false);
  });
  it("should not work with floats", function() {
    expect(fibonacci(1.3)).toBe(false);
  });
  it("should not work with arrays", function() {
    expect(fibonacci([1,2,3])).toBe(false);
  });
  it("should return 13 with 7", function() {
    expect(fibonacci(7)).toBe(13);
  });
  it("should not work with NaN", function() {
    expect(fibonacci(NaN)).toBe(false);
  });
});

describe('Function sumListSquares', function() {
  it("should not work with strings", function() {
    expect(sumListSquares('234')).toBe(false);
  });
  it("should not work with null", function() {
    expect(sumListSquares(null)).toBe(false);
  });
  it("should not work with booleans", function() {
    expect(sumListSquares(true)).toBe(false);
  });
  it("should not work with undefined", function() {
    expect(sumListSquares(undefined)).toBe(false);
  });
  it("should not work with Functions", function() {
    expect(sumListSquares(function() {})).toBe(false);
  });
  it("should not work with numbers", function() {
    expect(sumListSquares(-1.3)).toBe(false);
    expect(sumListSquares(5)).toBe(false);
    expect(sumListSquares(Infinity)).toBe(false);
  });
  it("should not work without numbers inside arrays", function() {
    expect(sumListSquares([{}])).toBe(false);
    expect(sumListSquares(['string'])).toBe(false);
    expect(sumListSquares([null])).toBe(false);
    expect(sumListSquares([undefined])).toBe(false);
    expect(sumListSquares([true])).toBe(false);
    expect(sumListSquares([function() {}])).toBe(false);
  });
  it("should work with this", function() {
    expect(sumListSquares([1,2,3])).toBe(14);
    expect(sumListSquares([1,[2,3]])).toBe(14);
    expect(sumListSquares([1,[2,[3]]])).toBe(14);
  });
});
