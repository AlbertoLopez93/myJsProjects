function suma(a,b){
  if(isNaN(a)===true || isNaN(b)===true || a===null || b===null || a===true || a===false
     || b===true || b===false){
       return NaN;
  }
  else{
    return a+b;
  }
}
function multiplica(a,b){
  if(isNaN(a)===true || isNaN(b)===true || a===null || b===null || a===true || a===false
     || b===true || b===false){
       return NaN;
  }
  else{
    return a*b;
  }
}
function divide(a,b){
  if(isNaN(a)===true || isNaN(b)===true || a===null || b===null || a===true || a===false || b===true
    || b===false){
      return NaN;
  }
  else{
    return a/b;
  }
}
function resta(a,b){
  if(isNaN(a)===true || isNaN(b)===true || a===null || b===null || a===true || a===false
     || b===true || b===false){
       return NaN;
  }
  else{
    return a-b;
  }
}

describe("testing suma",function(){
  it ("Espero que 2+2 sea 4",function(){
     var res=suma(2,2);
     expect(res).toBe(4);
  });
  it ("Espero que 2+a sea NaN",function(){
      var res=suma(2,'a');
      expect(res).toBeNaN;
  });
  it ("Espero que 3+3 sea 6",function(){
      var res=suma(3,3);
      expect(res).toBe(6);
  });
  it ("Espero que 3+0 sea 0",function(){
        var res=suma(3,0);
        expect(res).toBe(3);
  });
  it ("Espero que h+como sea NaN",function(){
        var res=suma('h','como');
        expect(res).toBeNaN;
  });
  it ("Espero que 2.6+3.4 sea 6",function(){
        var res=suma(2.6,3.4);
        expect(res).toBe(6);
  });
  it ("Espero que [1,2]+[3,4] sea NaN",function(){
        var res=suma([1,2],[3,4]);
        expect(res).toBeNaN;
  });
  it ("Espero que null+null sea NaN",function(){
        var res=suma(null,null);
        expect(res).toBeNaN;
  });
  it ("Espero que true+false sea NaN",function(){
        var res=suma(true,false);
        expect(res).toBeNaN;
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
  it ("Espero que 3*a sea NaN",function(){
        var res=multiplica(3,'a');
        expect(res).toBeNaN;
  });
  it ("Espero que a*a sea NaN",function(){
        var res=multiplica('a','a');
        expect(res).toBeNaN;
  });
  it ("Espero que null*null sea NaN",function(){
        var res=multiplica(null,null);
        expect(res).toBeNaN;
  });
  it ("Espero que true*false sea NaN",function(){
        var res=multiplica(true,false);
        expect(res).toBeNaN;
  });
  it ("Espero que Infinity*Infinity sea Infinity",function(){
        var res=multiplica(Infinity,Infinity);
        expect(res).toBe(Infinity);
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
  it ("Espero que 3/0 sea Infinity",function(){
        var res=divide(3,0);
        expect(res).toBe(Infinity);
  });
  it ("Espero que a/a sea NaN",function(){
        var res=divide('a','a');
        expect(res).toBeNaN;
  });
  it ("Espero que 3/a sea NaN",function(){
        var res=divide(3,'a');
        expect(res).toBeNaN;
  });
  it ("Espero que null/null sea NaN",function(){
        var res=divide(null,null);
        expect(res).toBeNaN;
  });
  it ("Espero que true/false sea NaN",function(){
        var res=divide(true,false);
        expect(res).toBeNaN;
  });
  it ("Espero que Infinity/Infinity sea NaN",function(){
        var res=divide(Infinity,Infinity);
        expect(res).toBeNaN;
  });
  it ("Espero que null/Infinity sea NaN",function(){
        var res=divide(null,Infinity);
        expect(res).toBeNaN;
  });
  it ("Espero que Infinity/0 sea NaN",function(){
        var res=divide(Infinity,0);
        expect(res).toBeNaN;
  });
  it ("Espero que 1/Infinity sea 0",function(){
        var res=divide(1,Infinity);
        expect(res).toBe(0);
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
  it ("Espero que 3/9 sea -6",function(){
        var res=resta(3,9);
        expect(res).toBe(-6);
  });
  it ("Espero que a-a sea NaN",function(){
        var res=resta('a','a');
        expect(res).toBeNaN;
  });
  it ("Espero que 3-a sea NaN",function(){
        var res=resta(3,'a');
        expect(res).toBeNaN;
  });
  it ("Espero que null-null sea NaN",function(){
        var res=resta(null,null);
        expect(res).toBeNaN;
  });
  it ("Espero que true-false sea NaN",function(){
        var res=resta(true,false);
        expect(res).toBeNaN;
  });
  it ("Espero que Infinity-Infinity sea NaN",function(){
        var res=resta(Infinity,Infinity);
        expect(res).toBeNaN;
  });
  it ("Espero que NaN-NaN sea NaN",function(){
        var res=resta(NaN,NaN);
        expect(res).toBeNaN;
  });
  it ("Espero que 1-Infinity sea -Infinity",function(){
        var res=resta(1,Infinity);
        expect(res).toBe(-Infinity);
  });
  it ("Espero que Infinity-1 sea -Infinity",function(){
        var res=resta(Infinity,1);
        expect(res).toBe(Infinity);
  });
  it ("Espero que {}+{} sea NaN",function(){
        var res=resta({},{});
        expect(res).toBeNaN;
  });
});
