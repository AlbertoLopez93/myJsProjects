function add(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function addYear(f,q){
    f.setDate(f.getDate()+365*q);
    return f;
  }
  function addQuarter(f,q){
    f.setDate(f.getDate()+3*31*q);
    return f;
  }
  function addMonth(f,q){
    f.setDate(f.getDate()+31*q);
    return f;
  }
  function addDay(f,q){
    f.setDate(f.getDate()+q);
    return f;
  }
  function addHour(f,q){
    f.setHours(f.getHours()+q);
    return f;
  }
  function addMinute(f,q){
    f.setMinutes(f.getMinutes()+q);
    return f;
  }
  function addSecond(f,q){
    f.setSeconds(f.getSeconds()+q);
    return f;
  }
  function addMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()+q);
    return f;
  }
  switch(str){
    case 'years':
      addYear(fecha,cant);
      break;
    case 'quarters':
      addQuarter(fecha,cant);
      break;
    case 'months':
      addMonth(fecha,cant);
      break;
    case 'days':
      addDay(fecha,cant);
      break;
    case 'hours':
      addHour(fecha,cant)
      break;
    case 'minutes':
      addMinute(fecha,cant)
      break;
    case 'seconds':
      addSecond(fecha,cant);
      break;
    case 'milliseconds':
      addMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}

function substract(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function substractYear(f,q){
    f.setDate(f.getDate()-365*q);
    return f;
  }
  function substractQuarter(f,q){
    f.setDate(f.getDate()-3*31*q);
    return f;
  }
  function substractMonth(f,q){
    f.setDate(f.getDate()-31*q);
    return f;
  }
  function substractDay(f,q){
    f.setDate(f.getDate()-q);
    return f;
  }
  function substractHour(f,q){
    f.setHours(f.getHours()-q);
    return f;
  }
  function substractMinute(f,q){
    f.setMinutes(f.getMinutes()-q);
    return f;
  }
  function substractSecond(f,q){
    f.setSeconds(f.getSeconds()-q);
    return f;
  }
  function substractMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()-q);
    return f;
  }
  switch(str){
    case 'years':
      substractYear(fecha,cant);
      break;
    case 'quarters':
      substractQuarter(fecha,cant);
      break;
    case 'months':
      substractMonth(fecha,cant);
      break;
    case 'days':
      substractDay(fecha,cant);
      break;
    case 'hours':
      substractHour(fecha,cant)
      break;
    case 'minutes':
      substractMinute(fecha,cant)
      break;
    case 'seconds':
      substractSecond(fecha,cant);
      break;
    case 'milliseconds':
      substractMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}

function every(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===false){
      return false;
    }
  }
  return true;
}
every([],function(element){
  return element<5;
});

function some(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      return true;
    }
  }
  return false;
}
some([],function(element){
  return element===true;
});

function find(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      return a[i];
    }
  }
  return undefined;
}
find([],function(element){
  return element===5;
});

function map(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  var res=[];
  for(var i=0;i<a.length;i++){
      res[res.length]=fun(a[i],i,a);
    }
  return res;
}
map([0,0,0],function(element){
  return element+5;
});

function foreach(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  for(var i=0;i<a.length;i++){
      fun(a[i],i,a);
    }
  return undefined;
}
foreach([1,2,3],function(element,i,a){
  //console.log(a[i]);
});

function filter(a,fun){
  if(Array.isArray(a)===false){
    return false;
  }
  if(typeof fun!=='function'){
    return false;
  }
  var res=[];
  for(var i=0;i<a.length;i++){
    if(fun(a[i],i,a)===true){
      res[res.length]=a[i];
    }
  }
  return res;
}
filter([],function(element){
  return element<=2;
});

function concat(a){
  if(Array.isArray(a)===false){
    return false;
  }
  var args=Array.prototype.slice.call(arguments);
  var ary=[];
  for(var i=0;i<args.length;i++){
    if(Array.isArray(args[i])===true){
      for(j=0;j<args[i].length;j++){
          ary[ary.length]=args[i][j];
        }
      }
    else{
      ary[ary.length]=args[i];
    }
  }
  return ary;
}
concat([],true,6,[6,7],'hola',[2,4,[7,2,4,[5]]]);

function encrypt(str,n){
  if(typeof str!=='string'){
    return false;
  }
  if(isNaN(n)===true || Number.isInteger(n)===false || n===Infinity || n===null || typeof n==='boolean'){
    return false;
  }
  if(str.length===0){
    return "";
  }
  if(str.length===1){
    return str;
  }
  var cad,index;
  for(var i=0;i<n;i++){
    if(i!==0){
      str=cad;
    }
    cad="";
    index=1;
    while(cad.length!==str.length){
      cad=cad+str[index];
      index=index+2;
      if(index===str.length){
        index=0;
      }
    }
  }
return cad;
}

describe("Testing every", function () {
  it("Debe regresar true si le mandas [1,2,3]",function(){
    expect(every([1,2,3],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar false si le mandas [5,1,2]",function(){
    expect(every([5,1,2],function(element){
      return element<5;
    })).toBe(false)
  })
  it("Debe regresar true si le mandas []",function(){
    expect(every([],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar false si le mandas 'hola'",function(){
    expect(every('hola',function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas null",function(){
    expect(every(null,function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas Infinity",function(){
    expect(every(Infinity,function(element){
      return element<5;
    })).toBe(false);
  })
  it("Debe regresar false si le mandas true",function(){
    expect(every(true,function(element){
      return element<5;
    })).toBe(false);
  })
});
describe("Testing some", function () {
  it("Debe regresar true si le mandas [1,2,3]",function(){
    expect(every([1,2,3],function(element){
      return element<5;
    })).toBe(true);
  })
  it("Debe regresar true si le mandas [5,1,2]",function(){
    expect(every([5,1,2],function(element){
      return element<5;
    })).toBe(false)
  })
  it("Debe regresar true si le mandas [5,5,6]",function(){
    expect(every([5,5,6],function(element){
      return element<5;
    })).toBe(false)
  })
});
