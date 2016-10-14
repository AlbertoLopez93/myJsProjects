function isToday(obj){
  let today= new Date(Date.now());
  //let obj=date;

  let month= obj.getMonth();
  let year= obj.getFullYear();
  let date= obj.getDate();
  let actualmonth= today.getMonth();
  let actualyear= today.getFullYear();
  let actualdate= today.getDate();

  if(month==actualmonth && year==actualyear && date==actualdate) {
    return true;
  }
  else {
    return false;
  }
}

function isBeerTime(time) {
  let dayweek= time.getDay();
  let hour= time.getHours();
  let minutes= time. getMinutes();
  let sec= time. getSeconds();
  let ms= time. getMilliseconds();

  if(dayweek==0) { //sunday all day
    return true;
  }
  if(dayweek==1) { //monday
    if(hour>20) {
      return true;
    }
    else if(20==hour) {
      if(minutes==0 && sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
  if(dayweek==2) { //tuesday
    if(hour>19){
      return true;
    }
    else if(19==hour) {
      if(minutes==0 && sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
  if(dayweek==3) { //wednesday
    if(hour>18){
      return true;
    }
    else if(18==hour) {
      if(minutes==0 && sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
  if(dayweek==4) { //thursday
    if(hour>=18){
      return true;
    }
    else if(17==hour && 59==minutes) {
      if(sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
  if(dayweek==5) { //friday
    if(hour>16){
      return true;
    }
    else if(16==hour) {
      if(minutes==0 && sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
  if(dayweek==6) { //saturday
    if(hour>10){
      return true;
    }
    else if(10==hour) {
      if(minutes==0 && sec==0 && ms==0) {
        return false; //excluyent case
      }
      else {
        return true;
      }
    }
    else {
      return false; //less than hour
    }
  }
}

function whenIsNextFriday13(date) {
  let month= date.getMonth();
  let daymonth= date.getDate();

  if(daymonth>=13) {
    date.setMonth(month+1);
  }
  date.setDate(13);
  while(date.getDay()!=5) { //friday
    month++;
    date.setMonth(month);
  }
  return date;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}