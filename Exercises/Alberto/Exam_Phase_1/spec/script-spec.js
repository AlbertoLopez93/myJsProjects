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
