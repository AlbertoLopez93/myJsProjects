function isAnagram(str1,str2){
  var astr1=[],astr2=[],c=0;
  if((str1.length!==str2.length) || typeof str1!=='string' || typeof str2!=='string'){
    return false;
  }
  else{
    astr1=isUpperCase(str1);
    astr2=isUpperCase(str2);
    astr1=astr1.sort();
    astr2=astr2.sort();
  }
  for(i=0;i<astr1.length;i++){
    if(astr1[i]===astr2[i]){
      c++;
    }
  }
  if(c===astr1.length){
    return true;
  }
  else{
    return false;
  }

  function isUpperCase(str){
    a=str.split("");
    may=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    min=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(j=0;j<a.length;j++){
      for(var i=0;i<min.length;i++){
        if(a[j]===may[i]){
          a[j]=min[i];
        }
      }
    }
    return a;
  }

}

function rounded(num){
  if(isNaN(num)===true || num===null || typeof num==='boolean'){
    return false;
  }
  if(num===Infinity){
    return Infinity;
  }
  if(num===-Infinity){
    return -Infinity;
  }
  function redondea(num){
    num=num*1000;
    str=num+"a",ent="",dec1="",dec2="";
    var punto,num2,final;
      for(i=0;i<str.length-1;i++){
        if(str[i]==="."){
          punto=i;
          break;
        }
        else{
          ent=ent+str[i];
        }
      }
      ent=parseInt(ent);
      dec1=str[punto+1];
      if(dec1>=5){
        ent++;
        dec1="0"
      }
      num2=ent;
      num2=num2*10;
      num2=num2/100;
      str=num2;
      str=str+"a";
      ent="";
      for(i=0;i<str.length-1;i++){
        if(str[i]==="."){
          punto=i;
          break;
        }
        else{
          ent=ent+str[i];
        }
      }
      ent=parseInt(ent);
      dec2=str[punto+1];
      if(dec2>=5){
        ent++;
        dec2="0"
      }
      else {
        dec2=0;
      }
      ent=parseInt(ent);
      dec2=parseInt(dec2);
      final=ent+"."+dec2;
      final=parseFloat(final);
      final=final/100;
      return final;
    }
  if(num>=0){
     final=redondea(num);
  }
  else{
    num=num*-1;
    final=redondea(num);
    final=final*-1;
  }
  return final;
}

function convertSpace(str){
  if(typeof str!=='string'){
    return false;
  }
  var a=str.split("");
  for(var i=0;i<a.length;i++){
    if(a[i]===" "){
      a[i]="%20"
    }
  }
  a=a.join("");
  return a;
}

function getTotal(days){
  if(Number.isInteger(days)===false){
    return false;
  }
  var tot=0;
  if(days>=7){
    tot=(days*40)-50;
  }
  else{
    if(days>=3){
      tot=(days*40)-20;
    }
    else{
      tot=days*40;
    }
  }
  return tot;
}

describe("Testing isAnagram()",function (){
  it ("Espero que 'rrma' y 'amar' regrese false",function(){
    var res=isAnagram('rrma','amar');
    expect(res).toBe(false);
  });
  it ("Espero que 'rama' y 'amar' regrese true",function(){
    var res=isAnagram('rama','amar');
    expect(res).toBe(true);
  });
  it ("Espero que 'ramar' y 'amar' regrese false",function(){
    var res=isAnagram('ramar','amar');
    expect(res).toBe(false);
  });
  it ("Espero que '6666' y 'amar' regrese false",function(){
    var res=isAnagram('6666','amar');
    expect(res).toBe(false);
  });
  it ("Espero que '6666' y '6666' regrese true",function(){
    var res=isAnagram('6666','6666');
    expect(res).toBe(true);
  });
  it ("Espero que '6666' y 6666 regrese false",function(){
    var res=isAnagram('6666',6666);
    expect(res).toBe(false);
  });
  it ("Espero que 'sssa' y 'ssss' regrese false",function(){
    var res=isAnagram('sssa','ssss');
    expect(res).toBe(false);
  });
  it ("Espero que 'sssa' y 'ssaa' regrese false",function(){
    var res=isAnagram('sssa','ssaa');
    expect(res).toBe(false);
  });
  it ("Espero que true y 'amar' regrese false",function(){
    var res=isAnagram(true,'amar');
    expect(res).toBe(false);
  });
});

describe("Testing rounded()",function (){
  it ("Espero que 3266.525 sea 3266.53 ",function(){
    var res=rounded(3266.525);
    expect(res).toBe(3266.53);
  });
  it ("Espero que -45.997 sea -46 ",function(){
    var res=rounded(-45.997);
    expect(res).toBe(-46);
  });
  it ("Espero que 0 sea 0",function(){
    var res=rounded(0);
    expect(res).toBe(0);
  });
  it ("Espero que 0.001 sea 0",function(){
    var res=rounded(0.001);
    expect(res).toBe(0);
  });
  it ("Espero que -80 sea -80",function(){
    var res=rounded(-80);
    expect(res).toBe(-80);
  });
  it ("Espero que 80 sea 80",function(){
    var res=rounded(80.824);
    expect(res).toBe(80.82);
  });
  it ("Espero que -3.99999999 sea -4",function(){
    var res=rounded(-3.99999999);
    expect(res).toBe(-4);
  });
  it ("Espero que 3.9924 sea 3.99",function(){
    var res=rounded(3.9924);
    expect(res).toBe(3.99);
  });
  it ("Espero que 'hola' sea false",function(){
    var res=rounded('hola');
    expect(res).toBe(false);
  });
  it ("Espero que null sea false",function(){
    var res=rounded(null);
    expect(res).toBe(false);
  });
  it ("Espero que Infinity sea Infinity",function(){
    var res=rounded(Infinity);
    expect(res).toBe(Infinity);
  });
  it ("Espero que -Infinity sea -Infinity",function(){
    var res=rounded(-Infinity);
    expect(res).toBe(-Infinity);
  });
  it ("Espero que true sea false",function(){
    var res=rounded(true);
    expect(res).toBe(false);
  });
});

describe("Testing convertSpace()",function (){
  it ("Espero que '  ' sea '%20%20'",function(){
    var res=convertSpace('  ');
    expect(res).toBe('%20%20');
  });
  it ("Espero que 'hola como  ' sea 'hola%20como%20%20'",function(){
    var res=convertSpace('hola como  ');
    expect(res).toBe('hola%20como%20%20');
  });
  it ("Espero que 'holacomo' sea 'holacomo'",function(){
    var res=convertSpace('holacomo');
    expect(res).toBe('holacomo');
  });
  it ("Espero que 5 sea false",function(){
    var res=convertSpace(5);
    expect(res).toBe(false);
  });
  it ("Espero que undefined sea false",function(){
    var res=convertSpace(undefined);
    expect(res).toBe(false);
  });
  it ("Espero que ['1','2'] sea false",function(){
    var res=convertSpace(['1','2']);
    expect(res).toBe(false);
  });
  it ("Espero que null sea false",function(){
    var res=convertSpace(null);
    expect(res).toBe(false);
  });
});

describe("Testing getTotal()",function (){
  it("Espero que 7 sea 230",function(){
    var res=getTotal(7);
    expect(res).toBe(230);
  });
  it("Espero que 2 sea 80",function(){
    var res=getTotal(2);
    expect(res).toBe(80);
  });
  it("Espero que 6 sea 220",function(){
    var res=getTotal(6);
    expect(res).toBe(220);
  });
  it("Espero que 1.1 sea false",function(){
    var res=getTotal(1.1);
    expect(res).toBe(false);
  });
  it("Espero que Infinity sea false",function(){
    var res=getTotal(Infinity);
    expect(res).toBe(false);
  });
  it("Espero que null sea false",function(){
    var res=getTotal(null);
    expect(res).toBe(false);
  });
  it("Espero que true sea false",function(){
    var res=getTotal(true);
    expect(res).toBe(false);
  });
  it("Espero que 'true' sea false",function(){
    var res=getTotal('true');
    expect(res).toBe(false);
  });
});
