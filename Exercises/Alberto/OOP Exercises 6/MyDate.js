"use strict";

function MyDate(year,month,day) {

  Object.defineProperty(this,'getYear', {value:function(){return year;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setYear',
  {value:function(y){
    if(y<0 || y>9999){console.log('Invalid year!');}
    else{year=y;}
  } ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'getMonth', {value:function(){return month;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setMonth',
  {value:function(m){
    if(m<1 || m>12){console.log('Invalid month!');}
    else{month=m;}
  } ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'getDay', {value:function(){return day;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setDay',
  {value:function(d){
    let month=this.getMonth();
    if(d<1 || d>this.daysInMonths[month-1]){console.log('Invalid day!');}
    else{day=d;}
  } ,
  enumerable:true, configurable:false, writable:false});
}

Object.defineProperty(MyDate.prototype,'strMonths',
{value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] ,
enumerable:false, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'strDays',
{value:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
enumerable:false, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'daysInMonths',
{value:[31,29,31,30,31,30,31,31,30,31,30,31],
enumerable:false, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'toString',
  {value:function(){
    let year = this.getYear();
    if(year<10){year= '000'+year;}
    if(year<100){year= '00'+year;}
    if(year<1000){year= '0'+year;}
    let month = this.getMonth();
    if(month<10){month= '0'+month;}
    let day = this.getDay();
    let dayOfWeek = this.getDayOfWeek(year,month,day);
    return this.strDays[dayOfWeek]+' '+day+' '+this.strMonths[month-1]+' '+year;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'isLeapYear',
  {value:function(year){
    if(year %4 !=0) {return false;}
    if(year %100 ==0 && year %400 !=0) {return false;}
    return true;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'isValidDate',
  {value:function(year,month,day){
    if(year<0 || year>9999){return false;}
    if(month<1 || month>12){return false;}
    if(day<1 || day>this.daysInMonths[month-1]){return false;}
    if(29==day && 2==month && !this.isLeapYear(year)){return false;}
    return true;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'setDate',
  {value:function(year,month,day){
    if(this.isValidDate(year,month,day)) {
      this.setYear(year);
      this.setMonth(month);
      this.setDay(day);
    }
    else {console.log("Invalid year, month, or day!");}
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextYear',
  {value:function(){
    let year= this.getYear();
    this.setYear(year+1);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextMonth',
  {value:function(){
    let month= this.getMonth();
    if(month<12) {this.setMonth(month+1);}
    else {
      this.setMonth(1);
      this.nextYear();
    }
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextDay',
  {value:function(){
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getYear();
    if(this.isValidDate(year,month,day+1)){this.setDay(day+1);}
    else{
      this.setDay(1);
      this.nextMonth();
    }
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousYear',
  {value:function(){
    let year= this.getYear();
    this.setYear(year-1);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousMonth',
  {value:function(){
    let month= this.getMonth();
    if(month>1) {this.setMonth(month-1);}
    else {
      this.setMonth(12);
      this.previousYear();
    }
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousDay',
  {value:function(){
    let day= this.getDay();
    if(day>1) {this.setDay(day-1);}
    else {
      this.previousMonth();
      let month= this.getMonth();
      let year= this.getYear();
      day= this.daysInMonths[month-1];
      this.setDay(day);
      if(!this.isValidDate(year,month,day)) {this.setDay(day-1);}
    }
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'getDayOfWeek',
  {value:function(year,month,day){
    let addForMonth = [0,3,2,5,0,3,5,1,4,6,2,4];
    if(month<3) {
      year--;
    }
    let numDayInWeek = year + parseInt(year/4,10) - parseInt(year/100) + parseInt(year/400);
    numDayInWeek = numDayInWeek + addForMonth[month-1] + day;
    numDayInWeek %= 7;
    return numDayInWeek;
  },
  enumerable:true, configurable:false, writable:false});

module.exports = MyDate;
