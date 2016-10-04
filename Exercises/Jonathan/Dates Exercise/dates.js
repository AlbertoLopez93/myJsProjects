function isToday(date){
  var date1 =new Date(), day, month, year, day1, month1, year1;

if(date instanceof Date !== true ){
    return false;
}else{
    day=date.getDay();
    month=date.getMonth();
    year=date.getFullYear();

    day1=date1.getDay();
    month1=date1.getMonth();
    year1=date1.getFullYear();

    if(day === day1){
        if(month === month1){
            if(year === year1){
                return true;
            }else{
              return false;
            }
        }else {
          return false;
        }
    }else{
      return false;
    }
  }

}

function isBeerTime(date){
  var date1=0, day=0, hour=0, minute=0, seconds=0, miliseconds=0;

day=date.getDay();
hour=date.getHours();
minute=date.getMinutes();
seconds=date.getSeconds();
miliseconds=date.getMilliseconds();

console.log(day, hour, minute, seconds, miliseconds);

if(date instanceof Date !== true ){
    return false;
  }else{
    if(day===0){
       if(hour>=0&&minute>=0&&seconds>=0&&miliseconds>=0){
          return true;
       }else{
         return false;
       }
    }
    if(day===1){
       if(hour>=20&&minute>=0&&seconds>=0&&miliseconds>=0){
         return true;
       }else{
         return false;
       }
    }
    if(day===2){
      if(hour>=19&&minute>=0&&seconds>=0&&miliseconds>=0){
         return true;
      }else{
        return false;
      }
    }
    if(day===3){
       if(hour>=18&&minute>=0&&seconds>=0&&miliseconds>=0){
          return true;
       }else{
         return false;
       }
    }
    if(day===4){
       if(hour>=17&&minute>=59&&seconds>=0&&miliseconds>=0){
          return true;;
       }else{
         return false;
       }
    }
    if(day===5){
      if(hour>=16&&minute>=0&&seconds>=0&&miliseconds>=0){
         return true;;
      }else{
        return false;
      }
    }
    if(day===6){
       if(hour>=10&&minute>=0&&seconds>=0&&miliseconds>=0){
          return true;
       }else{
         return false;
       }
    }
  }
}

function whenIsNextFriday13(date){
var x=0, dat, flag=true, year=0, month=0, day=0, temp=0;

day=date.getDay();
month=date.getMonth();
year=date.getFullYear();

console.log( year, month, day);

while(flag){
      temp=new Date(year, month, day+x);
      if(temp.getDate()===13&&temp.getDay()===5){
          flag=false;
      }
  x++;
}
return temp;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}