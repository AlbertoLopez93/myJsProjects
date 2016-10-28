"use strict";

function MyDate(year,month,day) {

  Object.defineProperty(this,'getYear', {value:function(){return year;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setYear',
  {value:function(y){
    if(y<1 || y>9999){console.log('Invalid year!');}
    else if(MyDate.isValidDate(y,month,day)){year=y;}
  } ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'getMonth', {value:function(){return month;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setMonth',
  {value:function(m){
    if(m<1 || m>12){console.log('Invalid month!');}
    else if(MyDate.isValidDate(year,m,day)){month=m;}
  } ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'getDay', {value:function(){return day;} ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setDay',
  {value:function(d){
    if(d>=1 && d<=MyDate.daysInMonths[month-1]){day=d;}
    else if ( (2 === month && 29 === d) && MyDate.isLeapYear ( year ) ) { day = 29; }
    else{console.log('Invalid day!');}
  } ,
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(this,'setDate',
    {value:function(year_,month_,day_){
      if(MyDate.isValidDate(year_,month_,day_)) {
        year = year_;
        month = month_;
        day = day_;
      }
      else {console.log("Invalid year, month, or day!");}
    },
    enumerable:true, configurable:false, writable:false});

}

//Static atributes
Object.defineProperty(MyDate,'daysInMonths',
{value:[31,28,31,30,31,30,31,31,30,31,30,31],
enumerable:false, configurable:false, writable:false});

Object.defineProperty(MyDate,'strMonths',
{value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] ,
enumerable:false, configurable:false, writable:false});

Object.defineProperty(MyDate,'strDays',
{value:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
enumerable:false, configurable:false, writable:false});

//Static methods
Object.defineProperty(MyDate,'getDayOfWeek',
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

Object.defineProperty(MyDate, 'isLeapYear',
  {value:function(year){
    if(year %4 !=0) {return false;}
    if(year %100 ==0 && year %400 !=0) {return false;}
    return true;
  },
  enumerable:true, configurable:false, writable:false});

  Object.defineProperty(MyDate,'isValidDate',
    {value:function(year,month,day){
      if ( ! year ) { return false; }
      if(year<1 || year>9999){return false;}
      if(month<1 || month>12){return false;}
      if(29==day && 2==month && MyDate.isLeapYear(year)){return true;}
      if(day<1 || day>MyDate.daysInMonths[month-1]){return false;}
      return true;
    },
    enumerable:true, configurable:false, writable:false});


//Prototype Object
Object.defineProperty(MyDate.prototype,'toString',
  {value:function(){
    let year = this.getYear();
    if(year<10){year= '000'+year;}
    if(year<100){year= '00'+year;}
    if(year<1000){year= '0'+year;}
    let month = this.getMonth();
    if(month<10){month= '0'+month;}
    let day = this.getDay();
    let dayOfWeek = MyDate.getDayOfWeek(year,month,day);
    return MyDate.strDays[dayOfWeek]+' '+day+' '+MyDate.strMonths[month-1]+' '+year;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextYear',
  {value:function(){
    let year = this.getYear();
    if(year === 9999) {return this;}
    year +=1;
    let month = this.getMonth();
    let day= this.getDay();
    while(! MyDate.isValidDate(year, month, day)) {
      day--;
    }
    this.setDay(day);
    this.setYear(year);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextMonth',
  {value:function(){
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getYear();
    month += 1;
    if(month === 13 && year === 9999) {return this;}
    if(month === 13) {
      month = 1;
      year += 1;
    }
    while(! MyDate.isValidDate(year, month, day)) {
      day--;
    }
    this.setDay(day);
    this.setMonth(month);
    this.setYear(year);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'nextDay',
  {value:function(){
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getYear();
    if ( year === 9999 && month === 12 && day === 31 ) {return this;}
    if ( MyDate.isValidDate(year,month,day+1) ){this.setDay(day+1);}
    else{
      this.setDay(1);
      this.nextMonth();
    }
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousYear',
  {value:function(){
    let year = this.getYear();
    if(year === 1) {return this;}
    year -=1;
    let month = this.getMonth();
    let day= this.getDay();
    while(! MyDate.isValidDate(year, month, day)) {
      day--;
    }
    this.setDay(day);
    this.setYear(year);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousMonth',
  {value:function(){
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getYear();
    month -= 1;
    if(month === 0 && year === 1) {return this;}
    if(month === 0) {
      month = 12;
      year -= 1;
    }
    while(! MyDate.isValidDate(year, month, day)) {
      day--;
    }
    this.setDay(day);
    this.setMonth(month);
    this.setYear(year);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

Object.defineProperty(MyDate.prototype,'previousDay',
  {value:function(){
    let day= this.getDay();
    let month= this.getMonth();
    let year= this.getYear();
    day -= 1;
    if ( year === 1 && month === 1 && day === 0 ) {return this;}
    if (day <1) {
      day = 31;
      month--;
      if(month === 2) {day = 29;}
      if (month === 0) {
        month = 12;
        year--;
      }
    }
    if ( ! MyDate.isValidDate( year, month, day ) ) {
      day--;
    }
    this.setDay(day);
    this.setMonth(month);
    this.setYear(year);
    return this;
  },
  enumerable:true, configurable:false, writable:false});

module.exports = MyDate;
