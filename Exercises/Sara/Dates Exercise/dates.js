function isToday(fecha){
  var mes=fecha.getMonth();
  var dia=fecha.getDate();
  var anio=fecha.getFullYear();
  var hoy=new Date();
  var meshoy=hoy.getMonth();
  var diahoy=hoy.getDate();
  var aniohoy=hoy.getFullYear();
  if(dia===diahoy && mes===meshoy && anio===aniohoy){
    return true;
  }
  else{
    return false;
  }
}

function isBeerTime(fecha){
  var dia=fecha.getDay();
  var hora=fecha.getHours();
  var min=fecha.getMinutes();
  var sec=fecha.getSeconds();
  var ms=fecha.getMilliseconds();
  if(dia===1 && hora>=20 && min>=0 && sec>=0 && ms>0){
    return true;
  }
  if(dia===2 && hora>=19 && min>=0 && sec>=0 && ms>0){
    return true;
  }
  if(dia===3 && hora>=18 && min>=0 && sec>=0 && ms>0){
    return true;
  }
  if(dia===4 && hora>=17 && min>=59 && sec>=0 && ms>0){
    return true;
  }
  if(dia===5 && hora>=16 && min>=0 && sec>=0 && ms>0){
    return true;
  }
  if(dia===6 && hora>=10 && min>=0 && sec>=0 && ms>0){
    return true;
  }
  if(dia===0){
    return true;
  }
  return false;
}

function whenIsNextFriday13(fecha){
  var diasem=0,diames=0,anio,res=false;
  while(res!==true){
    fecha.setDate(fecha.getDate()+1);
    diasem=fecha.getDay();
    diames=fecha.getDate();
    if(diasem===5 && diames===13){
      res=true;
      break;
    }
    else{
      res=false;
    }
  }
  return fecha;
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}