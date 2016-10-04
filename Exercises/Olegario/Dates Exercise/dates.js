function isToday(date) {
 let result= false;
 if (typeof(date)==="object") {
   if (date instanceof Date) {
     let today= new Date();
     if (date.getFullYear()===today.getFullYear()) {
       if (date.getMonth()===today.getMonth()) {
         if (date.getDate()===today.getDate()) {
           result=true;
         }
       }
     }
   }
 }
 return result;
}

function monday(date) {
  let result=false;
  console.log("Es lunes");
  if (date.getHours()>20) {
    result=true;console.log("Mas de las 8");
  }
  else {
    if (date.getHours()===20) {
      if (date.getMinutes()>0) {
        result= true;console.log("Mas de 8:1");
      }
      else {
        if (date.getMinutes()===0) {
          if (date.getSeconds()>0) {
            result= true;console.log("Mas de 8:0:0");
          }
          else {
            if (date.getMilliseconds()>0) {
              result=true;console.log("Mas de 8:0:0:0");
            }
          }
        }
      }
    }
  }
  return result;
}

function tuesday(date) {
  let result=false;
  console.log("Es Martes");
  if (date.getHours()>19) {
    result=true;console.log("Mas de las 7");
  }
  else {
    if (date.getHours()===19) {
      if (date.getMinutes()>0) {
        result= true;console.log("Mas de 7:1");
      }
      else {
        if (date.getMinutes()===0) {
          if (date.getSeconds()>0) {
            result= true;console.log("Mas de 7:0:0");
          }
          else {
            if (date.getMilliseconds()>0) {
              result=true;console.log("Mas de 7:0:0:0");
            }
          }
        }
      }
    }
  }
  return result;
}

function wednesday(date) {
  let result=false;
  console.log("Es Miercoles");
  if (date.getHours()>18) {
    result=true;console.log("Mas de las 6");
  }
  else {
    if (date.getHours()===18) {
      if (date.getMinutes()>0) {
        result= true;console.log("Mas de 6:1");
      }
      else {
        if (date.getMinutes()===0) {
          if (date.getSeconds()>0) {
            result= true;console.log("Mas de 6:0:0");
          }
          else {
            if (date.getMilliseconds()>0) {
              result=true;console.log("Mas de 6:0:0:0");
            }
          }
        }
      }
    }
  }
  return result;
}

function thursday(date) {
  let result=false;
  console.log("Es Jueves");
  if (date.getHours()>17) {
    result=true;console.log("Mas de las 17");
  }
  else {
    if (date.getHours()===17) {
      if (date.getMinutes()===59) {
        if (date.getSeconds()>0) {
          result= true;console.log("Mas de 17:59:0");
        }
        else {
          if (date.getMilliseconds()>0) {
            result=true;console.log("Mas de 17:59:0:0");
          }
        }
      }
    }
  }
  return result;
}

function friday(date) {
  let result=false;
  console.log("Es Viernes");
  if (date.getHours()>16) {
    result=true;console.log("Mas de las 4");
  }
  else {
    if (date.getHours()===16) {
      if (date.getMinutes()>0) {
        result= true;console.log("Mas de 4:1");
      }
      else {
        if (date.getMinutes()===0) {
          if (date.getSeconds()>0) {
            result= true;console.log("Mas de 4:0:0");
          }
          else {
            if (date.getMilliseconds()>0) {
              result=true;console.log("Mas de 4:0:0:0");
            }
          }
        }
      }
    }
  }
  return result;
}

function saturday(date) {
  let result=false;
  console.log("Es Sabado");
  if (date.getHours()>10) {
    result=true;console.log("Mas de las 10");
  }
  else {
    if (date.getHours()===10) {
      if (date.getMinutes()>0) {
        result= true;console.log("Mas de 10:1");
      }
      else {
        if (date.getMinutes()===0) {
          if (date.getSeconds()>0) {
            result= true;console.log("Mas de 10:0:0");
          }
          else {
            if (date.getMilliseconds()>0) {
              result=true;console.log("Mas de 10:0:0:0");
            }
          }
        }
      }
    }
  }
  return result;
}

function isBeerTime(date) {
  console.log(date);
  let result= false;
  if (typeof(date)==="object") {
    if (date instanceof Date) {
     let day=date.getDay();
     switch (day) {
       case 1:  result=monday(date);
                break;
       case 2:  result=tuesday(date);
                break;
       case 3:  result=wednesday(date);
                break;
       case 4:  result=thursday(date);
                break;
       case 5:  result=friday(date);
                break;
       case 6:  result=saturday(date);
                break;
       case 0:  result=true;
                break;
       default:
     }
    }
  }
  return result;
}



function whenIsNextFriday13(date) {
  console.log(date);
  let result= false;
  if (typeof(date)==="object") {
    if (date instanceof Date) {
      let year=date.getFullYear(), month=date.getMonth(),  day=date.getDate(), dai=date.getDay(), next13, bandera=true;
      while (bandera) {
        day++;
        let aux= new Date(year,month,day);
        if ((aux.getDay()===5)&&(aux.getDate()===13)) {
          next13=aux; bandera=false;
        }
      }
      result=next13;
    }
  }
  return result;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}