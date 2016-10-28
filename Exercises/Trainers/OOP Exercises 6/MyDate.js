"use strict";

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isValidYear(year) {
  return year > 0 && year < 10000;
}

function isValidMonth(month) {
  return month > 0 && month < 13;
}

function isValidDay(year, month, day) {
  if (!isValidYear(year)) {
    return false;
  }
  if (!isValidMonth(month)) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  if (isLeapYear(year) && month === 2 && day > 29) {
    return false;
  }

  if (!isLeapYear(year) && month == 2 && day > 28) {
    return false;
  }

  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day > 30) {
        return false;
      }
  }

  return true;
}

function isValidDate(year, month, day) {
  return isValidYear(year) && isValidMonth(month) && isValidDay(year, month, day);
}

function getCenturyCode(century) {
  let base = 17
  let code = (century - 17) % 4;
  let result;

  switch (code) {
    case 0:
      result = 4;
      break;
    case 1:
      result = 2;
      break;
    case 2:
      result = 0;
      break;
    case 3:
      result = 6
      break;
  }
  return result;
}

function getDayCode(year, month, day) {
  let result;
  switch (month) {
    case 1:
      result = 0;
      break;
    case 2:
      result = 3;
      break;
    case 3:
      result = 3;
      break;
    case 4:
      result= 6;
      break;
    case 5:
      result = 1;
      break;
    case 6:
      result = 4;
      break;
    case 7:
      result = 6;
      break;
    case 8:
      result = 2;
      break;
    case 9:
      result = 5;
      break;
    case 10:
      result = 0;
      break;
    case 11:
      result = 3;
      break;
    case 12:
      result = 5;
      break;
  }

  if (isLeapYear(year)) {
    if (month === 1) {
      result = 6;
    }
    if (month === 2) {
      result = 2;
    }
  }

  return result;
}

function getDayOfWeek(year, month, day) {
  let century = parseInt(("" + year).slice(0, 2), 10);
  let centuryCode = getCenturyCode(century);
  let lastTwoDigits = parseInt(("" + year).slice(2, 4), 10);
  let lastTwoDigitsBy4 = parseInt(lastTwoDigits / 4, 10);
  let codeOfTheDay = getDayCode(year, month, day);

  return (centuryCode + lastTwoDigits + lastTwoDigitsBy4 + codeOfTheDay + day) % 7;
}

function MyDate(_year, _month, _day) {
  let year;
  let month;
  let day;

  function getYear() {
    return year;
  }

  function getMonth() {
    return month;
  }

  function getDay() {
    return day;
  }

  function setYear(newYear) {
    if (isValidYear(newYear) && isValidDate(newYear, month, day)) {
      year = newYear;
    } else {
      console.log("Invalid year!");
    }
  }

  function setMonth(newMonth) {
    if (isValidMonth(newMonth) && isValidDate(year, newMonth, day)) {
      month = newMonth;
    } else {
      console.log("Invalid month!");
    }
  }

  function setDay(newDay) {
    if (isValidDay(year, month, newDay) && isValidDate(year, month, newDay)) {
      day = newDay;
    } else {
      console.log("Invalid day!");
    }
  }

  function setDate(newYear, newMonth, newDay) {
    if (isValidDate(newYear, newMonth, newDay)) {
      year = newYear;
      month = newMonth;
      day = newDay;
    } else {
      console.log("Invalid year, month, or day!");
    }
  }

  Object.defineProperty(this, "getYear", {
    value: getYear,
    enumerable: true
  });

  Object.defineProperty(this, "getMonth", {
    value: getMonth,
    enumerable: true
  });

  Object.defineProperty(this, "getDay", {
    value: getDay,
    enumerable: true
  });

  Object.defineProperty(this, "setYear", {
    value: setYear,
    enumerable: true
  });

  Object.defineProperty(this, "setMonth", {
    value: setMonth,
    enumerable: true
  });

  Object.defineProperty(this, "setDay", {
    value: setDay,
    enumerable: true
  });

  Object.defineProperty(this, "setDate", {
    value: setDate,
    enumerable: true
  });

  setDate(_year, _month, _day);
}

MyDate.prototype = Object.create(Object.prototype);

/* Private static class properties */
Object.defineProperty(MyDate, "strMonths", {
  value: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

Object.defineProperty(MyDate, "strDays", {
  value: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
});

Object.defineProperty(MyDate, "daysInMonths", {
  value: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
});

/* Public static class methods */
Object.defineProperty(MyDate, "isLeapYear", {
  value: isLeapYear,
  enumerable: true
});

Object.defineProperty(MyDate, "isValidDate", {
  value: isValidDate,
  enumerable: true
});

Object.defineProperty(MyDate, "getDayOfWeek", {
  value: getDayOfWeek,
  enumerable: true
});

/* Public static prototype methods */
Object.defineProperty(MyDate.prototype, "toString", {
  value: function () {
    let year = this.getYear();
    let month = this.getMonth();
    let day = this.getDay();
    let monthString = MyDate.strMonths[month - 1];
    let dayOfWeek = MyDate.getDayOfWeek(year, month, day);
    let dayString = MyDate.strDays[dayOfWeek];

    day = day < 10 ? "0" + day : "" + day;

    return dayString + " " + day + " " + monthString + " " + year;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextYear", {
  value: function () {
    let currentYear = this.getYear();
    let nextYear = currentYear + 1;
    let month;
    let day;
    if (!isValidYear(nextYear)) {
      console.log("Year out of range!");
    } else {
      month = this.getMonth();
      day = this.getDay();
      if (isLeapYear(currentYear) && month === 2 && day === 29) {
        this.setDay(day - 1);
        this.setYear(nextYear);
      } else {
        this.setYear(nextYear);
      }
    }
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousYear", {
  value: function () {
    let currentYear = this.getYear();
    let previousYear = currentYear - 1;
    let month;
    let day;
    if (!isValidYear(previousYear)) {
      console.log("Year out of range!");
    } else {
      month = this.getMonth();
      day = this.getDay();
      if (isLeapYear(currentYear) && month === 2 && day === 29) {
        this.setDay(day - 1);
        this.setYear(previousYear);
      } else {
        this.setYear(previousYear);
      }
    }
    return this;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextMonth", {
  value: function () {
    let currentMonth = this.getMonth();
    let nextMonth = currentMonth + 1;
    let year = this.getYear();
    let day = this.getDay();
    let isDayMaxOfMonth;

    if (isValidMonth(nextMonth)) {
      if (!isLeapYear(year)) {
        isDayMaxOfMonth = day >= MyDate.daysInMonths[nextMonth - 1];
        if (isDayMaxOfMonth) {
          this.setDate(year, nextMonth, MyDate.daysInMonths[nextMonth - 1]);
        } else {
          this.setDate(year, nextMonth, day);
        }
      } else {
        isDayMaxOfMonth = (day >= MyDate.daysInMonths[nextMonth - 1]) || (currentMonth === 2 && day === 29);
        if (isDayMaxOfMonth && nextMonth === 2) {
          this.setDate(year, nextMonth, MyDate.daysInMonths[nextMonth - 1] + 1);
        } else if (isDayMaxOfMonth) {
          this.setDate(year, nextMonth, MyDate.daysInMonths[nextMonth - 1]);
        } else {
          this.setDate(year, nextMonth, day);
        }
      }
    } else if (nextMonth > 12) {
      nextMonth = 1;
      isDayMaxOfMonth = day >= MyDate.daysInMonths[nextMonth - 1];
      if (isDayMaxOfMonth) {
        this.setDate(year + 1, nextMonth, MyDate.daysInMonths[nextMonth - 1]);
      } else {
        this.setDate(year + 1, nextMonth, day);
      }
    }

    return this;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousMonth", {
  value: function () {
    let currentMonth = this.getMonth();
    let previousMonth = currentMonth - 1;
    let year = this.getYear();
    let day = this.getDay();
    let isDayMaxOfMonth;

    if (isValidMonth(previousMonth)) {
      if (!isLeapYear(year)) {
        isDayMaxOfMonth = day >= MyDate.daysInMonths[previousMonth - 1];
        if (isDayMaxOfMonth) {
          this.setDate(year, previousMonth, MyDate.daysInMonths[previousMonth - 1]);
        } else {
          this.setDate(year, previousMonth, day);
        }
      } else {
        isDayMaxOfMonth = (day >= MyDate.daysInMonths[previousMonth - 1]) || (currentMonth === 2 && day === 29);
        if (isDayMaxOfMonth && previousMonth === 2) {
          this.setDate(year, previousMonth, MyDate.daysInMonths[previousMonth - 1] + 1);
        } else if (isDayMaxOfMonth) {
          this.setDate(year, previousMonth, MyDate.daysInMonths[previousMonth - 1]);
        } else {
          this.setDate(year, previousMonth, day);
        }
      }
    } else if (previousMonth < 1) {
      previousMonth = 12;
      isDayMaxOfMonth = day >= MyDate.daysInMonths[previousMonth - 1];
      if (isDayMaxOfMonth) {
        this.setDate(year - 1, previousMonth, MyDate.daysInMonths[previousMonth - 1]);
      } else {
        this.setDate(year - 1, previousMonth, day);
      }
    }

    return this;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "nextDay", {
  value: function () {
    let year = this.getYear();
    let month = this.getMonth();
    let day = this.getDay();
    let nextDay = day + 1;
    let isDayMaxOfMonth;
    let nextMonth;
    let nextYear;

    if (isValidDay(year, month, nextDay)) {
      this.setDate(year, month, nextDay);
    } else if (!isLeapYear(year)){
      isDayMaxOfMonth = day >= MyDate.daysInMonths[month - 1];
      if (isDayMaxOfMonth) {
        nextDay = 1;
        nextMonth = month + 1;
        if (isValidMonth(nextMonth)) {
          this.setDate(year, nextMonth, nextDay);
        } else if (nextMonth > 12) {
          nextMonth = 1;
          nextYear = year + 1;
          if (isValidDate(nextYear, nextMonth, nextDay)) {
            this.setDate(nextYear, nextMonth, nextDay);
          }
        }
      }
    } else if (isLeapYear(year)) {
      isDayMaxOfMonth = day >= MyDate.daysInMonths[month - 1] || (month === 2 && day === 29);
      if (isDayMaxOfMonth) {
        nextDay = 1;
        nextMonth = month + 1;
        if (isValidMonth(nextMonth)) {
          this.setDate(year, nextMonth, nextDay);
        } else if (nextMonth > 12) {
          nextMonth = 1;
          nextYear = year + 1;
          if (isValidDate(nextYear, nextMonth, nextDay)) {
            this.setDate(nextYear, nextMonth, nextDay);
          }
        }
      }
    }

    return this;
  },
  enumerable: true
});

Object.defineProperty(MyDate.prototype, "previousDay", {
  value: function () {
    let year = this.getYear();
    let month = this.getMonth();
    let day = this.getDay();
    let previousDay = day - 1;
    let isDayMaxOfMonth;
    let previousMonth;
    let previousYear;

    if (isValidDay(year, month, previousDay)) {
      this.setDate(year, month, previousDay);
    } else if (!isLeapYear(year)){
      if (previousDay < 1) {
        previousMonth = month - 1;
        if (isValidMonth(previousMonth)) {
          previousDay = MyDate.daysInMonths[previousMonth - 1];
          this.setDate(year, previousMonth, previousDay);
        } else if (previousMonth < 1) {
          previousYear = year - 1;
          previousMonth = 12;
          previousDay = MyDate.daysInMonths[previousMonth - 1];
          this.setDate(previousYear, previousMonth, previousDay);
        }
      }
    } else if (isLeapYear(year)) {
      if (previousDay < 1) {
        previousMonth = month - 1;
        if (isValidMonth(previousMonth)) {
          if (month === 3) {
            previousDay = MyDate.daysInMonths[previousMonth - 1] + 1;
          } else {
            previousDay = MyDate.daysInMonths[previousMonth - 1];
          }
          this.setDate(year, previousMonth, previousDay);
        } else if (previousMonth < 1) {
          previousYear = year - 1;
          previousMonth = 12;
          previousDay = MyDate.daysInMonths[previousMonth - 1];
          this.setDate(previousYear, previousMonth, previousDay);
        }
      }
    }

    return this;
  },
  enumerable: true
});


module.exports = MyDate;
