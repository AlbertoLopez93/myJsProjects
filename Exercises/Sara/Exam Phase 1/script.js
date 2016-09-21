"use strict";

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

function subtract(fecha,cant,str){
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

function concat(a){
  if(Array.isArray(a)===false){
    return false;
  }
  var args=Array.prototype.slice.call(arguments);
  var ary=[];
  for(var i=0;i<args.length;i++){
    if(Array.isArray(args[i])===true){
      for(var j=0;j<args[i].length;j++){
          ary[ary.length]=args[i][j];
        }
      }
    else{
      ary[ary.length]=args[i];
    }
  }
  return ary;
}


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
  var res,c=0,mod;
  mod=str.length%2;
  res=sub(str);
  function sub(str){
    var cad,index;
    cad="";
    index=1;
    while(cad.length!==str.length){
      cad=cad+str[index];
      index=index+2;
        if(mod===0){
          if(index===str.length-1){
          cad=cad+str[index];
          index=1;
          }
        }
        else{
          if(index===str.length-1 || index===str.length-2){
            cad=cad+str[index];
            index=0;
          }
        }
      }
      c++;
      if(c<n){
        cad=sub(cad);
      }
     return cad;
     }
    return res;
  }

function deepReverse(a){
  if(Array.isArray(a)===false){
    return false;
  }
  var ary=[],alength;
  if(Array.isArray(a)===false){
    return a;
  }
  if(a.lenght===1){
    if(Array.isArray(a[0])===false){
      return a;
    }
    else{
      return deepReverse(a[0]);
    }
  }
  else{
      alength=a.length-1;
      for(var i=0;i<a.length;i++){
        if(Array.isArray(a[i])===true){
          ary[alength]=deepReverse(a[i]);
        }
        else{
          ary[alength]=a[i];
        }
        alength--;
      }
    }
  return ary;
}

module.exports = {
  add        : add,
  subtract   : subtract,
  deepReverse: deepReverse,
  every      : every,
  some       : some,
  find       : find,
  map        : map,
  foreach    : foreach,
  filter     : filter,
  concat     : concat,
  encrypt    : encrypt
};
