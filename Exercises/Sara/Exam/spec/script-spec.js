function add(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function addYear(f,q){
    f.setDate(f.getDate()+365*q);
    return f;
  }
  function addQuarter(f,q){
    f.setDate(f.getDate()+3*31*q);
    return f;
  }
  function addMonth(f,q){
    f.setDate(f.getDate()+31*q);
    return f;
  }
  function addDay(f,q){
    f.setDate(f.getDate()+q);
    return f;
  }
  function addHour(f,q){
    f.setHours(f.getHours()+q);
    return f;
  }
  function addMinute(f,q){
    f.setMinutes(f.getMinutes()+q);
    return f;
  }
  function addSecond(f,q){
    f.setSeconds(f.getSeconds()+q);
    return f;
  }
  function addMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()+q);
    return f;
  }
  switch(str){
    case 'years':
      addYear(fecha,cant);
      break;
    case 'quarters':
      addQuarter(fecha,cant);
      break;
    case 'months':
      addMonth(fecha,cant);
      break;
    case 'days':
      addDay(fecha,cant);
      break;
    case 'hours':
      addHour(fecha,cant)
      break;
    case 'minutes':
      addMinute(fecha,cant)
      break;
    case 'seconds':
      addSecond(fecha,cant);
      break;
    case 'milliseconds':
      addMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}

function substract(fecha,cant,str){
  if(fecha instanceof Date===false){
    return false;
  }
  if(cant<=0 || isNaN(cant)===true || cant===Infinity || cant===null || cant===undefined || typeof cant==='boolean'){
    return false;
  }
  function substractYear(f,q){
    f.setDate(f.getDate()-365*q);
    return f;
  }
  function substractQuarter(f,q){
    f.setDate(f.getDate()-3*31*q);
    return f;
  }
  function substractMonth(f,q){
    f.setDate(f.getDate()-31*q);
    return f;
  }
  function substractDay(f,q){
    f.setDate(f.getDate()-q);
    return f;
  }
  function substractHour(f,q){
    f.setHours(f.getHours()-q);
    return f;
  }
  function substractMinute(f,q){
    f.setMinutes(f.getMinutes()-q);
    return f;
  }
  function substractSecond(f,q){
    f.setSeconds(f.getSeconds()-q);
    return f;
  }
  function substractMillisecond(f,q){
    f.setMilliseconds(f.getMilliseconds()-q);
    return f;
  }
  switch(str){
    case 'years':
      substractYear(fecha,cant);
      break;
    case 'quarters':
      substractQuarter(fecha,cant);
      break;
    case 'months':
      substractMonth(fecha,cant);
      break;
    case 'days':
      substractDay(fecha,cant);
      break;
    case 'hours':
      substractHour(fecha,cant)
      break;
    case 'minutes':
      substractMinute(fecha,cant)
      break;
    case 'seconds':
      substractSecond(fecha,cant);
      break;
    case 'milliseconds':
      substractMillisecond(fecha,cant);
      break;
    default:
      return false;
    }
  return fecha;
}
