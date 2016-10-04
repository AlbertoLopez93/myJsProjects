"use strict"

function NewDate(data) {
  var day = data.day;
  var month = data.month;
  var year = data.year;
  this.getDay = function getDay() {
    return day;
  }
  this.getMonth = function getMonth() {
    return month;
  }
  this.getYear = function getYear() {
    return year;
  }
  this.setDay = function setDay(newDay) {
    day = newDay;
  }
  this.setMonth = function setMonth(newMonth) {
    month = newMonth;
  }
  this.setYear = function setYear(newYear) {
    year = newYear;
  }
  this.setDate = function setDate(newDay, newMonth, newYear) {
    this.setDay(newDay);
    this.setMonth(newMonth);
    this.setYear(newYear);
  }
  this.toString = function toString() {
    if(day < 10) {
      if(month < 10) {
        return "0" + day + "/" + "0" + month + "/" + year;
      }
      return "0" + day + "/" +  month + "/" + year;
    }
    return day + "/" + month + "/" + year;
  }
}

module.exports = NewDate;
