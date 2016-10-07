"use strict";

function MyDate(year,month,day) {

  Object.defineProperty(this,'getYear', {value:function(){return year;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setYear',
  {value:function(y){
    if(y<0 || y>9999){console.log('Invalid year!');}
    else{year=y;}
  } ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'getMonth', {value:function(){return month;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setMonth',
  {value:function(m){
    if(m<1 || m>12){console.log('Invalid month!');}
    else{month=m;}
  } ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'getDay', {value:function(){return day;} ,
  enumerable:true, configurable:true, writable:false});

  Object.defineProperty(this,'setDay',
  {value:function(d){
    let month=this.getMonth();
    if(d<1 || d>this.daysInMonths[month-1]){console.log('Invalid day!');}
    else{day=d;}
  } ,
  enumerable:true, configurable:true, writable:false});
}

Object.defineProperty(MyDate.prototype,'strMonths',
{value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] ,
enumerable:false, configurable:true, writable:false});

Object.defineProperty(MyDate.prototype,'strDays',
{value:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
enumerable:false, configurable:true, writable:false});

Object.defineProperty(MyDate.prototype,'daysInMonths',
{value:[31,29,31,30,31,30,31,31,30,31,30,31],
enumerable:false, configurable:true, writable:false});

Object.defineProperty(MyDate.prototype,'toString',
  {value:function(){
    let y = this.getYear();
    if(y<10){y= '000'+y;}
    if(y<100){y= '00'+y;}
    if(y<1000){y= '0'+y;}
    let m = this.getMonth();
    if(m<10){m= '0'+m;}
    let d = this.getDay();
    return this.strDays[0]+' '+d+' '+this.strMonths[m-1]+' '+y;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyDate.prototype,'isLeapYear',
  {value:function(year){
    if(year %4 !=0) {return false;}
    if(year %100 ==0 && year %400 !=0) {return true;}
    return false;
  },
  enumerable:true, configurable:true, writable:false});

Object.defineProperty(MyDate.prototype,'isValidDate',
  {value:function(year,month,day){
    if(year<0 || year>9999){return false;}
    if(month<1 || month>12){return false;}
    if(day<1 || day>this.daysInMonths[month-1]){return false;}
    if(29==day && (0!=year %4 || this.isLeapYear(year))){return false;}
    return true;
  },
  enumerable:true, configurable:true, writable:false});

module.exports = MyDate;
