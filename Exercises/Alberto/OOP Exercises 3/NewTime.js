"use strict"

function NewTime(time) {
  var hour = time.hour;
  var minute = time.minute;
  var second = time.second;
  this.getHour = function getHour() {
    return hour;
  }
  this.getMinute = function getMinute() {
    return minute;
  }
  this.getSecond = function getSecond() {
    return second;
  }
  this.setHour = function setHour(theHour) {
    if(theHour>23) {
      theHour = theHour%24;
    }
    hour = theHour;
  }
  this.setMinute = function setMinute(theMinute) {
    if(theMinute>59) {
      var theHour=theMinute/60;
      theHour=parseInt(theHour);
      theMinute=theMinute%60;
      this.setHour(hour+theHour);
    }
    minute = theMinute;
  }
  this.setSecond = function setSecond(theSecond) {
    if(theSecond>59) {
      var theMinute=theSecond/60;
      theMinute=parseInt(theMinute);
      theSecond=theSecond%60;
      this.setMinute(minute+theMinute);
    }
    second = theSecond;
  }
}

NewTime.prototype.setTime = function setTime(hour,minute,second) {
  this.setHour(hour);
  this.setMinute(minute);
  this.setSecond(second);
}
NewTime.prototype.toString = function() {
  var h=this.getHour();
  var min=this.getMinute();
  var sec=this.getSecond();
  if(h<10) {
    h='0'+h;
  }
  if(min<10) {
    min='0'+min;
  }
  if(sec<10) {
    sec='0'+sec;
  }
  return h+':'+min+':'+sec;
}
NewTime.prototype.nextSecond = function() {
  var sec=this.getSecond();
  this.setSecond(sec+1);
  return this;
}
NewTime.prototype.previousSecond = function() {
  var sec=this.getSecond();
  if(0==sec) {
    this.setSecond(59);
    var min=this.getMinute();
    if(0==min) {
      this.setMinute(59);
      var hour=this.getHour();
      if(0==hour) {
        this.setHour(23);
      }
      else {
        this.setHour(hour-1);
      }
    }
    else {
      this.setMinute(min-1);
    }
  }
  else {
    this.setSecond(sec-1);
  }
  return this;
}

module.exports = NewTime;

var theTime = new NewTime({hour:8,minute:6,second:35});
console.log(theTime.toString());
theTime.setTime(25,64,0);
console.log(theTime.previousSecond().toString());
console.log(theTime.nextSecond().toString());
