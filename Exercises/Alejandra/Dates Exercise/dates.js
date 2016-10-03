  "use strict"
function isToday(fecha){
  var date = new Date(fecha);//date guardara lo de mi nuevo objeto fecha, parametro que le paso
  var str = new Date;//objeto con la fecha actual
  var fec1 = str.toDateString();//igualo a variable la fecha
  var fec2 = date.toDateString();//igualo a vaiable la fecha

  if(fec1 === fec2){//si fecha 1 y fecha2 es igual
    return true;//que retorne true
    }
    else {//sino falso
      return false;
    }
  }

function isBeerTime(fecha){
  var hora = fecha.toTimeString()
  var dia = fecha.getDay()

  if(hora>"10:00:00" && dia === 6){
    return true;
  }

  else if(hora>"16:00:00" && dia === 5){
    return true;
  }

  else if(hora>"17:59:00" && dia === 4){
    return true;
  }

  else if(hora>"18:00:00" && dia === 3){
    return true;
  }
  else if(hora>"19:00:00" && dia === 2){
    return true;
  }
  else if(hora>"20:00:00" && dia === 1){
    return true;
  }
   else if(dia === 0){
    return true;
  }
  else{
    return false;
  }

}

function whenIsNextFriday13(fecha){
  var aux=new Date(fecha.getFullYear(),fecha.getMonth(),13);
  if(fecha.getDate()>=13){
    aux.setMonth(aux.getMonth()+1);
  }
  while(true){
    if(aux.getDay()===5){
      return aux;
    }else{
      aux.setMonth(aux.getMonth()+1);
    }
  }
}

module.exports = {
    isToday: isToday,
    isBeerTime: isBeerTime,
    whenIsNextFriday13: whenIsNextFriday13
}