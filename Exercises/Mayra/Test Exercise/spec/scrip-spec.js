function suma(a,b){
  var res=a+b;
  if(isNaN(a)===true||isNaN(b)===true||a===null||b===null||a===undefined||b===undefined||a===true||b===true||a===false||b===false){
    res= NaN;
  }

  return res;
}
function resta(a,b){
  var res=a-b;
  if(isNaN(a)===true||isNaN(b)===true||a===null||b===null||a===undefined||b===undefined||a===true||b===true||a===false||b===false){
    res= NaN;
  }

  return res;
}
function multiplicacion(a,b){
  var res=a*b;
  if(isNaN(a)===true||isNaN(b)===true||a===null||b===null||a===undefined||b===undefined||a===true||b===true||a===false||b===false){
    res= NaN;
  }

  return res;
}
function divicion(a,b){
  var   res=a/b;
  if(isNaN(a)===true||isNaN(b)===true||a===null||b===null||a===undefined||b===undefined||a===true||b===true||a===false||b===false){
    res= NaN;
  }

  return res;
}
  describe("testing suma",function(){
  it ("Espero que 2+2 sea 4",function(){
        var res=suma(2,2);
        expect(res).toBe(4);
  });
  it ("Espero que 3+ string sea 1",function(){
        var res=suma(3,"hola");
        expect(res).toBeNaN;
  });
  it ("Espero suma string sea NaN",function(){
        var res=suma("hola","Lorenzo");
        expect(res).toBeNaN;
  });
  it ("Espero null + null sea NaN",function(){
        var res=suma(null,null);
        expect(res).toBeNaN;
  });
  it ("Espero Infinity + Infinity sea Infinity",function(){
        var res=suma(Infinity,Infinity);
        expect(res).toBe(Infinity);
  });
  it ("Espero 1 + Infinity sea Infinity",function(){
        var res=suma(1,Infinity);
        expect(res).toBe(Infinity);
  });
  it ("Espero suma de obj{} NaN",function(){
        var res=suma(obj={},false);
        expect(res).toBeNaN;
  });
  it ("Espero true mas false sea NaN",function(){
        var res=suma(true,false);
        expect(res).toBeNaN;
  });
  it ("Espero suma de funciones sea NaN",function(){
        var res=suma(function () {},function () {});
        expect(res).toBeNaN;
  });
  it ("Espero undefined + null sea NaN",function(){
        var res=suma(undefined,null);
        expect(res).toBeNaN;
  });
  it ("Espero suma de arreglos NaN",function(){
        var res=suma([1,2],[1,2]);
       expect(res).toBeNaN;
  });

});
describe("testing resta",function(){
it ("Espero que 2-2 sea 0",function(){
      var res=resta(2,2);
      expect(res).toBe(0);
});
it ("Espero que 3 - string sea 1",function(){
      var res=resta(3,"hola");
      expect(res).toBeNaN;
});
it ("Espero resta string sea NaN",function(){
      var res=resta("hola","Lorenzo");
      expect(res).toBeNaN;
});
it ("Espero null - null sea NaN",function(){
      var res=resta(null,null);
      expect(res).toBeNaN;
});
it ("Espero resta de obj{} NaN",function(){
      var res=resta(obj={},false);
      expect(res).toBeNaN;
});
it ("Espero true mas false sea NaN",function(){
      var res=resta(true,false);
      expect(res).toBeNaN;
});
it ("Espero resta de funciones sea NaN",function(){
      var res=resta(function () {},function () {});
      expect(res).toBeNaN;
});
it ("Espero undefined - null sea NaN",function(){
      var res=resta(undefined,null);
      expect(res).toBeNaN;
});
it ("Espero resta de arreglos NaN",function(){
      var res=resta([1,2],[1,2]);
     expect(res).toBeNaN;
});
it ("Espero Infinity - Infinity sea NaN",function(){
      var res=resta(Infinity,Infinity);
      expect(res).toBeNaN;
});
it ("Espero 1 - Infinity sea Infinity",function(){
      var res=resta(1,Infinity);
      expect(res).toBe(-Infinity);;
});

});
