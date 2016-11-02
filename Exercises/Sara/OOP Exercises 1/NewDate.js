"use strict";
function NewDate(object){
  var day=object.day;
  var month=object.month;
  var year=object.year;
  this.getDay=function getDay(){
    return day;
  }
  this.getMonth=function getMonth(){
    return month;
  }
  this.getYear=function getYear(){
    return year;
  }
  this.setDay=function setDay(newDay){
    day=newDay;
  }
  this.setMonth=function setMonth(newMonth){
    month=newMonth;
  }
  this.setYear=function setYear(newYear){
    year=newYear;
  }
}
NewDate.prototype.setDate=function(day, month, year){
  this.setDay(day);
  this.setMonth(month);
  this.setYear(year);
}
NewDate.prototype.toString=function(){
  var dia=this.getDay();
  if(dia<10){
    dia="0"+dia;
  }
  var mes=this.getMonth();
  if(mes<10){
    mes="0"+mes;
  }
  var anio=this.getYear();
  return dia+"/"+mes+"/"+anio;
}
module.exports=NewDate;
