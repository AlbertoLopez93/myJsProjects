"use strict";

function add(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(quantity<0)||(Number.isInteger(quantity)!=true)) {
    return false;
  }
  if(typeof key!= 'string') {
    return false;
  }

  if(key=='years') {
    var d=day.getDate();
    d+=(365*quantity);
    day.setDate(d);
  }
  if(key=='quarters') {
    var d=day.getDate();
    d+=(31*3*quantity);
    day.setDate(d);
  }
  if(key=='months') {
    var d=day.getDate();
    d+=(31*quantity);
    day.setDate(d);
  }
  if(key=='days') {
    var today=day.getDate();
    today+=quantity;
    day.setDate(today);
  }
  if(key=='hours') {
    var hour=day.getHours();
    hour+=quantity;
    day.setHours(hour);
  }
  if(key=='minutes') {
    var min=day.getMinutes();
    min+=quantity;
    day.setMinutes(min);
  }
  if(key=='seconds') {
    var sec=day.getSeconds();
    sec+=quantity;
    day.setSeconds(sec);
  }
  if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms+=quantity;
    day.setMilliseconds(ms);
  }
  return day.toString();
}

function substract(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(quantity<0)||(Number.isInteger(quantity)!=true)) {
    return false;
  }
  if(typeof key!= 'string') {
    return false;
  }

  if(key=='years') {
    var d=day.getDate();
    d-=(365*quantity);
    day.setDate(d);
  }
  if(key=='quarters') {
    var d=day.getDate();
    d-=(31*3*quantity);
    day.setDate(d);
  }
  if(key=='months') {
    var d=day.getDate();
    d-=(31*quantity);
    day.setDate(d);
  }
  if(key=='days') {
    var today=day.getDate();
    today-=quantity;
    day.setDate(today);
  }
  if(key=='hours') {
    var hour=day.getHours();
    hour-=quantity;
    day.setHours(hour);
  }
  if(key=='minutes') {
    var min=day.getMinutes();
    min-=quantity;
    day.setMinutes(min);
  }
  if(key=='seconds') {
    var sec=day.getSeconds();
    sec-=quantity;
    day.setSeconds(sec);
  }
  if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms-=quantity;
    day.setMilliseconds(ms);
  }
  return day.toString();
}

function deepReverse(e) {
  if(!Array.isArray(e)) {
    return false;
  }
  for(var k in e) {
    if(Array.isArray(e[k])) {
      e[k]=deepReverse(e[k]);
    }
  }
  e=e.reverse();
  return e;
}

var day=new Date('Sep 14, 16');

function every(aray,f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var index=f.index;
  var array=f.array;
  var bool=true;
  verifing: for(var x in aray) {
    bool=f(aray[x],index,array);
    if(bool!=true) {
      break verifing;
    }
  }
  return bool;
}

function some(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var index=f.index;
  var array=f.array;
  var bool=false;
  verifing: for(var x in aray) {
    bool=f(aray[x],index,array);
    if(bool!=false) {
      break verifing;
    }
  }
  return bool;
}

function find(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var index=f.index;
  var array=f.array;
  var bool=false;
  for(var x in aray) {
    bool=f(aray[x],index,array);
    if(bool==true) {
      return x;
    }
  }
  return undefined;
}

function map(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var index=f.index;
  var array=f.array;
  var elements=[];
  for(var u in aray) {
    elements.push(aray[u]);
  }
  for(var v in elements) {
    elements[v]=f(elements[v],index,array);
  }
  return elements;
}

function filter(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var index=f.index;
  var array=f.array;
  var bool=false;
  var elements=[];
  for(var u in aray) {
    bool=f(aray[u],index,array);
    if(bool!= false) {
      elements.push(aray[u]);
    }
  }
  return elements;
}

function concat(aray) {
  if(!Array.isArray(aray)) {
    return false;
  }
  for(var i=1;i<arguments.length;i++) {
    if(!Array.isArray(arguments[i])) {
      aray[aray.length]=arguments[i];
    }
    else {
      var sub=arguments[i];
      for(var k=0;k<sub.length;k++) {
        aray[aray.length]=sub[k];
      }
    }
  }
  return aray;
}
