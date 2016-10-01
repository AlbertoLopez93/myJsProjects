"use strict";
function NewTime(obj) {
    let hour=obj.hour,minute=obj.minute,second=obj.second;
this.getHour=function getHour() {
    return hour;
}
this.getMinute=function getMinute() {
    return minute;
}
this.getSecond=function getSecond() {
    return second;
}
this.setHour=function setHour(newHour) {
    if(typeof newHour==="number")
    hour=newHour;
}
this.setMinute=function setMinute(newMinutes) {
    if(typeof newMinutes==="number")
    minute=newMinutes;
}
this.setSecond=function setSecond(newSecond) {
    if(typeof newSecond==="number")
    second=newSecond;
}
}
NewTime.prototype.setTime=function setTime(newHour,newMinutes,newSecond) {
    this.setHour(newHour);
    this.setMinute(newMinute);
    this.setSecond(newSecond);
    return this;
}
NewTime.prototype.toString=function toString() {
    var hourZero,minuteZero,secondZero;
    if(this.getHour() < 10){
        hourZero= "0" + this.getHour() + ":";
    } else {
	    hourZero=this.getHour() + ":";
	   }
	if(this.getMinute() < 10){
	    minuteZero= "0" + this.getMinute() + ":";
	} else {
	    minuteZero= this.getMinute() + ":";
	   }
       if(this.getSecond() < 10){
   	    secondZero= "0" + this.getSecond();
   	} else {
   	    secondZero= this.getSecond();
   	   }
    return hourZero+minuteZero+secondZero;
}
NewTime.prototype.nextSecond=function nextSecond() {
    if(this.getSecond()===59&&this.getHour()===23){
        this.setHour(0);
        this.setMinute(0);
        this.setSecond(0);
        return this;
    }
    if(this.getSecond()===59&&this.getMinute()===59&&this.getHour()<23){
        this.setHour(this.getHour()+1);
        this.setMinute(0);
        this.setSecond(0);
        return this;
    }
    if(this.getSecond()===59){
        this.setMinute(this.getMinute()+1);
        this.setSecond(0);
        return this;
    }else{
        this.setSecond(this.getSecond()+1);
        return this;
    }

}
NewTime.prototype.previousSecond=function previousSecond() {
    if(this.getSecond()===0&&this.getHour()===0){
        this.setHour(23);
        this.setMinute(59);
        this.setSecond(59);
        return this;
    }
    if(this.getSecond()===0&&this.getMinute()===0&&this.getHour()<24){
        this.setHour(this.getHour()-1);
        this.setMinute(59);
        this.setSecond(59);
        return this;
    }
    if(this.getSecond()===0){
        this.setMinute(this.getMinute()-1);
        this.setSecond(59);
        return this;
    }else{
        this.setSecond(this.getSecond()-1);
        return this;
    }

}/*
var hora=new NewTime({hour:20,minute:59,second:59})
hora.nextSecond();
console.log(hora.toString());
var hora=new NewTime({hour:23,minute:59,second:59})
hora.nextSecond();
console.log(hora.toString());
var hora=new NewTime({hour:5,minute:5,second:59})
hora.nextSecond();
console.log(hora.toString());
var hora=new NewTime({hour:0,minute:0,second:0})
hora.previousSecond();
console.log(hora.toString());
var hora=new NewTime({hour:23,minute:0,second:0})
hora.previousSecond();
console.log(hora.toString());
var hora=new NewTime({hour:5,minute:5,second:0})
hora.previousSecond();
console.log(hora.toString());
*/
module.exports=NewTime;
