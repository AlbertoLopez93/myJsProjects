function fibonacci(n) {
    if(isNaN(n)){return false}

    if(typeof n==="number"){
    if(n<0){return false}
    if(n===Infinity){return Infinity}
    if(n===0){return 0}
    if(!Number.isInteger(n)){return false}
    if(n===1){
        return 1
    }
    if(n===2){
        return 1
    }
    if(n>2){
        return fibonacci(n-1)+fibonacci(n-2)
    }}else{return false}
}

function sumListSquare(ary) {
    if(!Array.isArray(ary)){return false}
    var res = 0;

    if (ary.length < 1) {
        return [];
    }
    for(var i = 0; i < ary.length; i++) {

        if(typeof ary[i]!=="number"&&!Array.isArray(ary[i])){return false}
        if (Array.isArray(ary[i])) {
            res+=(sumListSquare(ary[i]));
        } else {
            res +=(ary[i]*ary[i]);
        }
    }
    //    res=scuareSum(res)
    if(typeof res!=="number"){
        return false
    }
    return res;
}
describe("Testing fibonacci",function(){
  it("Espero que el fibonacci de 4 sea 3",function(){
    var res=fibonacci(4)
      expect(res).toBe(3)
  });
  it("Espero que el fibonacci de 5 sea 5",function(){
    var res=fibonacci(5)
      expect(res).toBe(5)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci("hola amigos")
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci({a:0,b:"0"})
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci([2])
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(null)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(false)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(true)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(undefined)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(NaN)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(0)
      expect(res).toBe(0)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(-Infinity)
      expect(res).toBe(false)
  });
  it("Espero que solo acepte numeros",function(){
    var res=fibonacci(2.5)
      expect(res).toBe(false)
  });



});

describe("Testing sumListSquare",function(){
  it("Espero que funcione con 10",function(){
    var res=sumListSquare([1,2,[3,4],5,6,7,8,9])
      expect(res).toBe(285)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,2,3])
      expect(res).toBe(14)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,[2],[3]])
      expect(res).toBe(14)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,[2],[]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare("hola amigos")
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(1,2,23,34,54,5)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare({a:0,b:"0"})
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(function(){})
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(null)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(undefined)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(true)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(false)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(NaN)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare(Infinity)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,NaN,[3,4]])
      expect(res).toBeNaN()
  });
  it("Espero que funcione con 1,2,3,string",function(){
    var res=sumListSquare([1,"hola amigod",[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,{a:0},[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,null,[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,undefined,[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,false,[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,"2",[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,[],[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,[],[3,4]])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,5,[3,4]])
      expect(res).toBe(51)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([1,Infinity,[3,4]])
      expect(res).toBe(Infinity)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([[[[[[[1],2]]]]]])
      expect(res).toBe(5)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([-1,[2],[3,4]])
      expect(res).toBe(30)
  });
  it("Espero que funcione con 1,2,3",function(){
    var res=sumListSquare([-1,[2],[3,4]])
      expect(res).toBe(30)
  });
});
