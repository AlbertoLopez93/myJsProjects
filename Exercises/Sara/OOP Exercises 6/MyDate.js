"use strict";
function MyDate(year,month,day){

  Object.defineProperty(this, "getYear", {
    value: function() {
      return year;
    },
    enumerable:true
  });

  Object.defineProperty(this, "setYear", {
    value: function(newYear){
      if(newYear>=1 && newYear<=9999){
        year=newYear;
      }
      else{
        console.log("Invalid year!");
      }
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
     if(newMonth>=1 && newMonth<=12){
       month = newMonth;
     }
     else{
      console.log("Invalid month!");
     }
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
      month=this.getMonth();
      if(month===1 || month===3 || month===5 || month===7  || month===8 || month===10 || month===12){
        if(newDay>=1 && newDay<=31){
          day=newDay;
        }
      }
      if(month===4 || month===6 || month===9 || month===11){
        if(newDay>=1 && newDay<=30){
          day=newDay;
        }
      }
      if(month===2){
        if(MyDate.isLeapYear(this.getYear())===true){
          if(newDay>=1 && newDay<=29){
            day=newDay;
          }
        }
        else{
          if(newDay>=1 && newDay<=28){
            day=newDay;
          }
        }
      }
      console.log("Invalid day!");
    },
    enumerable:true
  });

  Object.defineProperty(this, "setDate", {
    value: function(newYear,newMonth,newDay) {
        if(MyDate.isValidDate(newYear,newMonth,newDay)===true){
          this.setYear(newYear);
          this.setMonth(newMonth);
          this.setDay(newDay);
        }
        else{
          console.log("Invalid year, month, or day!");
        }
    },
    enumerable:true
  });
}

// Object.defineProperty(MyDate.prototype, "toString", {
//   value: function() {
//       var year=this.getYear();
//       var month=this.getMonth();
//       var day=this.getDay();
//       if(day===1)
//   },
//   enumerable:true
// });

Object.defineProperty(MyDate,'strMonths',{
  value:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  enumerable:false,
  writable:false
});

Object.defineProperty(MyDate,'strDays',{
  value:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  enumerable:false,
  writable:false
});

Object.defineProperty(MyDate,'daysInMonths',{
  value:[31,28,31,30,31,30,31,31,30,31,30,31],
  enumerable:false,
  writable:false
});

Object.defineProperty(MyDate,'isLeapYear',{
  value: function(year) {
    if(year%4===0 && year%100!==0){
      return true;
    }
    if(year%400===0){
      return true;
    }
    return false;
  },
  enumerable:true,
  writable:false
});

Object.defineProperty(MyDate,'isValidDate',{
  value: function(year,month,day) {
    if((year>0 && year<=9999) && (month>=1 && month<=12)){
      if(month===1 || month===3 || month===5 || month===7  || month===8 || month===10 || month===12){
        if(day>=1 && day<=31){
          return true;
        }
      }
      if(month===4 || month===6 || month===9 || month===11){
        if(day>=1 && day<=30){
          return true;
        }
      }
      if(month===2){
        if(MyDate.isLeapYear(year)===true){
          if(day>=1 && day<=29){
            return true;
          }
        }
        else{
          if(day>=1 && day<=28){
            return true;
          }
        }
      }
    }
    return false;
  },
  enumerable:true,
  writable:false
});


module.exports=MyDate;
