/*
Create a class named NewTime, which will receive in its constructor:
hour:int [0..23]
minute:int [0..59]
second:int [0..59]
All the above properties should be set as private properties. It will also have the following methods:
getHour():int will return the hour of the instance.
getMinute():int will return the minutes of the instance.
getSecond():int will return the seconds of the instance.
setHour(hour:int):void will set a new hour to the instance.
setMinute(minutes:int):void will set a new minutes to the instance.
setSecond(seconds:int):void will set a new seconds to the instance.
setTime(hour:int, minute:int, second:int):void will set a new hour, minutes and seconds to the instance.
toString():string will return a string following the pattern: “hh:mm:ss” with leading zeros if needed.
nextSecond():NewTime will add one second to the current instance and return the instance.
previousSecond():NewTime will subtract one second to the current instance and return the instance.
For the methods nextSecond and previousSecond take into consideration that those operation
might cause the minutes or hours to change too. */
"use strict"
function NewTime (data){
    let hour = data.hour;
    this.getHour = function (){
        if ( hour >= 0 && hour < 24){
            return hour;
        }
    }
    let minute = data.minute;
    this.getMinute = function(){
        if ( minute >= 0 && minute < 60){
            return minute;
        }
    }
    let second = data.second;
    this.getSecond = function(){
        if ( second >= 0 && second < 60){
            return second;
        }
    }
    this.setHour = function(newHour){
        if (newHour < 24 && newHour >= 0) {
            hour = newHour;
        }
    }
    this.setMinute = function(newMinute){
        if (newMinute <= 59 && newMinute >= 0) {
            minute = newMinute;
        }
    }
    this.setSecond = function(newSecond){
        if (newSecond <= 59 && newSecond >= 0) {
            second = newSecond;
        }
    }
    this.setTime = function(newHour, newMinute, newSecond){
        if (newHour <= 23 && newHour >= 0) {
            hour = newHour;
        }
        if (newMinute <= 59 && newMinute >= 0) {
            minute = newMinute;
        }
        if (newSecond <= 59 && newSecond >= 0) {
            second = newSecond;
        }
    }
}
NewTime.prototype.toString = function(){
    let hour = this.getHour();
    let minute = this.getMinute();
    let second = this.getSecond();
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    return hour + ":" + minute + ":" + second;
}
NewTime.prototype.nextSecond = function(){
    let currentSecond = this.getSecond();
    let currentHour = this.getHour();
    let currentMinute = this.getMinute();
    let newSecond = currentSecond + 1;
    if( newSecond > 59 ){
        newSecond = 0;
        this.setSecond(newSecond);
        currentMinute += 1;
        if( currentMinute > 59 ){
            currentMinute = 0;
            this.setMinute(currentMinute);
            currentHour += 1;
            if( currentHour > 23 ){
                currentHour = 0;
                this.setHour(currentHour);
            } else {
                this.setHour(currentHour);
            }
        }  else {
            this.setMinute(currentMinute);
        }
    } else {
        this.setSecond(newSecond);
    }
    return this;
}//NewTime will add one second to the current instance and return the instance.

NewTime.prototype.previousSecond = function(){
    let currentSecond = this.getSecond();
    let currentHour = this.getHour();
    let currentMinute = this.getMinute();
    let newSecond = currentSecond;
    if( currentSecond === 0 ){
        newSecond = 59;
        this.setSecond(newSecond);
        if( currentMinute = "00" ){
            currentMinute = 59;
            this.setMinute(currentMinute);
            if( currentHour = "00" ){
                currentHour = 23;
                this.setHour(currentHour);
            } else {
                currentHour -= 1;
                this.setHour(currentHour);
            }
        }  else {
            currentMinute -= 1;
            this.setMinute(currentMinute);
        }
    } else {
        newSecond -= 1;
        this.setSecond(newSecond);
    }
    return this;
}//:NewTime will subtract one second to the current instance and return the instance.

module.exports = NewTime;
