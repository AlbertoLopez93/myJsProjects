"use strict"

function newDate(date) {
  var day = date.day;
  var month = date.month;
  var year = date.year;

  this.getDay = function() {
    return day;
  }
  this.getMonth = function() {
    return month;
  }
  this.getYear = function() {
    return year;
  }
  this.setDay = function(num) {
    if(Number.isInteger(num)) {
      if(num>30 && (month==4 ||month==6 ||month==9 ||month==11)) {
        this.setMonth(month+1);
        this.setDay(num-30);
      }
      else if(num>31 && (month==1 ||month==3 ||month==5 ||month==7 ||month==8 ||month==10 ||month==12)) {
        this.setMonth(month+1);
        this.setDay(num-31);
      }
      else if(num>29 && month==2) {
        this.setMonth(month+1);
        this.setDay(num-28);
      }
      else {
        day=num;
      }
    }
  }
  this.setMonth = function(num) {
    if(!Number.isInteger(num)) {
      return ;
    }
    if(num>12) {
      year+=num/12;
      year=parseInt(year);
      num=num%12;
    }
    if(num==0) {
      year--;
      num=12;
    }
      month=num;
  }
  this.setYear = function(num) {
    if(Number.isInteger(num)) {
      year=num;
    }
  }
}

newDate.prototype ={};
newDate.prototype.setDate = function(day,month,year) {
  if(typeof day=='number' && typeof month=='number' && typeof year=='number') {
    this.setYear(year);
    this.setMonth(month);
    this.setDay(day);
  }
}
newDate.prototype.toString = function() {
  var day=this.getDay();
  var month=this.getMonth();
  var year=this.getYear();
  if(typeof day=='number' && typeof month=='number' && typeof year=='number') {
    if(day<10) {
      day= '0'+day;
    }
    if(month<10) {
      month= '0'+month;
    }
    if(year<100) {
      year= '19'+year;
    }
    return day+'/'+month+'/'+year;
  }
}

var today = new newDate({day:3,month:12,year:2010});
today.setDate(65,13,2010);
console.log(today.toString());

module.exports = newDate;
