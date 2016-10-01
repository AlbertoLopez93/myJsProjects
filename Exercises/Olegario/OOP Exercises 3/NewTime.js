"use strict"

function NewTime(instancia) {
  let hour = instancia.hour;
  let minute = instancia.minute;
  let second = instancia.second;
  this.getHour = function () {
    return hour;
  };
  this.getMinute = function () {
    return minute;
  };
  this.getSecond = function () {
    return second;
  };
  this.setHour = function (newHour) {
    if (Number.isInteger(newHour)) {
      hour = newHour;
    }
  };
  this.setMinute = function (newMinute) {
    if (Number.isInteger(newMinute)) {
      minute = newMinute;
    }
  };
  this.setSecond = function (newSecond) {
    if (Number.isInteger(newSecond)) {
      second = newSecond;
    }
  };
}

NewTime.prototype.setTime = function (newHour, newMinute, newSecond) {
  this.setHour(newHour);
  this.setMinute(newMinute);
  this.setSecond(newSecond);
}
NewTime.prototype.toString = function () {
  let hora ="" + this.getHour() < 10 ? "0" + this.getHour() : this.getHour();
  let minuto ="" + this.getMinute() < 10 ? "0" + this.getMinute(): this.getMinute();
  let segundo ="" + this.getSecond() < 10 ?   "0" + this.getSecond() : this.getSecond();
  return hora + ":" + minuto +":" + segundo;
}

NewTime.prototype.nextSecond = function () {
  let fecha = new Date(2009, 7, 24, this.getHour(), this.getMinute(), this.getSecond()+1);
  this.hour = fecha.getHours();
  this.minute = fecha.getMinutes();
  this.second = fecha.getSeconds();
  return this;
}
NewTime.prototype.previousSecond = function () {
  let fecha = new Date(2009, 7, 24, this.getHour(), this.getMinute(), this.getSecond()-1);
  this.hour = fecha.getHours();
  this.minute = fecha.getMinutes();
  this.second = fecha.getSeconds();
  return this;
}
var x = {
  hour : 4,
  minute : 3,
  second : 29
};

var w = new NewTime(x);
/*
console.log(w.getHour(), w.getMinute(), w.getSecond());
w.setHour(5), w.setMinute(25), w.setSecond(59)
console.log(w.getHour(), w.getMinute(), w.getSecond());
console.log(w.setTime(7,0,0));
console.log(w.getHour(), w.getMinute(), w.getSecond());
console.log(w.toString());
console.log(w.previousSecond());*/

module.exports = NewTime;
