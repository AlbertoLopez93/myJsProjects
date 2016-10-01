'use strict'

function NewTime(data) {
  let hour = data.hour;
  let minute = data.minute;
  let second = data.second;
  this.getHour = function getHour() {
    return hour;
  }
  this.getMinute = function getMinute() {
    return minute;
  }
  this.getSecond = function getSecond() {
    return second;
  }
  this.setHour = function setHour(newHour) {
    hour = newHour;
  }
  this.setMinute = function setMinute(newMinute) {
    minute = newMinute;
  }
  this.setSecond = function setSecond(newSecond) {
    second = newSecond;
  }
}

NewTime.prototype.setTime = function setTime(newHour, newMinute, newSecond) {
  this.setHour(newHour);
  this.setMinute(newMinute);
  this.setSecond(newSecond);
}

NewTime.prototype.toString = function toString() {
  let hour = '';
  let minute = '';
  let second = '';
  (this.getHour() < 10) ? hour = '0' + this.getHour() : hour += this.getHour();
  (this.getMinute() < 10) ? minute = '0' + this.getMinute() : minute += this.getMinute();
  (this.getSecond() < 10) ? second = '0' + this.getSecond() : second += this.getSecond();
  return hour + ":" + minute + ":" + second;
}

NewTime.prototype.nextSecond = function nextSecond() {
  if(this.getSecond() + 1 === 60) {
    if(this.getMinute() + 1 === 60) {
      if(this.getHour() + 1 === 24) {
        this.setHour(0);
        this.setMinute(0);
        this.setSecond(0);
      } else {
        this.setHour(this.getHour() + 1);
        this.setMinute(0);
        this.setSecond(0);
      }
    } else {
      this.setMinute(this.getMinute() + 1);
      this.setSecond(0);
    }
  } else {
    this.setSecond(this.getSecond() + 1);
  }
  return this;
}

NewTime.prototype.previousSecond = function previousSecond() {
  if(this.getSecond() - 1 === -1) {
    if(this.getMinute() - 1 === -1) {
      if(this.getSecond() - 1 === -1) {
        this.setHour(23);
        this.setMinute(59);
        this.setSecond(59);
      } else {
        this.setHour(this.getHour() - 1);
        this.setMinute(59);
        this.setSecond(59);
      }
    } else {
      this.setMinute(this.getMinute() - 1);
      this.setSecond(59);
    }
  } else {
    this.setSecond(this.getSecond() - 1);
  }
  return this;
}

module.exports = NewTime;
