function greatestCommonDivisor(a,b) {
    // var arr=[]
    // arr.push(a,b)
    // console.log(arr);
    // arr=arr.sort()
    if(a===Infinity||b===Infinity){return Infinity}
    if((!Number.isInteger(a))||(!Number.isInteger(b))){return false}
    if(a<=0||b<=0){return false}
    if(typeof a==="number"&&typeof b==="number"){
    var res=0
    if(a%b==0){
        return b;
    }
    else{
        res=greatestCommonDivisor(b,a%b)
    }
    return res
}else {return false}
}
function replicate(times,number) {
    var res=[]
    if(times===Infinity){return Infinity}
    if(typeof times!=="number"){return false}
    if(times<0){return res}
    if(times===0){
        return res
    }if(times===1){
        return [number]
    }
    if(times>0){
    return [].concat(replicate(times-1,number)).concat(number)
    }
}

function countSubArrays(ary) {
    var cont=0;
    if(!Array.isArray(ary)){return false}
    if(ary.length<2){return false}
    if(ary.length===2){
        return 1;
    }
    for(i=1;i<ary.length;i++){
        cont=cont+1;
    }
    ary.shift();
    return cont+=countSubArrays(ary)
}
console.log(countSubArrays([1,2,3,4]));

describe("Testing greatestCommonDivisor",function(){
  it("Espero que funcione con 36,60",function(){
    var res=greatestCommonDivisor(36,60)
      expect(res).toBe(12)
  });
  it("Espero que funcione con 60,36",function(){
    var res=greatestCommonDivisor(60,36)
      expect(res).toBe(12)
  });
  it("Espero que no funcione con strings",function(){
    var res=greatestCommonDivisor("hola",36)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con strings",function(){
    var res=greatestCommonDivisor(60,"amigos")
      expect(res).toBe(false)
  });
  it("Espero que no funcione con arreglos",function(){
    var res=greatestCommonDivisor(60,[12])
      expect(res).toBe(false)
  });
  it("Espero que no funcione con objetos",function(){
    var res=greatestCommonDivisor(60,{})
      expect(res).toBe(false)
  });
  it("Espero que no funcione con decimales",function(){
    var res=greatestCommonDivisor(60,12.5)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con decimales",function(){
    var res=greatestCommonDivisor(60.8,12)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con 0",function(){
    var res=greatestCommonDivisor(0,8)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con 0",function(){
    var res=greatestCommonDivisor(8,0)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(-8,9)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(8,-9)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(Infinity,9)
      expect(res).toBe(Infinity)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(9,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(null,9)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(9,null)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(9,undefined)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(undefined,9)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(0,0)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(Infinity,Infinity)
      expect(res).toBe(Infinity)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(9,NaN)
      expect(res).toBe(false)
  });
  it("Espero que no funcione con numeros negativos",function(){
    var res=greatestCommonDivisor(NaN,9)
      expect(res).toBe(false)
  });


});

describe("Testing replicate",function(){
  it("Espero que funcione con 36,60",function(){
    var res=replicate(4,4)
      expect(res).toEqual([4,4,4,4])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(4,5)
      expect(res).toEqual([5,5,5,5])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(-4,5)
      expect(res).toEqual([])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(0,5)
      expect(res).toEqual([])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(5,0)
      expect(res).toEqual([0,0,0,0,0])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate("hoa",0)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(5,"h")
      expect(res).toEqual(['h','h','h','h','h'])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(2,null)
      expect(res).toEqual([null,null])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(undefined,2)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(Infinity,2)
      expect(res).toBe(Infinity)
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate(2,Infinity)
      expect(res).toEqual([Infinity,Infinity])
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate([],Infinity)
      expect(res).toBe(false)
  });
  it("Espero que funcione con 36,60",function(){
    var res=replicate({},Infinity)
      expect(res).toBe(false)
  });

});

describe("Testing countSubArrays",function(){
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,4])
      expect(res).toBe(6)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3])
      expect(res).toBe(3)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2])
      expect(res).toBe(1)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([])
      expect(res).toBe(false)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,-4])
      expect(res).toBe(6)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,"hola"])
      expect(res).toBe(6)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,[4]])
      expect(res).toBe(6)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,[4],5])
      expect(res).toBe(10)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,[Infinity],5])
      expect(res).toBe(10)
  });
  it("Espero que funcione con 36,60",function(){
    var res=countSubArrays([1,2,3,[{}],5])
      expect(res).toBe(10)
  });


});
