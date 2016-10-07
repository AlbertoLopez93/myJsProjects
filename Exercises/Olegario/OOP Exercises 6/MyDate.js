"use strict"

function MyDate(newYear, newMonth, newDay) {
  let year, month, day;
  let strMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (Number.isInteger(newYear) && Number.isInteger(newMonth) && Number.isInteger(newDay)) {
    if ((newYear >= 1) && (newYear <= 9999)) {
      if ((newMonth >= 1) && (newMonth <= 12)) {
        if ((newDay >= 1) && (newDay <= 31)) {
          year = newYear;
          month = newMonth;
          day = newDay;
        }
      }
    }
  }

  Object.defineProperties(this, {
    "isValidDate": {
      value: function (year, month, day) {
        if ((year >= 1) && (year <= 9999) ) {
          if (this.isLeapYear(year)) {
            if ((month >= 1) && (month <= 12)) {
              if (strMonths[month - 1] === "Feb") {
                if ((day >= 1) && (day <= 29)) {
                  return true;
                }else {
                  return false;
                }
              }else {
                if ((day >= 1) && (day <= dayInMonths[month - 1])) {
                  return true;
                }else {
                  return false;
                }
              }
            }
          }else {
            if ((month >= 1) && (month <= 12)) {
              if (strMonths[month - 1] === "Feb") {
                if ((day >= 1) && (day <= 28)) {
                  return true;
                }else {
                  return false;
                }
              }else {
                if ((day >= 1) && (day <= dayInMonths[month - 1])) {
                  return true;
                }else {
                  return false;
                }
              }
            }else {
              return false;
            }
          }
        }
        return false;
      }
    },
    "dayInMonths": {
      value: [31,28,31,30,31,30,31,31,30,31,30,31]
    }
  });

}

Object.defineProperties(MyDate.prototype, {
  "isLeapYear": {
    value: function (year) {
      if ((year % 4) === 0) {
        if ((year % 100) === 0) {
          if ((year % 400) === 0) {
            return true;
          }
        }else {
          return true
        }
      }
      return false;
    }
  },
  "dayInMonths": {
    value: [31,28,31,30,31,30,31,31,30,31,30,31]
  }
});

let x = new MyDate(1990,3,6);

console.log(x.strMonths);
console.log(x.strDays);
console.log(x.dayInMonths);
console.log(x.isLeapYear(1800));
console.log(x.isValidDate(2017,2,));
module.exports = MyDate;
