"use strict";
function MyDate(year,month,day){
  var strMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  Object.defineProperty(this, "getYear", {
    value: function() {
      return year;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setYear", {
    value: function(newYear){
      year=newYear;
    },
    enumerable:true
  });
  Object.defineProperty(this, "getMonth", {
    value: function() {
      return month;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setMonth", {
   value: function(newMonth) {
       month = newMonth;
    },
    enumerable:true
  });
  Object.defineProperty(this, "getDay", {
    value: function() {
      return day;
    },
    enumerable:true
  });
  Object.defineProperty(this, "setDay", {
    value: function(newDay) {
       day = newDay;
    },
    enumerable:true
  });
}

Object.defineProperty(MyDate.prototype, "setDate", {
  value: function(newYear,newMonth,newDay) {
      this.setYear(newYear);
      this.setMonth(newMonth);
      this.setDay(newDay);
  },
  enumerable:true
});
Object.defineProperty(MyDate.prototype,'strMonths',{
  value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
 enumerable:false
});
Object.defineProperty(MyDate.prototype,'strDays',{
  value:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  enumerable:false
});
Object.defineProperty(MyDate.prototype,'daysInMonths',{
  value:[31,28,31,30,31,30,31,31,30,31,30,31],
  enumerable:false
});
module.exports=MyDate;
