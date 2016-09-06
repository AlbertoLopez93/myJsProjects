function suma(a,b){
if(isNaN(a)===true || isNan(b)===true){
  return 'NaN';
}
else{
} return a+b;
}
function multiplica(a,b){
return a*b;
}
function divide(a,b){
return a/b;
}
function resta(a,b){
return a-b;
}

describe("testing suma",function(){
  it ("Espero que 2+2 sea 4",function(){
    var res=suma(2,2);
     expect(res).toBe(4);
  });
  it ("Espero que 2+a sea NaN",function(){
      var res=suma(2,'a');
      expect(res).toBe('NaN');
  });
  it ("Espero que 3+3 sea 6",function(){
      var res=suma(3,3);
      expect(res).toBe(6);
  });
  it ("Espero que 3+0 sea 0",function(){
        var res=suma(3,0);
        expect(res).toBe(3);
  });
  it ("Espero que hola+como sea holacomo",function(){
        var res=suma('h','como');
        expect(res).toBe('NaN');
  });
});


describe("testing multiplica",function(){
  it ("Espero que 2*2 sea 4",function(){
    var res=multiplica(2,2);
     expect(res).toBe(4);
  });
  it ("Espero que 3*3 sea 9",function(){
      var res=multiplica(3,3);
      expect(res).toBe(9);
      });
  it ("Espero que 3*0 sea 0",function(){
        var res=multiplica(3,0);
        expect(res).toBe(0);
  });
});
describe("testing divide",function(){
  it ("Espero que 2/1 sea 2",function(){
    var res=divide(2,1);
     expect(res).toBe(2);
  });
  it ("Espero que 3/3 sea 1",function(){
      var res=divide(3,3);
      expect(res).toBe(1);
      });
  it ("Espero que 3/3 sea Infinity",function(){
        var res=divide(3,0);
        expect(res).toBe(Infinity);
  });
});
describe("testing resta",function(){
  it ("Espero que 2-1 sea 1",function(){
    var res=resta(2,1);
     expect(res).toBe(1);
  });
  it ("Espero que 3-3 sea 0",function(){
      var res=resta(3,3);
      expect(res).toBe(0);
      });
  it ("Espero que 3/3 sea Infinity",function(){
        var res=resta(3,9);
        expect(res).toBe(-6);
  });
});
