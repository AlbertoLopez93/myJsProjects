function objectEquals(obj1,obj2){
  arreglo = [];
  if(typeof(obj1)!=="object" || typeof(obj2)!=="object"){
    return false
  }
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    console.log("NO TIENE LA MISMA LONGITUD")
    return false
  }
  for(i in obj1){
  }
  for(j in obj2){
  }
  if(obj1[i]===obj2[j]){
    return true
  }
  else{
    console.log("DIEFERENTES LLAVES")
    return false
  }
}

function greatestCommonDivisor(num1,num2, m){
  if(num1<=0 || num2<=0 || typeof(num1)!=="number"||typeof(num2)!=="number"){
    return false;
  }
  if(typeof(m) === "undefined"){
    if(num1<num2){
      m = num1
    }
    else{
      m = num2
    }
  }
  if(num1%m===0 && num2%m=== 0){
    return m;
  }
  else {
    return greatestCommonDivisor(num1,num2,m-1)
  }
}

function replicate(x,c) {
  if(typeof(x)!=="number"){
    return false;
  }
  if(typeof(c)==="array" ||typeof(c)==="object"){
    return false;
  }
  var ary=[],res;
  if(x===0){
    return []
  }
  if(typeof(x)!== "number"){
    return false
  }
  if(x==1){
    return [c];
  }
  if(x>1)
  {
    ary=[c].concat(replicate(x-1,c));
  }
  return ary
}


describe("Recursion basic functions", function () {
  describe("Recursion objectEquals function", function () {
    it("should exists", function () {
      expect(objectEquals).toBeDefined();
    });
    describe("Two Objects are Equals", function () {
      });
      it("Should not work with booleans", function () {
        expect(objectEquals({},{})).toBe(true);
      });
    });
    describe("Recursion objectEquals function", function () {
    it("should exists", function () {
      expect(greatestCommonDivisor).toBeDefined();
    });
    describe("Two Objects are Equals", function () {
      });
      it("Should not work with booleans", function () {
        expect(greatestCommonDivisor(60,36)).toBe(true);
      });
    });
    describe("Recursion objectEquals function", function () {
    it("should exists", function () {
      expect(replicate).toBeDefined();
    });
    describe("Two Objects are Equals", function () {
      });
      it("Should not work with booleans", function () {
        expect(replicate(7,{})).toBe(true);
      });
    });
  });
