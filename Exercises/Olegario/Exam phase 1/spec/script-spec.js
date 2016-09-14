"use strict"
function add(date, num, str) {
  let result = false;
  if ((date instanceof Date) && ((Number.isInteger(num)) && (num >= 0)) && (typeof(str) === "string")) {
    //console.log(date);
    let strYear = date.getFullYear();
    let strMonth = date.getMonth();
    let strDay = date.getDate();
    let strHour = date.getHours();
    let strMinute = date.getMinutes();
    let strSecond = date.getSeconds();
    let strMilliseconds= date.getMilliseconds();
    //console.log(strYear, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
    let insert;
    result = date;
    switch (str) {
      case "years":insert = num + strYear;
                  result = new Date(insert, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "quarters":insert = (num * 3) + strMonth;
                     result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                     break;

      case "months":insert = (num * 31) + strMonth;
                  result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "days":insert = num + strDay;
                  result = new Date(strYear, strMonth, insert, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "hours":insert = num + strHour;
                  result = new Date(strYear, strMonth, strDay, insert, strMinute, strSecond, strMilliseconds);
                  break;

      case "minutes":insert = num + strMinute;
                    result = new Date(strYear, strMonth, strDay, strHour, insert, strSecond, strMilliseconds);
                    break;

      case "seconds":insert = num + strSecond;
                    result = new Date(strYear, strMonth, strDay, strHour, strMinute, insert, strMilliseconds);
                    break;

      case "milliseconds":insert = num + strMilliseconds;
                         result = new Date(strYear, strMonth, strDay, strHour, strMinute, strSecond, insert);
                         break;
      default:
    }
   //toString(result);
  }
  return result;
}




function subtract(date, num, str) {
  let result = false;
  if ((date instanceof Date) && ((Number.isInteger(num)) && (num >= 0)) && (typeof(str) === "string")) {
    //console.log(date);
    let strYear= date.getFullYear();
    let strMonth= date.getMonth();
    let strDay= date.getDate();
    let strHour= date.getHours();
    let strMinute= date.getMinutes();
    let strSecond= date.getSeconds();
    let strMilliseconds= date.getMilliseconds();
    //console.log(strYear, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
    let insert
    result = date;
    switch (str = str.toLowerCase()) {
      case "years":insert = strYear - num;
                  result = new Date(insert, strMonth, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "quarters":insert = strMonth - (num * 3);
                     result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                     break;

      case "months":insert = strMonth - (num * 31);
                  result = new Date(strYear, insert, strDay, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "days":insert = strDay - num;
                  result = new Date(strYear, strMonth, insert, strHour, strMinute, strSecond, strMilliseconds);
                  break;

      case "hours":insert = strHour - num;
                  result = new Date(strYear, strMonth, strDay, insert, strMinute, strSecond, strMilliseconds);
                  break;

      case "minutes":insert = strMinute - num;
                    result = new Date(strYear, strMonth, strDay, strHour, insert, strSecond, strMilliseconds);
                    break;

      case "seconds":insert = strSecond - num;
                    result = new Date(strYear, strMonth, strDay, strHour, strMinute, insert, strMilliseconds);
                    break;

      case "milliseconds":insert = strMilliseconds - num;
                         result = new Date(strYear, strMonth, strDay, strHour, strMinute, strSecond, insert);
                         break;
      default:
    }
   //toString(result);
  }
  return result;
}



function deepReverse(array) {
  let result = false;
  if (Array.isArray(array)) {
    if (array.length > 0) {
      let aux = [];
      for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          aux.push(deepReverse(array[i]));
        } else {
          aux.push(array[i]);
        }
      }
      result = aux.reverse();
    } else {
      result = array;
    }
  }
  return result;
}
