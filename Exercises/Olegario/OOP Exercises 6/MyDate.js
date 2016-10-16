"use strict";

function MyDate(newYear, newMonth, newDay) {
  let year, month, day;
  if (Number.isInteger(newYear) && Number.isInteger(newMonth) && Number.isInteger(newDay)) {
    if ((newYear >= 1) && (newYear <= 9999)) {
      if ((newMonth >= 1) && (newMonth <= 12)) {
        if ((newDay >= 1) && (newDay <= 31)) {
          year  = newYear;
          month = newMonth;
          day   = newDay;
        }
      }
    }
  }

  Object.defineProperties(this, {
    "setYear": {
      value: function (newYear) {
        if ((newYear >= 1) && (newYear <= 9999)) {
          year = newYear;
        }else {
          console.log("Invalid year!");
        }
      },
      enumerable: true
    },
    "setMonth": {
      value: function (newMonth,next) {
        if ((newMonth >= 1) && (newMonth <= 12)) {
          if (MyDate.isLeapYear(year)) {
            if (newMonth === 2) {
              if (day <= 29) {
                month = newMonth;
              }else {
                day   = 29;
                month = newMonth;
              }
            }else {
              if (day <= MyDate.daysInMonths[newMonth - 1]) {
                month = newMonth;
              } else {
                if (next) {
                  day   = MyDate.daysInMonths[newMonth - 1];
                  month = newMonth;
                }
              }
            }
          }else {
              if (day <= MyDate.daysInMonths[newMonth - 1]) {
                month = newMonth;
              } else {
                month = newMonth;
              }
          }
        }else {
          console.log("Invalid month!");
        }
      },
      enumerable: true
    },
    "setDay": {
      value: function (newDay) {
        if (MyDate.isLeapYear(year)) {
          if (month === 2) {
            if ((newDay >= 1) && (newDay <= 29)) {
              day = newDay;
            }else {
              console.log("Invalid day!");
            }
          }else {
            if ((newDay >= 1) && (newDay <= MyDate.daysInMonths[month - 1])) {
              day = newDay;
            }else {
              console.log("Invalid day!");
            }
          }
        }else {
          if ((newDay >= 1) && (newDay <= MyDate.daysInMonths[month - 1])) {
            day = newDay;
          }else {
            console.log("Invalid day!");
          }
        }
      },
      enumerable: true
    },
    "setDate": {
      value: function (newYear, newMonth, newDay) {
        if (MyDate.isValidDate(newYear, newMonth, newDay)) {
          year  = newYear;
          month = newMonth;
          day   = newDay;
        }else {
          console.log("Invalid year, month, or day!");
        }
      },
      configurable: false,
      writable: false,
      enumerable: true,
    },
    "getYear": {
      value: function () {
        return year;
      },
      enumerable: true
    },
    "getMonth": {
      value: function () {
        return month;
      },
      enumerable: true
    },
    "getDay": {
      value: function () {
        return day;
      },
      enumerable: true
    },
  });

}

Object.defineProperties(MyDate, {
  "strMonths": {
    value: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    enumerable: false
  },
  "strDays": {
    value: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    enumerable: false
  },
  "daysInMonths": {
    value: [31,28,31,30,31,30,31,31,30,31,30,31],
    enumerable: false
  },
  "isLeapYear": {
    value: function (year) {
      if ((year % 4) === 0) {
        if ((year % 100) === 0) {
          if ((year % 400) === 0) {
            return true;
          }
        }else {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: false,
    writable: false
  },
  "isValidDate": {
    value: function (newYear, newMonth, newDay) {
      if (Number.isInteger(newYear) && Number.isInteger(newMonth) && Number.isInteger(newDay)) {
        if ((newYear >= 1) && (newYear <= 9999) ) {
          if (this.isLeapYear(newYear)) {
            if ((newMonth >= 1) && (newMonth <= 12)) {
              if ((newMonth - 1) === 1) {
                if ((newDay >= 1) && (newDay <= 29)) {
                  return true;
                }else {
                  return false;
                }
              }else {
                if ((newDay >= 1) && (newDay <= this.daysInMonths[newMonth - 1])) {
                  return true;
                }else {
                  return false;
                }
              }
            }
          }else {
            if ((newMonth >= 1) && (newMonth <= 12)) {
              if (newMonth - 1 === 1) {
                if ((newDay >= 1) && (newDay <= 28)) {
                  return true;
                }else {
                  return false;
                }
              }else {
                if ((newDay >= 1) && (newDay <= this.daysInMonths[newMonth - 1])) {
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
      }
      return false;
    },
    enumerable: true
  },
  "getDayOfWeek": {
    value: function(year, month, day) {
      if (this.isValidDate(year, month, day)) {
        let a = Math.floor((14 - month) / 12);
        let y = year - a;
        let m = month + 12 * a - 2;
        let d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor(( 31 * m) / 12)) % 7;
        return d;
      }
      return false;
    },
    enumerable: true
  }
});


Object.defineProperties(MyDate.prototype, {
  "toString": {
    value: function () {
      return "" + MyDate.strDays[MyDate.getDayOfWeek(this.getYear(), this.getMonth(), this.getDay())] + " " + this.getDay() + " " + MyDate.strMonths[this.getMonth() - 1] + " " + this.getYear();
    },
    configurable: false,
    writable: false,
    enumerable: true
  },
  "nextMonth": {
    value: function () {
      if (MyDate.isLeapYear(this.getYear())) {
        if (this.getMonth() === 1) {
          this.setMonth(2,1);
          if (this.getDay() >= 29) {
            this.setDay(29);
          }
        } else {
          if ((this.getMonth() + 1) === 13) {
            if (this.getYear() < 9999) {
              this.setMonth(1,1);
              this.setYear(this.getYear() + 1);
            }
          }else {
            this.setMonth(this.getMonth() + 1, 1);
          }
        }
      } else {
        if (this.getMonth() === 1) {
          this.setMonth(2);
          if (this.getDay() >= 28) {
            this.setDay(28);
          }
        } else {
          if ((this.getMonth() + 1) === 13) {
            if (this.getYear() < 9999) {
              this.setMonth(1);
              this.setYear(this.getYear() + 1);
            }
          }else {
            this.setMonth(this.getMonth() + 1);
          }
        }
      }
      return this;
    },
    enumerable: true
  },
  "previousMonth": {
    value: function () {
      if (MyDate.isLeapYear(this.getYear())) {
        if (this.getMonth() === 3) {
          this.setMonth(2);
          if (this.getDay() >= 29) {
            this.setDay(29);
          }
        } else {
          if ((this.getMonth() - 1) === 0) {
            if (this.getYear() > 1) {
              this.setMonth(12);
              this.setYear(this.getYear() - 1);
            }
          }else {
            this.setMonth(this.getMonth() - 1,1);
          }
        }
      } else {
        if (this.getMonth() === 3) {
          this.setMonth(2);
          if (this.getDay() >= 28) {
            this.setDay(28);
          }
        } else {
          if ((this.getMonth() - 1) === 0) {
            if (this.getYear() > 1) {
              this.setMonth(12);
              this.setYear(this.getYear() - 1);
            }
          }else {
            this.setMonth(this.getMonth() - 1);
          }
        }
      }
      return this;
    },
    enumerable: true
  },
  "nextYear": {
    value: function () {
      if (this.getYear() < 9999) {
        if (this.getMonth() === 2) {
          if (MyDate.isLeapYear(this.getYear()) && this.getDay() === 29) {
            this.setDay(28);
            this.setYear(this.getYear() + 1);
          }
        } else {
          this.setYear(this.getYear() + 1);
        }
      }
      return this;
    },
    enumerable: true
  },
  "previousYear": {
    value: function () {
      if (this.getYear() > 1) {
        if (this.getMonth() === 2) {
          if (MyDate.isLeapYear(this.getYear()) && this.getDay() === 29) {
            this.setDay(28);
            this.setYear(this.getYear() - 1);
          }
        }else {
          this.setYear(this.getYear() - 1);
        }
      }
      return this;
    },
    enumerable: true
  },
  "nextDay": {
    value: function () {
      let year = this.getYear();
      let month = this.getMonth();
      let day = this.getDay();
      if (MyDate.isLeapYear(year)) {
        if (month === 2) {
          if (day === 29) {
            this.setDay(1);
            this.setMonth(month + 1);
          }else {
            this.setDay(day + 1);
          }
        }else {
          if (day === MyDate.daysInMonths[month - 1]) {
            if (month === 12) {
              if (year < 9999) {
                this.setDay(1);
                this.setMonth(1);
                this.setYear(year + 1);
              }
            }else {
              this.setDay(1);
              this.setMonth(month + 1);
            }
          }else {
            this.setDay(day + 1);
          }
        }
      }else {
        if (day === MyDate.daysInMonths[month - 1]) {
          if (month === 12) {
            if (year < 9999) {
              this.setDay(1);
              this.setMonth(1);
              this.setYear(year + 1);
            }
          }else {
            this.setDay(1);
            this.setMonth(month + 1);
          }
        }else {
          this.setDay(day + 1);
        }
      }
      return this;
    },
    enumerable: true
  },
  "previousDay": {
    value: function () {
      let year = this.getYear();
      let month = this.getMonth();
      let day = this.getDay();
      if (MyDate.isLeapYear(year)) {
        if (month === 3) {
          if (day === 1) {
            this.setDay(29);
            this.setMonth(month - 1);
          }else {
            this.setDay(day - 1);
          }
        }else {
          if (day === 1) {
            if ((month - 1) === 0) {
              if (year > 1) {
                this.setMonth(12);
                this.setDay(MyDate.daysInMonths[month - 1]);
                this.setYear(year - 1);
              }
            }else {
              this.setMonth(month - 1);
              this.setDay(MyDate.daysInMonths[month - 2]);
            }
          }else {
            this.setDay(day - 1);
          }
        }
      }else {
        if (day === 1) {
          if ((month - 1) === 0) {
            if (year > 1) {
              this.setMonth(12);
              this.setDay(MyDate.daysInMonths[11]);
              this.setYear(year - 1);
            }
          }else {
            this.setMonth(month - 1);
            this.setDay(MyDate.daysInMonths[month - 2]);
          }
        }else {
          this.setDay(day - 1);
        }
      }
      return this;
    },
    enumerable: true
  }
});

Object.defineProperty(MyDate, "prototype", {configurable: false, writable: false, enumerable: false });


module.exports = MyDate;
