function isToday(date) {
  if(date instanceof Date) {
    var today = new Date(Date());
    if(date.getDate() === today.getDate()) {
      if(date.getMonth() === today.getMonth()) {
        if(date.getYear() === today.getYear()) {
          return true;
        }
      }
    }
  }
  return false;
}

function isBeerTime(time) {
  if(time instanceof Date) {
    var limit = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate()
    );
    switch (time.getDay()) {
      case 1:
        limit.setHours(20);
        limit.setMinutes(0);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 2:
        limit.setHours(19);
        limit.setMinutes(0);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 3:
        limit.setHours(18);
        limit.setMinutes(0);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 4:
        limit.setHours(17);
        limit.setMinutes(59);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 5:
        limit.setHours(16);
        limit.setMinutes(0);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 6:
        limit.setHours(10);
        limit.setMinutes(0);
        limit.setSeconds(0);
        limit.setMilliseconds(0);
        if(time > limit) {
          return true;
        }
        return false;
      case 0:
        return true;
    }
  }
  return false;
}

function whenIsNextFriday13(date) {
  if(date instanceof Date){
    var next = new Date(
      date.getFullYear(),
      date.getMonth(),
      13
    );
    if(date.getDate() >= 13) {
      next.setMonth(next.getMonth() + 1);
    }
    while(true) {
      if(next.getDay() === 5) {
        return next;
      }
      next.setMonth(next.getMonth() + 1);
    }
  }
}


module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}