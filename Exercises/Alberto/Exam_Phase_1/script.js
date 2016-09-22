"use strict";

function add(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(Number.isInteger(quantity)!=true)) {
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
  else if(key=='quarters') {
    var d=day.getDate();
    d+=(31*3*quantity);
    day.setDate(d);
  }
  else if(key=='months') {
    var d=day.getDate();
    d+=(31*quantity);
    day.setDate(d);
  }
  else if(key=='days') {
    var today=day.getDate();
    today+=quantity;
    day.setDate(today);
  }
  else if(key=='hours') {
    var hour=day.getHours();
    hour+=quantity;
    day.setHours(hour);
  }
  else if(key=='minutes') {
    var min=day.getMinutes();
    min+=quantity;
    day.setMinutes(min);
  }
  else if(key=='seconds') {
    var sec=day.getSeconds();
    sec+=quantity;
    day.setSeconds(sec);
  }
  else if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms+=quantity;
    day.setMilliseconds(ms);
  }
  else {
    return day;
  }
  return day;
}

function subtract(day,quantity,key) {
  if((typeof day!= 'object')||(isNaN(Date.parse(day)))) {
    return false; //parse in case receive object, but not Date()
  }
  if((isNaN(quantity))||(Number.isInteger(quantity)!=true)) {
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
  else if(key=='quarters') {
    var d=day.getDate();
    d-=(31*3*quantity);
    day.setDate(d);
  }
  else if(key=='months') {
    var d=day.getDate();
    d-=(31*quantity);
    day.setDate(d);
  }
  else if(key=='days') {
    var today=day.getDate();
    today-=quantity;
    day.setDate(today);
  }
  else if(key=='hours') {
    var hour=day.getHours();
    hour-=quantity;
    day.setHours(hour);
  }
  else if(key=='minutes') {
    var min=day.getMinutes();
    min-=quantity;
    day.setMinutes(min);
  }
  else if(key=='seconds') {
    var sec=day.getSeconds();
    sec-=quantity;
    day.setSeconds(sec);
  }
  else if(key=='milliseconds') {
    var ms=day.getMilliseconds();
    ms-=quantity;
    day.setMilliseconds(ms);
  }
  else {
    return day;
  }
  return day;
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

//var day=new Date('Sep 14, 16');

function every(aray,f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=true;
  verifing: for(var x in aray) {
    bool=f(aray[x],x,aray);
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
  var bool=false;
  verifing: for(var x in aray) {
    bool=f(aray[x],x,aray);
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
  var bool=false;
  for(var x=0; x<aray.length; x++) {
    bool=f(aray[x],x,aray);
    if(bool==true) {
      return aray[x];
    }
  }
  return undefined;
}

function map(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var elements=[];
  for(let v in aray) {
    /*if(typeof aray[v]=='object') {
      var oneObj=aray[v];
      var newObj={};
      for(let w in oneObj) {
        newObj[w]=oneObj[w];
      }
      elements.push(f(newObj,v,aray));
    }
    else {*/
      elements.push(f(aray[v],v,aray))
    //}
  }
  return elements;
}

function filter(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  var bool=false;
  var elements=[];
  for(var u in aray) {
    bool=f(aray[u],u,aray);
    if(bool== true) {
      elements.push(aray[u]);
    }
  }
  return elements;
}

function foreach(aray, f) {
  if((!Array.isArray(aray))||(typeof f!='function')) {
    return false;
  }
  for(var w in aray) {
    f(aray[w],w,aray);
  }
  return undefined;
}

function concat(input) {
  if(!Array.isArray(input)) {
    return false;
  }
  var aray=[];
  for(var i in input){
    aray.push(input[i]);
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

function encrypt(word,n) {
  if(typeof word!="string" || n<0 || !Number.isInteger(n)) {
    return false;
  }
  var word1="",word2="";
  for(let i=0; i<word.length; i++) {
    if(i%2!=0) {
      word1+=word[i]; //word1 save chars starting in second
    }
    else {
      word2+=word[i]; //word2 save the others chars
    }
  }
  word1+=word2; //putting other chars to end
  if(n==0) {
    return word; //original word
  }
  else {
    return encrypt(word1,n-1);
  }
  return word1;
}

module.exports = {
  add        : add,
  subtract  : subtract,
  deepReverse: deepReverse,
  every      : every,
  some       : some,
  find       : find,
  map        : map,
  filter     : filter,
  foreach    : foreach,
  concat     : concat,
  encrypt    : encrypt
};
