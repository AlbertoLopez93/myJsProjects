function suma(x ,y){
  if(typeof x !== "number" || typeof y !== "number"){
    return res = NaN;
  }
  if(typeof x === "number" || typeof y === "number"){
    return res = x + y;
  }
  if(x instanceof Number && y instanceof Number ){
    return res = x + y;
  }

  if(x instanceof Number && typeof y === "number"){
    return res = x + y;
  }
  if(typeof x === "number" && y instanceof Number){
    return res = x + y;
  }

  if( x === Infinity &&  typeof y === "number"){
    return res = Infinity + y;
  }

  if( x === Infinity && y === Infinity){
    return res = Infinity + Infinity;
  }

  if(typeof x === "number" && y === Infinity){
    return res = x + y;
  }
}

function resta(x ,y){
  if(typeof x !== "number" || typeof y !== "number"){
    return res = NaN;
  }
  if(typeof x === "number" || typeof y === "number"){
    return res = x - y;
  }
  if(x instanceof Number && y instanceof Number ){
    return res = x - y;
  }

  if(x instanceof Number && typeof y === "number"){
    return res = x - y;
  }
  if(typeof x === "number" && y instanceof Number){
    return res = x - y;
  }

  if( x === Infinity &&  typeof y === "number"){
    return res = Infinity - y;
  }

  if( x === Infinity && y === Infinity){
    return res = Infinity - Infinity;
  }

  if(typeof x === "number" && y === Infinity){
    return res = x - y;
  }
}

function mul(x ,y){
  if(typeof x !== "number" || typeof y !== "number"){
    return res = NaN;
  }
  if(typeof x === "number" || typeof y === "number"){
    return res = x * y;
  }
  if(x instanceof Number && y instanceof Number ){
    return res = x * y;
  }

  if(x instanceof Number && typeof y === "number"){
    return res = x * y;
  }
  if(typeof x === "number" && y instanceof Number){
    return res = x * y;
  }

  if( x === Infinity &&  typeof y === "number"){
    return res = Infinity * y;
  }

  if( x === Infinity && y === Infinity){
    return res = Infinity * Infinity;
  }

  if(typeof x === "number" && y === Infinity){
    return res = x * y;
  }
}

function div(x ,y){
  if(typeof x !== "number" || typeof y !== "number"){
    return res = NaN;
  }
  if(typeof x === "number" || typeof y === "number"){
    return res = x / y;
  }
  if(x instanceof Number && y instanceof Number ){
    return res = x / y;
  }

  if(x instanceof Number && typeof y === "number"){
    return res = x / y;
  }
  if(typeof x === "number" && y instanceof Number){
    return res = x / y;
  }

  if( x === Infinity &&  typeof y === "number"){
    return res = Infinity / y;
  }

  if( x === Infinity && y === Infinity){
    return res = Infinity / Infinity;
  }

  if(typeof x === "number" && y === Infinity){
    return res = x / y;
  }
}


describe("Testing Suma", function(){
      it("Espero que letra mas numero sea NaN", function(){
        var res = suma("A", 5)
        expect(res).toBeNaN()
      });

      it("Espero que 5 mas 5 sea 10", function(){
        var res = suma(5, 5)
        expect(res).toBe(10)
      });

      it("Espero que instancia de Number 5 mas 5 sea 10", function(){
        var res = suma(Number(5), 5)
        expect(res).toBe(10)
      });

      it("Espero que Infinity mas 5 sea Infinity", function(){
        var res = suma(Infinity, 5)
        expect(res).toBe(Infinity)
      });

      it("Espero que Infinity mas Infinity sea Infinity", function(){
        var res = suma(Infinity, Infinity)
        expect(res).toBe(Infinity)
      });

      it("Espero que 5 mas Infinity sea Infinity", function(){
        var res = suma(5, Infinity)
        expect(res).toBe(Infinity)
      });
});

describe("Testing Resta", function(){
      it("Espero que letra menos numero sea NaN", function(){
        var res = resta("A", 5)
        expect(res).toBeNaN()
      });

      it("Espero que 5 - 5 sea 10", function(){
        var res = resta(5, 5)
        expect(res).toBe(0)
      });

      it("Espero que instancia de Number 5 - 5 sea 0", function(){
        var res = resta(Number(5), 5)
        expect(res).toBe(0)
      });

      it("Espero que Infinity - 5 sea Infinity", function(){
        var res = resta(Infinity, 5)
        expect(res).toBe(Infinity)
      });

      it("Espero que Infinity - Infinity sea NaN", function(){
        var res = resta(Infinity, Infinity)
        expect(res).toBeNaN()
      });

      it("Espero que 5 - Infinity sea Infinity", function(){
        var res = resta(5, Infinity)
        expect(res).toBe(-Infinity)
      });
});


describe("Testing Multiplicacion", function(){
      it("Espero que letra * numero sea NaN", function(){
        var res = mul("A", 5)
        expect(res).toBeNaN()
      });

      it("Espero que 5 * 5 sea 25", function(){
        var res = mul(5, 5)
        expect(res).toBe(25)
      });

      it("Espero que instancia de Number 5 * 5 sea 25", function(){
        var res = mul(Number(5), 5)
        expect(res).toBe(25)
      });

      it("Espero que Infinity * 5 sea Infinity", function(){
        var res = mul(Infinity, 5)
        expect(res).toBe(Infinity)
      });

      it("Espero que Infinity * Infinity sea Infinity", function(){
        var res = mul(Infinity, Infinity)
        expect(res).toBe(Infinity)
      });

      it("Espero que 5 * Infinity sea Infinity", function(){
        var res = mul(5, Infinity)
        expect(res).toBe(Infinity)
      });
});

describe("Testing Division", function(){
      it("Espero que letra / numero sea NaN", function(){
        var res = div("A", 5)
        expect(res).toBeNaN()
      });

      it("Espero que 5 / 5 sea 1", function(){
        var res = div(5, 5)
        expect(res).toBe(1)
      });

      it("Espero que instancia de Number 5 / 5 sea 1", function(){
        var res = div(Number(5), 5)
        expect(res).toBe(1)
      });

      it("Espero que Infinity / 5 sea Infinity", function(){
        var res = div(Infinity, 5)
        expect(res).toBe(Infinity)
      });

      it("Espero que Infinity / Infinity sea NaN", function(){
        var res = div(Infinity, Infinity)
        expect(res).toBeNaN()
      });

      it("Espero que 5 / Infinity sea 0", function(){
        var res = div(5, Infinity)
        expect(res).toBe(0)
      });
});
