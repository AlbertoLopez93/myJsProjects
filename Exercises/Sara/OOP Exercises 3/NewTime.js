"use strict";
function NewTime(object){
  var hour=object.hour;
  var minute=object.minute;
  var second=object.second;
  this.getHour=function getHour(){
    return hour;
  }
  this.getMinute=function getMinute(){
    return minute;
  }
  this.getSecond=function getSecond(){
    return second;

  }
  this.setHour=function setHour(newHour){
    hour=newHour;
  }
  this.setMinute=function setMinute(newMinute){
    minute=newMinute;
  }
  this.setSecond=function setSecond(newSecond){
    second=newSecond;
  }
}
NewTime.prototype.setTime=function (newHour,newMinute,newSecond){
  this.setHour(newHour);
  this.setMinute(newMinute);
  this.setSecond(newSecond);
  }
NewTime.prototype.toString=function (){
  var hour=this.getHour();
  var minute=this.getMinute();
  var second=this.getSecond();
  var str="";
  if(hour<10){
    str=str+"0"+hour+":";
  }
  else{
    str=str+hour+":";
  }
  if(minute<10){
    str=str+"0"+minute+":";
  }
  else{
    str=str+minute+":";
  }
  if(second<10){
    str=str+"0"+second;
  }
  else{
    str=str+second;
  }
  return str;
}
NewTime.prototype.nextSecond=function (){
  if(this.getSecond()<59){
    this.setSecond(this.getSecond()+1);
  }
  else{
    this.setSecond(0);
    this.setMinute(this.getMinute()+1);
  }
  if(this.getMinute()===60){
    this.setHour(this.getHour()+1);
    this.setMinute(0);
  }
  if(this.getHour()===24){
    this.setHour(0);
  }
  return this;
}
NewTime.prototype.previousSecond=function (){
  if(this.getSecond()===0){
    this.setSecond(59);
    if(this.getMinute()===0){
      this.setMinute(59)
      if(this.getHour()===0){
        this.setHour(23);
      }
      else{
        this.setHour(this.getHour()-1);
      }
    }
    else{
      this.setMinute(this.getMinute()-1);
    }
  }
  else{
      this.setSecond(this.getSecond()-1);
  }
  return this;
}
var c=new NewTime({hour:23,minute:0,second:0});
c.previousSecond();
console.log(c.toString());
c.nextSecond();
console.log(c.toString());
